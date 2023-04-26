import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(private gifService: GifsService) {}

  get tags(){
    return this.gifService.tagHistory;
  }

 

}
