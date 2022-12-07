import styled, {css} from 'styled-components'

const size = {
    mobile800: "800px",
    mobile500: "500px"
}

const mobile500 = (inner: any) => css`
  @media (max-width: ${size.mobile500}) {
    ${inner};
  }
`;

const mobile800 = (inner: any) => css`
  @media (max-width: ${size.mobile800}) {
    ${inner};
  }
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-around;
  transition: .1s;
  cursor: pointer;

  .cardWrapper {
    display: flex;
    flex-direction: column;

    .cardImgBox {
      position: relative;

      img {
        width: 320px;
        border-radius: 12px;

        ${mobile500(css`
          width: 270px;
        `)};
      }

      .cardNameBox {
        position: absolute;
        bottom: 4px;
        width: 320px;
        margin-top: 15px;
        overflow-x: hidden;
        background: black;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;

        ${mobile500(css`
          width: 270px;
        `)};

        div {
          display: flex;
          align-items: center;

          span {
            display: flex;
            justify-content: space-around;
            font-family: 'Gilroy', Arial;
            font-style: normal;
            font-weight: 700;
            font-size: 35px;
            line-height: 44px;
            margin-left: 10px;

            color: white;
          }

          .dislike {
            img {
              margin-left: 10px;
              width: 25px;
            }
          }
        }
      }
    }

    .cardNameBox {
      width: 320px;
      margin-top: 10px;
      overflow-x: hidden;

      ${mobile500(css`
        width: 270px;
      `)};

      span {
        font-family: 'Gilroy', Arial;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        color: #085385;
      }
    }
  }
`

export const StyledModalLaunch = styled.div`
  position: fixed;
  width: 70%;
  height: 80vh;
  top: 10vh;
  left: 15%;
  border-radius: 10px;
  box-shadow: 0 1px 9px 2px rgba(29, 29, 29, 0.31);
  padding: 30px;
  background: whitesmoke;
  z-index: 100;
  overflow-y: scroll;

  ${mobile800(css`
    left: 10%;
  `)};

  .closeModal {
    position: fixed;
    top: 11vh;
    right: 15vw;
    cursor: pointer;
    padding: 10px;
    font-size: 17px;
    font-weight: bold;
  }

  .filmDetails {
    display: flex;

    ${mobile800(css`
      flex-direction: column;
    `)};

    img {
      width: 300px;
      margin-right: 30px;

      ${mobile800(css`
        width: 230px;
        margin: 0 auto;
      `)};
    }

    .infoBox {
      .detailFilm {
        margin: 10px 0;
        font-size: 17px;

        span {
          font-weight: bold;
        }

        .actor {
          font-weight: normal;
          margin-right: 5px;
        }

        .actor::after {
          content: ',';
        }

        .actor:last-child:after {
          content: '';
        }
      }
    }
  }
`