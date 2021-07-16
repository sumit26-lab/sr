import {getAllEvents} from '../../dummy-data'
import EventList from '../../Componed/events/event-list'
import { useRouter } from 'next/router'
import { Fragment } from 'react';
import EventSearch from '../../Componed/events/event-search'

function AllEventsPage(){
    const event=getAllEvents()
    const router=useRouter();
    //Receving Dummy Data File Function gett All Events  and show Navigation bar

    function findEventHeandler(year,month){
        const path=`/events/${year}/${month}`;
        router.push(path);
    }


    return(
        <Fragment>
        <EventSearch onSearch={findEventHeandler}/>
         <EventList items={event}/>
        </Fragment>
    )

}
export default AllEventsPage