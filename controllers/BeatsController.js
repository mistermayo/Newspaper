newsPaper.controller('BeatsCtrl', function BeatsCtrl($scope, BeatsFactory) {
  $scope.beats = BeatsFactory.courses;
  $scope.BeatsFactory = BeatsFactory;
});
