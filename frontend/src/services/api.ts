import axios from 'axios';
import type { Task } from '../types/Task';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

// GET /tasks - Listar todas
export const getAllTasks = async () => {
    const response = await api.get<Task[]>('/tasks');
    return response.data;
}

// GET /tasks/:id - Buscar por ID
export const getTaskById = async (id: number) => {
    const response = await api.get<Task>(`/tasks/${id}`);
    return response.data;
};

// POST /tasks - Criar nova
export const createTask = async (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const response = await api.post<Task>('/tasks', task);
    return response.data;
}

// PATCH /tasks/:id - Atualizar existente
export const updateTask = async (id: number, task: Partial<Omit<Task, 'id' | 'createdAt' | 'updatedAt'>>) => {
    const response = await api.patch<Task>(`/tasks/${id}`, task);
    return response.data;
}

// DELETE /tasks/:id - Deletar por ID
export const deleteTask = async (id: number) => {
    await api.delete(`/tasks/${id}`);
}