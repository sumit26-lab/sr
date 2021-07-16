import React, { Fragment } from 'react'
import {useRouter} from 'next/router'
import { getFilteredEvents} from '../../dummy-data'
import  EventList from '../../Componed/events/event-list'
import  ResultsTitle from '../../Componed/events/results-title/results-title'
import Button from '../../Componed/events/button/buttion'
import ErrorAlert from '../../Componed/events/ui/error-alert/error-alert'

function FilterEventsPages() {
    const router= useRouter();
    const FilterData=router.query.slug
    
   if(!FilterData)
   {
       return <p className="center">
           Loading Data.....
       </p>

   }
   const FilterYear=FilterData[0]
   const FilterMonth=FilterData[1]

   const Yearnum=+ FilterYear
   const monthnum=+FilterMonth
  
   if(isNaN(Yearnum)||isNaN(monthnum)){
       return(
           <p className="center">
               <h1>Invalid Filter </h1>
           </p>
       )
   }
   const FilterEvents= getFilteredEvents({
       year:Yearnum,
       month:monthnum
   })
   if(!FilterEvents || FilterEvents.length===0)
    { 
       return(
           <Fragment>
           <ErrorAlert>

               <p> No Evnts FOund!!</p>
           </ErrorAlert>

               <div className="center">

                  <Button >
                   Show all data
               </Button>
               </div>
           </Fragment>
       )
    }


 
return (
    <Fragment>
   
    

        <EventList items={FilterEvents}/>
    </Fragment>
)
  
}

export default FilterEventsPages
