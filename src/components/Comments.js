import React from 'react';

class Comments extends React.Component {


    renderComment = (comment, i) => {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.id, i)}>&times;</button>
                </p>
            </div>
        )
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const postId = this.props.id;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }


    render() {
        const comments = this.props.postComments;
        return (
            <React.Fragment>
                {comments.map(this.renderComment)}
                <form ref="commentForm"className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </React.Fragment>
        )
    }
}

export default Comments;