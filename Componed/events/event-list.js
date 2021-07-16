//This Componed To Responceable to List Render in Componed
import React from 'react'
import EventItem from './event-item'
import classs from '../events/event-list.module.css'

function EventList(props) {
//props Should have Recving Index Main-Page all data in index
    const{items}=props
   
    
    return (
        <ul className={classs.list}>
            {items.map(event =><EventItem 
            key={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
            id={event.id} 
            
            
            
             />
            )}
        </ul>
    )
}

export default EventList
