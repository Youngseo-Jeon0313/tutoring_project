import React from 'react';



class Student extends React.Component {
    render() {
      return (
       <div>
            <li><a href="./question">질문 올리기</a></li>
            <li><a href="/studydiary">그날그날 공부일기</a></li>
            <li><a href="/moto">오늘의 글귀 적어보기</a></li>
        </div>
      );
    }
  }

export default Student;