import React, {Component} from 'react';
import logo from './logo.svg';
import TodoList from "../TodoList/TodoList"

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {id:1,name: "hwz", age: 12, isChecked: true},
                {id:2,name: "121", age: 13, isChecked: false},
            ]
        }
    }




    render() {
        return (
            <div className="container">
                <div className="header text-center">
                    <img src={logo} role="presentation" className="logo"/>
                    <h1>hello world</h1>
                </div>
                <div className="content">
                    <div className="header text-center">
                        <h3>todomvc</h3>
                    </div>
                    <TodoList data={this.state.todoList}/>

                </div>
            </div>

        );
    }
}

export default App;
