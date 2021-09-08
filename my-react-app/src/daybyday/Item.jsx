import React from 'react'

export const Item = (todo) => {
    return (
        <li data-id={todo.id}> {todo.title}
            
        </li>
    )
}
