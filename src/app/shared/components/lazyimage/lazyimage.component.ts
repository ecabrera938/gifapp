import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyimage.component.html',
})
export class LazyimageComponent implements OnInit{

@Input()
public url!:string

public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('El URL tambien es a huevo carnal');
  }

onLoad(){
  setTimeout(() => {
    // console.log('Has loaded');
    this.hasLoaded = true;
  }, 500);

  
}

}
