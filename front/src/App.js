import "./App.css";
import Main from "./Main.js";
import Menu from "./menu/menu.js";
import Qrpopup from "./origin/popup/qrpopup.js";
import Intro from "./intro/intro";

function App() {
  return (
    <div className="App">
      <div id="right"></div>
      <Menu />
      <Main />
      <Qrpopup />
      <div id="middle"></div>
      <Menu />
      <Main />
      <Qrpopup />
      <div id="left"></div>
      {/* <Intro /> */}
    </div>
  );
}

export default App;
