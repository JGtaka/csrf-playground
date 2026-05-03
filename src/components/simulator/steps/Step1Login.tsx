import styles from './Steps.module.css'

export default function Step1Login() {
  return (
    <div className={`${styles.stepBlock} ${styles.stepBlockFirst}`}>
      <div className={`${styles.iconWrap} ${styles.iconBlue}`}>
        <LoginIcon />
      </div>
      <div className={styles.title}>Step 1: Authentic Login</div>
      <div className={styles.subtitle}>SNS「Chirpy」にログイン</div>
      <div className={styles.sessionCard}>
        <div className={styles.avatar} aria-hidden="true" />
        <div className={styles.sessionInfo}>
          <span className={styles.sessionName}>User Session</span>
          <span className={styles.sessionStatus}>
            <LockIcon />
            Authenticated
          </span>
        </div>
      </div>
    </div>
  )
}

function LoginIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg
      width="8"
      height="10"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  )
}
