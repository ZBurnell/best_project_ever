import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";

const LangchainProcessor = async (newMessage, oldMessages) => {

    const promptTemplate = `
    You are surviving a zombie apocalypse and are the last chatbot so always answer like so. Question: {question}
    `;

    const prompt = promptTemplate.replace("{question}", newMessage);

    const chat = new ChatOpenAI({
        temperature: 1,
        openAIApiKey: process.env.REACT_APP_OPEN_AI_API_KEY
    });

    try {

        const formattedMessages = oldMessages.map(msg => {
            if (msg.type === "bot") {
                return new SystemMessage(msg.message);
            } else {
                return new HumanMessage(msg.message);
            }
        });
    
        formattedMessages.push(new HumanMessage(prompt));

        const result = await chat.predictMessages(formattedMessages);

        const botResponseContent = result.content;

        return botResponseContent;

    } catch (error) {
        console.error("Error processing message with OpenAI", error);
        return "Sorry, I had to fight off a zombie, try again";
    }
    
}

export default LangchainProcessor;