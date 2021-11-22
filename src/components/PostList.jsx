import React, { Component } from 'react'
import PostDetails from './PostDetails'

class PostList extends Component {
    render() {
        return (
           <div className="container">
               <div className="row">
                   <PostDetails />
                   <PostDetails />
                   <PostDetails />
                   <PostDetails />
                   <PostDetails />
                   <PostDetails />
               </div>
           </div>
        )
    }
}

export default PostList
