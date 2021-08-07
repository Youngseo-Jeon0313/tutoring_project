import {React} from 'react';
import "./index.css";
import UploadPage from "../upload";
import {Switch, Route, Link} from "react-router-dom";

function StudentPage() {

     // --> 이 위에 있는 거는 일단 서버에서 가져온 거 쓰는 건데 일단은 보류 시키고 
  
      return (
        <div>
           <body>
            <div>
              <span>하고 싶은 작업을 밑에서 선택하세요</span>
            </div>
            <li><Link to="../upload">질문 올리기</Link></li>
            <li><a href=".">그날그날 공부일기</a></li>
            <li><a href=".">오늘의 글귀 적어보기</a></li>
          
            <Switch>
            <Route exact={true} path="../upload">
              <UploadPage />
            </Route>
            </Switch>
          </body>
        </div>
      );
        
  }

export default StudentPage;






