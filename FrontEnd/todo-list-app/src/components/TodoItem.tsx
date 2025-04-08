import React from "react";

interface Todo {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: string | null;
}

interface TodoRowProps {
    todo: Todo;
}

export const TodoItem: React.FC<TodoRowProps> = ({ todo }) => {
    return (
        <tr key={todo.id}>
            <td>{todo.createdAt
                ? new Date(todo.createdAt).toLocaleString()
                : "Not Available"}</td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.status}</td>
            <td>
                <div className="btn-group w-100 m-3 pe-5" role="group" aria-label="Basic mixed styles example">
                    <button className="btn btn-outline-primary btn-lg" >Update</button>
                    {" "}
                    <button className="btn btn-outline-danger btn-lg" >Delete</button>
                </div>
            </td>
        </tr>
    );
};