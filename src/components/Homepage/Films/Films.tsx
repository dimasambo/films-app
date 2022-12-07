import {FilmType, ItemType} from "../../../types/types";
import {FC} from "react";
import {Card} from "./Card/Card";
import {StyledFilms} from "./StyledFilms";
import Masonry from "react-masonry-css";


type PropsType = {
    films: Array<FilmType>
}

const breakpoints = {
    default: 2,
    800: 1
}

export const Films: FC<PropsType> = ({films}) => {

    return <StyledFilms>
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {films.length === 0
                ? <div>No Results</div>
                : films.map((film) => {
                    return <Card key={film.id} film={film}/>
                })
            }
        </Masonry>
    </StyledFilms>
}