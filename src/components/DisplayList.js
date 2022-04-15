//định nghĩa component trong DisplayList.js
const DisplayList = (props) => {

    const todoList = props.todoList;

    const handleDelectTodo = (id) => {
        props.handleDelectTodo(id);
    }

    return (
        <div>
            {todoList.map((item, index) => {
                return (
                    <div id={item.id} key={item.id} onClick={() => handleDelectTodo(item.id)}> {item.name} </div>
                )
            })}
        </div>
    )
}

export default DisplayList;