import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {

  render() {
   
    return (
      <div className="photo-grid">
          {this.props.posts.map((res, i) => {
            return <Photo {...this.props} key={i} i={i} post={res}/>
          })}
      </div>
    );
  }
}

export default PhotoGrid;