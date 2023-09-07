import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  color: string = '#2c3e50';
  title: string = 'Portfolio';
  selectedProjectIndex: number = 0;

  projects: { id: number; imgSrc: string }[] = [
    {
      id: 1,
      imgSrc: 'assets/poert1.png',
    },
    {
      id: 2,
      imgSrc: 'assets/port2.png',
    },
    {
      id: 3,
      imgSrc: 'assets/port3.png',
    },
    {
      id: 4,
      imgSrc: 'assets/poert1.png',
    },
    {
      id: 5,
      imgSrc: 'assets/port2.png',
    },
    {
      id: 6,
      imgSrc: 'assets/port3.png',
    },
  ];
}
