import React from "react";
import "./logo.css";
const Logo = ({ click }) => {
  const styles = {
    color: {
      color: click && "white",
    },
  };
  return (
    <>
      <div className="logo" style={styles.color}>
        MP
      </div>
    </>
  );
};

export default Logo;
