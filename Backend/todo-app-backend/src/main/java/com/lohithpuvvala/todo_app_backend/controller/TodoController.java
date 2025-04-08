package com.lohithpuvvala.todo_app_backend.controller;

import com.lohithpuvvala.todo_app_backend.entity.Todo;
import com.lohithpuvvala.todo_app_backend.service.TodoServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class TodoController {

    private TodoServiceImpl todoService;

    @GetMapping("/todos")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("/todos/{id}")
    public ResponseEntity<?> getTodoById(@PathVariable Long id)
    {
        Todo todo = todoService.getTodoById(id);
        if(todo == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(todo);
    }

    @PostMapping("todos")
    public Todo postTodo(@RequestBody Todo todo)
    {
        return todoService.createTodo(todo);
    }

    public ResponseEntity<?> updateTodo(@PathVariable Long id, @RequestBody Todo todo){
        Todo updatedTodo = todoService.updateTodo(id,todo);
        if(updatedTodo == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updatedTodo);
    }
}
