import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTaskCreated = () => {
    setRefreshKey(prev => prev + 1); // Força atualização da lista
  };

  return (
    <div className="minh-screen bg-gray-100 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          To-Do List
        </h1>
        <TaskForm onTaskCreated={handleTaskCreated} />
        <TaskList key={refreshKey} />
      </div>
    </div>
  );
}

export default App;