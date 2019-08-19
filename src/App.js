import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./App.css";
import Header from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import CarouselComp from './Components/CarouselComp/CarouselComp';
import PostSection from './Components/PostSection/PostSection';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <CarouselComp />
        <PostSection />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
