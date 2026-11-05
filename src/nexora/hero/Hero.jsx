
import React from 'react'
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import headphones from './headphones.avif'
import watch from './watch.avif'
import speaker from './speaker.avif'
import styles from './Hero.module.css'

const Hero = ({ shopScroll, categoryScroll }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.content}>

                        <p className={styles.shopping}>
                            Smarter shopping starts here
                        </p>

                        <h1>
                            Everyday
                            <br />
                            essentials.
                            <br />
                            Better choices.
                        </h1>

                        <div className={styles.para}>
                            <p>Discover carefully selected tech and everyday</p>
                            <p>accessories designed to make life simpler.</p>
                        </div>

                        <div className={styles.btn}>
                            <button
                                className={styles.explore}
                                onClick={shopScroll}
                            >
                                Explore products
                                <ArrowRight size={20} />
                            </button>

                            <button
                                className={styles.browse}
                                onClick={categoryScroll}
                            >
                                Browse categories
                            </button>
                        </div>

                        <div className={styles.proof}>
                            <Check size={20} color="#16a34a" />
                            <span>Thoughtfully selected</span>

                            <ShieldCheck size={20} color="#16a34a" />
                            <span>Clear, secure checkout</span>
                        </div>

                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.image}>

                        <div className={styles.mainImage}>
                            <img src={headphones} alt="Premium wireless headphones" />
                        </div>

                        <div className={`${styles.watchImage} ${styles.secondClass}`}>
                            <img src={watch} alt="Smartwatch" />
                        </div>

                        <div className={`${styles.speakerImage} ${styles.speakerSecond}`}>
                            <img src={speaker} alt="Portable wireless speaker" />
                        </div>

                        <div className={styles.label}>
                            <span>FEATURED PICK</span>
                            <strong>Everyday audio</strong>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
