import React from "react";

class Container1 extends React.Component{
    state={
        days : "0",
        hours : "0",
        minutes : "0",
        seconds : "0"
    };

    intervalId1;
    intervalId2;
//함수 선언
    componentDidMount() {
        const testdate = new Date("2021-09-01");

        this.intervalId1 = setInterval(() => {
            this.countDayFN(testdate);
        }, 1000);
    }

    render() {
        const {days, hours, minutes, seconds} = this.state;
        return (
            <h1>
                9평까지 남은 시간:{days}일 {hours}시간 {minutes}분 {seconds}초
            </h1>
        );
    }
    
    countDayFN = toDate => {
        const now = new Date();
        let amount = toDate.getTime() - now.getTime();

        if (amount < 0) {
            this.setState({
                ...this.state,
                day: "0",
                hours: "0",
                minutes: "0",
                seconds : "0"
            });
            
        clearInterval(this.intervalId1);
        } else {
            let days = 0;
            let hours = 0;
            let mins = 0;
            let secs = 0;

            amount = Math.floor(amount/1000);
            days = Math.floor(amount / 86400);  
            // 하루는 총 86400 초이기 때문에 86400 으로 나눈 값이 d-day와의 남은 일수를 나타내줍니다. 
            amount = amount % 86400;
            // 나머지값만 받아와줍니다. 
      
            hours = Math.floor(amount / 3600);
            // 1시간은 총 3600 초이기 때문에 3600 으로 나눈 값이 d-day와의 남은 시간수를 나타내줍니다. 
            amount = amount % 3600;
            // 나머지값만 받아와줍니다. 
      
            mins = Math.floor(amount / 60);
            // 1분은 총 60 초이기 때문에 60 으로 나눈 값이 d-day와의 남은 분 수를 나타내줍니다.
            amount = amount % 60;
            // 나머지값만 받아와줍니다. 
      
            secs = Math.floor(amount);
            // 나머지 값은 남은 초가 됩니다. 
      
            this.setState({
              ...this.state,
              days,
              hours,
              minutes: mins,
              seconds: secs
            });
        
        
        }
    }


}

export default Container1;