// side baar menu 
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// Sidebar Menu Toggle Check
if (menuBtn && closeBtn && sidebar) {
    // Open Sidebar
    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    // Close Sidebar
    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
}


// parallax

// Select the class bubble
time = document.getElementsByClassName('bubbles')[0];
if (screen.width < 400) {

    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')
 
}
window.addEventListener('scroll', function () {
    let value = window.scrollY;   //Get Scroll Value (Mobile - High)
    text.style.top = 50 + value * -0.2 + '%';
 rocks.style.top = value * -0.14 + 'px';
    explore.style.marginTop = value * 1.5 + 'px';
    forest.style.top = value * -0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px'
})

// time for web
function updateNepalTime() {
    const timeElement = document.getElementById('nepal-time');
    if (timeElement) {
        const nepalTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }));
        const hours = nepalTime.getHours() % 12 || 12;
        const minutes = nepalTime.getMinutes().toString().padStart(2, '0');
        const ampm = nepalTime.getHours() >= 12 ? 'PM' : 'AM';
        timeElement.innerText = `${hours}:${minutes} ${ampm}`;
    }
}

// Initial call and interval for updating time
updateNepalTime();
setInterval(updateNepalTime, 60000);


//  product card
        // Change The Picture and Associated Element Color when Color Options Are Clicked.
        $(".product-colors span").click(function() {
            $(".product-colors span").removeClass("active");
            $(this).addClass("active");
            $(".active").css("border-color", $(this).attr("data-color-sec"))
            $(".container-one").css("background", $(this).attr("data-color-primary"));
            $(".contentt h2").css("color", $(this).attr("data-color-sec"));
            $(".contentt h3").css("color", $(this).attr("data-color-sec"));
            $(".container-one .imgBx").css("background", $(this).attr("data-color-sec"));
          
            $(".imgBx img").attr('src', $(this).attr("data-pic"));
        });

        // image lslider
         

// image slider 2
$(document).ready(function () {

    // If the comparison slider is present on the page lets initialise it, this is good you will include this in the main js to prevent the code from running when not needed
    if ($(".comparison-slider")[0]) {
      let compSlider = $(".comparison-slider");
  
      //let's loop through the sliders and initialise each of them
      compSlider.each(function () {
        let compSliderWidth = $(this).width() + "px";
        $(this).find(".resize img").css({ width: compSliderWidth });
        drags($(this).find(".divider"), $(this).find(".resize"), $(this));
      });
  
      //if the user resizes the windows lets update our variables and resize our images
      $(window).on("resize", function () {
        let compSliderWidth = compSlider.width() + "px";
        compSlider.find(".resize img").css({ width: compSliderWidth });
      });
    }
  });
  
  // This is where all the magic happens
  // This is a modified version of the pen from Ege Görgülü - https://codepen.io/bamf/pen/jEpxOX - and you should check it out too.
  function drags(dragElement, resizeElement, container) {
  
    // This creates a variable that detects if the user is using touch input insted of the mouse.
    let touched = false;
    window.addEventListener('touchstart', function () {
      touched = true;
    });
    window.addEventListener('touchend', function () {
      touched = false;
    });
  
    // clicp the image and move the slider on interaction with the mouse or the touch input
    dragElement.on("mousedown touchstart", function (e) {
  
      //add classes to the emelents - good for css animations if you need it to
      dragElement.addClass("draggable");
      resizeElement.addClass("resizable");
      //create vars
      let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
      let dragWidth = dragElement.outerWidth();
      let posX = dragElement.offset().left + dragWidth - startX;
      let containerOffset = container.offset().left;
      let containerWidth = container.outerWidth();
      let minLeft = containerOffset + 10;
      let maxLeft = containerOffset + containerWidth - dragWidth - 10;
  
      //add event listner on the divider emelent
      dragElement.parents().on("mousemove touchmove", function (e) {
  
        // if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
        if (touched === false) {
          e.preventDefault();
        }
  
        let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let leftValue = moveX + posX - dragWidth;
  
        // stop the divider from going over the limits of the container
        if (leftValue < minLeft) {
          leftValue = minLeft;
        } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
        }
  
        let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";
  
        $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
          $(this).removeClass("draggable");
          resizeElement.removeClass("resizable");
        });
  
        $(".resizable").css("width", widthValue);
  
      }).on("mouseup touchend touchcancel", function () {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
  
      });
  
    }).on("mouseup touchend touchcancel", function (e) {
      // stop clicping the image and move the slider
      dragElement.removeClass("draggable");
      resizeElement.removeClass("resizable");
  
    });
  
  }
  
   
  
  // music player
  const musicPlayer = document.getElementById("musicPlayer");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const musicIcon = document.getElementById("musicIcon");

  playButton.addEventListener("click", () => {
    musicPlayer.play();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
    musicIcon.classList.add("spin"); // Add spin effect
  });

  pauseButton.addEventListener("click", () => {
    musicPlayer.pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    musicIcon.classList.remove("spin"); // Remove spin effect
  });
  
  