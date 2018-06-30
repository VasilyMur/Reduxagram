import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {

  render() {

    const i = this.props.posts.findIndex(res => {
      return res.code === this.props.match.params.postId;
    });
    const post = this.props.posts[i];
    const comments = this.props.comments;
    const postComments = this.props.comments[post.code] || [];


    return (
      <div className="App">

        <Header />

          <div className="content">
            <div className="inner">
              <h1>
                  <Link to="/">Reduxstagram</Link>
              </h1>
              <div className="single-photo">
                <Photo key={i} i={i} post={post}comments={comments}{...this.props}/>
                <div className="single-comments">
                  <Comments 
                    postComments={postComments}
                    id={post.code}
                    addComment={this.props.addComment}
                    removeComment={this.props.removeComment}
                    />
                </div>
              </div>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

export default Single;