import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <h1>404 - Not Found</h1>
      <p class="mt-5">Sorry, the page you are looking for does not exist.</p>
      <p>
        The site configured at this address does not contain the requested file.
      </p>
    </div>
  );
};

export default NotFound;
