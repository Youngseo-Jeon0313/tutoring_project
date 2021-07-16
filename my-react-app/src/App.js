import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Container from './dday';
import 'antd/dist/antd.css';
import { Input } from 'antd';

//link 태그!




class App extends Component {
  render() {
    return (
      <div>
        <head>
        <title>과외project</title>
        </head>
        <body>
          <header>
            <p align="center">
            <img src="https://imagescdn.gettyimagesbank.com/171/201607/a10514990.jpg" alt="우산이미지" width="60" height="60"></img>
            <span class="제목이요">_ _아 같이 공부하자!!</span>
              <Input placeholder="Basic usage" />
            
            </p>
          </header>
          <main>
        <span className="본문">
           <div class="제목">그날그날 숙제 체크!</div>
             <br></br>
              <input id='달력' type='date' name='달력'></input>
                  <br></br>
    <textarea cols="50" rows="10"></textarea>
    </span>
<span class="본문">
    <div class="제목">D-Day★</div>
    <br></br>
    9월 모의고사 : 
    <div className='js-clock'></div>
    <br></br>
<Container/>
</span>
<span className ="본문">
    <div className="제목">그날그날 수업 내용!</div>
    <br></br>
    <input id='달력' type='date' name='달력'/>
    <br></br>
    <textarea cols="50" rows="10"></textarea>
    
</span> 
</main>
<main>
<span class ="본문">
    <div class="제목">질문/피드백 공간</div>


</span>

</main>

<div>
  <Link to="./pages/html1.js">
    <button>버튼을 누르면 page가 넘어가요</button>
      </Link>
</div>
      </body>
        <footer>
        <div id="maker">
            <p>전영서 만듦!</p>
            <p>오류나 보수 등은 20wjsdudtj@gmail.com으로 문의해주세요.</p>
        </div>
    </footer>







      <div className="App">

      </div>
    </div>
    );
}
}

export default App;