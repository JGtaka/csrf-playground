import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SimulatorPage.module.css'
import BackstageColumn from '../components/simulator/BackstageColumn'
import PhoneFrame from '../components/simulator/PhoneFrame'
import HttpRequestCard from '../components/simulator/HttpRequestCard'
import CountermeasuresCard from '../components/simulator/CountermeasuresCard'
import { STEPS, type StepId } from '../data/steps'

export default function SimulatorPage() {
  const [currentStep, setCurrentStep] = useState<StepId>(1)

  const goNext = () =>
    setCurrentStep((s) => (s < 4 ? ((s + 1) as StepId) : s))
  const reset = () => setCurrentStep(1)

  const step = STEPS[currentStep]
  const isLast = currentStep === 4

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.brand}>
            CSRF Simulator
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.titleSection}>
          <h1 className={styles.title}>CSRF攻撃タイムライン</h1>
          <p className={styles.subtitle}>
            クロスサイト・リクエスト・フォージェリ（CSRF）がどのように成立するか、ユーザーのブラウザ内部の動きを時系列でシミュレーションします。
          </p>
        </section>

        <section className={styles.grid} aria-label="シミュレーション本体">
          <div className={styles.leftColumn}>
            <BackstageColumn currentStep={currentStep} />
          </div>
          <div className={styles.centerColumn}>
            <PhoneFrame currentStep={currentStep} />
          </div>
          <div className={styles.rightColumn}>
            <HttpRequestCard step={step} />
            <CountermeasuresCard step={step} />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div
          className={styles.footerStatus}
          role="status"
          aria-live="polite"
        >
          <InfoIcon />
          <span>
            Step {currentStep}/4: {step.footerStatus}
          </span>
        </div>
        <div className={styles.footerActions}>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={reset}
            aria-label="シミュレーションをリセット"
          >
            Reset
          </button>
          <button
            type="button"
            className={styles.nextBtn}
            onClick={goNext}
            disabled={isLast}
            aria-label={isLast ? '最終ステップに到達済み' : '次のステップへ進む'}
          >
            <span>{isLast ? 'Completed' : 'Next Step'}</span>
            {!isLast && <ArrowRightIcon />}
          </button>
        </div>
      </footer>
    </div>
  )
}

function InfoIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
