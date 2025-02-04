export function EventDetails({ event }) {
  return (
    <article className="event-details">
      <h3>{event.title}</h3>
      <time dateTime={event.date}>
        {formatDate(event.date)}
      </time>
      <address>{event.location}</address>
      <a 
        href={`/${event.slug}`}
        aria-label={`See details for ${event.title} on ${formatDate(event.date)}`}
      >
        See details
      </a>
    </article>
  );
}
