import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit , OnDestroy {
  @Output() sortchange = new EventEmitter<string>();

  @Output() showcategory = new EventEmitter<string>();

  categoriesSubsrciption: Subscription | undefined;

  sort = 'desc';
  categories : Array<string> | undefined;
  categor : string = "Categories";
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoriesSubsrciption=this.storeService.getAllCategories().subscribe(
      (response) => {
        this.categories = response;
      }
    );
  }

  ngOnDestroy(): void {
    if(this.categoriesSubsrciption){
      this.categoriesSubsrciption.unsubscribe();
    }
  }

OnSortUpdated(newSort: string): void {
 this.sort = newSort;
 this.sortchange.emit(newSort);
}

AllProducts(): void {
  this.categor = "All Products";
  this.showcategory.emit('');
}

onShowCategory(category: string): void {
     this.categor = category;
    this.showcategory.emit(category);

}

}
