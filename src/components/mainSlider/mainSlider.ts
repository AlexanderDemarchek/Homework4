import Component, { ComponentProps } from '../../app/js/component';
import {Swiper, Controller, Parallax } from 'Swiper';

Swiper.use([Controller,Parallax]);

export default class MainSlider extends Component.Default {
    nSwiper: Swiper;
    nSwiperSecond: Swiper;
    nSwiperThird: Swiper;

    constructor(element: ComponentProps) {
        super(element);

        this.nSwiper = new Swiper(this.getElement('container'), {
            loop: true,
            parallax: true,
            spaceBetween: 20,
            slidesPerView: 1
        });

        this.nSwiperSecond = new Swiper(this.getElement('container-second'), {
            loop: true,
            parallax: true,
            slidesPerView: 1,
            spaceBetween: 20,
            controller: {
                control: [this.nSwiper, this.nSwiperThird]
            }
        });

        this.nSwiperThird = new Swiper(this.getElement('container-third'), {
            loop: true,
            parallax: true,
            slidesPerView: 1,
            spaceBetween: 20,
            controller: {
                control: [this.nSwiper, this.nSwiperSecond]
            }
        });

        this.nSwiperSecond.controller.control = this.nSwiperThird;
        this.nSwiper.controller.control = this.nSwiperThird;
    }


    destroy = () => {
        // Destroy functions
    }
}