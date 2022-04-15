import React, { useState } from 'react';
import _ from 'lodash';
import DisplayList from './DisplayList';
import AddTodo from './AddTodo';

const Home = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setListTodo] = useState(
        [
            { id: 'todo1', name: "Learn Python" },
            { id: 'todo2', name: "Do Homework" },
            { id: 'todo3', name: "Workout" }
        ]
    )

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleClickBtn = () => {
        if (!todo) {
            alert("Empty Todo !?")
            return;
        }
        let todoId = randomIntFromInterval(4, 99999999999);
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }
        let currentTodoList = _.clone(todoList);
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList);
    }

    const handleDelectTodo = (id) => {
        let currentTodoList = _.clone(todoList);
        currentTodoList = currentTodoList.filter(item => item.id != id);
        setListTodo(currentTodoList);
    }


    return (
        <div>
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleClickBtn={handleClickBtn}
            />

            <div style={{ marginBottom: "20px" }}>----- Todo List -----</div>
            <DisplayList
                todoList={todoList}
                handleDelectTodo={handleDelectTodo}
            />
        </div>
    );
}



// class Home extends React.Component {
//     //khai bao state
//     state = {
//         name: 'Hoang',
//         nickname: 'Louis'
//     }

//gan lai gia tri cho state
// render() {
//     return (
//         <div>
//             <label>Name </label>
//             <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
//             <br /><br />
//             Hello Todo list class name = {this.state.name} nickname = {this.state.nickname}
//         </div>
//     )
// }
// }


export default Home;