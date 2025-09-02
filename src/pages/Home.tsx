import React from 'react';
import Counter from '../components/Counter';
import ContactForm from '../components/ContactForm';
import TodoDisplay from '../components/TodoDisplay';
import { Activity, Users, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          React Demo Application
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A comprehensive showcase of modern React.js development featuring state management, 
          form validation, API integration, and responsive design principles.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Interactive Components
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Form Validation
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            API Integration
          </span>
        </div>
      </div>

      {/* Feature Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        {/* Counter Section */}
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              State Management
            </h2>
            <p className="text-gray-600 text-sm">
              Interactive counter with React hooks and state constraints
            </p>
          </div>
          <Counter />
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Form Validation
            </h2>
            <p className="text-gray-600 text-sm">
              Real-time validation with user-friendly error messages
            </p>
          </div>
          <ContactForm />
        </div>

        {/* API Integration Section */}
        <div className="space-y-4 lg:col-span-2 xl:col-span-1">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              API Integration
            </h2>
            <p className="text-gray-600 text-sm">
              Fetch and display data with loading and error states
            </p>
          </div>
          <TodoDisplay />
        </div>
      </div>

      {/* Technical Features Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Technical Implementation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">React Hooks</h4>
            <p className="text-sm text-gray-600">useState, useEffect for state management</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">TypeScript</h4>
            <p className="text-sm text-gray-600">Type-safe development with interfaces</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Tailwind CSS</h4>
            <p className="text-sm text-gray-600">Utility-first responsive styling</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">React Router</h4>
            <p className="text-sm text-gray-600">Client-side navigation and routing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;