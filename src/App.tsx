
const App = () => {

    return (
        <main>
            <h1>Todos app</h1>
            <h3>What needs to be done?</h3>
            <form>
                <input type="text"/>
                <button>Add</button>
            </form>
            <section id="filters">
                <button>Show all tasks</button>
                <button>Show active tasks</button>
                <button>Show completed tasks</button>
            </section>
            <section>
                <h3>3 tasks remaining</h3>
                <ul>
                    <li>
                        <div>
                            <input id="todo-0" type="checkbox"/>
                            <label htmlFor="todo-0">Learn useState</label>
                            <div>
                                <button>Edit</button>
                                <button>Remove</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <input id="todo-1" type="checkbox"/>
                            <label htmlFor="todo-1">Learn useEffect</label>
                            <div>
                                <button>Edit</button>
                                <button>Remove</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <input id="todo-2" type="checkbox"/>
                            <label htmlFor="todo-2">Learn useReducer</label>
                            <div>
                                <button>Edit</button>
                                <button>Remove</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default App;