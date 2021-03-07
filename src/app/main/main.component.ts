import { Component, OnInit } from '@angular/core';
import { clsData } from '../classes/clsData';
import { man } from '../classes/Man';
import { tableCodeDesc } from '../classes/tableCodeDesc';
import { HelpService } from '../help.service';
import { ViewportScroller } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    merchav:number=0;
    selectedMerchav:boolean=false;
    selectedEzor:boolean=false;
    selectedYeshuv:boolean=false;
    selectedMen:boolean=false;

    newMerchav:any=0;
    newEzor:any=0;
    newYeshuv:any=0;

    myData: clsData = new clsData();
    ezorim: tableCodeDesc[]=[];
    myMan:man[]=[];
    myManChild:man[]=[];
  selectedPepole: boolean=false;
  constructor(private helpService:HelpService,private viewportScroller: ViewportScroller,private location: Location) { }

  ngOnInit(): void {
    this.helpService.getData().subscribe(data=>{
      this.myData=data;
    });
  }
  merchavSelect(merchav:any){
    this.selectedMerchav=true;
    this.newMerchav = merchav.target.value;
    this.helpService.getEzorimByMerchav(this.newMerchav).subscribe(data=>{
    this.ezorim=data
    });
  }
  ezorSelect(ezor:any){
    this.selectedEzor=true;
    this.newEzor = ezor.target.value;
  }
  yeshuvSelect(yeshuv:any){
    this.selectedYeshuv=true;
    this.newYeshuv = yeshuv.target.value;
  }
  clickpepole(el: HTMLElement)
  {
    el.scrollIntoView({behavior: 'smooth'});
    this.selectedPepole=true;
    if(this.selectedEzor==true&&this.selectedMerchav==true&&this.selectedYeshuv==true)
    {
     this.helpService.getRellavantPeople(this.newYeshuv,this.newMerchav,this.newEzor).subscribe(data=>{
      this.myMan=data;
    });
    }
      else{alert("אנא בחר מרחב,יישוב ואזור");
      }
    }
    clickChild(man:man,el: HTMLElement){debugger
      this.selectedMen=true;
      this.myManChild=man.Children;
       el.scrollIntoView({behavior: 'smooth'});

      // this.location.path() + '#tableChild'; 

      // this.viewportScroller.scrollToAnchor("tableChild");

  }
}

