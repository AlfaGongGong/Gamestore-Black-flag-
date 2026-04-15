
// hamburger menu toggle (used on game page and cart page)
function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// button check me out homepage
$('#fB').mouseenter(function () {
  $("div.icon").append("<span class='hideMe' id='socialF'><a href='http://www.facebook.com'>Facebook</a></span>");
});

$('#fB').mouseleave(function () {
  $("#socialF").remove();
});
// button for cattegories homepage

$('button.btn').each(function () {
  let originalText = $(this).text();
  $(this).mouseenter(function () {
    $(this).text('Add to shopping bag');
  }).mouseleave(function () {
    $(this).text(originalText);
  });
});
// thumbs enlargement on game page
function viewClick() {
  $('.screenShot').click(function () {
    let clickedElement = $(this).find('img');

    let enlargedDiv = $('<div>').css({
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'height': '400px',
      'width': '400px',
    });

    let copyElement = clickedElement.clone();
    enlargedDiv.append(copyElement);
    $(copyElement).css({
      'height': '100%',
      'width': 'auto'
    });
    $('#enlargedView').empty().append(enlargedDiv);
  });
};
// buy game/add to cart button
$('button.btnBuy').each(function () {
  let originalText = $(this).text();
  $(this).mouseenter(function () {
    $(this).text('Add to shopping bag');
  }).mouseleave(function () {
    $(this).text(originalText);
  });
});