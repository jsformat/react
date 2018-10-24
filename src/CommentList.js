
import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render() {
        return (
          <ul>
            {this.props.comments.map((item,i)=><Comment comment={item} key={i}></Comment>)}
          </ul>
        )
    }
}

export default CommentList