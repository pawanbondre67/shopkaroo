import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() sortchange = new EventEmitter<string>();
  sort:string = 'price';

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

OnSortUpdated(newsort: string): void {
  if (newsort) {
    this.sort = newsort;
    this.sortchange.emit(this.sort);  
  }
}

}
