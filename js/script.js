// window.addEventListener( 'load', start, false );

// function start()
// {  
//   clock();
//   slider();
// }

/* START "Scroll" ------------------------------------ */
/* END "Scroll" -------------------------------------- */

// /** START "Slider" ------------------------------------ */
// var
//   imgs = [
//     {
//       src: 'una',
//       'desc': 'Estudio en la universiad (UNA-Puno)'
//     },
//     {
//       src: 'sistemas',
//       desc: 'Estudio Ing. Sistemas'
//     },
//     {
//       src: 'ci-ilave',
//       'desc': 'Estudié C.I. en el Instituto (I.E.S.T.P. - Ilave)'
//     },
//     {
//       src: 'futbol',
//       'desc': 'Mi deporte favorito (Fútbol)'
//     },
//     {
//       src: 'cienciano',
//       'desc': 'Hincha del equipo de Perú (Cienciano)'
//     },
//     {
//       src: 'ugarte',
//       'desc': 'Hincha del equipo de Puno (Alfonso Ugarte)'
//     },
//     {
//       src: 'madrid',
//       'desc': 'Hincha del equipo extrajero (Real Madrid)'
//     },
//     {
//       src: 'dota',
//       'desc': 'Mi deporte electrónico favorito (DOTA 2)'
//     },
//   ],
//   cont = 0;
// const slider = () => {
//   let
//     image = document.querySelector( '.Slider-img' ),
//     desc = document.querySelector( '.Slider-desc' );

//   image.src = `img/${imgs[ cont ].src}.jpg`;
//   desc.innerText = imgs[ cont ].desc;

//   if ( cont == imgs.length - 1 )
//     cont = 0;
//   else
//     cont++;

//   setTimeout( slider, 3000 );
// };
/** END "Slider" -------------------------------------- */


/** START scripts "CLOCK" ----------------------------- */
// const clock = () => {
//   let
//     date    = new Date(),
//     hours   = document.querySelector( '.Clock-hour' ),
//     minutes = document.querySelector( '.Clock-minute' ),
//     seconds = document.querySelector( '.Clock-second' ),
//     milisec = document.querySelector( '.Clock-milisec' ),
//     time    = document.querySelector( '.Clock-time' );

//   hours.innerText   = timer( dayer( date.getHours() ) );
//   minutes.innerText = timer( date.getMinutes() );
//   seconds.innerText = timer( date.getSeconds() );
//   milisec.innerText = date.getMilliseconds();
//   time.innerText    = times( date.getHours() );

//   setTimeout( clock, 10 );
// },

// dayer = ( hour ) => {
//   if ( hour > 12 )
//   {
//     return hour - 12;
//   }

//   return hour;
// },

// times = ( hour ) => {
//   if ( hour > 11 )
//   {
//     return "PM";
//   }

//   return "AM";
// },

// timer = ( time ) => {
//   if ( time < 10 )
//   {
//     return `0${ time }`
//   }

//   return time;
// };
/** END scripts "CLOCK" ----------------------------- */