
setTimeout(function() {
    $('#splashscreen').modal();
}, 3000);



const btnClose = document.querySelector('.btnClose');
const modalWrapper = document.querySelector('.modalWrapper');
const body = document.body;
btnClose.addEventListener('click', () => {
  body.classList.remove('modal-open')
  modalWrapper.remove()
})
if (!readCookie('hide')) {
  $('#splashscreen').show();
  $('body').addClass('modal-open');

} else {
  $('#splashscreen').hide();
  $('body').removeClass('modal-open');
}

$(document).ready(function () {



  // Add the event that closes the popup and sets the cookie that tells us to
  // not show it again until one day has passed.
  $('.btnClose').click(function () {
    $('#splashscreen').hide();
    createCookie('hide', true, 1)
    return false;
  });

});

// ---
// And some generic cookie logic
// ---
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  }
  else var expires = "";
  document.cookie = name + "=" + value + expires + ";path=/;";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}
