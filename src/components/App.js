import React from 'react'

import './App.scss';
import Dashboard from './dashboard/Dashboard';
import TodoList from './todo-list/TodoList';


function App() {
    return (
        <div className="app">

           <Dashboard />
           <TodoList />
        </div>
    );
}

export default App;
