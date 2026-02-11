import React from "react";
import { HeaderControl } from "./HeaderControl";
import { GithubIcon } from "../icons/GithubIcon";

interface GithubControlProps {
  link: string;
  tooltip: string;
  type: string;
}

export function GithubControl({ link, tooltip, type }: GithubControlProps) {
  return (
    <>
      {type === "styled" ? (
        <HeaderControl
          tooltip={tooltip}
          component='a'
          target='_blank'
          href={link}
          type={type}
          icon={<GithubIcon size={22} color="rgba(1, 81, 134, 0.95)" />}></HeaderControl>
      ) : (
        <HeaderControl
          tooltip={tooltip}
          component='a'
          target='_blank'
          href={link}
          type={type}>
          <GithubIcon size={22} color="rgba(0, 225, 255)" />
        </HeaderControl>
      )}
    </>
  );
}
