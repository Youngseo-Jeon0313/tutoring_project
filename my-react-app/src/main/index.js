import {React} from 'react';
import Container from '../dday';
import {DatePicker} from 'antd';
import Container1 from '../dday9평';
import {useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";


function MainPage() {
    const {id} = useParams();
    const [content, setContent] = useState([]);
    useEffect(function(){
        axios.get(`http://localhost:8080/student/${id}`)
        .then(function(result){
            setContent(result.data.content);
        })
        .catch(function (error){
            console.error(error);
        });
    })

    if (content === null){
        return <h1>정보가 없어유</h1>
    }

    return (

<div>
    <main>
        <span className="본문">
            <div class="제목">그날그날 숙제 체크!</div>
            <br></br><DatePicker/><br></br>
            <textarea cols="50" rows="10"></textarea>
        </span>
        <span class="본문">
        <div class="제목">D-Day★</div><br></br>9월 모의고사 : <Container1/>
        <div className='js-clock'></div><br></br><Container/>
        </span>
        <span className ="본문">
            <div className="제목">그날그날 수업 내용!</div><br></br><DatePicker/><br></br>
        <textarea cols="50" rows="10"></textarea>
        </span> 
    </main>
    <main>
        <span class ="본문">
            
        <div class="제목">질문/피드백 공간
        
        <div>
        <div id="image-box">
        <img src={"/" + content.imageUrl} /></div>
        <div id="question-box">
        <div id="pageandnum">{content.pageandnum}</div>
        <div id="createdAt">{content.createdAt}</div>
        </div>
        
        </div>
        </div>
        </span>
    </main>
</div>

    );
}

export default MainPage;










