$("button").click( function(){
  var src = $(".reloadMe").attr('src');

  // Reload the script
  $(".reloadMe").attr('src', src.split('?')[0] + "?" + Math.floor(Math.random()* 10000000));
  
  // Reload the div
  $("#mydiv").load(location.href + " .mydiv")
});