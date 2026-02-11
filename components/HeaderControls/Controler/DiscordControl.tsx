import React from "react";
import { HeaderControl } from "./HeaderControl";
import { DiscordIcon } from "../icons";
import { IconBrandLinkedin as LinkedinIcon } from '@tabler/icons-react';

// Discord Link
const discordLink = "https://discord.gg/aDM5Bsh2wp";

interface DiscordControlProps {
  type: string;
}

export function DiscordControl({ type }: DiscordControlProps) {
  return (
    <>
    {type === "styled" ? (
      <HeaderControl
        tooltip="LinkedIn"
        component='a'
        target='_blank'
        href={discordLink}
        type={type}
        icon={<LinkedinIcon size={20} color="rgba(1, 81, 134, 0.95)" />}></HeaderControl>
      ) : (
        <HeaderControl
          tooltip={"LinkedIn"}
          component='a'
          target='_blank'
          href={discordLink}
          type={type}>
          <LinkedinIcon size={20} color="rgba(0, 225, 255)" />
        </HeaderControl>
      )}
    </>
  );
}
