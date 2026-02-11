import {
  Avatar,
  Center,
  Divider,
  Flex,
  Group,
  Paper,
  RingProgress,
  Title,
  Text,
  SimpleGrid,
  rem,
  Container,
} from "@mantine/core";
import React from "react";
import classes from "./Tools.module.css";

const data = [
  {
    label: "Javascript",
    stats:
      "2 Years + experience in javascript, have multiple projects for fivem mod sripts",
    progress: 60,
    icon: "./image/javascript.svg",
  },
  {
    label: "Reactjs",
    stats: "half Year experience in reactjs, with limited knowledge.",
    progress: 42,
    icon: "./image/reactjs.svg",
  },
  {
    label: "HTML",
    stats:
      "3 Years + experience in HTML, have multiple projects for fivem mod sripts",
    progress: 80,
    icon: "./image/html.svg",
  },
  {
    label: "CSS",
    stats:
      "3 Years + experience in CSS, have multiple projects for fivem mod sripts",
    progress: 80,
    icon: "./image/css.svg",
  },
  {
    label: "Lua",
    stats:
      "2 Years + experience in javascript, have multiple projects for fivem mod sripts",
    progress: 75,
    icon: "./image/lua.svg",
  },
  {
    label: "Ts",
    stats: "less than an Years experience in Ts, learning in progress.",
    progress: 75,
    icon: "./image/ts.svg",
  },
];

function Tools() {
  const stats = data.map((stat) => {
    const Icon = stat.icon;
    return (
      <Paper
        withBorder
        className={classes.paper}
        mx="sm"
        radius="lg"
        p="xs"
        key={stat.label}
      >
        <Group>
          <Flex gap={2}>
            <RingProgress
              size={70}
              roundCaps
              thickness={8}
              sections={[
                {
                  value: stat.progress,
                  color: "rgba(1, 81, 134, 0.9)",
                },
              ]}
              label={
                <Center>
                  <Avatar
                    src={Icon}
                    size={"sm"}
                    radius={"sm"}
                    alt={stat.label}
                  />
                </Center>
              }
            />

            <div>
              <Text
                className={classes.title}
                c="dimmed"
                size="xl"
                tt="uppercase"
                fw={700}
              >
                {stat.label}
              </Text>
              <Text fw={700} size="sm">
                {stat.stats}
              </Text>
            </div>
          </Flex>
        </Group>
      </Paper>
    );
  });

  return (
    <Container size='responsive'>
      <Divider></Divider>
      <Text
        fz={rem(25)}
        fw='600'
        mt={25}
        ta={"center"}>
        PROGRAMMING <br></br>LANGUAGES <span style={{ color: "rgba(1, 81, 134, 0.9)" }}
>&</span>{" "}
        FRAMEWORKS SPECIALISED IN
      </Text>
      <SimpleGrid
        mt={25}
        cols={{ base: 1, md: 3 }}>
        {stats}
      </SimpleGrid>
    </Container>
  );
}

export default Tools;
