import {React} from 'react';
import Container from '../dday';
import {DatePicker} from 'antd';
import Container1 from '../dday9평';
import axios from "axios";
import {useEffect, useState} from "react";
import "./index.css";
import {Link} from "react-router-dom";

function MainPage() {
    const [content, setContent] = useState([]);
    useEffect(function(){
        axios.get(`http://localhost:8080/student`)
        .then(function(result){
            setContent(result.data.content);
        })
        .catch(function (error){
            console.error(error);
        });
    },[]);

    return (
    <div>
        <body>
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
                    <div class="제목">질문/피드백 공간</div>
                    <div id='question-list'>
                        {content.map(function(content, index){    
                             return(  
                                <div>
                                    <Link className="content-link" to={`/student/${content.id}`}>
                                        <div className="question-contents">
                                        <span className="question-pageandnum">{content.pageandnum}</span>
                                        <span className="question-date">{content.date}</span>
                                        <div className="question-description">{content.description}</div>
                                        </div>
                                    </Link>
                                </div>
                                )  
                            })}  
                    </div>    
                </span>
            </main>
        </body>
    </div>

    );
}

export default MainPage;










