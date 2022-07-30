console.log('JS file connected!')

var $container = $('#gallery');

var $gallery = $('#gallery').isotope({

    itemSelector: '.photo',
    layoutMode: 'masonry',
    masonry: {
        gutter: 10,
        columnWidth: 300,
        fitWidth: true // need fitWidth to be true in order to center items on page
    },
    filter: '*'
});

// layout isotope after all images are loaded
$gallery.imagesLoaded(function() {
    $gallery.isotope('layout');
});


// filter content based on one factor
$('.btn').on('click', function() {
    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({ filter: filterValue });
});
