const JS_TEXT_LINE_ONE   = "Hello, my name is Maria Sol Gosende".trim();
const JS_TEXT_LINE_TWO   = "And this is my step 1 on becoming a Software Engineer".trim();
const JS_TYPING_SPEED_MS = 70;
const JS_DELAY_BETWEEN_LINES_MS = 800;

const JSTextLineOneEl = document.getElementById("text1");
const JSTextLineTwoEl = document.getElementById("text2");
const JSCursorOneEl   = document.getElementById("cursor1");
const JSCursorTwoEl   = document.getElementById("cursor2");
const JSCursorFollow  = document.getElementById("cursor-follow");
const JSMobileGallery = document.getElementById("mobile-gallery");

const imageFrames = [
    { src: "assets/keys/m.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/s.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/p.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/g.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/o.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/s1.png", tipX: 48, tipY: 20 },
    { src: "assets/keys/e.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/n.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/d.png",  tipX: 48, tipY: 20 },
    { src: "assets/keys/e1.png", tipX: 48, tipY: 20 }
];

function JSShowCursor(el)  { if (el) el.classList.add("is-visible"); }
function JSHideCursor(el)  { if (el) el.classList.remove("is-visible"); }

(function JSTypewriter() {
  if (!JSTextLineOneEl || !JSTextLineTwoEl) return; 

  let line1Index = 0;
  let line2Index = 0;

  JSShowCursor(JSCursorOneEl);
  JSHideCursor(JSCursorTwoEl);

  function typeLineOne() {
    if (line1Index < JS_TEXT_LINE_ONE.length) {
      JSTextLineOneEl.textContent += JS_TEXT_LINE_ONE.charAt(line1Index++);
      setTimeout(typeLineOne, JS_TYPING_SPEED_MS);
    } else {
      JSHideCursor(JSCursorOneEl);
      JSShowCursor(JSCursorTwoEl);
      setTimeout(typeLineTwo, JS_DELAY_BETWEEN_LINES_MS);
    }
  }

  function typeLineTwo() {
    JSShowCursor(JSCursorTwoEl);
    if (line2Index < JS_TEXT_LINE_TWO.length) {
      JSTextLineTwoEl.textContent += JS_TEXT_LINE_TWO.charAt(line2Index++);
      setTimeout(typeLineTwo, JS_TYPING_SPEED_MS);
    } else {
      JSShowCursor(JSCursorTwoEl);
      document.dispatchEvent(new CustomEvent("typing:finished"));
    }
  }

  setTimeout(typeLineOne, 500);
})();

(function JSImageArchitecture() {

    if (JSCursorFollow) {
        // EL TAMAÑO AHORA ES DINÁMICO Y SE CONTROLA DESDE SASS

        imageFrames.forEach(f => { const i = new Image(); i.src = f.src; });

        let frameIndex = 0;
        function applyFrame(i) {
          const f = imageFrames[i % imageFrames.length];
          JSCursorFollow.src = f.src;
          document.documentElement.style.setProperty("--tip-x", (f.tipX || 0) + "px");
          document.documentElement.style.setProperty("--tip-y", (f.tipY || 0) + "px");
        }
        applyFrame(frameIndex);

        let posX = 0, posY = 0;
        let targetX = innerWidth * 0.85, targetY = innerHeight * 0.2;
        const followSpeed = 0.25;
        const stepDistance = 14;
        let lastMouseX = targetX, lastMouseY = targetY, accum = 0;

        function raf() {
          posX += (targetX - posX) * followSpeed;
          posY += (targetY - posY) * followSpeed;
          JSCursorFollow.style.left = posX + "px";
          JSCursorFollow.style.top  = posY + "px";
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        window.addEventListener("mousemove", (e) => {
          targetX = e.clientX; targetY = e.clientY;
          const dx = e.clientX - lastMouseX;
          const dy = e.clientY - lastMouseY;
          accum += Math.hypot(dx, dy);
          if (accum >= stepDistance) {
            frameIndex = (frameIndex + 1) % imageFrames.length;
            applyFrame(frameIndex);
            accum = 0;
          }
          lastMouseX = e.clientX; lastMouseY = e.clientY;
        }, { passive: true });
    }

    if (JSMobileGallery) {
        document.addEventListener("typing:finished", () => {
            const mobileImg = document.createElement("img");
            mobileImg.src = imageFrames[0].src;
            mobileImg.className = "gallery-img is-visible";
            JSMobileGallery.innerHTML = "";
            JSMobileGallery.appendChild(mobileImg);

            let mobileFrameIndex = 0;
            setInterval(() => {
                mobileFrameIndex = (mobileFrameIndex + 1) % imageFrames.length;
                mobileImg.src = imageFrames[mobileFrameIndex].src;
            }, 400);
        });
    }
})();