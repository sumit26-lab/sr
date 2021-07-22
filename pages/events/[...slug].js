import {Fragment,useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import {getFilteredEvents} from '../../helper/api-util'
import EventList from '../../Components/events/event-list';
import ResultsTitle from '../../Components/events/results-title';
import Button from '../../Components/ui/button';
import ErrorAlert from '../../Components/ui/error-alert/error-alert'
import useSWR from 'swr'


    function FilterEvent(props){
        const[Loadedevent,SetLoadedevents]=useState();
    const router=useRouter();
    const FilterData=router.query.slug;
   const{data,error} =useSWR('https://react-getting-started-6898a-default-rtdb.firebaseio.com/event.json')
   useEffect(() => {
       if(data){
           const events=[]
           for(const key in data){
               events.push({
                   id:key,
                   ...data[key],
               })
           }
           SetLoadedevents(events)
       }
   }, [data])
    if(!Loadedevent){
        return <p className="center">Loading...</p>
    
    }
    const FilterYear=FilterData[0];
    const FilterMonth=FilterData[1];
    const numYear=+FilterYear
    const numMonth=+FilterMonth;
    if(isNaN(numYear)||isNaN(numMonth)

    || numYear >2030 || 
    numYear <2021 
    || numMonth < 1
    || numMonth >12||error

    ){
{
          return (<Fragment>
          <ErrorAlert>

          <p> InValid Filter Plase Adjust The Value Check</p>
          </ErrorAlert>
           <div className="center">
          <Button link="/events">Show All Events</Button>
          </div>


          </Fragment>)
      }
   
    }
  
    const filterEvents = Loadedevent.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
      });
    
    

        // const filterEvents=props.events
        if(!filterEvents ||filterEvents.length ===0){
            return (<Fragment >
            <ErrorAlert>

            <p>No Event There Found </p>
            </ErrorAlert>
            <div style={{textAlign:'center'}}>
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

// export async function getServerSideProps(context){
//     const{params}=context;
//     const FilterData=params.slug
//     const FilterYear=FilterData[0];
//     const FilterMonth=FilterData[1];
//     const numYear=+FilterYear
//     const numMonth=+FilterMonth

//     if(isNaN(numYear)||isNaN(numMonth)

//         || numYear >2030 || 
//         numYear <2021 
//         || numMonth < 1
//         || numMonth >12
    
//         ){
//             return { 
//                 props:{hasError:true}
//                 //notFound:true,
//                 //did not posibale to return jsx bcz serverside return alway objct
//             // <Fragment>
//             // <ErrorAlert>

//             // <p> InValid Filter Plase Adjust The Value Check</p>
//             // </ErrorAlert>
//             //  <div className="center">
//             // <Button link="/events">Show All Events</Button>
//             // </div>


//             // </Fragment>)
//             }
//             }
//         const filterEvents= await getFilteredEvents({
//             year:numYear,
//             month:numMonth,
//         })
    
//     return{
//         props:{
//             events:filterEvents,
//             date:{
//                 year:numYear,
//                 month:numMonth
//             }
            
//         }
//    }

//}
