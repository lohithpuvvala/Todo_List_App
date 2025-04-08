import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalComp } from "./ModalComp";

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
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleUpdate = (id: number) => {
        navigate(`/todo/${id}`);
    };

    const handleDelete = async (id: number) => {
        setShow(true);
    }

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
                    <button className="btn btn-outline-primary btn-lg" onClick={() => handleUpdate(todo.id)} >Update</button>
                    {" "}
                    <button className="btn btn-outline-danger btn-lg" onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
                <ModalComp show={show} setShow={setShow} id={todo.id} />
            </td>
        </tr>
    );
};