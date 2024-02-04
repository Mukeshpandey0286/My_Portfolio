import React from "react";
import "../styles/social.css";
const Social = ({ click }) => {
  const styles = {
    i: {
      color: click && "white",
    },
    line: {
      backgroundColor: click && "white !important",
    },
  };

  return (
    <>
      <div className="social-icons" style={styles.i}>
        <i className="fab fa-github"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin"></i>
        <div className="line" style={styles.line}>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Social;
