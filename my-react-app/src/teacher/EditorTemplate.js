import {React, Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './EditorTemplate.css';
import Canvas from './Canvas';
import {Form, Input, Button, message} from 'antd';
import axios from 'axios';
import { API_URL } from "../config/constants";


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


        const onSubmit =(values) => {
            axios.post(`${API_URL}/homework`,{
                homework: values.homework,
            })
            .then((result) => {
                <Router>
                    <Route path="/"></Route>
                </Router>
            })
            .catch((error)=>{
                message.error(`에러: ${error.message}`);
            });
        };

        return (
            <div>
            <div className="template">
            <div className='homework' style={leftStyle}>
             
            <div>
            <Form onFinish={onSubmit}>
                <Form.Item name="homework">
                 <Input.TextArea size="large" placeholder="숙제를 써주세요"className="homeworks-text" ></Input.TextArea>
                </Form.Item>
                <Form.Item>
                 <Button id="submit-button" htmlType="submit" className="homeworks-button" >숙제 업로드</Button>
                </Form.Item>
            </Form>

            </div>
            </div>
            <Canvas className="board" style={rightStyle}></Canvas>
            <div className="separator" style={separatorStyle} onMouseDown={handleSeparatorMouseDown}>
            </div>
            </div>
            </div>
        );
    };
}

export default EditorTemplate;