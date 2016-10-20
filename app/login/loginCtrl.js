export default class loginCtrl {
/*@ngInject;*/
constructor($http, $scope , $location , factDetails , $localStorage , $rootScope) {
this.http = $http;
this.scope=$scope;
this.loc = $location;
this.ls = $localStorage;
this.rs = $rootScope;
this.ls.tju=0;
this.rs.tju=0;
this.factDetails=factDetails;
console.log("login cons");
}
submit(){
  this.factDetails.auth(this.scope.uname, this.scope.psw).success(res => {
    this.scope.result= res;
  if(this.scope.result.status=="200"){
      this.loc.path("detail");
      console.log("logged in");
      this.ls.tju=1;
      this.rs.tju=1;
      this.ls.out=0;
    }
    else {
        alert("!!INVALID USER!!");
      }
      });
    }


  }
