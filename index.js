// 1) Опрацювати аналог ховера через JS
// 2) Змінити координати кнопки
// 3) Змінити координати рандомно
// 4) Кнопки не мають виходити за межі екрану
// 5) Використати делегування подій
// import { Fancybox } from "@fancyapps/ui";
// const buttonsContainer = document.querySelector(".container");
// buttonsContainer.addEventListener("mouseover", onHover);

// function onHover(e) {
//   const { target: button } = e;
//   console.dir(button);
//   const maxTop = window.innerHeight - button.clientHeight;
//   const maxLeft = window.innerWidth - button.clientWidth;
//   button.style.top = `${(Math.random() * maxTop).toFixed(0)}px`;
//   button.style.left = `${(Math.random() * maxLeft).toFixed(0)}px`;
// }

// const main = document.querySelector("main");
// main.addEventListener("click", (e) => {
//   const { target: button } = e;
//   if (button.dataset.modal !== "modalWindow") return;
//   console.log("click");
// });

//
//
//
//
//
//
//
//

//
//
//
//

//
//
//
//

//
//
//
//

// const container = document.querySelector(".container");

// const hoverHandler = (e) => {
//   const { target: button } = e;
//   button.style.top = `${Math.floor(
//     Math.random() * (window.innerHeight - button.clientHeight)
//   )}px`;
//   button.style.left = `${Math.floor(
//     Math.random() * (window.innerWidth - button.clientWidth)
//   )}px`;
// };

// container.addEventListener("mouseover", hoverHandler);

// const main = document.querySelector("main");

// main.addEventListener("click", (e) => {
//   const { target } = e;
//   // const target = e.target;
//   if (target.dataset.modal) {
//     console.log("click");
//   }
// });
// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);
// instance.show();
//
//
//
//
Fancybox.bind("#gallery a", {
  groupAll: true, // Group all items
  on: {
    ready: (fancybox) => {
      console.log(`fancybox #${fancybox.id} is ready!`);
    },
  },
});
//
//
//
//

//
//
//
//

// Fancybox.bind('[data-fancybox="gallery"]', {
//   infinite: false,
//   closeButton: "inside",
// });
