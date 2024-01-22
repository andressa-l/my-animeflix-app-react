// import React from "react"
// import { Link } from "react-router-dom"
// import { useGlobalContext } from "../../context/global"
// import "./PopularCard.css"
// // import Ucard from "./Ucard"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// const SampleNextArrow = (props) => {

//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='next'>
//         <i className='fa fa-chevron-right'></i>
//       </button>
//     </div>
//   )
// }

// const SamplePrevArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='prev'>
//         <i className='fa fa-chevron-left'></i>
//       </button>
//     </div>
//   )
// }

// const CardsPopular = ({ items }) => {

//   const { popularAnime } = useGlobalContext()
//   const sorted = popularAnime?.sort((a, b) => {
//     return b.score - a.score
//   })

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }



//   return (

//     <section className='upcome'>
//       <div className='container'>
//         <div className='heading flexSB'>
//           <h1>Top 5</h1>
//           {/* <Link to='/'>View All</Link> */}
//         </div>
//         <div className='content'>
//           <Slider {...settings}>
//             {items.map((anime) => {
//               return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
//                 <div className="MovieBox">
//                 {sorted?.slice(0, 5).map((anime) => { 
//                   return (
//                     <>
//                       <div className='img'>
//                         <img className='image-sidebar' src={anime.images.jpg.large_image_url} alt="" />
//                       </div>
//                       <div className="text">
//                         <button className='primary-btn'>
//                           <i className='fa fa-play'></i> PLAY NOW
//                         </button>
//                         <h5>
//                           {anime.title}
//                         </h5>
//                       </div>
//                     </>
//                   )
//                 })}
//                 </div>
//               </Link>
//             })}
//           </Slider>
//         </div>
//       </div>
//     </section>

//   )
// }

// export default CardsPopular