import axios from "axios";
import { notifications } from "@mantine/notifications";
import classes from "./notify.module.css";

const Webhook_data = {
  url: "https://discord.com/api/webhooks/1182012889289211954/FYpIbgO5M084Hrdh7wFcOk4BK9dRBOqMwcgfCppb4jEpUFtfnyAcXt4gxF0fdf_Z9V5J",
};

function DiscordService() {
  const Send = async (data: any) => {
    const time = new Date();

    const messageData = {
      content: `<@&954252567184035871> <@&954251518926786591> You Received a Message from Website`,
      embeds: [
        {
          title: "WEBSITE QUERY",
          color: 0x057e5a,
          description:
            "You Received a Message from Website",
          fields: [
            {
              name: "Name",
              value: data.name,
              inline: true,
            },

            {
              name: "Subject",
              value: data.subject,
              inline: true,
            },
            {
              name: "E-mail",
              value: data.email,
            },
            {
              name: "Message",
              value: data.message,
            },
          ],
          footer: {
            text: `Devloped by SYNO with ❤️`,
          },
          timestamp: time.toISOString(),
        },
      ],
    };

    try {
      const data = await axios.post(Webhook_data.url, messageData);

      if (data.status === 204) {
        notifications.show({
          title: "Message",
          color: "rgba(0, 255, 111, 1)",
          withCloseButton: false,
          radius: "lg",
          className: classes.notification,
          message:
            "Your message has been sent successfully. Please wait for a response",
        });
        
  
      }
    } catch (error) {
      notifications.show({
        title: "Message",
        color: "rgba(255, 0, 0, 1)",
        withCloseButton: false,
        radius: "lg", 
        className: classes.notification,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return {
    Send
  };
}

export default DiscordService;
