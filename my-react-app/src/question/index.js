import {React} from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from 'react-router';
import "./index.css";
import { API_URL } from "../config/constants";


function QuestionPage() {
    const {id} = useParams();
    const [content, setContent] = useState(null);

    useEffect(function() {
        axios.get(`http://localhost:8080/question/${id}`)
        .then(function(result){
            setContent(result.data.content);
        })
        .catch(function (error){
            console.error(error);
        });
    },[]);

    if (content === null){
        return <h1>질문이 아직 없습니다.</h1>
    }

    return (
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

    );
}

export default QuestionPage;