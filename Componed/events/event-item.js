import React from 'react'
import classes from '../events/event-item.module.css'
import Button from '../events/button/buttion'
import DateIcon from './ui/date-icon'
import AddressIcon from './ui/address-icon';
import  ArrowRightIcon from './ui/arrow-right-icon'

function EventItem(props) {
    //props should Recveing in Event-List
    const{title,image,date,location,id}=props;
    const humanReadAbleData= new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    // const humanReadableDate= new Date(date).toLocaleDateString('en-US',{
    //     day:'numeric',
    //     month:'long',
    //     year:'numeric'
    // })
    
    const formatedAddres=location.replace(',','\n');
    const exploreLink=`/events/${id}`;

    return (
        <li className={classes.item}>
        <img src={'/'+ image } alt={title}/>

        <div className={classes.content}>
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
            <DateIcon/>
           
            <time>{humanReadAbleData}</time>
            </div>
            <div className={classes.address}>
            <AddressIcon/>
            <address>{formatedAddres}</address>
            </div>
        </div>
        <div className={classes.actions}>
        {/* <Link href={ExplorLink}>Explor Event</Link> */}
        <Button newlink={exploreLink}><span>Explor Events</span>
        <span className={classes.icon}><ArrowRightIcon/></span></Button>

        </div>
            
        </div>
        </li>
    )
}

export default EventItem
