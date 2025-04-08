package com.lohithpuvvala.todo_app_backend.repository;

import com.lohithpuvvala.todo_app_backend.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo,Long> { }
