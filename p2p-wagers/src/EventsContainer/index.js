import React from 'react';

const EventsContainer = (props)=>{

    const eventList = props.eventList.map((event)=>{
        return (
      <li key={event.idEvent}>
              <span>{event.dateEvent}</span>
          <a href={`/${event.idEvent}`} >{event.strEvent} </a>


      </li>
        )
    })
    return(
        <div className="events-dump">
            <h1>These are the Upcoming Games</h1>
            <ul>
                {eventList}
            </ul>
        </div>
    )
}

export default EventsContainer; 