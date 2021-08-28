import {Form, Upload, Divider, Input, Button, message} from 'antd';
import axios from "axios";
import { API_URL } from "../config/constants";
import {React, useState} from "react";
import "./index.css";
import {useHistory} from "react-router-dom";

function UploadPage(){
    const [imageUrl, setImageUrl] = useState(null); 
    const history = useHistory();

    const onSubmit = (values) => {
      axios.post(`${API_URL}/question`,{
        imageUrl: imageUrl,
        description: values.description,
        pageandnum: values.pageandnum,
        date: parseInt(values.date)
      })
      .then((result)=> {
        console.log(result);
        history.replace("/");
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다. ${error.message}`);
      })
    };

    const onChangeImage = (info) => {  //사진 업로드하면 사진 바뀌는 onChangeImage 함수
      if (info.file.status === "uploading") {
        return;
      }
      if(info.file.status === "done") {
        const response = info.file.response;
        const imageUrl = response.imageUrl;
        setImageUrl(imageUrl);
      }
    };
      return(
           <div id = "upload-container"> 
             <Form name='질문 업로드' onFinish={onSubmit}>
              <Form.Item 
                name="upload">
                <Upload
                  name="image" 
                  action={`${API_URL}/image`} //이쪽으로 
                  listType="picture"
                  showUploadList={false}
                  onChange={onChangeImage}
                  >
                    {imageUrl ? (
                      <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="" />
                    ):(
                      <div id="upload-img-placeholder" >
                        <img src="img/upload.png" alt="ㅠㅠ사진이안보여요"/>
                        <span>질문 사진을 업로드해주세요.</span>
                      </div>
                    )}
                </Upload>
                </Form.Item>
                <Divider />
                <Form.Item
                  label={<div className="upload-label">질문하는 날짜</div>}
                  name="date"
                  rules={[{required: true, message: "질문 날짜를 8글자로 입력해주세요"}]}>
                      <Input
                        className="upload-pageandnum"
                        size="large"
                        placeholder="질문하는 날짜를 8글자로 입력해주세요"/>
                </Form.Item>
                <Divider/>
                <Form.Item
                  label={<div className="upload-label">질문하는 문제</div>}
                  name="pageandnum" //여기서는 className 쓰면 안 되고 name!!
                  rules={[{required: true, message: "질문 책/페이지/문제번호를 입력해주세요"}]}>
                      <Input
                        className="upload-pageandnum"
                        size="large"
                        placeholder="질문하는 책, 페이지, 문제번호를 입력해주세요"/>
                </Form.Item>
                <Divider/>
                <Form.Item
                  name="description"
                  label={<div className="upload-label">질문할 내용</div>}
                  rules={[{required: true, message:"질문 내용을 적어주세요."}]}>
                  <Input.TextArea
                    size="large"
                    className="description"
                    showCount
                    maxLength={300}
                    placeholder="질문하고자 하는 내용을 적어주세요."
                  />
                </Form.Item>
              <Form.Item>
                <Button id="submit-button" size="large" htmlType="submit">
                질문 등록하기!
                </Button>
              </Form.Item>
             </Form>
             </div>
       ) };

export default UploadPage;