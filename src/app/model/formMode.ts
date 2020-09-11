
export class formMode{

  IsNewMode:boolean=false ;  
  IsSaveMode:boolean=false ;
  IsEditMode:boolean=false ;
  IsDeleteMode:boolean=false ;

  get NewMode():boolean{
    return this.IsNewMode;
}

set NewMode(value: boolean){
    this.IsNewMode = value;
}

get SaveMode():boolean{
    return this.IsSaveMode;
}

set SaveMode(value: boolean){
    this.IsSaveMode = value;
}

  get EditMode():boolean{
      return this.IsEditMode;
  }

  set EdiMode(value: boolean){
      this.IsEditMode = value;
  }

  get DeleteMode():boolean{
    return this.IsDeleteMode;
}

set DeleteMode(value: boolean){
    this.IsDeleteMode = value;
}

}