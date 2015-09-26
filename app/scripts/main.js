console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
$(function() {
  $( '#draggable' ).draggable;
  // $( "#draggable" ).resizable();
});

function showDescription(elementid) {
  console.log("show " + elementid);
  var allids = ["#hiddenText1", "#hiddenText2", "#hiddenText3", "#hiddenText4",
                "#hiddenText5", "#hiddenText6", "#hiddenText7", "#hiddenText8", "#hiddenText9"];
  for (var i = 0; i < allids.length; i++) {
    var e = $(allids[i]);
    e.hide();
  }

  //show the selected one
  var selectableName = "#"+elementid;
  $(selectableName).show();
}
