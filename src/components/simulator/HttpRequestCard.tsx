import styles from './HttpRequestCard.module.css'
import type { StepContent, HttpLine } from '../../data/steps'

type Props = {
  step: StepContent
}

export default function HttpRequestCard({ step }: Props) {
  return (
    <section
      className={styles.card}
      key={step.id}
      aria-label={`HTTPリクエスト - ${step.http.title}`}
    >
      <h3 className={styles.heading}>
        <CodeIcon />
        HTTPリクエスト
      </h3>
      <div className={styles.codeBlock}>
        {step.http.lines.map((line, i) => (
          <CodeLine key={i} line={line} />
        ))}
      </div>
      {step.http.glossary.length > 0 && (
        <div className={styles.glossary}>
          <div className={styles.glossaryHeading}>コードの読み方</div>
          <ul className={styles.glossaryList}>
            {step.http.glossary.map((g, i) => (
              <li key={i} className={styles.glossaryItem}>
                <code className={styles.glossaryTerm}>{g.term}</code>
                <span className={styles.glossaryDesc}>{g.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={styles.note}>{step.http.note}</div>
    </section>
  )
}

function CodeLine({ line }: { line: HttpLine }) {
  switch (line.kind) {
    case 'method':
      return <div className={styles.method}>{line.text}</div>
    case 'header':
      return (
        <div className={styles.line}>
          <span className={styles.headerKey}>{line.key}:</span>
          <span className={styles.headerVal}> {line.value}</span>
        </div>
      )
    case 'highlight':
      return (
        <div className={styles.line}>
          <span className={styles.highlight}>{line.key}:</span>
          <span className={styles.highlight}> {line.value}</span>
        </div>
      )
    case 'body':
      return <div className={styles.line}>{line.text}</div>
    case 'blank':
      return <div className={styles.line}>&nbsp;</div>
  }
}

function CodeIcon() {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
