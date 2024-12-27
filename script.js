// DESKTOP       ===================================================================================================================================================

var tl_product_title = gsap.timeline();
var tl_product_image = gsap.timeline();
var tl_product_ingredient = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

const title = document.getElementById("animated-title");
const fullText = "Anti Stretch Mark Body Butter";
const shortText = "A.S.M.B.B.";

tl_product_title.to(
  {},
  {
    scrollTrigger: {
      trigger: ".product-title",
      start: "top top",
      end: "30% top",
      scrub: 5,
    // markers: true,

      onUpdate: (self) => {
        const progress = self.progress;
        const textLength = Math.round(progress * fullText.length);
        const visibleText = fullText.substring(0, textLength) || shortText;
        title.textContent = visibleText;

        if (visibleText === shortText || visibleText.length < fullText.length) {
          title.style.fontSize = "15vh";
          title.style.opacity = 1;
        } else {
          title.style.fontSize = "40px";
          title.style.opacity = 1;
        }
      },
    },
  }
);

tl_product_title.to(title, {
  top: "10%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".product-image",
    start: "top 65%",
    end: "top 50%",
    scrub: 1,
    // markers: true,
  },
});

tl_product_title.to(title, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".product-image",
    start: "top 0%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

const canvas = document.querySelector("#frame");
const context = canvas.getContext("2d");

const frames = {
  currentIndex: 0,
  maxIndex: 18,
};

let imagesLoaded = 0;

const images = [];

function preloadImages() {
  for (var i = 0; i < frames.maxIndex; i++) {
    const imageUrl = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Sequence${i
      .toString()
      .padStart(3, "0")}.png?v=1734495548`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === frames.maxIndex) {
        loadImage(frames.currentIndex);
        startAnimation();
      }
    };
    images.push(img);
  }
}

function loadImage(index) {
  if (index >= 0 && index < frames.maxIndex) {
    const img = images[index];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = 1.5;
    const newWidth = img.width * scale;
    const newHeight = img.height * scale;
    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(img, offsetX, offsetY, newHeight, newHeight);
    frames.currentIndex = index;
  }
}

function startAnimation() {
  tl_product_title = gsap.timeline({
    scrollTrigger: {
      trigger: ".product-image ",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      
    },
  });

  tl_product_title.to(frames, {
    currentIndex: frames.maxIndex,
    onUpdate: function () {
      loadImage(Math.floor(frames.currentIndex));
    },
  });
  tl_product_title.from(".benefits-product li", {
    y: 10,
    duration: 0.5,
    opacity: 0,
    delay: -1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".product-image",
      start: "top 30%",
      end: "top 10%",
      scrub: 1,
      // markers: true
    },
  });
}

preloadImages();

tl_product_ingredient.from(".ingrdient-card", {
  y: 10,
  duration: 0.5,
  opacity: 0,
  delay: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".ingrdient-card",
    start: "top 65%",
    end: "top 50%",
    scrub: 1,
  },
});

// MOBILE       ===================================================================================================================================================

var tl_product_title_m = gsap.timeline();
var tl_product_image_m = gsap.timeline();
var tl_product_ingredient_m = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

const title_m = document.getElementById("animated-title_m");
const fullText_m = "Anti Stretch Mark Body Butter";
const shortText_m = "A.S.M.B.B.";

tl_product_title_m.to(
  {},
  {
    scrollTrigger: {
      trigger: ".product-title_m",
      start: "top top",
      end: "30% top",
      scrub: 5,
      // markers: true,
      onUpdate: (self) => {
        const progress_m = self.progress;
        const textLength_m = Math.round(progress_m * fullText_m.length);
        const visibleText_m =
          fullText_m.substring(0, textLength_m) || shortText_m;
        title_m.textContent = visibleText_m;

        if (
          visibleText_m === shortText_m ||
          visibleText_m.length < fullText_m.length
        ) {
          title_m.style.fontSize = "8vh";
          title_m.style.opacity = 1;
        } else {
          title_m.style.fontSize = "32px";
          title_m.style.opacity = 1;
        }
      },
    },
  }
);

tl_product_title_m.to(title_m, {
  top: "10%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".product-image_m",
    start: "top 65%",
    end: "top 50%",
    scrub: 1,
  },
});

tl_product_title_m.to(title_m, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".product-image_m",
    start: "top 10%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

const canvas_m = document.querySelector("#frame_m");
const context_m = canvas_m.getContext("2d");

const frames_m = {
  currentIndex: 0,
  maxIndex: 18,
};

let imagesLoaded_m = 0;

const images_m = [];

function preloadImages_m() {
  for (var i = 0; i < frames_m.maxIndex; i++) {
    const imageUrl_m = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Sequence${i
      .toString()
      .padStart(3, "0")}.png?v=1734495548`;
    const img_m = new Image();
    img_m.src = imageUrl_m;
    img_m.onload = () => {
      imagesLoaded_m++;
      if (imagesLoaded_m === frames_m.maxIndex) {
        loadImage_m(frames_m.currentIndex);
        startAnimation_m();
      }
    };
    images_m.push(img_m);
  }
}

function loadImage_m(index) {
  if (index >= 0 && index < frames_m.maxIndex) {
    const img_m = images_m[index];
    canvas_m.width = window.innerWidth;
    canvas_m.height = window.innerHeight / 1.8;
    const scaleX_m = canvas_m.width / img_m.width;
    const scaleY_m = canvas_m.height / img_m.height;
    const scale_m = 0.5;
    const newWidth_m = img_m.width * scale_m;
    const newHeight_m = img_m.height * scale_m;
    const offsetX_m = (canvas_m.width - newWidth_m) / 2;
    const offsetY_m = (canvas_m.height - newHeight_m) / 2;
    context_m.clearRect(0, 0, canvas_m.width, canvas_m.height);
    context_m.imageSmoothingEnabled = true;
    context_m.imageSmoothingQuality = "high";
    context_m.drawImage(img_m, offsetX_m, offsetY_m, newHeight_m, newHeight_m);
    frames_m.currentIndex = index;
  }
}

function startAnimation_m() {
  tl_product_title_m = gsap.timeline({
    scrollTrigger: {
      trigger: ".product-image_m ",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      // markers: true
    },
  });

  tl_product_title_m.to(frames_m, {
    currentIndex: frames_m.maxIndex,
    onUpdate: function () {
      loadImage_m(Math.floor(frames_m.currentIndex));
    },
  });

  tl_product_title_m.from(".benefits-product_m li", {
    y: 10,
    duration: 0.5,
    opacity: 0,
    delay: -1,
    stagger: 1,
  
    scrollTrigger: {
      trigger: ".benefits-product_m li",
      start: "top 75%",
      end: "top 55%",
      scrub: 1,
      // markers: true,
    },
  });


  tl_product_title_m.to(".product-image_m", {
    y: -300,
    scrollTrigger: {
      trigger: ".benefits-product_m li",
      start: "top 49%",
      end: "top 30%",
      scrub: 1,
      // markers: true
    },
    })
}

preloadImages_m();



tl_product_ingredient_m.from(".ingrdient-card_m", {
  y: 10,
  duration: 0.5,
  opacity: 0,
  delay: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".ingrdient-card_m",
    start: "top 60%",
    end: "top 40%",
    scrub: 1,
  },
});

// document.querySelectorAll(".ingrdient-card_m").forEach((card) => {
//   gsap.to(card, {
//     scale: 0.7,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: card,
//       start: "top 5%",
//       end: "bottom 5%",
//       // markers: true,
//       scrub: true,
//     },
//   });
// });