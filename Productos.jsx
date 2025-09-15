import Accordion from "./Accordion";

function Producto({ img, nombre, descripcion, precio }) {
  const handleCompra = () => {
    const telefono = "5493755742887";
    const mensaje = `Hola! Estoy interesado en comprar:\n• Producto: ${nombre}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
  };

  return (
    <div className="producto">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      {precio && <div className="precio">{precio}</div>}
      <button className="btn-comprar" onClick={handleCompra}>Comprar</button>
    </div>
  );
}

export default function Productos() {
  return (
    <main id="productos">
      {/* Accesorios */}
      <Accordion title="Accesorios">
        <section className="productos">
          <Producto img="/images/1.jpeg" nombre="Porta repasadores" descripcion="Colores a elección" precio="$5000 cada uno" />
          <Producto img="/images/5..webp" nombre="Llaveros" descripcion="Diversas formas y diseños" precio="$2500 cada uno" />
        </section>
      </Accordion>

      {/* Carpetas */}
      <Accordion title="Carpetas">
        <section className="productos">
          <Producto img="/images/20.jpeg" nombre="Tapetes" descripcion="28 cm diámetro. Para mesas, escritorios, etc." precio="$6000" />
          <Producto img="/images/18.jpeg" nombre="Tapetes" descripcion="28 cm diámetro" precio="$6000" />
          <Producto img="/images/15.jpeg" nombre="Carpetas" descripcion="28 cm diámetro. Para mesas, escritorios, etc." precio="$6000" />
          <Producto img="/images/19.jpeg" nombre="Tapete pequeño" descripcion="14 cm diámetro. Escritorio" precio="$2000" />
        </section>
      </Accordion>

      {/* Caminos de mesa */}
      <Accordion title="Caminos de mesa">
        <section className="productos">
          <Producto img="/images/3.jpeg" nombre="Centro de mesa rectangular" descripcion="60x40 cm" precio="$35.000" />
          <Producto img="/images/7.jpeg" nombre="Camino de mesa" descripcion="70x40 cm" precio="$38.000" />
          <Producto img="/images/10.jpeg" nombre="Camino de mesa rectangular" descripcion="62x140 cm" precio="$60.000" />
          <Producto img="/images/11.jpeg" nombre="Camino con girasol" descripcion="70x40 cm" precio="$38.000" />
          <Producto img="/images/14.jpeg" nombre="Camino rectangular" descripcion="60x120 cm" precio="$60.000" />
          <Producto img="/images/4.jpeg" nombre="Centro rectangular" descripcion="90x60 cm" precio="Desde $55.000" />
          <Producto img="/images/12.jpeg" nombre="Centro circular" descripcion="Decorativo" precio="$40.000" />
          <Producto img="/images/6.jpeg" nombre="Centro de mesa grande" descripcion="90x60 cm" precio="$58.000" />
        </section>
      </Accordion>

      {/* Juegos de baño */}
      <Accordion title="Juegos de baño">
        <section className="productos">
          <Producto img="/images/8.jpeg" nombre="Colgador de papel higiénico" descripcion="Colores y medidas a elección" />
          <Producto img="/images/23.jfif" nombre="Juego de baño" descripcion="Combinaciones únicas" />
          <Producto img="/images/13.jpeg" nombre="Organizadores" descripcion="Para baños" />
          <Producto img="/images/16.jpeg" nombre="Juego de baño personalizado" descripcion="Colores y diseños a elección" />
          <Producto img="/images/21.jpeg" nombre="Juego de baño personalizado" descripcion="Colores y diseños a elección" />
          <Producto img="/images/22.jfif" nombre="Juego de baño personalizado" descripcion="Colores y diseños a elección" />
        </section>
      </Accordion>
    </main>
  );
}
