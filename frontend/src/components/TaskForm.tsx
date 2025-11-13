import { useState } from "react";
import { createTask } from "../services/api";

interface TaskFormProps {
  onTaskCreated?: () => void;
}

export const TaskForm = ({ onTaskCreated }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) return;

    setIsLoading(true);

    try {
      await createTask({ title, description, completed: false });
      // Limpar os campos
      setTitle("");
      setDescription("");
      // Avisar que criou nova tarefa
      if (onTaskCreated) onTaskCreated();
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-lg font-bold mb-4">Nova Tarefa</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border rounded"
          placeholder="Digite o título..."
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Digite a descrição (opcional)..."
          rows={3}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        {isLoading ? "Criando..." : "Criar Tarefa"}
      </button>
    </form>
  );
};
