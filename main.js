var rotation = 90;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
};

$('.rotated').click(function() {
  if (rotation === 90){
    rotation = 0;
    $(this).rotate(rotation);
    $(this).css({
      left: '50px',
      opacity: '.5',
      height: '650px',
      width: '950px',
      top: '50px'
    });
  } else {
    rotation = 90;
    $(this).rotate(rotation);
    $(this).css({
      left: '1000px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  }
});
