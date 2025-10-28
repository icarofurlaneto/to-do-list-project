import type { Request, Response } from 'express';
import { prisma } from '../config/database.js';

// GET /tasks - Lista todas as tarefas
export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: { createdAt: 'desc'}
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas'})
    }
};

// GET /tasks/:id - Busca uma tarefa específica
export const getTaskById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const task = await prisma.task.findUnique({
            where: { id: Number(id) }
        });

        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefa' });
    }
};

// POST /tasks - Criar nova tarefa
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ error: 'O título é obrigatório' });
        }

        const task = await prisma.task.create({
            data: { title, description}
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a tarefa'})
    }
};

// PATCH /tasks/:id - Atualiza uma tarefa existente
export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        const task = await prisma.task.update({
            where: { id: Number(id) },
            data: { title, description, completed}
        });

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a tarefa'});
    }
};

// DELETE /tasks/:id - Deletar tarefa
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.task.delete({
            where: { id: Number(id)}
        });

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar a tarefa'});
    }
};