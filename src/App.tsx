import { useEffect, useState } from "react";
import Form from "./components/Form";
import "./App.css";
import TodoItem from "./components/TodoItem";
import ButtonFilter from "./components/ButtonFilter";
import { Todo } from "./types";

interface IFilterMap {
    [key: string]: any,

}

const FILTER_MAP: IFilterMap = {
    All: () => true,
    Active: (todo: Todo) => !todo.completed,
    Completed: (todo: Todo) => todo.completed
};

const filterNames = Object.keys(FILTER_MAP);
const initialState = JSON.parse(localStorage.getItem('todos') || "[]") || []

const App = () => {

    const [todos, setTodos] = useState<Todo[]>(initialState);
    const [filter, setFilter] = useState("All");

    const handleToggleTodoCompleted = (id: string) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        }))
    }

    const handleDeleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEditTodo = (id: string, newTodo: string) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, todo: newTodo }
            }
            return todo;
        }));
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <main>
            <h1>todos app</h1>
            <h3>What needs to be done?</h3>
            <Form todos={todos} setTodos={setTodos} />
            <section id="filters">
                {filterNames.map(name => <ButtonFilter key={name} name={name} setFilter={setFilter} />)}
            </section>
            <section id="todo-list">
            {todos
            .filter(FILTER_MAP[filter])
                .map(todo => <TodoItem key={todo.id} {...todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodoCompleted={handleToggleTodoCompleted} handleEditTodo={handleEditTodo} />)}
            </section>
        </main>
    )
}

export default App;