export default class detailCtrl {
/*@ngInject;*/
constructor($http, $scope , $location , factDetails , $rootScope , $localStorage , $timeout , $interval) {
this.http = $http;
this.scope=$scope;
this.loc = $location;
this.rs=$rootScope;
this.ls=$localStorage;
this.to=$timeout;
this.interval=$interval;
this.temp=[];
this.scope.check=false;
this.scope.loading="CREATE";
this.factDetails= factDetails;
if(this.factDetails.funout()){
factDetails.getdata().success(res => {
  this.scope.result= res.body;
  this.scope.box=[];
  for(let x=0; x<this.scope.result.length; x++){
    this.scope.box[x]=false;
  }
  for(var x in this.scope.result){
  if(this.scope.result[x].gender== "0"){
    this.scope.result[x].gender="FEMALE";
  }
  else if (this.scope.result[x].gender== "1") {
    this.scope.result[x].gender="MALE";
  }
}});
}
else{
  this.loc.path('/');
}
}

  deleteobj(id){
    for(var x in  this.scope.result){
        if(this.scope.result[x].cid==id){
        var name=this.scope.result[x].first_name;
        console.log(name);
        }
      }
      var result=confirm('Are you sure you want to delete'+"  "+ name + "'s record?");
    if(result==true){
      // this.loc.path("detail");
      this.factDetails.delet(id).success( res => {
      if(res.status==200){
      console.log("DELETED" , id);
      this.loc.path("newdetail");
    }
    else{
      alert("FAILED to delete");
    }
  }
  )}
  }

  insert(){
    this.scope.loading="LOADING...";
    this.to(()=>{
      this.ls.flag=0;
      this.loc.path("insert");
      this.scope.loading="CREATE";
    },2000);
  }

  update(){
    this.ls.flag=1;
  }
  logout(){
    console.log("Logout");
    this.ls.out=1;
    this.loc.path('/');
  }
  check(id){
    for(let x=0; x<this.scope.result.length; x++){
    if(this.scope.box[x]==true){
          // this.scope.b=!this.scope.b;
          this.scope.b=false;
          console.log(this.scope.b);
      }
      // else{
      //   this.scope.b=!this.scope.b;
      // }
    }
    console.log("hello");
    if(this.scope.check==false){
      this.scope.box[id]=true;
      console.log("check is false",this.scope.box[id]);
    }
    else{

      this.scope.box[id]=!this.scope.box[id];
      console.log(this.scope.box[id]);
    }
  }
  select(){
    if(!this.sel()){
    for(let x=0; x<this.scope.result.length; x++){
      this.scope.box[x]=true;
    }

  }
  else{
    for(let x=0; x<this.scope.result.length; x++){
      this.scope.box[x]=false;
    }
  }
  }

  deletebox(){
    var x=confirm("Are you sure you want to delete these items??");
    if(x){
    // for(let x=this.scope.result.length-1; x>=0; x--){
    //   if(this.scope.box[x]==true){
    //     // this.loc.path("detail");
    //     this.factDetails.delet(this.scope.result[x].cid).success( res => {
    //     if(res.status==200){
    //     console.log("DELETED" , this.scope.result[x].cid);
    //     this.loc.path("newdetail");
    //   }
    //   else{
    //     alert("FAILED to delete");
    //   }
    // })
    //   }
    //   delete this.scope.box[x];
    // }
    var k=0;
    for(var x=this.scope.result.length-1; x>=0; x--){
      if(this.scope.box[x]==true){
        console.log(this.scope.result[x].cid);
        this.temp.push(this.scope.result[x].cid);
      }
    }
    var i=0;
    console.log(this.temp);

    var myTimer =this.interval(()=>{
       var j=i++;
      if(!this.temp[j]){
      	console.log('Now clear interval');
      	console.log(this.temp);
       this.interval.cancel(myTimer);
      }
      else{
        console.log("delete");
      	alert(this.temp[j] + " is being deleted");

       this.factDetails.delet(this.temp[j]).success( res => {
           if(res.status==200){
           console.log("DELETED" , this.temp[j]);
           this.loc.path("newdetail");
         }
         else{
           alert("FAILED to delete");
         }
       })
        delete this.temp[j];
      }
      }, 2000)
     console.log(this.temp);


  }
}
cancel(){
  // this.loc.path("newdetail");
  this.scope.check=false;
  for(let x=this.scope.result.length-1; x>=0; x--){
    this.scope.box[x]=false;
  }
}
double(){
  this.scope.check=true;
}
but(){
  for(let x=this.scope.result.length-1; x>=0; x--){
    if(this.scope.box[x]==true){
      return false;
    }
  }
    return true;
}

sel(){
  this.count=0;
  for(let x=this.scope.result.length-1; x>=0; x--){
    if(this.scope.box[x]==true){
      this.count++;
    }
  }
  console.log("count is",this.count);
  if(this.count==this.scope.result.length){
    return true;
  }
  else{
    return false;
  }
}
}
