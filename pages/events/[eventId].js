import React from 'react'
import  {getEventById,getFeaturedEvents} from "../../helper/api-util"
import { Fragment } from 'react';
import EventLogistics from '../../Components/event-detail/event-logistics';
import EventSummary  from '../../Components/event-detail/event-summary' 
import EventContent  from '../../Components/event-detail/event-content';
import ErrorAlert from '../../Components/ui/error-alert/error-alert' 
function EventDetailPage(props) {
   const event=props.SelectionEvents
    // if(!event){
    //     return<ErrorAlert>
    //     <p>No Event is Found Sorry</p>

    //     </ErrorAlert>
    // }
    if(!event){
        return<p className="center">Loading......</p>
    }

    return (
        <Fragment>
        {/* Dummy-Data passs to new Components to render */}
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} address={event.location} image={event.image}
        imageAlt={event.title}
    
        />
        <EventContent>
        <p>{event.description}</p>

        </EventContent>
            <h1>EventDetailPage</h1>
        </Fragment>
    )
}

export default EventDetailPage

export async function getStaticProps(context){
    const eventId=context.params.eventId
    const event=await getEventById(eventId)
    return{
        props:{
            SelectionEvents:event
        },revalidate:30
    }

}
export async function getStaticPaths(){ //this function to tell next js witch id to pre-genratd
    const events= await getFeaturedEvents();
    const path= events.map(event=>({params:{eventId:event.id}}))
    console.log(path)

    return{
        paths:path,
        fallback:true       
    
    }

}