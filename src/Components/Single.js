import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
	render(){
		const id = Number(this.props.match.params.id)
		const posts = this.props.posts
		const post = posts.find(post => post.id === id)
		const comments = this.props.comments[id] || []
		const index = this.props.posts.findIndex((post) => post.id === id)
		return <div className='single-photo'>
							<Photo post={post} {...this.props} index={index}/>
							<Comments startAddingComment={this.props.startAddingComment}  comments={comments} id={id}/>
					</div>
	}

}

export default Single