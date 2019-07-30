import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import{Link} from 'react-router-dom'

class PostsShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            post:{},
            users:{},
            comments:[]
        }    
        
    }
componentDidMount(){
    const id = this.props.params.match.postID
    axios.get('https://jsonplaceholder.typicode.com/posts/${id}')
    .then(response=>{
        const post = response.data
        this.setState(()=>({post}))
    //another ajax call for user info of a particular post
    axios.get('https://jsonplaceholder.typicode.com/users/${posts.userID}')
    .then(response=>{
        const user = response.data
        this.setState(()=>({user}))
    })

}
}
render(){
    return(
        <div>
            <h2>Show Post {this.props.match.params.postID}</h2>
            <p>By {this.state.post.userName}</p><br/> 
            <h2>{this.state.post.title}</h2>
            <p>{this.state.post.body}</p>
            <Link to='/posts'>Back</Link>
        </div>
    )
}




}
export default PostsShow