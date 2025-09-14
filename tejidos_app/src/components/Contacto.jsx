export default function Contacto() {
  return (
    <section id="contacto">
      <h2>Contáctanos</h2>
      <form action="https://formspree.io/f/xzzakgwo" method="POST">
        <input type="text" name="nombre" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="mensaje" rows="5" placeholder="Escribe tu mensaje" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>

      <footer>
        <p>Si tienes alguna pregunta, no dudes en consultarnos</p>
        <p><a href="mailto:ruthzubczuk@gmail.com">ruthzubczuk@gmail.com</a></p>
        <p><a href="tel:+543755742887">Tel: +54 3755 742887</a></p>
        <p>&copy; 2025 Crochet Ruth</p>
      </footer>
    </section>
  );
}
