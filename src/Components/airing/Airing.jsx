import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'
import styled from 'styled-components'
import Sidebar from '../sidebar/Sidebar'
import './Airing.css'

function Airing({rendered}) {
    const {airingAnime, isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                const { mal_id, title, images } = anime;
                return (<Link to={`/anime/${mal_id}`} key={mal_id}>
                    <img src={images.jpg.large_image_url} alt="" />
                    <h1 className='title'>{title}</h1>
                    </Link>
                );
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                    <h1 className='title'>{anime.title}</h1>
                </Link>
            })
        }
    }

    return (
        <PopularStyled>
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    display: flex;
`;

export default Airing