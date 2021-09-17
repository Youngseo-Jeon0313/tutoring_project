import {React, Component} from 'react'
import './EditorTemplate.css';

class EditorTemplate extends Component {
    render() {
        const { homework, board } =this.props;
        return (
            <div className="template">
            <div className='homework'>
                {homework}
            </div>
            <div className="board">
                {board}
            </div>
            </div>
        )
    }
}

export default EditorTemplate;