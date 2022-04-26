//libraries
import React from "react";
import { NavLink } from "react-router-dom";

// styles
import playgroundStyles from "./playground.module.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "redux/slices/counterSlice";

// utils

const pages = ["home", "transactions", "drivers", "buses", "sidebar"];

const Playground = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className={playgroundStyles.playground}>
      <p>Gentleman, make sure you dont mess up the repo 😂😂</p>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <br />
      <div>
        {pages.map((page) => (
          <small key={page}>
            <NavLink to={`/${page}`}>{page}</NavLink>
          </small>
        ))}
      </div>
    </div>
  );
};

export default Playground;
