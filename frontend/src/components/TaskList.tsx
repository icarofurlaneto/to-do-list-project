import { useEffect, useState } from "react";
import type { Task } from "../types/Task";
import { getAllTasks, deleteTask, updateTask } from "../services/api";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getAllTasks();
      setTasks(data);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  const handleToggle = async (id: number) => {
    try {
      const task = tasks.find((t) => t.id === id);
      if (!task) return;

      await updateTask(id, { completed: !task.completed });
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    } catch (error) {
      console.error("Error ao atualizar a tarefa:", error);
    }
  };

  const handleUpdate = async (
    id: number,
    data: { title: string; description?: string }
  ) => {
    try {
      await updateTask(id, data);
      setTasks(
        tasks.map((t) =>
          t.id === id ? { ...t, title: data.title, description: data.description } : t
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  if (isLoading) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};
