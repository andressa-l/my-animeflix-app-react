import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'
import styled from 'styled-components'
import Sidebar from '../sidebar/Sidebar'
import { MdTitle } from 'react-icons/md'

function Popular({rendered}) {
    const {popularAnime,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'popular'){
            return popularAnime?.map((anime) => {
                const { mal_id, title, images } = anime;
                return (
                    <Link to={`/anime/${mal_id}`} key={mal_id}>
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
            <div className="popular-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    display: flex;

    .popular-anime{
        margin-top: 2rem;
        padding: 2rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 1rem;
        background-color: #141414;

        a{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            padding: 0;
            margin: 0;
            
            img {
                width: 250px;
                height: 350px;
                object-fit: cover;
                border-radius: 5px;
                transition: transform 0.2s ease-in-out;

            }

            img:hover {
                transform: scale(1.1);
            }
        }
    }

    .title {
        color: #fff;
        font-size: .8rem;
        font-weight: 600;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-decoration: none;
    }
`;

export default Popular