package com.example.practice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import jakarta.persistence.PrePersist;

@Entity
@Table(name = "employees")
@Getter
@Setter
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // 사원 번호

    @Column(nullable = false, length = 50)
    private String name;
    // 이름
    
    @Column(nullable = false)
    private String position;
    // 직책
    
    @Column(nullable = false)
    private Integer salary;
    //급여    
    @Column(name = "department")
    private String department;
    //부서
    @Column(name = "hire_date")
    private LocalDateTime hireDate;
    // 입사일
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    // 생성일   
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
