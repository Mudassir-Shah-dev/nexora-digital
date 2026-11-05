
import { useState } from 'react'
import styles from './Support.module.css'
import { ArrowRight, ChevronDown } from "lucide-react"

const Support = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null)

  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.grid}`}>

        <div className={styles.faqIntro}>
          <p className={styles.eyebrow}>Customer support</p>

          <h2>Frequently asked questions</h2>

          <p>
            Find quick answers about shopping with NEXORA. Store-specific policies
            will always be shown before you commit to a purchase.
          </p>

          <a className={styles.textLink} href="mailto:support@example.com">
            Contact support
            <ArrowRight size={18} strokeWidth={1.8} />
          </a>
        </div>

        <div className={styles.accordion}>

          {/* FAQ 1 */}
          <div className={`${styles.faqItem} ${selectedFAQ === 0 ? styles.isOpen : ""
            }`}>
            <button
              type="button"
              aria-expanded={selectedFAQ === 0}
              aria-controls="faq-answer-0"
              onClick={() => {
                setSelectedFAQ(selectedFAQ === 0 ? null : 0)
              }}
            >
              <span>What payment methods are supported?</span>
              <ChevronDown size={20} strokeWidth={1.8} />
            </button>

            <div
              id="faq-answer-0"
              className={styles.faqAnswer}
              hidden={selectedFAQ !== 0}
            >
              <p>
                Payment options will be shown clearly at checkout. This prototype
                does not process real payments.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className={`${styles.faqItem} ${selectedFAQ === 1 ? styles.isOpen : ""
            }`}>
            <button
              type="button"
              aria-expanded={selectedFAQ === 1}
              aria-controls="faq-answer-1"
              onClick={() => {
                setSelectedFAQ(selectedFAQ === 1 ? null : 1)
              }}
            >
              <span>How can I track an order?</span>
              <ChevronDown size={20} strokeWidth={1.8} />
            </button>

            <div
              id="faq-answer-1"
              className={styles.faqAnswer}
              hidden={selectedFAQ !== 1}
            >
              <p>
                Order tracking details would be shared after an order ships. Exact
                tracking policies have not yet been defined.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className={`${styles.faqItem} ${selectedFAQ === 2 ? styles.isOpen : ""
            }`}>
            <button
              type="button"
              aria-expanded={selectedFAQ === 2}
              aria-controls="faq-answer-2"
              onClick={() => {
                setSelectedFAQ(selectedFAQ === 2 ? null : 2)
              }}
            >
              <span>What is your return policy?</span>
              <ChevronDown size={20} strokeWidth={1.8} />
            </button>

            <div
              id="faq-answer-2"
              className={styles.faqAnswer}
              hidden={selectedFAQ !== 2}
            >
              <p>
                Return eligibility and timelines will be displayed before purchase
                once the store policy is finalized.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className={`${styles.faqItem} ${selectedFAQ === 3 ? styles.isOpen : ""
            }`}>
            <button
              type="button"
              aria-expanded={selectedFAQ === 3}
              aria-controls="faq-answer-3"
              onClick={() => {
                setSelectedFAQ(selectedFAQ === 3 ? null : 3)
              }}
            >
              <span>How can I contact support?</span>
              <ChevronDown size={20} strokeWidth={1.8} />
            </button>

            <div
              id="faq-answer-3"
              className={styles.faqAnswer}
              hidden={selectedFAQ !== 3}
            >
              <p>
                Use the support links below to find available contact options.
                Response times are not yet defined.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Support
