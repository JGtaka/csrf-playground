export type StepId = 1 | 2 | 3 | 4

export type HttpLine =
  | { kind: 'method'; text: string }
  | { kind: 'header'; key: string; value: string }
  | { kind: 'highlight'; key: string; value: string }
  | { kind: 'body'; text: string }
  | { kind: 'blank' }

export type HttpGlossaryItem = {
  term: string
  description: string
}

export type BackstageCard = {
  label: string
  accent: 'blue' | 'red'
  body: string
  forStep: StepId
}

export type Countermeasure = {
  title: string
  detail?: string
}

export type StepContent = {
  id: StepId
  phoneTitle: string
  phoneSubtitle: string
  http: {
    title: string
    lines: HttpLine[]
    glossary: HttpGlossaryItem[]
    note: string
  }
  countermeasures: Countermeasure[]
  footerStatus: string
}

// 左カラム：解説カード（Figma準拠で3枚、Step 1〜3に対応）
// Step 4 では3枚すべて表示済み + 防御策を強調する文脈に切り替わる
export const BACKSTAGE_CARDS: BackstageCard[] = [
  {
    label: 'ブラウザの裏側',
    accent: 'blue',
    body: 'Chirpyへのログインにより、ブラウザはセッションCookie（鍵）を保存します。この鍵は、Chirpyへの全リクエストに自動で添えられます。',
    forStep: 1,
  },
  {
    label: '罠のしくみ',
    accent: 'blue',
    body: '罠サイトには、非表示のフォームやスクリプトが仕込まれています。ユーザーがサイトを開いた瞬間、JavaScriptが自動実行されます。',
    forStep: 2,
  },
  {
    label: '攻撃の成立',
    accent: 'red',
    body: 'ブラウザにとってCookieは「Chirpyへの鍵」。誰が頼んだリクエストでも、宛先がChirpyなら自動で鍵を付けて送ってしまいます。罠サイトからの指示も例外ではありません。',
    forStep: 3,
  },
]

