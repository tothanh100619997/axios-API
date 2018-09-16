import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">

                        <div className="row ">
                         
                             <Switch>{this.showContentMenus(routes)}</Switch> 
                        </div>

                    </div>
                </div>
            </Router>


        )
    }
    showContentMenus = routes =>{
        var result = null;
            result = routes.map((route,index) =>{
                return <Route
                    key={index}
                    path= {route.path}
                    exact ={route.exact}
                    component ={route.main}

                ></Route>
            })
        return result;
    }
}
export default App;