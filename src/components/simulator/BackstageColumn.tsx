import styles from './BackstageColumn.module.css'
import { BACKSTAGE_CARDS, type StepId } from '../../data/steps'

type Props = {
  currentStep: StepId
}

export default function BackstageColumn({ currentStep }: Props) {
  return (
    <div className={styles.column}>
      {BACKSTAGE_CARDS.map((card) => {
        const visible = currentStep >= card.forStep
        const highlighted =
          currentStep === card.forStep ||
          (currentStep === 4 && card.forStep === 3)

        if (!visible) {
          return (
            <div
              key={card.label}
              className={`${styles.card} ${styles.cardPlaceholder}`}
              aria-hidden="true"
            />
          )
        }

        return (
          <div
            key={card.label}
            className={`${styles.card} ${
              highlighted ? styles.cardActive : ''
            }`}
          >
            <div
              className={`${styles.label} ${
                card.accent === 'red' ? styles.labelRed : ''
              }`}
            >
              {card.label}
            </div>
            <p className={styles.body}>{card.body}</p>
            <div className={styles.arrow} aria-hidden="true" />
          </div>
        )
      })}
    </div>
  )
}
