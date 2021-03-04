import { Component, OnInit } from '@angular/core';
import { tableCodeDesc } from '../classes/tableCodeDesc';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private helpService:HelpService) { }

  ngOnInit(): void {
    this.helpService.getData();
  }
  getData(){}
//  getMerchavim()
//  {
//  }

// getAllMerchavim()
// {
  
// }
// getAllMerchavim()
// {
  
// }
}
