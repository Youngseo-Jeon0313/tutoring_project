import {React} from 'react';
import Container from '../dday';
import { Input} from 'antd';
import {DatePicker} from 'antd';
import Container1 from '../dday9평';

function MainPage() {
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
            <Input placeholder="Basic usage" size ="large"/>
        </div>
        </span>
    </main>


</div>

    );
}

export default MainPage;