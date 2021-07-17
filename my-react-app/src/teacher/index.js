import React from 'react';
import {Form} from 'antd';


function teacherPage() {
      const onSubmit = (values) => {
        console.log(values);
      }
      return (
       <div>
         <Form name="사진 업로드" onFinish={onSubmit}>
          <Form.Item name="upload">
            <div id="upload-img-placeholder">
              <span>이미지를 업로드해주세요</span>
            </div>
          </Form.Item>
         </Form>
            <li><a href="./question">질문 올리기</a></li>
            <li><a href="/studydiary">그날그날 공부일기</a></li>
            <li><a href="/moto">오늘의 글귀 적어보기</a></li>
        </div>
      );
  
  }

export default teacherPage;