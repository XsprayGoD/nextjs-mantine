import React from "react";
import Hero from "@HomePage/Hero";
import HomePageContent from "@HomePage/HomePageContent";

export default function Home() {
  return (
    <div style={{ marginTop: "60px" }}>
      <Hero></Hero>
      <HomePageContent></HomePageContent>
    </div>
  );
}
