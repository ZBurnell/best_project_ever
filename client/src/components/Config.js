import { createChatBotMessage } from "react-chatbot-kit";


const botName = "grizzled zombie survivor"
const config = {
  // message for when first opening chat bot.
 
  botName: botName,
  initialMessages: [createChatBotMessage(`Hey stranger, how can I help you?`)],
  customStyles: {
      botMessageBox: {
        backgroundColor: '#1a401d',
      },
      chatButton: {
        backgroundColor: '#a30202',
      },
      
      
    },
}

export default config