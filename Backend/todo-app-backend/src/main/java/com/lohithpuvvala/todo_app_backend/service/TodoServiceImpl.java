package com.lohithpuvvala.todo_app_backend.service;

import com.lohithpuvvala.todo_app_backend.entity.Todo;
import com.lohithpuvvala.todo_app_backend.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService{

    @Autowired
    private final TodoRepository todoRepository;

    @Override
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @Override
    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Todo updateTodo(Long id, Todo todo) {
        Optional<Todo> existingTodoOpt = todoRepository.findById(id);

        if(existingTodoOpt.isPresent()){
            Todo existingTodo = existingTodoOpt.get();
            existingTodo.setTitle(todo.getTitle());
            existingTodo.setDescription(todo.getDescription());
            existingTodo.setStatus(todo.getStatus());
            return todoRepository.save(existingTodo);
        }else {
            throw new RuntimeException("Todo not found with id: " + id);
        }
    }

    @Override
    public Todo getTodoById(Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}
