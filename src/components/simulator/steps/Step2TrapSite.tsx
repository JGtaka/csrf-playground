import styles from './Steps.module.css'

export default function Step2TrapSite() {
  return (
    <div className={styles.stepBlock}>
      <div className={`${styles.iconWrap} ${styles.iconAlert}`}>
        <AlertIcon />
      </div>
      <div className={styles.title}>Step 2: Visit Trap Site</div>
      <div className={styles.subtitle}>罠サイトを別タブで開く</div>
      <div className={styles.trapCard}>
        <div className={styles.trapImage} aria-hidden="true">
          🐱
        </div>
        <div className={styles.trapBody}>
          <div className={styles.trapTitle}>
            <GiftIcon />
            無料プレゼント！
          </div>
          <div className={styles.trapDesc}>
            猫の画像をクリックして詳細を見る
          </div>
        </div>
      </div>
    </div>
  )
}

function AlertIcon() {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}
