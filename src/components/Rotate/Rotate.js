// var img = $(".pointer");

// var offset = img.offset();
// var mouseDown = false;
// function mouse(evt) {
//   if (mouseDown == true) {
//     var center_x = offset.left + img.width() / 2;
//     var center_y = offset.top + img.height() / 2;
//     var mouse_x = evt.pageX;
//     var mouse_y = evt.pageY;
//     var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
//     var degree = radians * (180 / Math.PI) * -1 + 90;
//     img.css("transform", "rotate(" + degree + "deg)");
//   }
// }

// img.mousedown(function(e) {
//   mouseDown = true;
//   $(document).mousemove(mouse);
// });
// $(document).mouseup(function(e) {
//   mouseDown = false;
// });

export const Rotate = (e, mouseDown) => {
  if (mouseDown == true) {
    var center_x = offset.left + img.width() / 2;
    var center_y = offset.top + img.height() / 2;
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = radians * (180 / Math.PI) * -1 + 90;
    img.css("transform", "rotate(" + degree + "deg)");
  }
};
