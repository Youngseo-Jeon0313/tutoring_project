import React from 'react';
import {Link, Switch, Route, useHistory} from 'react-router-dom';
import StudentPage from './student';
import TeacherPage from './teacher';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import MainPage from './main';
import QuestionPage from './question';
import Uploadpage from './upload';
import StudyDiaryPage from './studydiary';

//link 태그!


function App() {    
const history = useHistory();
  return (
    <div>
      <head>
        <title>과외project</title>
      </head>
      <body>
        <header>
          <p align="center">
            <Link to ="/">
            <img src="https://imagescdn.gettyimagesbank.com/171/201607/a10514990.jpg" alt="우산이미지" width="60" height="60"></img>
            <span class="제목이요">과외 일지</span>
            </Link></p>
            <p align = "center">
            <Button 
            onClick = {function(){
                history.push('/src/student');
            }}>
              과외학생공간★</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button 
            onClick = {function(){
              history.push('/src/teacher');
            }}>
              과외선생공간★</Button>
            </p>
          <Switch>
            <Route exact={true} path="/">
              <MainPage />
            </Route>
            <Route exact={true} path="/src/student">
              <StudentPage />
            </Route>
            <Route exact={true} path="/src/teacher">
              <TeacherPage/>
           </Route>
           <Route exact={true} path="/question/:id">
             <QuestionPage/>
           </Route>
           <Route exact={true} path="/upload">
             <Uploadpage/>
           </Route>
           <Route exact={true} path="/studydiary">
              <StudyDiaryPage/>
            </Route>
          </Switch>
       </header>
    </body>

    <footer>
        <div id="maker">
            <p>전영서 만듦!</p>
            <p>오류나 보수 등은 20wjsdudtj@gmail.com으로 문의해주세요.</p>
        </div>
    </footer>

      <div className="App"></div>
      </div>
    );
}

export default App;