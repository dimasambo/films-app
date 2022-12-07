import styled from 'styled-components'

export const StyledFilms = styled.div`
  margin-top: 80px;

  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    margin-bottom: 50px;
  }
`
