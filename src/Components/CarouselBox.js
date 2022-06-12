import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import naviImg from '../assets/navi.jpg'
import vpImg from '../assets/virtus-pro.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={naviImg}
                    alt="Navi"
                />
                <Carousel.Caption>
                    <h3>Navi image</h3>
                    <p>description navi dota 2</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={vpImg}
                    alt="VirtusPro"
                />
                <Carousel.Caption>
                    <h3>Virtus Pro image</h3>
                    <p>description Virtus Pro dota 2</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
