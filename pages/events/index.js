import React from "react";
import { getAllEvents } from "../../helper/api-util";
import EventList from "../../Components/events/event-list";
import EventSearch from "../../Components/events/events-searchbox";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();
  function findeEventHendler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findeEventHendler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
export async function getStaticProps() {
  const event = await getAllEvents();
  return {
    props: {
      events: event,
    },
    revalidate: 60,
  };
}
