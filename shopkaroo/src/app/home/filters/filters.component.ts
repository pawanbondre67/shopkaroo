import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Output() sortchange = new EventEmitter<string>();

  @Output() categorychange = new EventEmitter<string>();

  sort = 'desc';
  category = 'all categories';

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

OnSortUpdated(newSort: string): void {
 this.sort = newSort;
 this.sortchange.emit(newSort);
}

OnCategoryUpdated(newcategory: string): void {
  if (newcategory) {
    this.category = newcategory;
    this.categorychange.emit(this.category);
  }

}

}
