import { IconArrowUp, IconArrowBarToUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import {
  ActionIcon,
  Affix,
  Button,
  Transition,
  rem,
  Flex,
  Text,
} from "@mantine/core";
import classes from "./index.module.css";

export function ToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition
          transition='slide-up'
          mounted={scroll.y > 0}>
          {(transitionStyles) => (
            // <Button
            //   classNames={{ root: classes.root, section: classes.section }}
            //   leftSection={
            //     <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
            //   }
            //   variant='light'
            //   color='teal'
            //   radius='md'
            //   style={transitionStyles}
            //   onClick={() => scrollTo({ y: 0 })}>
            //   {" "}
            // </Button>
            <ActionIcon
              classNames={{ root: classes.root }}
              variant='light'
              color='teal'
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              size='xl'
              radius='lg'
              aria-label='Settings'>
              <IconArrowBarToUp style={{ width: rem(20), height: rem(20) }} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
}
