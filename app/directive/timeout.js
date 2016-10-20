export default class timeout{
 constructor(){
   this.restrict="A";
   this.transclude = true;
   this.link: function (scope, element, attr) {
       if (scope.$last === true) {

           $timeout(function () {
               scope.$emit('ngRepeatFinished');
           });
       }
   }
  };
 }
// $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
//         removeLoader();
// });
