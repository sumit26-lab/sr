import React from 'react'
import Link from 'next/link'
import style from '../layout/main-header.module.css'

function MainHeader() {
    return (
        <header className={style.header}>

        <div className={style.logo}>
            <Link href="/">NextEvent</Link>
        </div>
        <nav className={style.navigation}>
        <ul>
            <li>
                <Link href="/events">Browse ALl Events</Link>
            </li>
        </ul>

        </nav>
        </header>

    )
}

export default MainHeader
