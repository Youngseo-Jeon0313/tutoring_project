import React from 'react'

class Datereset extends React.Component {
//날짜가 바뀌면 내가 저장해주었던 숙제~ 등을 다시 초기화해주는 함수 만들거임!
    state = {
        date : new Date()
    }

    render () {
        const {date} = this.state;

        return (
            <h1>
                    {date.getDate()}
            </h1>
        );
    };
}


export default Datereset;