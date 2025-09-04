
import React from "react";

export default function Producto({ img, nombre, descripcion, precio }) {
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
      <button className="btn-comprar" onClick={handleCompra}>
        Comprar
      </button>
    </div>
  );
}