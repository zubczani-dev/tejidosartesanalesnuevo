import React, { useState } from "react";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <section className="accordion">
      <button className="accordion-button" onClick={toggleAccordion}>
        {title} {isOpen ? "▲" : "▼"}
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {isOpen && children}
      </div>
    </section>
  );
}