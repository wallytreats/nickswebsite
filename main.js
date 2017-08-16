
$('.rotated').on("click", function() {
    $('.notRotated').removeClass('notRotated').addClass('rotated');
    $(this).removeClass('rotated');
    $(this).addClass('notRotated');
});
