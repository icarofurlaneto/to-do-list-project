import { useState } from "react";
import type { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onUpdate: (id: number, data: { title: string; description?: string }) => void;
}

export const TaskItem = ({
  task,
  onDelete,
  onToggle,
  onUpdate,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(
    task.description || ""
  );

  const handleSave = () => {
    if (!editTitle.trim()) return; // Validação: título não pode estar vazio

    onUpdate(task.id, {
      title: editTitle,
      description: editDescription || undefined,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || "");
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-3">
      {isEditing ? (
        // Modo de Edição
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título
            </label>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Título da tarefa"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Descrição (opcional)"
              rows={2}
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Salvar
            </button>
          </div>
        </div>
      ) : (
        // Modo de Visualização
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="w-5 h-5"
          />

          <div className="flex-1">
            <h3
              className={`font-semibold ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p className="text-gray-600 text-sm">{task.description}</p>
            )}
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Deletar
          </button>
        </div>
      )}
    </div>
  );
};
