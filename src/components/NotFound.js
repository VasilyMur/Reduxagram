import React from 'react';
import Header from './Header';
import Footer from './Footer';


class NotFound extends React.Component {

  render() {
   
    return (
      <div className="App">

        <Header />

          <div className="content">
            <div className="inner">
              <div className="single-photo">
                PAGE NOT FOUND
              </div>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

export default NotFound;