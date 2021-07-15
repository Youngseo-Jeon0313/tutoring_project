import React, {Component} from 'react';
import './App.css';



class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">질문 올리기</a></li>
          <li><a href="1.html">그날그날 공부일기</a></li>
          <li><a href="1.html">오늘의 글귀 적어보기</a></li>
        </ul>
      </nav>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App"> 
    <TOC></TOC>
      </div>
    );
  }
}



export default App;
