import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <navbar className = "BottomNav">
          <ul>
            <li><a href="#"><img scr ="./botnavimg/계좌관리.JPG" alt="계좌관리"/></a></li>
            <li><a href="#">내역관리</a></li>
            <li><a href="#">이벤트</a></li>
            <li><a href="#">고객센터</a></li>
            <li><a href="#">설정</a></li>
          </ul>
        </navbar>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
