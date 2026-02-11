import React from "react";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Select,
  OptionsFilter,
  ComboboxItem,
  Paper,
  Text,
} from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import DiscordService from "@services/webhook";
import classes from "./Contactus.module.css";
import { ContactIconsList } from "@ContactPage/ContactIcons";

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(" ");
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(" ");
    return splittedSearch.every((searchWord) =>
      words.some((word) => word.includes(searchWord)),
    );
  });
};

export default function ContactForm() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) =>
        value.trim().length === 0 ? "Must Pick One Subject" : null,
    },
  });

  const { Send } = DiscordService();
  const handleSubmit = (data: any) => {
    const sentdata = Send(data);

    sentdata.then(() => {
      form.reset();
    });
  };

  return (
    <Paper
      className={classes.paper}
      shadow='md'>
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text
            fz='lg'
            fw={700}
            className={classes.title}
            c='#fff'>
            Contact information
          </Text>

          <ContactIconsList />
        </div>
        <form
          className={classes.form}
          onSubmit={form.onSubmit((value) => {
            handleSubmit(value);
          })}>
          <Title
            order={2}
            size='h4'
            style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
            fw={900}
            ta='center'>
            Contact Form
          </Title>

          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            mt='xl'>
            <TextInput
              withAsterisk
              radius={"md"}
              styles={{
                input: {
                  color: "black",
                  fontFamily: "'Inter', sans-serif",
                  border: "1px solid gray",
                  backgroundColor: "white",
                  borderRadius: "15px",
                },
              }}
              label='Name'
              placeholder='Your name'
              name='name'
              variant='filled'
              {...form.getInputProps("name")}
            />
            <TextInput
              withAsterisk
              radius={"md"}
              styles={{
                input: {
                  color: "black",
                  fontFamily: "'Inter', sans-serif",
                  border: "1px solid gray",
                  backgroundColor: "white",
                  borderRadius: "15px",
                },
              }}
              label='Email'
              placeholder='Your email'
              name='email'
              variant='filled'
              {...form.getInputProps("email")}
            />
          </SimpleGrid>
          <Select
            radius={"md"}
            classNames={{ dropdown: classes.dropdown, option: classes.options }}
            styles={{
              input: {
                color: "black",
                fontFamily: "'Inter', sans-serif",
                border: "1px solid gray",
                backgroundColor: "white",
                borderRadius: "15px",
              },
            }}
            label='Subject'
            placeholder='Pick Subject'
            // defaultValue='other'
            filter={optionsFilter}
            // searchable
            data={[
              "Other",
              "DiscordBot",
              "Need help with Fivem ",
              "Custom Script",
            ]}
            {...form.getInputProps("subject")}
          />

          {/* <TextInput
        withAsterisk
        radius={"md"}
        styles={{
          input: {
            border: "2px solid gray",
            backgroundColor: "#15182c8c",
          },
        }}
        label='Subject'
        placeholder='Subject'
        mt='md'
        name='subject'
        variant='filled'
        {...form.getInputProps("subject")}
      /> */}
          <Textarea
            withAsterisk
            styles={{
              input: {
                color: "black",
                fontFamily: "'Inter', sans-serif",
                border: "1px solid gray",
                backgroundColor: "white",
                borderRadius: "15px",
              },
            }}
            radius={"lg"}
            mt='md'
            label='Message'
            placeholder='Your message'
            maxRows={10}
            minRows={5}
            autosize
            name='message'
            variant='filled'
            {...form.getInputProps("message")}
          />

          <Group
            justify='center'
            mt='xl'>
            <Button
              radius={"lg"}
              variant='light'
              color='teal'
              style={{
                border: "2px solid",
              }}
              leftSection={<IconBrandTelegram></IconBrandTelegram>}
              type='submit'
              size='md'>
              Send message
            </Button>
          </Group>
        </form>
      </div>
    </Paper>
  );
}
