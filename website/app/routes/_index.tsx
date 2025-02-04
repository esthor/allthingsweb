export default function Index() {
  return (
    <main id="main-content">
      <h1>All Things Web</h1>
      
      <section>
        <h2>Upcoming Events</h2>
        {upcomingEvents.map(event => (
          <EventDetails key={event.id} event={event} />
        ))}
      </section>

      <section>
        <h2>Past Events</h2>
        {pastEvents.map(event => (
          <EventDetails key={event.id} event={event} />
        ))}
      </section>

      <section>
        <h2>Join Our Community</h2>
        <a 
          href="https://discord.gg/B3Sm4b5mfD"
          className="discord-button"
          role="button"
          aria-label="Join our Discord community"
        >
          Join Discord
        </a>
      </section>

      <footer role="contentinfo">
        <small>&copy; {new Date().getFullYear()} All Things Web. All rights reserved.</small>
      </footer>
    </main>
  );
}
