package com.lohithpuvvala.todo_app_backend.service;

import com.lohithpuvvala.todo_app_backend.entity.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> getAllTodos();
    Todo getTodoById(Long id);
    Todo createTodo(Todo todo);
    Todo updateTodo(Long id, Todo todo);
    void deleteTodo(Long id);
}
