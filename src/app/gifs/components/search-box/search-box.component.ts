import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'gif-search-box',
  template: `
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    // console.log({ newTag });
  }
}

//---------------Lectura "Normal de inputs----------------------------"
// import { Component } from '@angular/core';

// @Component({
//   selector: 'gif-search-box',
//   template: `
//     <input type="text" class="form-control" placeholder="Buscar gifs..."
//     (keyup.enter)="searchTag( txtTagInput.value)"
//     #txtTagInput
//     />
//   `,
// })
// export class SearchBoxComponent {

// searchTag(newTag:string){

//   console.log({newTag});

// }

// }
