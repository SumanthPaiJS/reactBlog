import React from 'react'
import ReactDOm from 'react-dom'
import axios from 'axios'
import {BrowserRouter,Route,Link } from 'react-router-dom'
import About from './About'
import Posts from './Posts'
import PostsShow from './PostsShow'
class App extends React.Component{
    
    render(){
    
        return(
    <BrowserRouter>
    <div>
                <h2>Blog</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                    <li><Link to='/posts'>Posts</Link></li>
                </ul>
                <Route path='/' component={Posts} exact={true}/>
                <Route path='/about' component={About}/>
                <Route path='/posts' component={Posts}/>
                <Route path='/posts/:postID' component={PostsShow}/>
            </div>
    </BrowserRouter>
            
        )
    }
    
    }
    export default App
