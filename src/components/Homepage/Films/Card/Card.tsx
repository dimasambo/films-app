import {FilmType, ItemType} from "../../../../types/types";
import {FC, useState} from "react";
import {StyledCard, StyledModalLaunch} from "./StyledCard";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../Redux/redux-store";

type UserPropsType = {
    film: FilmType
}

export const Card: FC<UserPropsType> = ({film}) => {
    const [isModalShown, setIsModalShown] = useState(false)
    const currentUser = useSelector((state: AppStateType) => state.auth.currentUser)

    return <>
        <StyledCard onClick={() => {
            currentUser ? setIsModalShown(true) : alert('Log in, please!')
        }}>
            <div className={'cardWrapper'}>
                <div className={'cardImgBox'}>
                    <img src={film.image}/>
                    <div className={'cardNameBox'}>
                        <div>
                            <span>{film.title}</span>
                            {film.imdb_rating < 7 &&
                            <div className={'dislike'}>
                                <img
                                    src={'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/57970/thumbs-down-emoji-clipart-md.png'}/>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                {currentUser && <div className={'infoWrapper'}>
                    <div className={'cardNameBox'}>
                        <span>Genre: {film.genre}</span>
                    </div>
                    <div className={'cardNameBox'}>
                        <span>Director: {film.director}</span>
                    </div>
                    <div className={'cardNameBox'}>
                        <span>Year: {film.year}</span>
                    </div>
                </div>}
            </div>
        </StyledCard>
        {isModalShown &&
        <StyledModalLaunch>
            <div className={'closeModal'} onClick={() => setIsModalShown(false)}>Close</div>
            <div className={'filmDetails'}>
                <img src={film.image}/>
                <div className={'infoBox'}>
                    <div className={'detailFilm'}><span>Plot: </span>{film.plot}</div>
                    <div className={'detailFilm'}><span>Writer: </span>{film.writer}</div>
                    <div className={'detailFilm'}>
                        <span>Actors: </span>
                        {film.actors.map(actor =>
                            <span key={actor} className={'actor'}>{actor}</span>)
                        }
                    </div>
                    <div className={'detailFilm'}><span>IMBD rating: </span>{film.imdb_rating}</div>
                    <div className={'detailFilm'}><span>Title: </span>{film.title}</div>
                    <div className={'detailFilm'}><span>Genre: </span>{film.genre}</div>
                    <div className={'detailFilm'}><span>Director: </span>{film.director}</div>
                    <div className={'detailFilm'}><span>Year: </span>{film.year}</div>
                </div>
            </div>
        </StyledModalLaunch>
        }
    </>
}