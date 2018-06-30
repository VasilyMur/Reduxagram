import React from 'react';
import Header from './Header';
import Footer from './Footer';

import PhotoGrid from './PhotoGrid';
import { Link } from 'react-router-dom';

class App extends React.Component {


  render() {
   
    return (
      <div className="App">

        <Header />

          <div className="content">
            <div className="inner">
              <h1>
                <Link to="/">Reduxstagram</Link>
              </h1>
              <PhotoGrid {...this.props}/>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

export default App;