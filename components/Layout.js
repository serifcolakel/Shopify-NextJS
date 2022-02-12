import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Nav />
            <main>{children}</main>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/serifcolakel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>Powered by</p>
                    <span className="flex items-center justify-center pl-2" >
                        <Image src="/logo.png" alt="Serif Logo" width={122} height={36} />
                    </span>
                </a>
            </footer>
        </div>
    )
}
