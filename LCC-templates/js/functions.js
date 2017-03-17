// Toggle search box
$(".header-global-search-toggle").click(function ( event ) {
	event.preventDefault();
    $(this).toggleClass("active");
    $("#header-global-search").slideToggle("fast");
    if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', 'true');
        $(this).find('.offscreen').text('Close search box layer');
        $(this).attr('title', 'Close search box');
        $("#header-global-search").attr('aria-hidden', 'false');
      }
      else {
        $(this).attr('aria-expanded', 'false');
        $(this).find('.offscreen').text('Open search box layer');
        $(this).attr('title', 'Open search box');
        $("#header-global-search").attr('aria-hidden', 'true');
    }
});

// Toggle hidden content - main navigation
$(".nav-site .content-hidden-header").click(function ( event ) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".header-global-search-toggle").toggle().removeClass("active").attr('aria-expanded', 'false').attr('title', 'Open search box').find('.offscreen').text('Open search box layer');
    $("#header-global-search").hide();
    if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', 'true');
        $(this).find('.offscreen').text('Close site ');
        $(this).attr('title', 'Close site menu');
        $("#nav-site-menu").attr('aria-hidden', 'false');
      }
      else {
        $(this).attr('aria-expanded', 'false');
        $(this).find('.offscreen').text('Open site ');
        $(this).attr('title', 'Open site menu');
        $("#nav-site-menu").attr('aria-hidden', 'true');
    }
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        $("#nav-site-menu").toggle();
    } else {
        $("#nav-site-menu").slideToggle("fast");
    }
});

// Hide main navigation
$(".nav-site-hide").click(function ( event ) {
    event.preventDefault();
    $("#nav-site-menu").attr('aria-hidden', 'true');
    $(".nav-site .content-hidden-header").toggleClass("active").attr('aria-expanded', 'false').attr('title', 'Open site menu').find('.offscreen').text('Open site ');
    $(".header-global-search-toggle").toggle().removeClass("active").attr('aria-expanded', 'false').attr('title', 'Open search box').find('.offscreen').text('Open search box layer');
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        $("#nav-site-menu").hide();
    } else {
        $("#nav-site-menu").hide("fast");
    }
});

// Toggle hidden content - everything in <main>
$("main a.content-hidden-header, main .content-hidden-header a").click(function ( event ) {
    event.preventDefault();
    // Shows the next occurance of .hidden - does not use id/aria attributes
    //$(this).toggleClass("active").next(".hidden").slideToggle("fast");
    $(this).toggleClass("active");
    // Shows the id with the same text as the aria-controls attribute
    $('#'+$(this).attr('aria-controls')).slideToggle("fast");
    if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', 'true');
        $(this).find('.offscreen').text('Hide content');
        $('#'+$(this).attr('aria-controls')).attr('aria-hidden', 'false');
      }
      else {
        $(this).attr('aria-expanded', 'false');
        $(this).find('.offscreen').text('Expand content');
        $('#'+$(this).attr('aria-controls')).attr('aria-hidden', 'true');
    }
});

// Toggle form panel highlight
$("fieldset.panel .content-hidden-header").click(function ( event ) {
    event.preventDefault();
    $(this).parents(".panel").toggleClass('panel-highlight');
});

// Hidden content toggle 'more'
$(".show-hidden").click(function ( event ) {
  event.preventDefault();
  $(this).hide();
  $('#'+$(this).attr('aria-controls')).slideToggle("fast").attr('aria-hidden', 'false').find(".hide-hidden").focus();
});
// Hidden content toggle 'less'
$(".hide-hidden").click(function ( event ) {
  event.preventDefault();
  $('#'+$(this).attr('aria-controls')).hide().attr('aria-hidden', 'true');
  $('[aria-controls='+ $(this).attr('aria-controls') + ']').show().focus();
});

// Back to top reveal
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.button-top').css('opacity', '1');
    } else {
        $('.button-top').css('opacity', '0');
    }
});
// Back to top set/remove target focus
// $(".button-top").click(function ( event ) {
//     $('#top').attr('tabindex', '0').focus();
// });
// $("#top").blur(function() {
//      $(this).removeAttr('tabindex');
// });

// Close notification
$(".button-notification").click(function ( event ) {
	event.preventDefault();
	$(this).closest(".panel-notification").slideToggle("fast");
});

// Map resize
$(".button-map-size").click(function ( event ) {
  event.preventDefault();
  $(this).closest(".embed").toggleClass("active");
  if ($(this).closest(".embed").hasClass("active")) {
        $(this).find('.offscreen').text('Collapse map of search results');
        $(this).attr('title', 'Collapse map of search results');
      }
      else {
        $(this).find('.offscreen').text('Expand map of search results');
        $(this).attr('title', 'Expand map of search results');
    }
});

// Sticky-Kit: http://leafo.net/sticky-kit/
$(function() {
    $("[data-sticky]").css("margin-top", "0").stick_in_parent({
      parent: "main .container",
      offset_top: 14
    });
});

// Datepicker: http://freqdec.github.io/datePicker/
datePickerController.createDatePicker({
    // Associate the text input to a DD/MM/YYYY date format
    formElements: {"datepicker01":"%d/%m/%Y"},
    noFadeEffect: true,
    noTodayButton: true
});

// Autocomplete: http://jqueryui.com/autocomplete/
// Global search
$(function() {
    $( "#temp022" ).autocomplete({
      source: [
        { value: "Adult care", url: 'http://www.google.com' }, 
        { value: "Business and consumers", url: 'http://www.yahoo.com' },
        { value: "Education and children", url: 'http://www.bing.com' },
        { value: "Environment and planning", url: 'http://www.twitter.com' },
        { value: "Jobs and volunteering", url: 'http://www.facebook.com' },
        { value: "Leisure and community", url: 'http://www.flickr.com' },
        { value: "Registrars", url: 'http://www.spotify.com' },
        { value: "Roads and travel", url: 'http://www.gov.uk' }
      ],
      appendTo: ".header-global-search .form-input-iconbuttoninner",
      select: function (event, ui) {
            window.location = ui.item.url;
        }
    });
});
// Form
$(function() {
    $( "#temp025" ).autocomplete({
      source: [
        "Adult care",
        "Business and consumers",
        "Education and children",
        "Environment and planning",
        "Jobs and volunteering",
        "Leisure and community",
        "Registrars",
        "Roads and travel"
      ],
      appendTo: "#autocomplete"
    });
});

// Smooth scroll anchor links: https://github.com/cferdinandi/smooth-scroll
smoothScroll.init();