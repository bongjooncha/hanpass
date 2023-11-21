import "./App.css";
import Main from "./Main.js";
import Menu from "./menu/menu.js";
import Qrpopup from "./popup/qrpopup.js";
import Lack from "./popup/lack.js";

function App() {
  return (
    <div className="App">
      <Main />
      <Menu />
      <Qrpopup />
      <Lack/>
    </div>
  );
}

export default App;
