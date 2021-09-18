import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent implements OnInit {
  @Input() rating: number = 0;

  constructor() {
  }

  get fullStars(): Array<number> {
    const fullStars = Math.floor(this.rating);
    return  new Array<number>(fullStars).fill(1);
  }

  get hasHalfStar(): boolean {
    return this.rating - Math.floor(this.rating) >= 0.5;
  }

  get emptyStars(): Array<number> {
    const highestRating = 5;
    const emptyStars = Math.floor(highestRating - (this.rating - 0.5));
    return new Array<number>(emptyStars).fill(1)
  }

  ngOnInit(): void {
  }


}
