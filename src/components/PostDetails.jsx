import React, { Component } from 'react'
import { connect } from 'react-redux';

class PostDetails extends Component {
    render() {
        const {post} = this.props;
        return (
            
            <div className="col s12 m6">
                
                <div className="card">
                    <div className="card-content">
                        
                        <span className="card-title">
                            {post.title}
                        </span>
                        <p>{post.content}</p>
                    </div>
                    <div className="card-action">
                        <button onClick={()=> this.props.deletePost(post.id)} className="btn black">Delete
                        <i className="material-icons right">delete</i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapToDispatchToProps = (dispatch)=> {
    return {
        deletePost: (id)=>{
            dispatch({ type: 'DELETE_POST', id})
        }
    }
}

export default connect(null, mapToDispatchToProps)(PostDetails)
