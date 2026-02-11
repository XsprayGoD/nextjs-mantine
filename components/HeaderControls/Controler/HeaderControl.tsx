import React from "react";
import cx from "clsx";
import {
  Tooltip,
  BoxProps,
  createPolymorphicComponent,
  Button,
  UnstyledButton,
} from "@mantine/core";
import classes from "./HeaderControl.module.css";

export interface HeaderControlProps extends BoxProps {
  tooltip: string;
  icon?: any;
  type: string;
  children?: React.ReactNode;
}

function _HeaderControl({
  tooltip,
  className,
  icon,
  type,
  ...others
}: HeaderControlProps) {
  return (
    <Tooltip
      label={tooltip}
      arrowOffset={5}
      arrowSize={4}
      withArrow
      position='top-start'>
      {type === "styled" ? (
        <Button
  variant="subtle"   // 👈 important: removes heavy default styles
  className={cx(classes.styledcontrol, className)}
  aria-label={tooltip}
  leftSection={icon}
  {...others}
>
  {tooltip}
</Button>

      ) : (
        <UnstyledButton
          className={cx(classes.unstyledcontrol, className)}
          aria-label={tooltip}
          {...others}
        />
      )}
    </Tooltip>
  );
}

export const HeaderControl = createPolymorphicComponent<
  "button",
  HeaderControlProps
>(_HeaderControl);
