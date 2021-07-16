import React from 'react'
import Link from 'next/link'
import style from '../button/button.module.css'
function Button(props) {
    if(props.link){

        return (
            <Link href={props.newlink}>
            <a className={style.btn}>{props.children}</a>
                
            </Link>
        )
    }
    else{
 return <button className={style.btn} onClick={props.onClick}>{props.children}</button>
    }
}

export default Button
