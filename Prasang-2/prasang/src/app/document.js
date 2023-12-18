// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <meta charSet="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>Prasang</title>

//           <link rel="stylesheet" href="style.css" />
//           <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

//           <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//           <script src="https://kit.fontawesome.com/1165876da6.js" crossOrigin="anonymous"></script>
//         </Head>
//         <body>
//           <Main />
//           <NextScript />

//           <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
//           <script>
//             AOS.init({
//               duration: 1200,
//             });
//           </script>
//           <script>
//             // Your custom scripts
//             var acc = document.getElementsByClassName("accordion");
//             var i;

//             for (i = 0; i < acc.length; i++) {
//               acc[i].addEventListener("click", function () {
//                 this.classList.toggle("active");
//                 this.parentElement.classList.toggle("active");

//                 var pannel = this.nextElementSibling;

//                 if (pannel.style.display === "block") {
//                   pannel.style.display = "none";
//                 } else {
//                   pannel.style.display = "block";
//                 }
//               });
//             }

//             window.addEventListener('scroll', function () {
//               var header = document.querySelector("header");
//               header.classList.toggle('sticky', window.scrollY > 0);
//             });
//           </script>
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
