/* See license.txt for terms of usage */

function a() {

  $(document).ready(function() {
    //console.log("Loaded!");

    $(window).click(function() {
      //console.log("Handler for .click() called.");
    });

    $("#jquery-test1").click(function() {
      console.log("1. Statics handler for jquery-test button.");
    });
  });

  function createListener() {
    $("#jquery-test2").on("click", function() {
      console.log("2. Dynamic handler for jquery-test button.");
    });
  }
}


function b() {
  a();
}

//b();
