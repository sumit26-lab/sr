import {Fragment} from 'react';
import {useRouter} from 'next/router';
import {getFilteredEvents} from '../../dummy-data';
import EventList from '../../Components/events/event-list';
import ResultsTitle from '../../Components/events/results-title';
import Button from '../../Components/ui/button';
import ErrorAlert from '../../Components/ui/error-alert/error-alert'


    function FilterEvent(){
    const router=useRouter();
    const FilterData=router.query.slug;
    if(!FilterData){
        return <p className="center">Loading...</p>
    
    }
    const FilterYear=FilterData[0];
    const FilterMonth=FilterData[1];
    const numYear=+FilterYear
    const numMonth=+FilterMonth

    if(isNaN(numYear)||isNaN(numMonth)

        || numYear >2030 || 
        numYear <2021 
        || numMonth < 1
        || numMonth >12
    
        ){
            return <Fragment>
            <ErrorAlert>

            <p> InValid Filter Plase Adjust The Value Check</p>
            </ErrorAlert>
             <div className="center">
            <Button link="/events">Show All Events</Button>
            </div>


            </Fragment>
        }
        const filterEvents=getFilteredEvents({
            year:numYear,
            month:numMonth,
        })
        if(!filterEvents ||filterEvents.length ===0){
            return (<Fragment >
            <ErrorAlert>

            <p>No Event There Found </p>
            </ErrorAlert>
            <div className='center'>
            <Button link="/events">Show All Events</Button>

            </div></Fragment>
            )}
        const date= new Date(numYear,numMonth-1)

    return (
        <Fragment>
        <ResultsTitle date={date}/>
            <EventList items={filterEvents}/>
        </Fragment>
    )
}

export default FilterEvent
