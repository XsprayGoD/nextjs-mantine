import React from "react";

function page() {
  return (
    <>
      <h2>Confirm your signup</h2>
      <p>Follow this link to confirm your user:</p>
      <p>
        <a href='{{ .ConfirmationURL }}'>Confirm your mail Bicthes</a>
      </p>
    </>
  );
}

export default page;
