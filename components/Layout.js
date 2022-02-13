import Image from 'next/image'
import React from 'react'
import Nav from './Nav'
import styles from "../styles/Home.module.css";
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
