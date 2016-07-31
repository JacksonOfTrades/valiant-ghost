var ref = new Firebase("https://vivid-inferno-7673.firebaseio.com/");

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g,'');
}

var postRef = ref.child(slugify(window.location.pathname));

$("#comment").submit(function() {
  postRef.push().set({
    name: $("#name").val(),
    message: $("#message").val(),
    md5Email: md5($("#email").val()),
    postedAt: Firebase.ServerValue.TIMESTAMP
  });

  $("input[type=text], textarea").val("");
  return false;
});