import {
  Image,
  Container,
  Text,
  Title,
  Flex,
  Badge,
  Group,
  Divider,
  List,
  ThemeIcon,
  rem,
  Paper,
  SimpleGrid,
  Center,
} from "@mantine/core";
import React from "react";
import classes from "./Team.module.css";
import { IconCheck } from "@tabler/icons-react";

const details = [
  {
    name: "Gautham",
    badge: "Founder",
    img: "/image/gautham.jpg",
    desc: "Greetings! I am Gautham, a passionate Frontend Developer specializing in the creation of captivating websites and dynamic web applications. My expertise extends to the realm of Fivem Development, where I craft immersive experiences that elevate virtual environments. Additionally, my skills are not confined to the web; I take pride in designing and developing custom Discord Bots, adding a touch of uniqueness to online communities. With a commitment to innovation and user-centric design, I strive to bring ideas to life through the seamless integration of technology and creativity.",
    skill: ["javascript", "Lua", "React", "Nextjs", "Typescript"],
  },
  // {
  //   name: "Nick",
  //   badge: "Developer",
  //   img: "https://avatars.githubusercontent.com/u/123115522?s=64&v=4",
  //   desc: "Greetings! I am Nick, a dedicated software engineering student on a journey to explore the vast realms of technology. As a burgeoning Software Engineer, my focus lies in the intricate world of Discord Bot development, where I bring virtual entities to life with functionality and flair. It's worth mentioning that I take pride in my achievements, as I hold the distinction of developing a verified Discord Bot—a testament to the quality and reliability of my creations.",
  //   skill: ["javascript", "Lua", "React", "Nodejs", "Networking"],
  // },
  // {
  //   name: "AK",
  //   badge: "UI/UX Designer",
  //   img: "https://avatars.githubusercontent.com/u/107304523?s=70&v=4",
  //   desc: "Greetings! I am AK, a skilled and imaginative UI/UX designer immersed in the dynamic and ever-evolving world of user interface and experience. As a creative enthusiast with a keen eye for aesthetics and functionality, I embark on a journey to shape digital interactions and elevate user engagement to new heights.",
  //   skill: ["javascript", "Lua", "React", "UI/UX", "Figma"],
  // },
  // {
  //   name: "Ayyu",
  //   badge: "Manager",
  //   img: "https://1drv.ms/i/c/119f5d0c39eaeade/ETtzPXpdSyVPlxKADWoI7Q0BqQ0jNPY3gAyPHogoFUc9KQ",
  //   desc: "Greetings! I am Ayyu, Accomplishes department objectives by managing staff, planning and evaluating SY_Dev discord server and project activities.",
  //   skill: ["javascript", "React", "Figma"],
  // },
];

export default function Team() {
  const teams = details.map((item) => {
    const bdg_color = item.badge == "Founder" ? "red" : "green";
    return (
      <>
        <Flex
          mt={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Group justify="center">
            <Image
              h={150}
              w="auto"
              fit="contain"
              radius="lg"
              src={item.img}
              alt={item.name}
            />
            <Flex
              gap="md"
              justify="center"
              align="center"
              direction="column"
              wrap="wrap"
            >
              <Badge variant="light" color={bdg_color} size="xl" radius="md">
                {item.badge}
              </Badge>
              <Text size="50px" fw={500}>
                {item.name}
              </Text>
            </Flex>
          </Group>
          <Text size="xl" className={classes.desc}>
            {item.desc}
          </Text>
          <Title>Skills</Title>
          <SimpleGrid
            cols={{ base: 2, md: 3 }}
            spacing="sm"
            verticalSpacing="sm"
          >
            {item.skill.map((data) => (
              <Paper
                key={data}
                mx="sm"
                p="xs"
                radius="lg"
                className={classes.skillChip} // ✅ use new class
              >
                <Text ta="center">{data}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Flex>
        <Divider my="md" />
      </>
    );
  });

  return <Container mt={25}>{teams}</Container>;
}


