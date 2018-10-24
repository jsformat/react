
import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor(){
        super()
        this.state = {
            comments:[]
        }
    }
    componentWillMount(){
        let comments = localStorage.getItem('comments')
        if (comments) {
          comments = JSON.parse(comments)
          this.setState({ comments })
        }
    }

    onSubmit(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.comment) return alert('请输入评论内容')
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({comments});
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    render(){
        return (
                <div className='app'>
                    <CommentInput onSubmit={this.onSubmit.bind(this)}></CommentInput>
                    <CommentList comments={this.state.comments}></CommentList>
                </div>
            )
    }
}

export default CommentApp
