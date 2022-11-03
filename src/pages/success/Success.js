import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FooterSection } from "../../components";
import { runFireworks } from "../../lib/utils";
import "./success.scss";

const Success = () => {
  useEffect(() => {
    runFireworks();
  });
  return (
    <div className="success__content">
      <main>
        <h1>Thank You for Messaging</h1>

        <p>We will be in contact with you shortly</p>

        <Link to="/">
          {" "}
          <button>Back to main Page</button>
        </Link>
      </main>
      <FooterSection />
    </div>
  );
};

export default Success;
