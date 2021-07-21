import React from 'react'
import classes from '../events/event-item.module.css'
import Button from '../ui/button';
import DateIcon from "../icons/date-icon"
import AddressIcon from  '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'


function EventItem(props) {
    const{title,image,date,location,id}=props;
    
    
    const humanReadableDate= new Date(date).toLocaleDateString('en-us',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    const formatAddress=location.replace(', ','/n')
    const ExplorLink =`/events/${id}`;
    return (
        <li className={classes.item}>
        <img src={'/'+ image } alt={title}/>

        <div className={classes.content}>
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
            <DateIcon/>
            <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
            <AddressIcon/>
            <address>{formatAddress}</address>
            </div>
        </div>
        <div className={classes.actions}>
        {/* <Link href={ExplorLink}>Explor Event</Link> */}
        <Button link={ExplorLink}><span>Explor Events</span>
        <span className={classes.icon}><ArrowRightIcon/></span></Button>

        </div>
            
        </div>
        </li>
    )
}

export default EventItem
