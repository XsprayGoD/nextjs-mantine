import cx from "clsx";
import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  UnstyledButton,
  Divider,
} from "@mantine/core";
import classes from "./AboutHero.module.css";
import { useScrollIntoView } from "@mantine/hooks";
import Team from "./Team";

export default function AboutHero() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  return (
    <>
      <div className={classes.wrapper}>
        <Overlay
          color='#000'
          opacity={0.65}
          zIndex={1}
        />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Welcomeing you to{" "}
            <span
              style={{
                color: "red",
              }}>
              Gautham's
            </span>{" "}
            Personal Website
          </Title>

          <Container size={640}>
            <Text
              size='lg'
              className={classes.description}>
              Myself passionate and professional web developer.
              specialize in frontend development. We create stunning websites
              and web applications that are fast, responsive, and user-friendly.
              Whether you need a landing page, a portfolio, a blog, or a
              full-fledged web app, we can help you achieve your goals.
            </Text>
          </Container>

          <div className={classes.controls}>
            <a
              className={classes.cta}
              onClick={() => scrollIntoView()}>
              <span> Get started</span>
              <svg
                width='13px'
                height='10px'
                viewBox='0 0 13 10'>
                <path d='M1,5 L11,5'></path>
                <polyline points='8 1 12 5 8 9'></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div ref={targetRef}>
        <Team></Team>
      </div>
    </>
  );
}
