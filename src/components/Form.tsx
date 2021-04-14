import { useState } from "react";
import { Todo } from "../types";
import { nanoid } from "nanoid";

interface IFormprops {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Form: React.FC<IFormprops> = ({ todos, setTodos }) => {

    const [todo, setTodo] = useState("");

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setTodos([{ id: nanoid(), todo, completed: false }, ...todos]);
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default Form;