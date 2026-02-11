// "use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  Group,
  Image,
  Drawer,
  ActionIcon,
  Flex,
  Portal,
  rem,
  Center,
  Container,
} from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import classes from "./Header.module.css";
import { IconMenu, IconX } from "@tabler/icons-react";
import { DiscordControl, GithubControl } from "../HeaderControls/Controler";

const img = {
  logo: "/image/sy_scripts.png",
};
const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/project", label: "Projects" },
  { link: "/contact", label: "Contact-Us" },
];
const github = { Link: "https://github.com/XsprayGoD", Tooltip: "Github" };

export default function Header() {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  function HandleActiveLink(data: string) {
    setActive(data);
    {
      opened && toggle();
    }
  }

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        HandleActiveLink(link.link);
      }}>
      {link.label}
    </Link>
  ));

  return (
    <Portal>
      <div
        className={classes.inner}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "var(--mantine-spacing-xs)",
          height: rem(60),
          zIndex: 99,
          // transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
          // transition: "transform 400ms ease",
        }}>
        {/* <Image
          radius='md'
          h={100}
          w={100}
          fit='contain'
          src={img.logo}
          alt='SY_Dev Logo'></Image> */}
        <Group
          gap={5}
          visibleFrom='xs'>
          {items}
        </Group>
        <Group
          visibleFrom='md'
          gap='sm'>
          <DiscordControl type='styled' />
          <GithubControl
            type='styled'
            link={github.Link}
            tooltip={github.Tooltip}
          />{" "}
        </Group>
        <Drawer
          position='top'
          transitionProps={{
            transition: "scale",
            duration: 400,
            timingFunction: "ease",
          }}
          styles={{
            inner: {
              top: "62px",
              height: "60px",
            },
            content: {
              boxShadow: "0px 0px 3px #6a6a6adb",
              border: "2px solid #28272754",
              overflowY: "hidden",
              overflowX: "hidden",
              paddingTop: "16px",
              WebkitBackdropFilter: "blur(16px)",
              backdropFilter: "blur(16px)",
              background: "rgba(3, 0, 20, 0.08)",
              borderRadius: "20px",
            },
            header: {
              display: "none",
              backgroundColor: "black",
            },
          }}
          overlayProps={{ backgroundOpacity: 0 }}
          opened={opened}
          onClose={toggle}
          title='gautham-dev'>
          <Center>{items}</Center>
        </Drawer>

        <Flex
          hiddenFrom='md'
          gap='xs'
          justify='center'
          align='center'
          direction='row'
          wrap='wrap'>
          <DiscordControl type='unstyled' />
          <GithubControl
            type='unstyled'
            link={github.Link}
            tooltip={github.Tooltip}
          />
          <ActionIcon
            onClick={toggle}
            hiddenFrom='xs'
            size='lg'
            variant='light'
            className={classes.menu}
            radius='md'
            aria-label='Settings'>
            {opened ? (
              <IconX
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            ) : (
              <IconMenu
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            )}
          </ActionIcon>
        </Flex>
      </div>
    </Portal>
  );
}
