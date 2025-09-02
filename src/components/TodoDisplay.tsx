import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, RefreshCw, AlertCircle, ListTodo } from 'lucide-react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoDisplay: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleRefresh = () => {
    fetchTodos();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Error Loading Todos</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <ListTodo className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Todo List</h2>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {todos.length} items
          </span>
        </div>
        <button
          onClick={handleRefresh}
          className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200"
          title="Refresh"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto space-y-3">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0 mt-0.5">
              {todo.completed ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <Circle className="w-5 h-5 text-gray-400" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`text-sm font-medium text-left ${
                todo.completed ? 'text-green-700 line-through' : 'text-gray-800'
              }`}>
                {todo.title}
              </h3>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-xs text-gray-500">ID: {todo.id}</span>
                <span className="text-xs text-gray-500">User: {todo.userId}</span>
                <span className={`text-xs font-medium ${
                  todo.completed ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {todo.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {todos.length === 0 && !loading && (
        <div className="text-center py-8">
          <ListTodo className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No todos found</p>
        </div>
      )}
    </div>
  );
};

export default TodoDisplay;