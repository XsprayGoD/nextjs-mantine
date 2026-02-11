import {
  Avatar,
  Badge,
  Card,
  Flex,
  Group,
  Title,
  Text,
  rem,
  SimpleGrid,
  useMantineTheme,
  Container,
} from "@mantine/core";
import React from "react";
import classes from "./DevPage.module.css";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "We deliver the best and good projects for users and for user experience.",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description:
      "involves implementing measures, policies, and technologies that prioritize user consent, data security, transparency, and user control over their personal information.",
    icon: IconUser,
  },
  {
    title: "Unique UI",
    description:
      "We design norms to create visually captivating and memorable interfaces that leave a lasting impression on users while maintaining usability and functionality.",
    icon: IconCookie,
  },
];

function DevPage() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="lg"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        stroke={2}
        style={{
          width: rem(50),
          height: rem(50),
          color: "rgba(1, 81, 134, 0.9)",
          filter: "drop-shadow(0 0 6px rgba(87, 0, 95, 0.7))",
        }}
      />

      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container mt={25} className={classes.container} size="lg" py="xl">
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Badge
          variant="outline"
          size="xl"
          radius="md"
          style={{
            color: "#ffffff",
            border: "1.5px solid #57005F",
            background: "rgba(87, 0, 95, 0.15)",
            backdropFilter: "blur(4px)",
            boxShadow: "0 0 10px rgba(87, 0, 95, 0.8)",
          }}
        >
          Developer
        </Badge>

        <Group justify="center" py="xl">
          <div className={classes.avatarGlow}>
            <Avatar size="xl" radius="lg" src="/image/gautham.jpg" />
          </div>

          <Title order={2} className={classes.title} ta="center" mt="sm">
            Gautham
          </Title>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Flex>
    </Container>
  );
}

export default DevPage;
