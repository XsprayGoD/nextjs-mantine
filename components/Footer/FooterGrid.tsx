import {
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Image,
  Title,
  Flex,
  Divider,
  Text,
  TextInput,
  Button,
} from "@mantine/core";

import classes from "./Footer.module.css";
import Link from "next/link";
import { GithubIcon } from "@HeaderControls/icons/GithubIcon";
import { DiscordIcon } from "@HeaderControls/icons";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/project", label: "Projects" },
  { link: "/contact", label: "Contact" },
];

const projectlink = [
  { link: "https://github.com/SYNO-SY", label: "SY_Territories" },
  { link: "https://github.com/SYNO-SY", label: "SY_Bog" },
  { link: "https://github.com/SYNO-SY", label: "SY_Carry" },
  { link: "https://github.com/SYNO-SY", label: "SY_PauseMenu" },
];

const githubprofile = [
  { link: "https://github.com/SYNO-SY", label: "SYNO" },
  { link: "https://github.com/N1cK-OP", label: "NICK" },
  { link: "https://github.com/A4hilAKI", label: "AK" },
  { link: "https://github.com/XsprayGoD", label: "XsparyGoD" },
];

const iconurl = {
  github: "https://github.com/SYNO-SY",
  discord: "https://discord.gg/aDM5Bsh2wp",
};

export default function FooterGrid() {
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}>
      {link.label}
    </Link>
  ));
  const projects = projectlink.map((link) => (
    <a
      target='_blank'
      key={link.label}
      href={link.link}
      className={classes.link}>
      {link.label}
    </a>
  ));

  const profile = githubprofile.map((link) => (
    <a
      target='_blank'
      key={link.label}
      href={link.link}
      className={classes.link}>
      {link.label}
    </a>
  ));
  return (
    <Container className={classes.footer}>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing='md'>
        <Paper
          radius={10}
          className={classes.paper}>
          <Group justify='center'>
            <Image
              className={classes.footerimg}
              src={"/logo.png"}
              alt='SY_Dev'></Image>
          </Group>
          <Divider
            mx={10}
            size='xs'
            variant='dotted'
            // orientation='vertical'
          />
          <Group
            wrap='nowrap'
            mt={5}
            justify='space-between'>
            <Flex
              mx={10}
              gap='xs'
              justify='flex-start'
              align='flex-start'
              direction='column'>
              <Title order={5}>Links</Title>
              {items}
            </Flex>
            <Divider
              size='xs'
              orientation='vertical'
              variant='dotted'
            />
            <Flex
              mx={10}
              gap='xs'
              justify='flex-start'
              align='flex-start'
              direction='column'>
              <Title order={5}>Projects</Title>
              {projects}
            </Flex>
            <Divider
              size='xs'
              orientation='vertical'
              variant='dotted'
            />
            <Flex
              mx={10}
              gap='xs'
              justify='flex-start'
              align='flex-start'
              direction='column'>
              <Title order={5}>Github</Title>
              {profile}
            </Flex>
          </Group>
        </Paper>

        <Grid gutter='md'>
          <Grid.Col>
            <Paper
              p={10}
              radius={10}
              className={classes.papera}>
              <Text
                c='dimmed'
                size='xs'>
                The party is only getting started.
              </Text>
              <Text
                size='lg'
                fw={700}
                mt={5}>
                We have got lots more on the horizon.
              </Text>
              <Text
                c='dimmed'
                size='xs'
                mt={5}>
                Follow our journey in enabling sovereign individuals truly own
                their data.Better yet, be a part of it.
              </Text>
              <Title
                order={5}
                mt={10}>
                Stay tuned for updates and new features!
              </Title>
              <Flex
                p={5}
                gap='md'
                justify='start'
                align='center'
                direction='row'
                wrap='wrap'>
                <TextInput
                  // variant='unstyled'
                  classNames={{
                    wrapper: classes.wrapper,
                    input: classes.input,
                  }}
                  size='md'
                  radius='lg'
                />
                <Button
                  style={{ border: "2px solid" }}
                  variant='light'
                  size='md'
                  radius='lg'>
                  Subscribe
                </Button>
              </Flex>
            </Paper>
          </Grid.Col>

          <Grid.Col
            m={10}
            style={{ borderBottom: "2px solid " }}>
            <Flex
              style={{ position: "relative" }}
              mx={5}
              ml={15}
              gap='xs'
              justify='center'
              align='center'
              direction='row'
              wrap='wrap'>
              {/* Github */}
              <Paper
                component='a'
                target='_'
                href={iconurl.github}
                radius={30}
                h={"80px"}
                w={"80px"}
                className={classes.iconpaper}>
                <Flex
                  h={"80px"}
                  w={"80px"}
                  justify={"center"}
                  align={"center"}
                  direction='row'
                  wrap='wrap'>
                  <div className={classes.iconimg}>
                    <GithubIcon
                      size={44}
                      style={{ color: "white" }}
                    />
                  </div>
                  <div
                    className={classes.iconstroke}
                    style={{ opacity: 1 }}></div>
                  <div
                    className={classes.iconglow}
                    style={{ opacity: 0.6 }}></div>
                </Flex>
              </Paper>
              {/* Discord */}
              <Paper
                radius={30}
                h={"80px"}
                w={"80px"}
                className={classes.iconpaper}
                component='a'
                target='_'
                href={iconurl.discord}>
                <Flex
                  h={"80px"}
                  w={"80px"}
                  justify={"center"}
                  align={"center"}
                  direction='row'
                  wrap='wrap'>
                  <div className={classes.iconimg}>
                    <DiscordIcon
                      size={44}
                      style={{ color: "white" }}
                    />
                  </div>
                  <div
                    className={classes.iconstroke}
                    style={{ opacity: 1 }}></div>
                  <div
                    className={classes.iconglow}
                    style={{ opacity: 0.6 }}></div>
                </Flex>
              </Paper>
            </Flex>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      <Group
        pt={10}
        justify='center'
        className={classes.links}>
        © {new Date().getFullYear()} SY_Dev. All rights reserved.
      </Group>
    </Container>
  );
}
