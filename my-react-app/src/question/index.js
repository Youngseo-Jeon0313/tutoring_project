import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from 'react-router';
import "./index.css";


function QuestionPage() {
    const {id} = useParams();
    const [content, setContent] = useState(null);
    useEffect(function() {
        axios.get(`http://localhost:8080/student/${id}`)
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
    <div>
        <div id="image-box">
        <img src={"/"+content.imageUrl} alt="질문 사진"/>
       </div>
        <div id="question-box">
            <span>{content.pageandnum}</span>
            <span>{content.date}</span>
            <span>{content.description}</span>
        </div>
    </div>

    );
}

export default QuestionPage;