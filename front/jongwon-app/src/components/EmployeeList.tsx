import React, { useState, useEffect } from 'react';
import { Employee } from '../types/Employee';
import { employeeService } from '../services/employeeService';

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const data = await employeeService.getAllEmployees();
        setEmployees(data);
        setError(null);
      } catch (err) {
        setError('사원 데이터를 불러오는 중 오류가 발생했습니다.');
        console.error('Error fetching employees:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="employee-list">
      <h2>사원 목록</h2>
      {employees.length === 0 ? (
        <p>등록된 사원이 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>이름</th>
              <th>직책</th>
              <th>급여</th>
              <th>부서</th>
              <th>입사일</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.salary.toLocaleString()}원</td>
                <td>{employee.department}</td>
                <td>{new Date(employee.hireDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList; 