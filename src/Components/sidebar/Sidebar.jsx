import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../../context/global';
import './Sidebar.css'


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <SidebarStyled>
            <h3>Top 5 Popular</h3>
            <div className="anime">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <div className='sidebar-link'>
                            <img className='image-sidebar' src={anime.images.jpg.large_image_url} alt="" />
                            <h5>
                                {anime.title}
                            </h5>
                        </div>
                    </Link>
                })}
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    margin-top: 2rem;
    color: #fff;
    padding-right: 5rem;
    padding-left: 2rem;
    padding-top: 2rem;
    background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
`;

export default Sidebar