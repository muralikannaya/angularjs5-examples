console.clear();

var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.people = [
    { id: '1', firstName: 'Charles', lastName: 'Charlston' },
    { id: '2', firstName: 'Foo', lastName: 'BarStone' },
    { id: '3', firstName: 'Bar', lastName: 'Foostone' },
    { id: '4', firstName: 'ABC', lastName: 'FooBar' },];
  
  $scope.peopleProperties = [
    {id: "1", name: "firstName", label: "First Name"}, 
    {id: "2", name: "lastName", label: "Last Name"},
    {id: "3", name: "id", label: "ID"},
  ];
  
  $scope.filter = {$: undefined};
 
  $scope.setFilter = function(){
    $scope.filter = {};
   
    $scope.filter[$scope.selectedPropertyOption || '$'] = $scope.searchText;
  };
});
