import { useState } from "react";

interface ITodoItemProps {
    id: string,
    todo: string,
    completed: boolean,
    handleToggleTodoCompleted: (id: string) => void,
    handleDeleteTodo: (id: string) => void,
    handleEditTodo: (id: string, newTodo: string) => void
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, todo, completed, handleToggleTodoCompleted, handleDeleteTodo, handleEditTodo }) =>  {

    const [newTodo, setNewTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const handleNewEditTodo = () => {
        handleEditTodo(id, newTodo);
        setIsEditing(false);
    }

    if(isEditing) {
        return (
            <div>
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
                <button onClick={() => setIsEditing(false)}>Cancel</button>
                <button onClick={handleNewEditTodo}>Save</button>
            </div>
        )
    }

    return (
        <div className="todo">
            <input id={id} type="checkbox" checked={completed} onChange={() => handleToggleTodoCompleted(id)} />
            <label htmlFor={id} style={{ textDecoration: completed ? "line-through" : "none" }}>{todo}</label>
            <div className="actions">
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => handleDeleteTodo(id)}>Remove</button>
            </div>
        </div>
    )
}

export default TodoItem;