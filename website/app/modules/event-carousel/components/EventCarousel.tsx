export function EventCarousel({ events }) {
  return (
    <div 
      role="region" 
      aria-label="Event photos carousel"
      className="event-carousel"
    >
      {events.map((event) => (
        <div key={event.id} role="group" aria-label={event.title}>
          <EventImage event={event} />
        </div>
      ))}
    </div>
  );
}
