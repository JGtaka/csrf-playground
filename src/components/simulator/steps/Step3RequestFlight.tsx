import styles from './Steps.module.css'

export default function Step3RequestFlight() {
  return (
    <div className={styles.stepBlock}>
      <div className={`${styles.iconWrap} ${styles.iconNeutral}`}>
        <RefreshIcon />
      </div>
      <div className={styles.title}>Step 3: Background POST</div>
      <div className={styles.subtitle}>自動リクエスト送信</div>
      <div className={styles.flightCard}>
        <div className={`${styles.endpoint} ${styles.endpointLeft}`}>
          <div className={styles.endpointIcon}>
            <GlobeIcon />
          </div>
          <div className={styles.endpointLabel}>TRAP SITE</div>
        </div>
        <div className={`${styles.endpoint} ${styles.endpointRight}`}>
          <div className={styles.endpointIcon}>
            <ServerIcon />
          </div>
          <div className={styles.endpointLabel}>CHIRPY</div>
        </div>
        <div className={styles.envelope}>
          <EnvelopeIcon />
          POST /post
          <div className={styles.envelopeBadge}>
            <CookieIcon />
            SID:28x..
          </div>
        </div>
      </div>
    </div>
  )
}

function RefreshIcon() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
      <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function ServerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function CookieIcon() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A3.002 3.002 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A10.954 10.954 0 0 0 1 13c0 6.065 4.935 11 11 11s11-4.935 11-11c0-.563-.043-1.114-.127-1.654a.997.997 0 0 0-.275-.282zM6.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm.5 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </svg>
  )
}
