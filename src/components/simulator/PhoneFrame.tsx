import { useEffect, useRef } from 'react'
import styles from './PhoneFrame.module.css'
import Step1Login from './steps/Step1Login'
import Step2TrapSite from './steps/Step2TrapSite'
import Step3RequestFlight from './steps/Step3RequestFlight'
import Step4Result from './steps/Step4Result'
import type { StepId } from '../../data/steps'

type Props = {
  currentStep: StepId
}

const STEP_COMPONENTS = {
  1: Step1Login,
  2: Step2TrapSite,
  3: Step3RequestFlight,
  4: Step4Result,
} as const

export default function PhoneFrame({ currentStep }: Props) {
  const lastStepRef = useRef<HTMLDivElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    // 初回マウント時はスクロールしない（最上部Step 1から始まる）
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // Resetで Step 1 に戻る場合は先頭にスクロール
    if (currentStep === 1) {
      screenRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    // 新しく現れたステップを画面中央に
    lastStepRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [currentStep])

  const visibleSteps: StepId[] = [1, 2, 3, 4].filter(
    (id): id is StepId => id <= currentStep,
  )

  return (
    <div
      className={styles.frame}
      role="img"
      aria-label={`シミュレーション画面 Step ${currentStep}/4`}
    >
      <div className={styles.notch} aria-hidden="true" />
      <div className={styles.screen} ref={screenRef}>
        {visibleSteps.map((id, i) => {
          const StepComp = STEP_COMPONENTS[id]
          const isLast = i === visibleSteps.length - 1
          return (
            <div key={id}>
              {i > 0 && <div className={styles.connector} aria-hidden="true" />}
              <div ref={isLast ? lastStepRef : undefined}>
                <StepComp />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
