import ContactContent from "@HomePage/Contact";
import DevPage from "@HomePage/DevPage";
import Tools from "@HomePage/Tools";
import React from "react";

function HomePageContent() {
  return (
    <div>
      <DevPage></DevPage>
      <Tools></Tools>
      <div style={{ marginTop: "25px" }}>
        <ContactContent></ContactContent>
      </div>
    </div>
  );
}

export default HomePageContent;
