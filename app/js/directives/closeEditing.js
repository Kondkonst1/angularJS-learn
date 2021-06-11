angular.module("app").directive("closeEditing", function () {

  let KEYS = {
    ESCAPE: 'Escape',
  };
  return {
    scope: {
      isEditing: "=",
    },

    link: function (scope, element, attrs) {
     
      element.on("keyup", function (e) {
     console.log(e.key);
        if (_.isEqual(e.key, KEYS.ESCAPE)) {
          scope.isEditing = false;
          scope.$apply();
        }
      });
    },
  };
});
