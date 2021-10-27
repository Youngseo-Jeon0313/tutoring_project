import {React, useState}from 'react'
import  "./Canvas.css";
import {Form, Input, Button, message, Upload, Divider} from 'antd';
import {useHistory } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../config/constants';

function Canvas() {
    const [imageUrl, setImageUrl] = useState(null); 
    const history = useHistory();

    const onSubmit = (values) => {
        axios.post(`${API_URL}/answer`,{
            imageUrl: imageUrl,
            description: values.description,
            httpnum: values.httpnum,
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


    const onChangeImage =(info) =>{
        if(info.file.status === "uploading"){
            return;
        }
        if(info.file.status === "done") {
            const response = info.file.response;
            const imageUrl = response.imageUrl;
            setImageUrl(imageUrl);
        }
    };

    return (
        <div className="canvas">
         &nbsp;&nbsp;&nbsp;풀이를 적어주세요!<br/>
         &nbsp;&nbsp;&nbsp;이 때 학생의 질문 내용에 들어가 문제 번호를 http 창에서 확인해주세요.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
         <Form name="answer-upload" onFinish={onSubmit} >
             <Divider/>
                <Form.Item name="anwer-upload">
                    <Upload
                        name="image"
                        action={`${API_URL}/answerimage`} //이쪽으로
                        listType="picture"
                        showUploadList={false}
                        onChange={onChangeImage}
                        >
                            {imageUrl ? (
                                <img id="answer-upload-img" className="answer-upload-img" src={`${API_URL}/${imageUrl}`} alt="&nbsp;&nbsp;&nbsp;&nbsp;업로드한 사진"/>
                            ):(
                                <div>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJ1BMVEX///8AAAC7u7tVVVWqqqpwcHB1dXV2dnb09PTHx8eHh4d/f39vb2/6z6N9AAAA/UlEQVR4nO3Xyw6CMBRFUa+CAvr/3+vEGKKFlt5XjPvMm73SQZOeTowxxhhjui1Lbv8mck/ui9yS+4mCVz9N8O4nCVb9FMFVJFXw0Q8XfPVFrsn9UEGxHyjY6IcJNvtBgp1+iGC3HyCo9N0F1b6zoKHvKmjqOwoa+26CsbXvJDjQdxEc6ouMyX1zweG+saCjbyro6hsKOvtmgu6+kUDRNxGo+gYCZV8tUPeVAoO+SmDSVwgeNv1uwXQurRYrHpp676CwGsAwBQAAAAAAAAAAAAAAAAAAAAAor/j/X80dwBhj/7Sh9uy3bwAAAACA3wTMF7PNXQDGGGOMMcZi9gQOoQ+8IpjOHQAAAABJRU5ErkJggg==" alt="ㅠㅠ사진이 안보여요"/>
                                    <span>질문 사진을 업로드</span>
                                </div>
                            )}
                    </Upload>
                    </Form.Item>
                    <Divider/>
                <Form.Item 
                    label={<div className="upload-label">답변할 문제</div>}
                    name="httpnum"
                    rules={[{required:true, message: '답변해줄 학생 질문의 http 페이지를 읽어주세요.'}]}>
                 <Input className="upload-answer-httpnum" size="large" placeholder="답변해줄 학생 질문의 http 페이지를 읽어주세요"></Input>
                 </Form.Item>
                 <Form.Item 
                    name="description"
                    label={<div className="upload-label">답변할 내용</div>}
                    rules={[{required:true, message:'답변 내용을 적어주세요.'}]}>
                        <Input.TextArea
                        size="large"
                        className="description"
                        showCount maxLength={1000}
                        placeholder="답변할 내용을 적어주세요"
                        />
                 </Form.Item>
                <Form.Item>
                 <Button onClick={()=>alert('답변이 전송되었습니다^^')} id="submit-button" htmlType="submit" className="homeworks-button" >답변완료!</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Canvas;