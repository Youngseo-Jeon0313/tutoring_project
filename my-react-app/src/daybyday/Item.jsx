import React from 'react'
import './Item.css';

export const Item = ({todo, changeTodoStatus}) => { //여기서 {}이거 안 하면 props로 못 가져오니까 그거 주의하자ㅠㅠ

    const toggleItem = (e) => {
        const id = e.target.dataset.id;
        if (typeof changeTodoStatus === 'function') {
        changeTodoStatus(id)};
    }

    const itemClassName = todo.status === 'done' ? 'done' : '';

    return (
        <li data-id={todo.id} onClick = {toggleItem}  className={itemClassName}> {todo.title}
            
        </li>
    )
}

export default Item;