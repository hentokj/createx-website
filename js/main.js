$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn__active');
        $(this).addClass('directions__filter-btn__active');
    })

})