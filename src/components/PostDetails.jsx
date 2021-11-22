import React, { Component } from 'react'

export class PostDetails extends Component {
    render() {
        return (
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">
                            Post one
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias id ex labore?</p>
                    </div>
                    <div className="card-action">
                        <button className="btn black">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails
