import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../../context/global';
// import Home from '../home/Homepage'
import './Gallery.css'

function Gallery() {
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id} = useParams();

    //state
    const [index, setIndex] = React.useState(0);

    const handleImageClick = (i) => {
        setIndex(i)
    }


    React.useEffect(() => {
        getAnimePictures(id)
    }, [id])

    return (
        
        <GalleryStyled>
            
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Início
                </Link>
            </div>
            <div className="big-image">
                <img className='image-big' src={pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => {
                    return <div className="image-con" onClick={()=>{
                        handleImageClick(i)
                    }} key={i}>
                        <img className='image-small' 
                            src={picture?.jpg.image_url}
                            style={{
                                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                                filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all .3s ease-in-out'
                            }}
                            alt="" 
                        />
                    </div>
                })}
            </div>
        </GalleryStyled>
    )
}

const GalleryStyled = styled.div`
    background-color: #141414;
    // min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5rem;
    
`;

export default Gallery