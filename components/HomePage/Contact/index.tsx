import { Title, Text, Button, Image, Container } from "@mantine/core";
import React from "react";
import classes from "./ContactPage.module.css";

function ContactContent() {
  return (
    <Container>
      <div
        className={classes.wrapper}
        style={{
          backgroundImage: 'url("/gradient/pluses.png")',
          backgroundPosition: "right",

          backgroundRepeat: " no-repeat",
        }}
      >
        <div className={classes.body}>
          <Title className={classes.title}>CONNECT US</Title>
          <Text fw={500} fz="lg" mb={5}>
            Join the Discord server
          </Text>
          <Text fz="sm" c="dimmed">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </Text>
          <Button
            component="a"
            href="https://discord.gg/wDqBYaN54n"
            size="xl"
            mt={30}
            radius={30}
            className={classes.neonButton}
          >
            JOIN DISCORD
          </Button>
        </div>
        <Image
          src="./image/banner.svg"
          className={classes.image}
          alt="discordbanner"
        />
      </div>
    </Container>
  );
}

export default ContactContent;
