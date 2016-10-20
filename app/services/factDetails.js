export default class factDetails {
/*@ngInject;*/
  constructor($http , $rootScope , $localStorage) {
  this.http = $http;
  this.rs = $rootScope;
  this.ls = $localStorage;
  console.log("empdet cons", this.http);

  }
  funout(){
    if(this.ls.out==0){
    this.rs.tju=1;
    this.ls.tju=1;
    return true;
  }
  else return false;
  }
  getdata() {
		return this.http.get('http://192.168.121.232/employee.php');
	}
  auth(uname,psw){
     return this.http({method:'POST',url:'http://192.168.121.232/employee.php', headers:{'Content-Type': 'application/json'}, data:{"username":uname, "password":psw}});
 }
  delet(id){
    return this.http({method:'DELETE',url:'http://192.168.121.232/employee.php', headers:{'Content-Type': 'application/json'}, data:{"cid":id}});
 }
  servupdate(id,fname,lname,gender,desig,descrip){
    console.log(id,fname,lname,gender,desig,descrip);
    return this.http({method:'PUT',url:'http://192.168.121.232/employee.php', headers:{'Content-Type': 'application/json'}, data:{"cid":id, "first_name":fname , "last_name":lname , "gender" : gender , "designation" : desig , "description" : descrip}});
 }
 det(id){
   return this.http({method:'GET' , url:'http://192.168.121.232/employee.php?cid='+id});
 }
   servinsert(fname,lname,gender,desig,descrip){
     console.log(fname,lname,gender,desig,descrip);
     return this.http({method:'POST',url:'http://192.168.121.232/employee.php', headers:{'Content-Type': 'application/json'}, data:{"first_name":fname , "last_name":lname , "gender" : gender , "designation" : desig , "description" : descrip}});
  }
}
