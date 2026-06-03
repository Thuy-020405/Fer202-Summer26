import { useState } from "react";
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
    const addTodo = () => { 
        if (input.trim() !== "") {
            setTodos([...todos, {id: Date.now(), text: input}]);
            setInput("");
        }
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <div>
            <h2>Todo App</h2>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}       
export default TodoApp;

