angular.module("app").directive("closeEditing", function () {

    console.log("close");
  let KEYS = {
    ESCAPE: 27,
  };
  return {
    scope: {
      isEditing: "=",
    },

    link: function (scope, element, attrs) {
      element.on("keyUp", function (e) {
          console.log("ddd");
        if (_.isEqual(e.key, KEYS.ESCAPE)) {
          scope.isEditing = false;
          scope.$apply();
        }
      });
    },
  };
});
