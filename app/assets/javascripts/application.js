// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require bootstrap-datepicker
//= require jquery.geocomplete
//= require gmaps/google
//= require bootstrapValidator.min
//= require_tree .

$(function() {
$("#geo-input").geocomplete();
});  

$(function() {
    var flashCallback;
    flashCallback = function() {
        return $(".alert").fadeOut();
    };
    $(".alert").bind('click', (function(_this) {
        return function(ev) {
            return $(".alert").fadeOut();
        };
    })(this));
    return setTimeout(flashCallback, 2000);
});

 $(document).ready(function() {
    var maxHeight = 0;          
    $(".thumbnail").each(function(){
      if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });         
    $(".thumbnail").height(maxHeight);
  });


