import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";


const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
  ];
  export function alldatafectingindummy(){
    const[newdata,Setdata]=useState();
    const { data, error } = useSWR(
      "https://react-getting-started-6898a-default-rtdb.firebaseio.com/event.json"
    );
  useEffect(() => {
      if (data) {
        const transformdata = [];
        for (const key in data) {
          transformdata.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        Setdata(transformdata);
      }
    }, [data]);
  
  }
  
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  // export function  AlldataFetch(){
  //   const[datas,Setdata]=useState();
  //   useEffect(()=>{
  //     fetch('https://react-getting-started-6898a-default-rtdb.firebaseio.com/event.json').then(responce =>responce.json())
  //     .then((data)=>{
  //       Setdata(data)
        
  //     })
  //   })
  // }
     export async function getAllEvents() {
           
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
 
  