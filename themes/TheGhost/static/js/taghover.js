(function() {
  $("document").ready(function() {
    return $("p.hover").hover(function() {
      return $(".tags").slideToggle;
    });
  });

}).call(this);
