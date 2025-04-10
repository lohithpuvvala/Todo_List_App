import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './pages/Header&Footer/Header';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from './pages/NoMatch/NoMatch';
import { PostTodoForm } from './pages/Forms/PostTodoForm';
import { UpdateTodoForm } from './pages/Forms/UpdateTodoForm';


export const App = () => {

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
      <Header />
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/todo' element={<PostTodoForm />} />
        <Route path='/todo/:id' element={<UpdateTodoForm />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}
