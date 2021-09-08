import { React, useState, useEffect} from "react";
import "./index.css";
import List from '../List.jsx';
import useFetch from '../useFetch.js';

 

const ClassPage = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState(); //이건 진짜 작성하고 있을 때 newTodo를 생성해주는 거임
    
    const loading = useFetch(todos, 'http://localhost:8080/todos');

    const changeInputData = (e) => {
        setNewTodo(e.target.value);
    }

    const addTodo =(e) => {
        e.preventDefault(); //초기화 함수
        setTodos([...todos, {'title': newTodo, 'id': todos.length, 'status' : 'todo'}]); //이건 우리가 onclick을 할 때 실행시켜주는 이벤트 함수로 누르면 만들어진 newTodo리스트를 todos에 넣어줌!
    }


    useEffect( () => {
        console.log ("새로운 내용이 렌더링됐네요!", todos);
    }, [todos])


    return (
        <>
        <h1>숙제를 작성하고 , 하나씩 지워나가보자!</h1>

        <form action="">  
            <input type="text" name="" onChange={changeInputData}/>
            <button onClick={addTodo}>숙제 추가요</button>
        </form>

        <List todos={todos} loading={loading}/>
        </>
    )
}

export default ClassPage;