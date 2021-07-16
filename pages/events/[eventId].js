import React from 'react'
import {Fragment} from 'react'
import {getEventById} from '../../dummy-data'
import {useRouter} from 'next/router'
import EventContent from '../../Componed/event-detail/event-content'
import EventLogistics from '../../Componed/event-detail/event-logistics'
import EventSummary from '../../Componed/event-detail/event-summary'
import LogisticsItem from '../../Componed/event-detail/logistics-item'

function EventDetailPage(props) {
  
    const router=useRouter();
    const eventId = router.query.eventId;
    const event =getEventById(eventId)
    console.log("Event",event)
    if(!event)
    {
        
        return<p>No Event is Founds</p>
    }
    
    return (
        <Fragment>
        <h1>All events</h1>
        <EventSummary title={event.title}/>
        <EventLogistics
        date={event.date} 
        address={event.location} 
        image={event.image}
        imageAlt={event.imageAlt}    
        />
        
        <EventContent>
        <p>{event.description}</p>
        </EventContent>
        

       


        </Fragment>
    )
}

export default EventDetailPage
