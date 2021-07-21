
import Link from 'next/link'
import classs from './button.module.css'

function Button(props) {
    if(props.link){
        
        return (
            <Link href={props.link}>
            <a className={classs.btn}>
                {props.children}
            </a>
                
            </Link>
        )
    }
    return <button className={classs.btn}   
    onClick={props.onClick}>
    {props.children}</button>
}

export default Button
