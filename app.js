var newsPaper = angular.module('newsPaper', ['ui.router']);

newsPaper.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

//   $stateProvider.state('courses', {
//     url: "/courses",
//     templateUrl: "partials/courses.html",
//     controller: 'CoursesCtrl'
//   });
//
//   $stateProvider.state('courses.students', {
//     url: "/:courseId",
//     templateUrl: "partials/courses.students.html",
//     controller: 'StudentsCtrl'
//   });
// });
