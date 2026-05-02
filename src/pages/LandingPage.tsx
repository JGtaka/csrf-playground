import { Link } from 'react-router-dom'
import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.brand}>CSRF シミュレーター</span>
          <Link to="/simulator" className={styles.headerCta}>
            シミュレーション開始
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.badge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                SECURITY EDUCATION
              </span>
              <h1 id="hero-heading" className={styles.heroHeading}>
                CSRF攻撃の仕組みを
                <span className={styles.heroHeadingAccent}>体験して学ぶ</span>
              </h1>
              <p className={styles.heroLead}>
                このシミュレーターは、ストーリー形式の体験を通じて、クロスサイト・リクエスト・フォージェリ（CSRF）の危険性と防御手法を初心者が直感的に理解できるよう設計された教育ツールです。
              </p>
              <div className={styles.heroActions}>
                <Link
                  to="/simulator"
                  className={styles.primaryButton}
                  aria-label="シミュレーションを開始する"
                >
                  シミュレーションを開始する
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.visualGlow} />
              <div className={styles.browser}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span className={`${styles.browserDot} ${styles.dotRed}`} />
                    <span className={`${styles.browserDot} ${styles.dotYellow}`} />
                    <span className={`${styles.browserDot} ${styles.dotGreen}`} />
                  </div>
                  <div className={styles.browserAddress}>
                    https://bank-simulator.secure/transfer
                  </div>
                </div>
                <div className={styles.browserBody}>
                  <pre className={styles.codeStream}>
{`POST /transfer HTTP/1.1
Host: bank-simulator.secure
Cookie: session=abc123...
Origin: https://evil.example
Content-Type: application/x-www-form-urlencoded

amount=10000&to=attacker`}
                  </pre>
                  <div className={styles.bodyOverlay} />
                  <div className={styles.alert}>
                    <span className={styles.alertIcon}>!</span>
                    <div className={styles.alertText}>
                      <strong className={styles.alertTitle}>未認可のリクエストを検出</strong>
                      <span className={styles.alertDesc}>
                        攻撃者があなたのブラウザを利用して操作を行おうとしています。
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="cta-heading">
          <div className={styles.ctaGlow} aria-hidden="true" />
          <div className={styles.ctaInner}>
            <h2 id="cta-heading" className={styles.ctaHeading}>
              セキュリティの知識を、一生の武器に。
            </h2>
            <p className={styles.ctaLead}>
              このシミュレーターを完了することで、開発者としての視点が変わり、より安全なコードを書くための基礎が身につきます。
            </p>
            <Link to="/simulator" className={styles.ctaButton}>
              今すぐ学習をスタート
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <a href="#" className={styles.footerLink}>
            利用規約
          </a>
          <a href="#" className={styles.footerLink}>
            プライバシーポリシー
          </a>
        </div>
      </footer>
    </div>
  )
}
