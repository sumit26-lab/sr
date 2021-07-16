import React from 'react'
import Button from '../events/button/buttion'
import style from '../events/events-search.module.css'
import {useRef} from 'react'

function EventSearch(props) {
    const YearInputRef=useRef();
    const MonthInputRef=useRef();

    function submitHeadler(e){
        e.preventDefault()
        const selecetedYear=YearInputRef.current.value;
        const selecetedMonth=MonthInputRef.current.value;
        props.onSearch(selecetedYear,selecetedMonth)

    }
    return (
        <form className={style.form} onSubmit={submitHeadler}>

        <div className={style.controls}>
        <div className={style.control}>
            <label htmlFor="year">Year</label>
            <select id="year" ref={YearInputRef}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
        <div className={style.control}>
        <label htmlFor="month">Month</label>
            <select id="month" ref={MonthInputRef}>
                <option value="1">Januray</option>
                <option  value="2">Fabrury</option>
                <option value="3"> March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">July</option>
                <option value="8">Augast</option>
                <option value="9">Septamber</option>
                <option value="11">octomber</option>
                <option value="10">Navember</option>
                <option value="12">Decamber</option>
            </select>
        </div>
            
        </div>
        <Button>Find EVents</Button>
        </form>
    )
}

export default EventSearch
