import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  SimpleGrid,
  rem,
  Title,
  Tooltip,
  Flex,
} from "@mantine/core";
import classes from "./Project.module.css";

function ProjectCard() {
  const data = [
    {
      image: "/image/sy_repairshop.png",
      title: "Helmet Theft Detection system",
      link: "https://github.com/gautham-devo/helmetui",
      type: "APP",
      disabled: false,
      description:
        "This was my mini project which is a helmet theft detection system which comprices of mobile app and a hardware which detects thefts and alert the user",
    },
    {
      image: "/image/sy_pausemenu.png",
      title: "XSP_nextjs-mantaine-website",
      link: "https://github.com/Xgautham-devo/nextjs-mantine",
      type: "website",
      disabled: false,
      description:
        "A personal webpage made with nextjs and mantine ui",
    },
    {
      image: "/image/sy_territories.jpg",
      title: "XSP_Zones",
      link: "https://github.com/gautham-devo/zone-system",
      type: "Fivem",
      disabled: true,
      description:
        "Fivem Zone System for Balttle Grounds",
    },
    {
      image: "/image/sy_carry.png",
      title: "XSP_RecallXRevive",
      link: "https://github.com/gautham-devo/revive-recall",
      type: "Fivem",
      disabled: false,
      description:
        "This script helps to revive a player ingame",
    },
    {
      image: "/image/sy_notify.png",
      title: "XSP_Airdrop",
      link: "https://github.com/gautham-devo/airdrop",
      type: "Fivem",
      disabled: false,
      description:
        "An airdrop system inspired from Player Unknown Battle Grounds.",
    },
    
  ];
  const projects = data.map((stat) => {
    const isDisabled = stat.disabled;
    return (
      <>
        <Card
          withBorder
          radius='lg'
          className={classes.card}>
          <Card.Section>
            <Image
              src={stat.image}
              alt={stat.title}
              //   height={250}
              mx='auto'
              fit='contain'
            />
          </Card.Section>

          <Card.Section
            className={classes.section}
            mt='md'>
            <Group justify='apart'>
              <Text
                fz='lg'
                fw={500}>
                {stat.title}
              </Text>
              <Badge
                variant='light'
                size='sm'>
                {stat.type}
              </Badge>
            </Group>
            <Text
              fz='sm'
              mt='xs'>
              {stat.description}
            </Text>
          </Card.Section>
          <Flex
            mih={50}
            gap='md'
            justify='center'
            align='flex-end'
            direction='row'
            wrap='wrap'>
            {isDisabled ? (
              <Tooltip label='This script is not available'>
                <Button
                  // data-disabled
                  radius='md'
                  style={{ flex: 1 }}
                  onClick={(event) => event.preventDefault()}>
                  Show project in GitHub
                </Button>
              </Tooltip>
            ) : (
              <Button
  component="a"
  target="_blank"
  rel="noreferrer"
  href={stat.link}
  radius="md"
  style={{ flex: 1 }}
  className={classes.neonButton}   // ✅ ADD THIS
>
  Show project in GitHub
</Button>

            )}

            <ActionIcon
              variant='light'
              radius='md'
              size={36}>
              <IconHeart
                size='1.1rem'
                className={classes.like}
                stroke={1.5}
              />
            </ActionIcon>
          </Flex>
        </Card>
      </>
    );
  });

  return (
    <>
      <Title
        order={2}
        className={classes.title}
        ta='center'
        mx='sm'
        my='xl'>
        PROJECTS
      </Title>
      <Text
        c='dimmed'
        className={classes.description}
        ta='center'
        my='md'>
        You can find my projects here
      </Text>
      <SimpleGrid
        mx={20}
        cols={{ base: 1, md: 3 }}>
        {projects}
      </SimpleGrid>
    </>
  );
}

export default ProjectCard;
