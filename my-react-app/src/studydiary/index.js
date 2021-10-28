import { React } from "react";
import {Calendar, Form, Input, Button, message} from "antd";
import locale from "antd/es/calendar/locale/ko_KR"; //달력의 년월일을 한국화
import "./index.css";
import axios from 'axios';
import {API_URL} from '../config/constants';
import {useHistory } from "react-router-dom";


function StudyDiaryPage() {

  const history = useHistory();

  const onSubmit = (values) => {
    axios.post(`${API_URL}/emoticon`,{
      emotiondata: values.emotiondata,
    })
    .then((result)=> {
        console.log(result);
        history.replace("/");
    })
    .catch((error)=>{
        console.error(error);
        message.error(`에러가 발생했습니다. ${error.message}`);
    })
};

const  onSelect = value => {
    console.log('onSelect--->', value);

    };

    

    return(
<>
  <body>
    <div className="bbo">
     
      <div className="emotion">
      <img className="smile" src="https://thumb.silhouette-ac.com/t/92/920e7435a7357f3f6e08bddc10f4ef29_t.jpeg" alt="웃는 사진"></img>&nbsp;&nbsp;&nbsp;
      <img className="sad" src="https://thumb.silhouette-ac.com/t/2d/2d390dd2caa7ff8749f266f725e0557f_t.jpeg" alt="웃는 사진"></img>
      </div>
      <Form name="이모티콘 업로드" onFinish={onSubmit}>
        <Form.Item  label={<div className="emotiondata">표정 넣기 위한 데이터</div>}
        name="emoticondata">
          <Input size="large" placeholder="오늘 잘했다면 '잘했다' 세글자를, 오늘 못했다면 '못했다'를 쓰세요 표정이 달력에 반영됩니당-!">
          </Input>
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" onClick={()=>alert('답변이 전송되었습니다^^')} htmlType="submit" className="homeworks-button" >전송하기</Button>
        </Form.Item>
      </Form>
      <Calendar
        locale={locale} onSelect={onSelect}
/>


    </div>
  </body>
</>

    );
}

export default StudyDiaryPage;