import React, { useEffect } from "react";
import { runFireworks } from "../../lib/utils";

const Success = () => {
  useEffect(() => {
    runFireworks();
  });
  return (
    <div className="content">
      <main>
        <h1>Thank You for Visiting</h1>
      </main>
    </div>
  );
};

export default Success;
