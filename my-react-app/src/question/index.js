import {React} from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from 'react-router';
import "./index.css";
import { API_URL } from "../config/constants";


function QuestionPage() {
    const {id} = useParams();
    const [content, setContent] = useState(null);
    const [answercontent, setAnswerContent] = useState(null);

    useEffect(function() {
        axios.get(`${API_URL}/question/${id}`)
        .then(function(result){
            setContent(result.data.content);
        })
        .catch(function (error){
            console.error(error);
        });
    },[]);

    useEffect(function() {
        axios.get(`${API_URL}/answer/${id}`)
        .then(function(result){
            setAnswerContent(result.data.answercontents);
        })
        .catch(function (error){
            console.error(error);
        })
    },[]);

    if (content === null){
        return <h1>질문이 아직 없습니다.</h1>
    }

    if (answercontent === null){
        return (
            <div className="post">
            <div className="posting">
        <div id="image-box">
        <img src={`${API_URL}/${content.imageUrl}`} alt="질문사진"/>
       </div>
       <div id="question-box">
            <div className="pageandnum">해당 문제 : {content.pageandnum}입니당</div>
            <div className="date">질문 날짜 : {content.date}</div>
            <div className="description">질문 내용 : {content.description}</div>
        </div>
    </div>
    <div className="posting">
        <h1>답변이 아직 없습니다</h1>
    </div>
    </div>
        )
    }
    
    return (
    <div className="post">
    <div className="posting">
        <div id="image-box">
        <img src={`${API_URL}/${content.imageUrl}`} alt="질문사진"/>
       </div>
       <div id="question-box">
            <div className="pageandnum">해당 문제 : {content.pageandnum}입니당</div>
            <div className="date">질문 날짜 : {content.date}</div>
            <div className="description">질문 내용 : {content.description}</div>
        </div>
    </div>
    <div className="posting">
        <div id="image-box">
            <img src={`${API_URL}/${answercontent.imgUrl}`} alt="답변사진"/>
        </div>
        <div id="answer-box">
        <div className="description">답변 내용: {answercontent.description}</div>
        </div>
        </div>
    </div>
    );
}

export default QuestionPage;