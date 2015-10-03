console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

// $(function() {
//   $( ".draggable" ).draggable();
//   $( ".draggable" ).resizable();
//   });


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

function addToPortrait(elementid) {
  var selectableName = "#"+elementid;
  var clone = $(selectableName + " > div").clone(false);
  clone.css({top: 0, left: 0, position:'absolute', width: '300'});
  $("#holder").append(clone);
  clone.draggable();
  clone.find("img").resizable();
}

function clearAll() {

$("#holder > .ui-draggable").remove();
}

function resetPortrait() {
  $("#holder > img").remove();
  $("#holder > .ui-draggable").remove();
}

function save() {

}
