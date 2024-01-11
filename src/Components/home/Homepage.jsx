
import React from 'react'
import { useGlobalContext } from '../../context/global.jsx'
import Popular from '../popular/Popular.jsx'
import Upcoming from '../upcoming/Upcoming.jsx'
import Airing from '../airing/Airing.jsx'
import { MdLocalFireDepartment } from 'react-icons/md'
import { MdOutlineSmartDisplay } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import { FaSearchengin } from "react-icons/fa";
import "./Homepage.css"

function Homepage() {
    const [rendered, setRendered] = React.useState('popular')
    const { handleSubmit,
        search,
        searchAnime,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()



    const switchComponent = () => {

        switch (rendered) {
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

    return (
        <>

            <div className="search-container">

                <form action="" className="search-form" onSubmit={handleSubmit}>
                    <div className="input-control">
                        <input type="text" placeholder="Buscar anime" value={search} onChange={handleChange} />
                        <button type="submit" className='btn-buscar'><FaSearchengin /></button>
                    </div>
                </form>
                <div className="filter-btn popular-filter">
                    <button onClick={() => {
                        setRendered('popular')
                    }} title="Popular">Populares<MdLocalFireDepartment /></button>
                </div>
                <div className="filter-btn airing-filter">
                    <button onClick={() => {
                        setRendered('airing')
                        getAiringAnime()
                    }} title="Lançamentos">Lançamentos<MdOutlineSmartDisplay /></button>
                </div>
                <div className="filter-btn upcoming-filter">
                    <button onClick={() => {
                        setRendered('upcoming')
                        getUpcomingAnime()
                    }} title="Inéditos">Inéditos<RiSendPlaneFill /></button>
                </div>
                {/* <h1>
                            {rendered === 'popular' ? 'Animeflix' : 
                            rendered === 'airing' ? 'Animeflix' : 'Animeflix'}
                        </h1>
                    */}
            </div>

            {switchComponent()}
        </>
    )
}

export default Homepage