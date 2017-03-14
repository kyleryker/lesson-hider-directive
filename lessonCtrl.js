angular.module('directivePractice').controller('mainCtrl', function($scope, mainService){

$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
$scope.test = 'Two-way data Binding!'
$scope.announceDay = function(lesson, day){
  if (day === undefined){
    alert(lesson + ' is not active yet')
  }
  alert(lesson + ' is active on ' + day);
}
})
