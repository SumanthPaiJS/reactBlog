import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import axios from 'axios'
class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }
        this.handleLoad=this.handleLoad.bind(this)
    }
    
    }
    handleLoad(){
        this.setState(prevState=>({
            limit: prevState.limit+5
        }))
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState(()=>({
                posts:response.data,
                limit :5
            }))
        

        })
    }
    render(){
        return(
            <BrowserRouter>
            <div>
            <h2>Listing Posts -{this.state.posts.length}</h2>
                <ul>
                    {this.state.posts.slice(0,this.state.limit).map(
                        post=><li key={post.id}> <Link to={'/posts/${posts.id}'} target='_blank'
                        {posts.title}> </Link> </li>)}
                </ul>
                <button> onClick={this.handleLoad}>LoadMore</button>
            </div>

            </BrowserRouter>
            
        )
            

    }
    

export default Posts