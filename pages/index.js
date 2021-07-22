import React from "react";

import EventList from "../Components/events/event-list";
import { getFeaturedEvents } from "../helper/api-util";

function HomePage(props) {
  // const featuredEvents=getFeaturedEvents();
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}
export default HomePage;
