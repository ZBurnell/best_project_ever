import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import ActionProvider from "./components/ActionProvider";
import MessageParser from "./components/MessageParser";
import config from "./components/Config";
import Username from "./components/Username.js"


function App() {
  return (
    <div className="App flex justify-center items-center h-screen bg-slate-900 bg-[url('https://images.hdqwalls.com/download/the-zombie-apocalypse-wj-2560x1700.jpg')]">
      <header className="App-header w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <Username />
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;