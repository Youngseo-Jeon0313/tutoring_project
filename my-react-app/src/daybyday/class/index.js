import { React, useState, useEffect} from "react";
import "./index.css";
import List from '../List.jsx';
import useFetch from '../useFetch.js';
import Header from './Header.jsx';
import { API_URL } from "../../config/constants";

const ClassPage = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState(); //이건 진짜 작성하고 있을 때 newTodo를 생성해주는 거임
    
    const loading = useFetch(todos, `${API_URL}/todos`);

    const changeInputData = (e) => {
        setNewTodo(e.target.value);
    }

    const addTodo =(e) => {
        e.preventDefault(); //초기화 함수
        setTodos([...todos, {'title': newTodo, 'id': todos.length, 'status' : 'todo'}]); //이건 우리가 onclick을 할 때 실행시켜주는 이벤트 함수로 누르면 만들어진 newTodo리스트를 todos에 넣어줌!
    }

    

    const changeTodoStatus = (id) => {
        const updateTodos = todos.map(todo => {
            if(todo.id === +id) {
                if(todo.status === "done") todo.status = "todo";
                else todo.status = "done";
            }
            return todo;
        })
        setTodos(updateTodos);
    }

    useEffect( () => {
        console.log ("새로운 내용이 렌더링됐네요!", todos);
    }, [todos])


    return (
        <>
        <Header todos={todos} />

        <form action="">  
            <input type="text" name="" onChange={changeInputData}/>
            <button onClick={addTodo}>숙제 추가요</button>
        </form>

        <List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus}/>
       
        </>
    )
}

export default ClassPage;