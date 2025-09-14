import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("⚠️ Ingresa un email válido.");
      return;
    }

    setMessage(" ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.");
    setEmail("");
  };

  return (
    <section className="p-6 bg-purple-100 rounded-lg shadow-md max-w-lg mx-auto my-8 text-center">
      <h2 className="text-2xl font-bold mb-3"> Suscríbete a nuestro boletín</h2>
      <p className="mb-4">Recibe patrones gratuitos, descuentos y tips de crochet directamente en tu correo.</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 justify-center">
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="flex-1 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        >
          Suscribirme
        </button>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </section>
  );
}