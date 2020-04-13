import React from 'react';

function TrackingEvents({ events }) {
    if (!events || events.length === 0) return null;
    return (
        <>
            <h1>Tracking Events</h1>
            <ul className="list-group">
                {events.map(item => {
                    return (
                        <li
                            key={item.descricao}
                            className="list-group-item">
                            <span>{item.data}/{item.hora}</span>
                            <span>{item.descricao}</span>
                            <span>{item.cidade}/{item.uf}</span>
                        </li>)
                })}
            </ul>
        </>
    )
}

export default TrackingEvents;