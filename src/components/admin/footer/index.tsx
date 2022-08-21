import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bp3-drawer-footer pt2 pl2 mt4 footer">
        <h5>{process.env.TITLE}</h5>
      </footer>
    </>
  );
};

export default Footer;
