import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <button className="accordion-button" onClick={() => setOpen(!open)}>
        {title}
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}
