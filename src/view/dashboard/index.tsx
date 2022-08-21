import React from "react";
import { Button } from "@blueprintjs/core";

const Dashboard = () => {
  const buttonPressed = () => {};
  return (
    <>
      <div>Hello World - Dashboard!</div>
      <div>
        <Button name="button" text={"button"} onClick={buttonPressed} />
      </div>
    </>
  );
};

export default Dashboard;
