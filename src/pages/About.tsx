import React from 'react';
import { Code2, Palette, Smartphone, Zap, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  const technologies = [
    { name: 'React 18', description: 'Modern React with hooks and concurrent features' },
    { name: 'TypeScript', description: 'Type-safe JavaScript for better development experience' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
    { name: 'React Router', description: 'Declarative routing for React applications' },
    { name: 'Vite', description: 'Lightning-fast build tool and development server' },
    { name: 'Lucide React', description: 'Beautiful, customizable SVG icons' }
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Component Architecture',
      description: 'Modular, reusable components with clear separation of concerns and TypeScript interfaces.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design System',
      description: 'Consistent design language with carefully chosen colors, typography, and spacing.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring optimal experience across all device sizes.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimized bundle size, efficient re-renders, and smooth animations.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Type Safety',
      description: 'Full TypeScript implementation preventing runtime errors and improving maintainability.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Experience',
      description: 'Intuitive interactions, clear feedback, and accessible design patterns.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About This Application
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A comprehensive demonstration of modern React.js development practices, 
          showcasing component architecture, state management, form handling, 
          API integration, and responsive design principles.
        </p>
      </div>

      {/* Technical Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.name}</h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Key Features & Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Details */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Implementation Highlights
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">State Management</h3>
            <ul className="space-y-3 text-gray-600 m-auto">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                React hooks (useState, useEffect) for local component state
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Proper state updates with functional updates and immutability
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Error boundaries and loading states for better UX
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Design System</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Consistent 8px spacing system throughout the application
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Comprehensive color palette with semantic naming
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Responsive typography with proper contrast ratios
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Form Handling</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Real-time validation with immediate user feedback
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Accessible form controls with proper labeling
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Type-safe form data handling with TypeScript interfaces
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">API Integration</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Proper error handling and loading states
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Clean separation of data fetching logic
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Retry functionality and user-friendly error messages
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Responsive Design Explanation */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Responsive Design Philosophy
        </h3>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6 text-center">
            This application employs a mobile-first approach with thoughtful breakpoints and adaptive layouts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600 mb-2">Mobile (&lt;768px)</div>
              <p className="text-sm text-gray-600">
                Single column layout with full-width components, optimized touch targets, 
                and condensed navigation for thumb-friendly interaction.
              </p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600 mb-2">Tablet (768px-1024px)</div>
              <p className="text-sm text-gray-600">
                Two-column grid layout providing better content organization while 
                maintaining readability and comfortable spacing.
              </p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-purple-600 mb-2">Desktop (&gt;1024px)</div>
              <p className="text-sm text-gray-600">
                Three-column layout maximizing screen real estate with generous white space, 
                larger text sizes, and enhanced hover interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;