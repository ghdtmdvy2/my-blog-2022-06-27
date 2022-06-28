import React from "react";
import { Link } from "gatsby";
function Head() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Link to="/">홈</Link>
      <Link to="/about">어바웃</Link>
    </div>
  );
}

export default Head;
