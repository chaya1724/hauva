export class man {
    ID : number=0;
      firstName:string="";
      lastname :string="";
      Address  :string="";
      Children :man[]=[];
  
      constructor(id : number,firstName: string,lastname: string,Address: string,Children: man[]) {
        this.ID = id;
        this.firstName = firstName; 
        this.lastname = lastname; 
        this.Address = Address; 
        this.Children = Children; 
      }
  }