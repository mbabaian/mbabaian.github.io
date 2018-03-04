console.log('JS file connected!')


// isotope
var $gallery = $('#gallery').isotope({
    // options
    itemSelector: '.col-sm-4 .photo',
    layoutMode: 'masonry',
    masonry: {
        gutter:5
    },
  });

  // always use imagesLoaded when using isotope
  $gallery.imagesLoaded().progress(function() {
      $gallery.isotope('layout');
  })

  // filter content based on id
  var $container = $("#gallery");

  $('.btn').on('click', function() {

    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $(this).addClass('checked');
  });
