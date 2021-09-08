import Item from 'antd/lib/list/Item';
import React from 'react'


const List = ({todos, loading}) => {

    let todoList=<div>loading...</div>;
    if (!loading) todoList = todos.map( (todo) => <Item key={todo.id}> todo={todo}/>)


    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default List;
