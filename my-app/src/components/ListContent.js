import React from "react";
import "./ListContent.css";

const ListContent = () => {
  return (
    <main className="list-content">
      <h2>Lists</h2>
      <div className="list-group">
        <div className="list-header">
          <p className="list-number">#</p>
          <p className="list-title">Title</p>
          <p className="list-writer">Writer</p>
          <p className="list-time">At</p>
        </div>

        {/* map */}
        <div>content repeat</div>
      </div>
    </main>
  );
};

export default ListContent;
