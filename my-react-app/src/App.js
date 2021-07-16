import React, {Component} from 'react';
import './App.css';

//link 태그!


class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/html1">질문 올리기</a></li>
          <li><a href="/html2">그날그날 공부일기</a></li>
          <li><a href="/html3">오늘의 글귀 적어보기</a></li>
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
