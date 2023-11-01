import "./App.css";
import Main from "./Main.js";
import Menu from "./menu/menu.js";
import Qrpopup from "./popup/qrpopup";
import Intro from "./intro/intro";

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Qrpopup />
      <Intro />
    </div>
  );
}

export default App;
