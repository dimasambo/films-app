import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Films} from "./Films/Films";
import {AppStateType} from "../../Redux/redux-store";
import {StyledHomepage} from "./StyledHomepage";
import {requestFilms} from "../../Redux/films-reducer";
import {filmsLength} from "../../api/api";
import {FilmType} from "../../types/types";

export const Homepage: FC = () => {
    const films = useSelector((state: AppStateType) => state.films.films)
    const [fetching, setFetching] = useState(false)
    const [isListEnded, setIsListEnded] = useState(false)

    const [allFilms, setAllFilms] = useState<Array<FilmType>>([])

    const dispatch = useDispatch()

    useEffect(() => {
            // @ts-ignore
        dispatch(requestFilms(1))
    }, [])

    useEffect(() => {
        if (fetching) {
            // @ts-ignore
            dispatch(requestFilms((allFilms.length / 20) + 1))
            setFetching(false)
        }
    }, [fetching])

    useEffect(() => {
        setAllFilms([...allFilms, ...films])

        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [films])

    useEffect(() => {
        console.log(allFilms)
    }, [allFilms])

    const scrollHandler = () => {
        if ((document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 1)
            && allFilms.length < filmsLength && films.length !== 0) {
            document.removeEventListener('scroll', scrollHandler)
            setFetching(true)
            console.log(1)
        } else if(allFilms.length === filmsLength) {
            setIsListEnded(true)
        }
    }

    return <StyledHomepage>
        {films && <Films films={allFilms}/>}
        {isListEnded && <div className={'listEnd'}>No more results</div>}
    </StyledHomepage>
}