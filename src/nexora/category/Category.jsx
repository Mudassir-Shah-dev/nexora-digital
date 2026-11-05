
import React from 'react'
import { ArrowRight } from "lucide-react";

import styles from './Category.module.css'
import headphones from './headphones.avif'
import watch from './watch.avif'
import room from './room.avif'
import computer from './computer.avif'

const categories = [
    {
        id: 1,
        title: "Audio & Headphones",
        image: headphones,
        alt: "Wireless headphones"
    },
    {
        id: 2,
        title: "Smart Accessories",
        image: watch,
        alt: "Smartwatch and mobile accessories"
    },
    {
        id: 3,
        title: "Home Essentials",
        image: room,
        alt: "Minimal lamp and home accessories"
    },
    {
        id: 4,
        title: "Everyday Tech",
        image: computer,
        alt: "Modern desktop technology setup"
    }
];

const Category = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>

                    <div className={styles.heading}>
                        <div className={styles.left}>
                            <p className={styles.explore}>
                                EXPLORE BY THE RANGE
                            </p>

                            <h2>Shop by category</h2>
                        </div>

                        <p className={styles.view}>
                            View all categories
                            <ArrowRight size={20} />
                        </p>
                    </div>

                    <div className={styles.categoryContainer}>

                        {categories.map((category) => (
                            <div
                                className={styles.categoryCard}
                                key={category.id}
                            >

                                <div className={styles.categoryImage}>
                                    <img
                                        src={category.image}
                                        alt={category.alt}
                                    />
                                </div>

                                <div className={styles.categoryInfo}>
                                    <h3>{category.title}</h3>

                                    <span>
                                        <ArrowRight size={20} />
                                    </span>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Category
