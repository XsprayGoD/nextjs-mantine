import {
  Image,
  Title,
  Text,
  List,
  ThemeIcon,
  Group,
  Button,
  rem,
  Container,
} from "@mantine/core";
import React from "react";
import {
  IconPlaystationSquare,
  IconFileDescription,
} from "@tabler/icons-react";

import classes from "./Hero.module.css";

function Hero() {
  return (
    <Container size="md" className={classes.inner}>
      <div className={classes.inner}></div>
      <div className={classes.hero}>
        <div className={classes.content}>
          <Title className={classes.title}>Gautham Jayesh</Title>
          <Text c="dimmed" mt="md">
            A Frontend focused Web Developing team building the Frontend of
            Websites and Web Applications.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon variant="light" size={20} radius="xl">
                <IconPlaystationSquare
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Fivem Developing</b> – We build fivem scripts and we do bug
              correction for open source codes.
            </List.Item>
            <List.Item>
              <b>Website</b> – we build well optimized and unique ui as per the
              client requirement.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              component="a"
              target="_blank"
              href="https://docs.sydev.in/"
              leftSection={
                <IconFileDescription size={18} color="rgba(0, 225, 255)" />
              }
              size="md"
              className={classes.control}
            >
              Documentation
            </Button>
            {/* <Button
              // variant='default'
              size='md'
              className={classes.control}>
              Github
            </Button> */}
          </Group>
        </div>

        {/* <Image
          //alt='sy'
          radius={"lg"}
          className={classes.image}
          fit='contain'
          src={"/logo.png"}></Image> */}
      </div>
    </Container>
  );
}

export default Hero;
