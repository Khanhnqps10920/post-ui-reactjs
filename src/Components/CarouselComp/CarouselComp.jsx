import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";

class CarouselComp extends PureComponent {
  render() {
    return (
      <Carousel autoPlay={true}>
        <div>
          <img src="/images/carousel1.jpg" alt="" />
          <p className="legend">Khánh</p>
        </div>
        <div>
          <img src="/images/carousel1.jpg" alt="" />
          <p className="legend">Đẹp</p>
        </div>
        <div>
          <img src="/images/carousel1.jpg" alt="" />
          <p className="legend">Trai</p>
        </div>
      </Carousel>
    );
  }
}

CarouselComp.propTypes = {

};

export default CarouselComp;