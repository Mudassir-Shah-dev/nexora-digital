
import { useState } from 'react'
import styles from './Nav.module.css'
import { SearchX } from 'lucide-react'

const Nav = ({ shopScroll, categoryScroll, aboutScroll, onProductSearch, searchMessage }) => {
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            onProductSearch(search)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                    <p>Free shipping on orders over $75</p>
                </div>

            <div className={styles.bottom}>
                <div className={styles.nav}>

                    <div className={styles.logo}>
                        <span>N</span>
                        NEXORA
                    </div>

                    <div className={styles.links}>
                        <a href="#home">Home</a>
                        <a onClick={categoryScroll}>Categories</a>
                        <a onClick={shopScroll}>Shop</a>
                        <a onClick={aboutScroll}>About</a>
                    </div>

                <div className={styles.navActions}>

                    <label className={styles.searchField}>
                        <span className={styles.srOnly}>Search products</span>

                        <svg
                            aria-hidden="true"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="7"></circle>
                            <path d="m20 20-4-4"></path>
                        </svg>

                        <input
                            placeholder="Search products"
                            type="search"
                            value={search}
                            onKeyDown={handleSearch}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>

                    {searchMessage && (
                        <div className={styles.searchError} role="status">
                            <div className={styles.errorIcon}>
                                <SearchX size={18} />
                            </div>

                            <div className={styles.errorContent}>
                                <p className={styles.errorTitle}>No results found</p>
                                <p className={styles.errorText}>
                                    Try searching for headphones, smartwatch, or speaker.
                                </p>
                            </div>
                        </div>
                    )}

                    <button
                        className={`${styles.iconButton} ${styles.cartButton}`}
                        type="button"
                        aria-label="Open cart, 0 items"
                    >
                        <svg
                            aria-hidden="true"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 8h12l1 12H5L6 8Z"></path>
                            <path d="M9 9V6a3 3 0 0 1 6 0v3"></path>
                        </svg>
                    </button>

                    <button
                        className={`${styles.iconButton} ${styles.menuButton}`}
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
    >
        <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 7h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 17h16"></path>
        </svg>
    </button>

                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Nav
