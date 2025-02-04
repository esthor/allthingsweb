interface EventImageProps {
  event: {
    title: string;
    date: string;
    image: string;
  };
}

export function EventImage({ event }: EventImageProps) {
  return (
    <img
      src={event.image}
      alt={`${event.title} event on ${event.date}`}
      className="event-image"
    />
  );
}