export const STEPS: Record<StepId, StepContent> = {
  1: {
    id: 1,
    phoneTitle: 'Step 1: Authentic Login',
    phoneSubtitle: 'SNS「Chirpy」にログイン',
    http: {
      title: 'Set-Cookie',
      lines: [
        { kind: 'method', text: 'HTTP/1.1 200 OK' },
        { kind: 'header', key: 'Host', value: 'chirpy.com' },
        { kind: 'highlight', key: 'Set-Cookie', value: 'session_id=abc123; HttpOnly; Path=/' },
        { kind: 'blank' },
        { kind: 'body', text: '{ "user": "user_name", "auth": true }' },
      ],
      glossary: [
        {
          term: 'HTTP/1.1 200 OK',
          description: 'サーバーから「リクエスト成功（ログイン成功）」が返ってきた合図。',
        },
        {
          term: 'Set-Cookie',
          description: 'サーバーがブラウザに「この鍵（Cookie）を保存しておいて」と命じる行。次回以降のリクエストに自動で付与される。',
        },
        {
          term: 'HttpOnly',
          description: 'CookieをJavaScriptから読み取れないようにする保護属性。盗み出しを防ぐ第一歩。',
        },
      ],
      note: 'ログイン成功時にブラウザがセッションCookieを保存します。以降、Chirpyへの全リクエストに自動付与されます。',
    },
    countermeasures: [
      { title: 'CookieをJavaScriptから読み取れないようにする（HttpOnly属性）' },
      { title: '別サイト経由のリクエストにCookieを乗せない（SameSite=Strict / Lax）' },
      { title: 'ログインの度にセッションIDを再発行する（固定化対策）' },
    ],
    footerStatus: 'Session Established',
  },
  2: {
    id: 2,
    phoneTitle: 'Step 2: Visit Trap Site',
    phoneSubtitle: '罠サイトを別タブで開く',
    http: {
      title: 'Trap Site Source',
      lines: [
        { kind: 'method', text: '<!-- evil.example -->' },
        { kind: 'body', text: '<form id="f" action="https://chirpy.com/api/post"' },
        { kind: 'body', text: '      method="POST" style="display:none">' },
        { kind: 'body', text: '  <input name="content" value="I\'m hacked!">' },
        { kind: 'body', text: '</form>' },
        { kind: 'highlight', key: '<script>', value: 'document.getElementById("f").submit()' },
        { kind: 'body', text: '</script>' },
      ],
      glossary: [
        {
          term: '<form action="...">',
          description: 'フォームの送信先URLを指定するHTMLタグ。他人のサイト（Chirpy）のURLでも自由に書ける。',
        },
        {
          term: 'method="POST"',
          description: '投稿や更新を行うHTTPメソッド。Chirpyの「投稿API」を呼び出す指定。',
        },
        {
          term: 'style="display:none"',
          description: 'フォームを画面に表示しない指定。ユーザーには猫の画像しか見えない。',
        },
        {
          term: '<script>...submit()</script>',
          description: 'ページが読み込まれた瞬間、JavaScriptが自動でフォームを送信する。クリックは不要。',
        },
      ],
      note: 'ユーザーがページを開いた瞬間、隠しフォームが自動送信されます。クリックすら不要です。',
    },
    countermeasures: [
      { title: '外部サイトへのフォーム送信を制限する（Content Security Policy）' },
      { title: 'ブラウザの危険サイト警告を有効にする（Safe Browsing 等）' },
      { title: '別ウィンドウでログインを分離する（プライベートブラウジング）' },
    ],
    footerStatus: 'Trap Triggered',
  },
  3: {
    id: 3,
    phoneTitle: 'Step 3: Background POST',
    phoneSubtitle: '自動リクエスト送信',
    http: {
      title: 'Forged HTTP Request',
      lines: [
        { kind: 'method', text: 'POST /api/post HTTP/1.1' },
        { kind: 'header', key: 'Host', value: 'chirpy.com' },
        { kind: 'header', key: 'Origin', value: 'trap-site.evil' },
        { kind: 'highlight', key: 'Cookie', value: 'session_id=abc123...' },
        { kind: 'blank' },
        { kind: 'body', text: '{ "content": "I\'m hacked!" }' },
      ],
      glossary: [
        {
          term: 'POST /api/post',
          description: 'Chirpyの「投稿API」へリクエストを送る指定。本来はユーザー本人の操作で行われるはず。',
        },
        {
          term: 'Host: chirpy.com',
          description: 'リクエストの宛先サーバー。たしかにChirpy宛てに届くため、サーバーは正規アクセスと区別できない。',
        },
        {
          term: 'Origin: trap-site.evil',
          description: 'このリクエストを発行したサイト。罠サイトから来たことが書かれているが、サーバー側でこれを検証していなければ素通りしてしまう。',
        },
        {
          term: 'Cookie: session_id=...',
          description: 'ログイン中のCookieが自動で付与されている。ここがCSRFの核心 — ブラウザは送信元を区別せず鍵を渡してしまう。',
        },
      ],
      note: 'Originが異なるサイトであっても、Cookieは自動的に付与されます。これがCSRFの本質です。',
    },
    countermeasures: [
      { title: 'フォームに使い捨てトークンを埋め込んで照合する（Anti-CSRF Token）' },
      { title: 'Cookieを別サイトのリクエストに乗せない（SameSite=Strict / Lax）' },
      { title: '独自ヘッダ付きのリクエストだけを受け付ける（Custom Headers）' },
    ],
    footerStatus: 'Forged Request Sent',
  },
  4: {
    id: 4,
    phoneTitle: 'Result: Forced Action',
    phoneSubtitle: '不正な投稿が完了',
    http: {
      title: 'Server Response',
      lines: [
        { kind: 'method', text: 'HTTP/1.1 200 OK' },
        { kind: 'header', key: 'Content-Type', value: 'application/json' },
        { kind: 'blank' },
        { kind: 'body', text: '{' },
        { kind: 'body', text: '  "status": "posted",' },
        { kind: 'body', text: '  "id": 9842' },
        { kind: 'body', text: '}' },
      ],
      glossary: [
        {
          term: 'HTTP/1.1 200 OK',
          description: 'サーバーがリクエストを正常に受け付けた合図。攻撃側からすれば「成功」を意味する。',
        },
        {
          term: '"status": "posted"',
          description: '投稿が成立したことを示すサーバーからの返答。',
        },
        {
          term: '"id": 9842',
          description: '攻撃者によって作られた偽の投稿に新しいIDが振られた。これがタイムラインに表示される。',
        },
      ],
      note: 'サーバーは正規のCookieを持つリクエストとして受理。ユーザー本人の意思とは無関係に投稿が成立します。',
    },
    countermeasures: [
      {
        title: '使い捨てトークンで送信元を確認する（Anti-CSRF Token）',
        detail:
          'サーバーが発行したランダムな値をフォームに埋め込み、送信時に照合する。攻撃者は他サイトからこの値を取得できないため、偽装リクエストを弾ける。',
      },
      {
        title: '外部サイトからのCookie送信を止める（SameSite=Strict）',
        detail:
          'CookieにSameSite=Strict属性を付けると、別サイト経由のリクエストにCookieが付かなくなる。これだけでCSRFのほとんどを根本的に防げる。',
      },
      {
        title: '独自ヘッダ付きのリクエストだけ通す（Custom Header検証）',
        detail:
          'X-Requested-Withのような独自ヘッダはfetch / XMLHttpRequestでしか付けられない。HTMLフォーム経由の偽装リクエストには付かないため、それを根拠に弾ける。',
      },
    ],
    footerStatus: 'Damage Done — Defenses Required',
  },
}
