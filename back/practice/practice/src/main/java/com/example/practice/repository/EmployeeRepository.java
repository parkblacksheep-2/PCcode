package com.example.practice.repository;

import com.example.practice.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // 기본 CRUD 메서드는 JpaRepository에서 제공
} 