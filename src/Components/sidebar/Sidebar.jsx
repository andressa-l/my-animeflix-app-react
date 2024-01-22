import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../../context/global';
import './Sidebar.css'
// import '../imageCard/PopularCard.css'
// import Slider from 'react-slick';
// import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";


function Sidebar() {
    
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    

    return (
        <SidebarStyled>
            <section className='upcome'>
                <div className='container-sidebar'>
                    <div className='heading flexSB'>
                        <h3>Top 5 Popular</h3>
                    </div>
                    <div className="anime content">
                        {/* <IoIosArrowDropleft className="drop-left" /> */}
                            {sorted?.slice(0,5).map((anime) => {
                                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                                    <div className='sidebar-link MovieBox'>
                                        <img className='image-sidebar' src={anime.images.jpg.large_image_url} alt="" />
                                        <h5>
                                            {anime.title}
                                        </h5>
                                        <button className='primary-btn'>
                                        
                                            <IoIosInformationCircleOutline className="circle-outline"/> Saber Mais
                                        </button>
                                    </div>
                                </Link>
                            })}
                        {/* <IoIosArrowDropright className="drop-right" /> */}
                    </div>
                </div>
            </section>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    margin-top: 2rem;
    color: #fff;
    padding-right: 5rem;
    padding-left: 2rem;
    padding-top: 2rem;
    background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
`;

export default Sidebar