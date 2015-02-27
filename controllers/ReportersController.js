newsPaper.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, dob: $scope.reporterDob, years: $scope.reporterYears  });
    $scope.reporterName = null;
    $scope.reporterDob = null;
    $scope.reporterYears = null;
  }
});
