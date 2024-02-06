function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/components/member/skills-member.html',
    scope: {
      member: '='
    },
    link: function(scope, element, attrs) {
      scope.skills = scope.member.skills;
    }
  };
}