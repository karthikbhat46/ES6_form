export default class updatectrl {
/*@ngInject;*/
constructor($http, $scope , $location , factDetails , $routeParams , $rootScope , $localStorage) {
  this.http = $http;
  this.scope=$scope;
  this.loc = $location;
  this.rs=$rootScope;
  this.rp=$routeParams;
  this.ls=$localStorage;
  this.scope.dis=true;
  this.factDetails=factDetails;
  if(this.factDetails.funout()){
  this.scope.flag=this.ls.flag;
  if(this.ls.flag){
    console.log("sdgfeg");
      this.factDetails.det(this.rp.id).success( result => {
    if(result.body.gender=="0"){
      result.body.gender="FEMALE";
    }
    else if (result.body.gender=="1") {
      result.body.gender="MALE";
    }
    this.scope.detobj=result.body;
  });
}
}
else{
  this.loc.path('/');
}
  }
  updat(){
    if(this.scope.detobj.gender=="MALE"){ this.scope.detobj.gender= "1";}
    else if (this.scope.detobj.gender=="FEMALE") {
      this.scope.detobj.gender= "0";
    }
    this.factDetails.servupdate(this.scope.detobj.cid, this.scope.detobj.first_name, this.scope.detobj.last_name,
                              this.scope.detobj.gender, this.scope.detobj.designation, this.scope.detobj.description)
                              .success(res => {
      console.log(res);
      if(res.status==200){
        console.log("UPDATED");
        this.loc.path("detail");
      }
      else{
        console.log("UPDATE UNSUCCESSUL" , res.message);
      }
        });
      }

      insert(){
        if(this.scope.detobj.gender=="MALE"){ this.scope.detobj.gender= "1";}
        else if (this.scope.detobj.gender=="FEMALE") {
          this.scope.detobj.gender= "0";
        }
        this.factDetails.servinsert(this.scope.detobj.first_name, this.scope.detobj.last_name,
                                  this.scope.detobj.gender, this.scope.detobj.designation, this.scope.detobj.description)
                                  .success(res => {
          console.log(res);
          if(res.status==200){
            console.log("INSERTED");
            this.loc.path("detail");
          }
          else{
            console.log("INSERT UNSUCCESSUL" , res.message);
          }
            });
    }
}
