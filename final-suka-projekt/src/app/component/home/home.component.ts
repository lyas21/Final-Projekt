//SLIDER SPONSOR

import { Component } from '@angular/core';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}

//SLIDER MAIN

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.scss'],
})
export class MultiItemCarouselComponent implements OnInit {
  cards = [
    {
      title: 'Рюкзак Milo DOTO 18',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Рюкзак Milo Toget 30',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Рюкзак Milo Naxxa 30',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Рюкзак Milo DOTO',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Рюкзак Milo Toget 30',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Рюкзак Milo Naxxa 30',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Рюкзак Milo DOTO',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Рюкзак Milo Toget 30',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Рюкзак Milo Naxxa 30',
      description: '2 787,00 грн.',
      buttonText: 'Купить',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}
