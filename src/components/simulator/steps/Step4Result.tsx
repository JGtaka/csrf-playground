import styles from './Steps.module.css'

export default function Step4Result() {
  return (
    <div className={`${styles.stepBlock} ${styles.stepBlockLast}`}>
      <div className={`${styles.iconWrap} ${styles.iconDanger}`}>
        <ShieldOffIcon />
      </div>
      <div className={styles.title}>Result: Forced Action</div>
      <div className={styles.subtitle}>不正な投稿が完了</div>
      <div className={styles.resultCard}>
        <div className={styles.resultUser}>
          <div className={styles.resultAvatar} aria-hidden="true" />
          <span className={styles.resultName}>You @user_name</span>
        </div>
        <div className={styles.resultText}>
          「このサイト最高！みんな見て！http://trap-site.evil」
        </div>
        <div className={styles.resultActions}>
          <HeartIcon />
          <RepeatIcon />
        </div>
      </div>
    </div>
  )
}

function ShieldOffIcon() {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
      <path d="M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

function HeartIcon() {
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
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function RepeatIcon() {
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
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}
