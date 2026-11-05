
import React from 'react'
import styles from './About.module.css'
import { Check, Tag, MessageCircle } from 'lucide-react'

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <p className={styles.eyebrow}>A SIMPLER WAY TO SHOP</p>
            <h2>Why shop with NEXORA?</h2>
            <p className={styles.last}>
              Clear choices, useful products, and help when you need it.
            </p>
          </div>

          <div className={styles.benefitGrid}>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>
                <Check size={20} />
              </span>

              <div>
                <h3>Carefully selected products</h3>
                <p>
                  A focused range of practical items, chosen to make browsing easier.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>
                <Tag size={20} />
              </span>

              <div>
                <h3>Transparent pricing</h3>
                <p>
                  Straightforward prices with no invented discounts or misleading urgency.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>
                <MessageCircle size={20} />
              </span>

              <div>
                <h3>Helpful customer support</h3>
                <p>
                  Clear ways to get in touch and find the information you need.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About
