import { tableCodeDesc } from "./tableCodeDesc";

export class clsData {
    

    constructor(public merchavim?: Array<tableCodeDesc>,
        public ezorim?: Array<tableCodeDesc>,
        public yeshuvim?: Array<tableCodeDesc>)
         {
        merchavim = new Array<tableCodeDesc>();
        ezorim = new Array<tableCodeDesc>();
        yeshuvim = new Array<tableCodeDesc>();
         }
  }


