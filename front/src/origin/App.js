import "./App.css";
import Main from "./Main.js";
import Menu from "./menu/menu.js";
import Qrpopup from "./popup/qrpopup.js";

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Qrpopup />
    </div>
  );
}

export default App;
