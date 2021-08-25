import {React} from 'react';
import {Form} from 'antd';
import AnswerPage from "../answer";
import {Link, Route, Switch} from 'react-router-dom';
import "./index.css";
import SchedulePage from "../schedule";

function TeacherPage() {
      const onSubmit = (values) => {
        console.log(values);
      }
      return (
       <div>
         <Form className="사진 업로드" onFinish={onSubmit}>
          <Form.Item className="upload">
            <div id="upload-img-placeholder">
              <span>하위페이지 구성</span>
            </div>
          </Form.Item>
         </Form>
          <li><Link to="../answer">정답과 설명 업로드 할 곳</Link></li>
          <li><Link to="../schedule">스케쥴 업로드할 곳</Link></li>
          <Switch>
            <Route exact={true} path="../answer">
              <AnswerPage />
            </Route>
            <Route exact={true} path="../schedule">
              <SchedulePage/>
              </Route> 
            </Switch>
        </div>
      );
  
  }

export default TeacherPage;