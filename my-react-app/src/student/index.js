import {React, useState, } from 'react';
import axios from "axios";
import { API_URL } from "../config/constants";
import './index.css';
import {Form} from 'antd';


function StudentPage() {


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

     // --> 이 위에 있는 거는 일단 서버에서 가져온 거 쓰는 건데 일단은 보류 시키고 
  
      return (
       <div>
         <body>
           <div> 
             <Form name='질문 업로드' onFinish={onSubmit}>
              <Form.Item 
              name="upload"
              label={<div className="upload-label">질문 사진</div>}
              >
                <Upload
                  name="image"
                  action={`${API_URL}/image`}
                  listType="picture"
                  showUploadList={false}
                  onChange={onChangeImage}
                  >
                    {imageUrl ? (
                      <img id="upload-img" src={`${API_URL}/${imageUrl}`} />
                    ):(
                      <div id="upload-img-placeholder">
                        <img src="/images/"
                      </div>
                    
                    
                    )}

                </Upload>
              </Form.Item>
             </Form>
             
          </div>
           
            <div id="upload-img-placeholder">
              <span>하고 싶은 작업을 밑에서 선택하세요</span>
            </div>
            <li><a href="./question">질문 올리기</a></li>
            <li><a href="/studydiary">그날그날 공부일기</a></li>
            <li><a href="/moto">오늘의 글귀 적어보기</a></li>
          </body>
        </div>
      );
  
  }

export default StudentPage;






