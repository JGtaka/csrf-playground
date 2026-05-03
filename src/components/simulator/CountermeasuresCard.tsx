import styles from './CountermeasuresCard.module.css'
import type { StepContent } from '../../data/steps'

type Props = {
  step: StepContent
}

export default function CountermeasuresCard({ step }: Props) {
  return (
    <section
      className={styles.card}
      key={step.id}
      aria-label="防御策"
    >
      <h3 className={styles.heading}>
        <ShieldIcon />
        防御策
      </h3>
      <ul className={styles.list}>
        {step.countermeasures.map((c, i) => (
          <li key={i} className={styles.item}>
            <CheckIcon />
            <div className={styles.itemBody}>
              <span className={styles.itemTitle}>{c.title}</span>
              {c.detail && (
                <span className={styles.itemDetail}>{c.detail}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
