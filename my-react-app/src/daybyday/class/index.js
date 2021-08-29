import { React, useEffect, useState, } from "react";
import "./index.css";
import List from '../List.jsx';

const ClassPage = () => {
    const [todos, setTodos] = useState(['오늘 배운 거 복습']);

    const [newTodo, setNewTodo] = useState(); //이건 진짜 작성하고 있을 때 newTodo를 생성해주는 거임

    const changeInputData = (e) => {
        setNewTodo(e.target.value);
    }

    const addTodo =(e) => {
        e.preventDefault(); //초기화 함수
        setTodos([...todos, newTodo]); //이건 우리가 onclick을 할 때 실행시켜주는 이벤트 함수로 누르면 만들어진 newTodo리스트를 todos에 넣어줌!
    }

    const fetchInitialData = async() => { //함수 ()이거 앞에 async 키워드를 추가해서 비동기 코드를 호출

        const response = await fetch('http://localhost:8080/todos'); //fetch 함수로 API 호출하기
        const initialData = await response.json(); //response값을 가져와 완료할 때까지 읽기 json은 그냥 그 막 :,:,이런 형식 얘기임
        setTodos(initialData); //todos리스트에 계속 넣어준다고 했던 함수에 이 인자를 주기!
        //이때 주의해야 할 것은 list.jsx에 가서 어떻게 key값 그리고 내용 값을 할당시킬 건지 결정을 시켜야 함@
    }

    useEffect( () => {
       fetchInitialData(); 
    })

    return (
        <>
        <h1>숙제를 작성하고 , 하나씩 지워나가보자!</h1>

        <form action="">  
            <input type="text" name="" onChange={changeInputData}/>
            <button onClick={addTodo}>숙제 추가요</button>
        </form>

        <List todos={todos}/>
        </>
    )
}

export default ClassPage;