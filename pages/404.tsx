import Link from "next/link";

// export default function () {
//   return (
//     <div>
//       <h2>Not Found</h2>
//       <p>Could not find requested resource</p>
//       <Link href='/'>Return Home</Link>
//     </div>
//   );
// }

import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
// import image from "./image.svg";
import classes from "./NotFoundImage.module.css";

export default function Custom404() {
  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={{ base: 40, sm: 80 }}
        cols={{ base: 1, sm: 2 }}>
        {/* <Image
          alt='syno'
          src={image.src}
          className={classes.mobileImage}
        /> */}
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text
            c='dimmed'
            size='lg'>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Link href='/'>
            <Button
              component='a'
              variant='outline'
              size='md'
              mt='xl'
              className={classes.control}>
              Get back to home page
            </Button>
          </Link>
        </div>
        {/* <Image
          alt='syno'
          src={image.src}
          className={classes.desktopImage}
        /> */}
      </SimpleGrid>
    </Container>
  );
}
