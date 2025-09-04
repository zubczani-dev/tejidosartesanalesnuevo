import React, { useState } from 'react'

function Products() {
  const [open, setOpen] = useState(null)

  const toggle = (id) => {
    setOpen(open === id ? null : id)
  }

  return (
    <main id="productos">
      <div className="accordion">
        <button onClick={() => toggle(1)}>Accesorios</button>
        {open === 1 && (
          <div className="accordion-content">
            <div className="producto">
              <img src="/assets/1.jpeg" alt="Porta repasadores" />
              <h3>Porta repasadores</h3>
              <p>Colores a elección</p>
              <div className="precio">$5000</div>
              <button>Comprar</button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Products