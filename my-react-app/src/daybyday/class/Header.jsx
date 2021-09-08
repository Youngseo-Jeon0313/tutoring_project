import React from 'react'
import './Header.css';

export const Header = (todos) => {
    return (
        <div>
            <div className="countInfo">해야할 것들을 쓰고,, 다 했으면 지워보자{todos.length}</div>
        </div>
    )
}

export default Header;