import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { runFireworks } from "../../lib/utils";
import "./success.scss";

const Success = ({ username, name }) => {
  useEffect(() => {
    runFireworks();
  });

  // const { name, username } = useData();

  console.log(username);
  return (
    <div className="success__content">
      <main>
        <h1>Dear {username}, thank you for messaging</h1>

        <p>{name} will be in contact with you shortly</p>

        <Link to="/">
          {" "}
          <button>Back to main Page</button>
        </Link>
      </main>
    </div>
  );
};

export default Success;
