import React from "react";
import ContactForm from "./contactform";
import { Container } from "@mantine/core";
import ContactHero from "./Hero/ContactHero";

function Contact() {
  return (
    <div style={{ marginTop: "60px" }}>
      {/* <h1 className='text-center'>Contact</h1> */}
      {/* <ContactHero></ContactHero> */}
      <ContactHero></ContactHero>
      <Container>
        <ContactForm></ContactForm>
      </Container>
    </div>
  );
}

export default Contact;
