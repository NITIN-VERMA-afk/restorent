import React from "react";
import Link from "next/link";

const RestaurentHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          style={{ width: "100" }}
          src="https://i.pinimg.com/236x/e9/e2/3a/e9e23af3ca82840ce257169d47479316.jpg"
        />
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Login/signup</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurentHeader;
