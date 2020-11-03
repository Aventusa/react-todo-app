import React from 'react'
import './App.scss';
import Dashboard from './dashboard/Dashboard';
import TodoList from './todo-list/TodoList';
import {Redirect, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <div className="app">
            <Switch>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/todo-list' component={TodoList} />
                <Redirect from='/' to='/dashboard'/>
            </Switch>
        </div>
    );
}

export default App;
