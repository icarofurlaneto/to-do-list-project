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
    <div
      className="bg-white p-4 rounded-lg shadow-md mb-3 flex items-center
        gap-4"
    >
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
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Deletar
      </button>
    </div>
  );
};
