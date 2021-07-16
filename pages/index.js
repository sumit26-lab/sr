import styles from '../styles/Home.module.css'
import {getFeaturedEvents } from '../dummy-data';
import EventList from '../Componed/events/event-list';
import EventSearch from '../Componed/events/event-search'
import { Fragment } from 'react';

export default function Home() {

  const featured= getFeaturedEvents();

  return (
    <Fragment>
    <EventList items={featured}/>
    </Fragment>
  )
}
