/**
 * Created by Staya_000 on 11/8/2016.
 */
app.controller('recommendation_controller', ['$scope', function($scope) {
    $scope.recommendations = [
        {
            title: 'Recommendation 1',
            goal: '15'
        },

        {
            title: 'Recommendation 2',
            goal: '20'
        },

        {
            title: 'Recommendation 3',
            goal: '18'
        },

        {
            title: 'Recommendation 4',
            goal: '25'
        },

        {
            title: 'Recommendation 5',
            goal: '5'
        },

        {
            title: 'Recommendation 6',
            goal: '10'
        }
    ];
}]);