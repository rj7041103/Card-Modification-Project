import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  clasification: number = 0;

  //Inputs in Angular versiones 15<

  @Input('title') title!: string;
  @Input('textBTN') textBTN!: string;
  @Input('rating') rating!: string;
  @Input('price') price!: string;
  @Input('image') image!: string;

  //Outuput in Angular versiones 15<
  @Output() public titleData = new EventEmitter<string>();
  @Output() public btnData = new EventEmitter<string>();
  @Output() public ratingData = new EventEmitter<string>();
  @Output() public priceData = new EventEmitter<string>();
  @Output() public imageData = new EventEmitter<string>();

  // atributos a configurar con el ngStyle
  titleSize: string = '24px';
  ngOnInit(): void {
    this.clasification = Number(this.rating);
  }

  listenObjectCardData() {
    this.titleData.emit(this.title);
    this.btnData.emit(this.textBTN);
    this.ratingData.emit(this.rating);
    this.priceData.emit(this.price);
    this.imageData.emit(this.image);
  }
}
