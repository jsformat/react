import React, { Component } from 'react'

class CommentInput extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            comment:''
        }
    }
    handleUsernameChange (event) {
        this.setState({
          username: event.target.value
        })
    }
    handleContentChange (event) {
        this.setState({
          comment: event.target.value
        })
    }
    handleSubmit(){
        const {username,comment}  = this.state;
        if(this.props.onSubmit) {
            this.props.onSubmit({
              username:this.state.username,
              comment:this.state.comment,
              stamp:+new Date()
            })
        }
        this.setState({
            username:'',
            comment:''
        })
    }
    //失去焦点后
    hanlderBlur(){
      window.localStorage.setItem('username',this.state.username);
    }
    //当调用render前
    componentWillMount () {
      const username = localStorage.getItem('username')
      if (username) {
        this.setState({ username })
      }
    }
    render() {
        return (
          <div className='comment-input'>
            <div className='comment-field'>
              <span className='comment-field-name'>用户名：</span>
              <div className='comment-field-input'>
                <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.hanlderBlur.bind(this)}/>
              </div>
            </div>
            <div className='comment-field'>
              <span className='comment-field-name'>评论内容：</span>
              <div className='comment-field-input'>
                <textarea value={this.state.comment} onChange={this.handleContentChange.bind(this)} ref={(textarea)=>this.textarea=textarea}/>
              </div>
            </div>
            <div className='comment-field-button'>
              <button onClick={this.handleSubmit.bind(this)}>
                发布
              </button>
            </div>
          </div>
        )
  }
  //调用render后
  componentDidMount () {
    this.textarea.focus()
  }
}

export default CommentInput