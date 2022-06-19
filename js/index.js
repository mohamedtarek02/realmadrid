$(document).ready(function () {
  // start of tool box

  $(".option-box").on("mouseenter", function () {
    $(this).animate(
      {
        left: "-35px",
      },
      600
    );
  });

  $(".option-box").on("mouseleave", function () {
    $(this).animate(
      {
        left: "-180px",
      },
      600
    );
  });

  $(".sun").on("click", function () {
    $("p , h2 , div").css("--dark-color", $(this).data("type"));

    $("body").css("--white-color", $(this).data("body"));

    $(this).hide();

    $(".moon").show();

    $(".moon").css("display", "block");
  });

  $(".moon").on("click", function () {
    $("p , h2 , div").css("--dark-color", $(this).data("type"));

    $("body").css("--white-color", $(this).data("body"));

    $(this).hide();

    $(".sun").show();
  });

  $(".color-option ul li").click(function () {
    $("link[href*='style']").attr("href", $(this).attr("data-value"));
  });

  // end of tool box

  //start of crousel

  $(".carousel").carousel({
    interval: 6000,
  });

  //end of crousel

  //start of scroll top

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
      $(".scroll-top").show();
    } else {
      $(".scroll-top").hide();
    }
  });

  $(".scroll-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 600);
  });

  //end of scroll top

  // start of nice scroll

  // $(function() {
  //     $("html").niceScroll({
  //         cursorcolor:"black",
  //         cursorwidth:"10px"
  //     });
  // });
  // end of nice scroll
});

// start of loading page

$(window).load(function () {
  $("body").css("overflow", "auto");

  $(".loading").fadeOut(2000);
});
//end of loading page
