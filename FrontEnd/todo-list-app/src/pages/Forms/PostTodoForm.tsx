import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PostTodoForm = () => {

    const navigate = useNavigate();

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        status: "To Do",
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log("Todo Data:", todo);
        try {
            const response = await fetch("http://localhost:8080/api/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(todo)
            });

            const data = await response.json;
            console.log("Response: Created", data);

            navigate('/');
        } catch (error: any) {
            console.error("Error create Todo:", error.message)
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "500px" }}>
                    <h3 className="text-center mb-4">Create Todo</h3>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group mt-3">
                            <label htmlFor="title"
                                className="form-label">Title</label>
                            <input type="text"
                                name="title"
                                id="title"
                                value={todo.title}
                                className="form-control"
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="description"
                                className="form-label">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                value={todo.description}
                                rows={3}
                                className="form-control"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="status"
                                className="form-label">Status</label>
                            <select name="status"
                                id="status"
                                value={todo.status}
                                className="form-select"
                                onChange={handleInputChange}>
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit"
                                className="btn btn-primary mt-3">Submit Todo</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};