import React, { useState } from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

function Accordion({ title, index, question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="grammar-item-title">
        <span>{index < 10 ? `0${index}` : index}</span>
        <p>{title}</p>
        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          {show ? (
            <FaPlus style={{ transform: "rotate(45deg)" }} />
          ) : (
            <FaPlus />
          )}
        </button>
      </div>
      {show && (
        <div className="grammar-item-links">
          {answer.map((line, ind) => {
            return (
              <div key={ind}>
                <p>{line}</p>
                <a href={`/grammar/${ind + 1}`}>
                  <LuArrowUpRight />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Accordion;
