import {Form, Upload, Divider, Input, Button} from 'antd';
import axios from "axios";
import { API_URL } from "../config/constants";
import {React, useState} from "react";

function UploadPage(){
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = (values) => {
      axios.post(`${API_URL}/contents`,{
        imageUrl: imageUrl,
        description: values.description,
        pageandnum: values.pageandnum,
        date: values.date
      })
      .then((result)=> {
        console.log(result);
      });
    };

    const onChangeImage = (info) => {
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
    <div>
         <body>
           <div> 
             <Form name='질문 업로드' onFinish={onSubmit}>
              <Form.Item 
                name="upload"
                label={<div className="upload-label">질문 사진</div>}>
                <Upload
                  name="image"
                  action={`${API_URL}/image`}
                  listType="picture"
                  showUploadList={false}
                  onChange={onChangeImage}
                  >
                    {imageUrl ? (
                      <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="" />
                    ):(
                      <div id="upload-img-placeholder">
                        <img src="/" alt=""/>
                        <span>질문 사진을 업로드해주세요.</span>
                      </div>
                    )}
                </Upload>
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
                  name="pageandnum"
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
                    id="description"
                    showCount
                    maxLength={300}
                    placeholder="질문하고자 하는 내용을 적어주세요."
                  />
                </Form.Item>
              </Form.Item>
              <Button id="submit-button" size="large" htmlType="submit">
                문제 등록하기!
              </Button>
             </Form>
             </div>

             </body>
          </div>

       ) };

export default UploadPage;