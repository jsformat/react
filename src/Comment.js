
import React, { Component } from 'react'
//引入prop-types来限制props值得类型 和 必要程度
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        //定义comment是对象类型，并且是必须得
        comment: PropTypes.object.isRequired
    }
    constructor(){
        super()
        this.state = {
            timeString:''
        }
    }
    componentWillMount(){
        const comment = this.props.comment
        const duration = (+Date.now() - comment.stamp) / 1000
        this.setState({
          timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    render() {
        return (
          <li className='item'>
            <p>
                <span className='name'>
                    {this.props.comment.username}
                </span>：
                <span>
                    {this.props.comment.comment}
                </span>
                <span className='time'>
                    {this.state.timeString}
                </span>
            </p>
          </li>
        )
    }
}

export default Comment