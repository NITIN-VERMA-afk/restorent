"use client";
import React, { useState } from "react";
import "./style.css";
import RestaurantLogin from "../_components/restaurentLogin";
import RestaurantSignup from "../_components/restaurentSignup";
import RestaurentHeader from "../_components/RestaurentHeader";
import RestaurentFooter from "../_components/RestaurentFooter";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurentHeader />
        <h1>Restaurant login and signup/ page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignup />}

        <div>
          <button
            className="button-Link"
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login
              ? "do not have acoount signup"
              : "already have account?Loginin"}
          </button>
        </div>
      </div>
      <RestaurentFooter />
    </>
  );
};

export default Restaurant;
