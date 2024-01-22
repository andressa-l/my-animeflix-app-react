import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'
import styled from 'styled-components'
import Sidebar from '../sidebar/Sidebar'
// import PopularCard from '../imageCard/popularCard'
import { MdTitle } from 'react-icons/md'
import './Popular.css'
// import CardsPopular from '../imageCard/CardsPopular'

function Popular({rendered}) {
    const {popularAnime,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'popular'){
            return popularAnime?.map((anime) => {
                const { mal_id, title, images } = anime;
                return (
                    <Link to={`/anime/${mal_id}`} key={mal_id}>
                        <div className='link-image'>
                            <img className='image-popular' src={images.jpg.large_image_url} alt="" />
                            <h1 className='title'>{title}</h1>
                        </div>
                    </Link>
                );
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <div className='link-image'>
                        <img className='image-popular' src={anime.images.jpg.large_image_url} alt="" />
                        <h1 className='title'>{anime.title}</h1>
                    </div>
                </Link>
            })
        }
    }

    return (
        <PopularStyled>
            <div className="popular-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
            
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    // display: flex;


`;

export default Popular