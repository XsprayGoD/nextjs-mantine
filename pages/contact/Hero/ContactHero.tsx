import { Title, Text, Button, Container } from "@mantine/core";
import Dots from "./Dots";
import classes from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <Container
      className={classes.wrapper}
      size={1400}>
      {/* <Dots
        className={classes.dots}
        style={{ left: 0, top: 20 }}
      />
      <Dots
        className={classes.dots}
        style={{ left: 60, top: 0 }}
      />
      <Dots
        className={classes.dots}
        style={{ left: 0, top: 140 }}
      />
      <Dots
        className={classes.dots}
        style={{ right: 0, top: 10 }}
      /> */}

      <div className={classes.inner}>
        <Title className={classes.title}>
          Contact{" "}
          <Text
            component='span'
            className={classes.highlight}
            inherit>
            Gautham
          </Text>{" "}
          for any Query
        </Title>

        <Container
          p={0}
          size={600}>
          <Text
            size='lg'
            c='dimmed'
            className={classes.description}>
            Have a question, need support, or just want to say hi? Reach out to
            us!
          </Text>
        </Container>
      </div>
    </Container>
  );
}
