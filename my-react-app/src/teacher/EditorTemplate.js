import {React, Component} from 'react'
import './EditorTemplate.css';

class EditorTemplate extends Component {
    state = {
        leftPercentage: 0.5
    }

    handleMouseMove = (e) => {
        this.setState({
            leftPercentage: e.clientX / window.innerWidth
        })
    }

    handleMouseUp = (e) => {
        document.body.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);

    }

    handleSeparatorMouseDown = (e) => {
        document.body.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }





    render() {
        const { homework, board } =this.props;
        const {leftPercentage} =this.state;
        const {handleSeparatorMouseDown} =this;

        const leftStyle = {
            flex: leftPercentage
        }

        const rightStyle = {
            flex: 1 - leftPercentage
        }

        const separatorStyle = {
            left: `${leftPercentage * 100}%`
        }

        return (
            <div className="template">
            <div className='homework' style={leftStyle}>
                {homework}
            </div>
            <div className="board" style={rightStyle}>
                {board}
            </div>
            <div className="separator" style={separatorStyle} onMouseDown={handleSeparatorMouseDown}>
            </div>
            </div>
        )
    }
}

export default EditorTemplate;