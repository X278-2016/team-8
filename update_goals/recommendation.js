/**
 * Created by Staya_000 on 11/8/2016.
 */

app.directive('recommendation', function() {
    return {
        restrict: 'E',
        scope: {
            title: '=' // recommendation number
        },
        templateUrl: 'js/directives/recommendation.html'   //the path in this line will need to be changed
    };
});