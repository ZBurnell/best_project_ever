import { createChatBotMessage } from "react-chatbot-kit";
  
const config = {
  // message for when first opening chat bot.
  initialMessages: [createChatBotMessage(`Hey there!`)],
  customStyles: {
      botMessageBox: {
        backgroundColor: '#376B7E',
      },
      chatButton: {
        backgroundColor: '#5ccc9d',
      },
    },
}

export default config