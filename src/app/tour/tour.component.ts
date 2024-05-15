import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  @Input() tour !: Object;
  tours: any[] = [];
  currentSlide = 0;

  carouselOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    },
    nav: true
  };

  constructor() { }

  ngOnInit(): void {
    this.tours = [
      {
        id: 1,
        title: 'Discover Luxembourg in 60 Minutes',
        guide_name: 'Walid Doe',
        price: 88,
        duration: 60
      },
      {
        id: 2,
        title: 'Explore esch',
        guide_name: 'Jane Smith',
        price: 120,
        duration: 90
      },
      {
        id: 3,
        title: 'Explore Historic Sites',
        guide_name: 'Mehdi Smith',
        price: 150,
        duration: 120
      },
      {
        id: 4,
        title: 'Explore Schengen',
        guide_name: 'Jane Smith',
        price: 120,
        duration: 90
      }
    ]; 
  }

  viewDetails(tour: any): void {
    // Handle view details action
  }

  prevSlide(): void {
    this.currentSlide = Math.max(this.currentSlide - 1, 0);
  }

  nextSlide(): void {
    this.currentSlide = Math.min(this.currentSlide + 1, this.tours.length - 1);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
