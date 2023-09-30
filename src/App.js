import "./App.css";

// import images
import Logo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImageLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      {/* upper sidebar */}
      <div className="sidebar">
        {/* uppersidebar */}
        <div className="upperside">
          <div className="uppersideTop">
            <img src={Logo} className="logo" alt="logo" />
            <span className="brand">ChatGpt</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} className="addBtn" alt="create new chat" /> New
            Chat
          </button>

          <div className="uppersideBottom">
            <button className="query">
              <img src={msgIcon} className="" alt="Query" /> What is
              Programming?
            </button>
            <button className="query">
              <img src={msgIcon} className="" alt="Query" />
              How is Faisal
            </button>
            <button className="query">
              <img src={msgIcon} className="" alt="Query" />
              How to use an API?
            </button>
          </div>
        </div>
        {/* lowerside bar */}
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} className="listItemsImg" alt="Home" />
            Home
          </div>

          <div className="listItems">
            <img src={saved} className="listItemsImg" alt="Saved" />
            Saved
          </div>

          <div className="listItems">
            <img src={rocket} className="listItemsImg" alt="Upgrade" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      {/* main page */}
      <div className="main">
        {/* main chats */}
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              illum! Quibusdam, officia? Nemo praesentium et atque. Eos libero
              omnis distinctio delectus aut repudiandae commodi natus adipisci,
              officiis harum mollitia excepturi!
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImageLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea
              illo eligendi doloremque facere qui sequi, ex vero laboriosam
              reprehenderit dignissimos aspernatur nam labore harum, adipisci
              nobis nisi ratione. Corrupti odio et nulla assumenda placeat
              temporibus est adipisci laborum. Necessitatibus, nobis. Et eaque
              atque velit iure, esse obcaecati reprehenderit voluptatum
              reiciendis non at magnam adipisci officia. Amet doloribus
              molestiae eius facilis quo sunt impedit facere cupiditate.
              Excepturi unde impedit facere magni itaque perspiciatis, ratione
              iste placeat, sequi obcaecati ducimus mollitia. Eligendi, ut!
              Provident quisquam recusandae omnis maxime sit quo mollitia, sed
              minus error officia soluta eum unde veritatis ad iusto!
            </p>
          </div>
        </div>

        {/* inputs element */}
        <div className="chatFooter">
          {/* basic input */}
          <div className="inp">
            <input type="text" placeholder="Send a message..." />
            {/* send button */}
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGpt may produce inaccurate information about people, places, or
            facts. ChatGPT April 10 Version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
