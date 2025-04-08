import { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';
export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/todos");
                const data = await response.json();
                setTodos(data);
            } catch (error: any) {
                console.error("Error fetching employees: ", error.message);
            }
        }
        fetchTodos();
    }, [])
    return (
        <>
            <div className='mt-5 z-1 container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className="text-center">Todo List</h1>
                        <table className="table table-dark mt-4 table-hover">
                            <thead>
                                <tr>
                                    <th>Created On</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th className='text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo: any) => (
                                    <TodoItem todo={todo} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}