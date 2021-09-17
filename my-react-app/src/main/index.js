import {React} from 'react';
import Container from '../dday';
import {DatePicker} from 'antd';
import Container1 from '../dday9평';
import axios from "axios";
import {useEffect, useState} from "react";
import "./index.css";
import {Link, Switch, Route} from "react-router-dom";
import { API_URL } from "../config/constants";
import Classpage from '../daybyday/class/index';
import Homeworkpage from '../daybyday/homework';

function MainPage() {
    const [contents, setContent] = useState([]);
    useEffect(function(){
        axios.get(`http://localhost:8080/question`)
        .then(function(result){
            setContent(result.data.contents);
        })
        .catch(function (error){
            console.error(error);
        });
    },[]);

    return (
    <div>
            <main>
                <span className="본문">
                    <div className="제목">그날그날 숙제 체크!</div>
                    <br></br><Classpage/><br></br>
                </span>
                <span className="본문">
                <div className="제목">D-Day★</div><br></br>9월 모의고사 : <Container1/>
                <div className='js-clock'></div><br></br><Container/>
                </span>
                <span className ="본문">
                    <div className="제목">그날그날 수업 내용!</div><br></br><DatePicker/><br></br>
                    </span> 
            <Switch>
            <Route exact={true} path="../daybyday/class/index">
              <Classpage />
            </Route>
            <Route exact={true} path="../daybyday/homework">
                <Homeworkpage/>
            </Route>
            </Switch>
            </main>

            <main>
                <span className ="본문">
                    <div className="제목">질문/피드백 공간</div>
                    <div id='question-list'>
                        {contents.map(function(content, index){  
                             return( 
                                <div>
                                    <Link style={{color: "inherit"}} className="content-link" to={`/question/${content.id}`}>
                                        <div className="question-contents">
                                        <span className="question-img">
                                            <img src={`${API_URL}/${content.imageUrl}`} alt="질문사진"></img>
                                        </span>
                                        <br></br>
                                        <span className="question-pageandnum">책&번호 :{content.pageandnum}</span>
                                        <br></br>
                                        <span className="question-date">질문 날짜:{content.date}</span>                                        
                                        </div>
                                    </Link>

                                </div>
                                )  
                            })}  
                    </div>    
                </span>
            </main>
            <div>

            </div>
    </div>

    );
}

export default MainPage;