import { Component } from '@angular/core';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private box: BoxService
  ) {}

    

}
