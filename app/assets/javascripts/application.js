// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){

  $(".coord").click(function(){
      $(this).css("background-color", "red");
      }, function(){
      $(this).css("background-color", "blue");
  });


  $(".set_board td.coord").click(function(){
      $(this).css("background-color", "green");
      $(this).addClass("clicked");
      var clicked_coordinate = ($(this).data("coordinate"));
      console.log($(this).data("id"));
      $(".coordinate_box .pasta").val(clicked_coordinate);
  });

 $("form #ships").click(function(){
      // var form = $(this)
      // var carrier = form.children("#carrier")

      console.log(this);
 })



});

