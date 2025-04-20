import axios from 'axios';
import { Employee } from '../types/Employee';

const API_URL = 'http://localhost:8080/api/employees';

export const employeeService = {
  // 모든 사원 조회
  getAllEmployees: async (): Promise<Employee[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // ID로 사원 조회
  getEmployeeById: async (id: number): Promise<Employee> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  // 새 사원 등록
  createEmployee: async (employee: Omit<Employee, 'id' | 'hireDate' | 'createdAt'>): Promise<Employee> => {
    const response = await axios.post(API_URL, employee);
    return response.data;
  },

  // 사원 정보 수정
  updateEmployee: async (id: number, employee: Partial<Employee>): Promise<Employee> => {
    const response = await axios.put(`${API_URL}/${id}`, employee);
    return response.data;
  },

  // 사원 삭제
  deleteEmployee: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  }
}; 