import React, { useState } from 'react';
import TrackingEvents from './components/TrackingEvents'
import TrackingForm from './components/TrackingForm'


function App() {

  const [events, setEvents] = useState([]);
  console.log(events)
  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch(`http://localhost:3001/?tracking=${data.tracking}`)
      .then(response => response.json())
      .then(data => {
        const events = data.events || [];
        setEvents(events);
      })
      .catch(console.error)
  };

  return (
    <div className="container">
     
      <TrackingForm submitHandler={submitHandler}/>
      <TrackingEvents events={events} />
    </div>
  );
}

export default App;
