import styled, {css} from 'styled-components'

const size = {
    mobile650: "650px"
}

const mobile650 = (inner: any) => css`
  @media (max-width: ${size.mobile650}) {
    ${inner};
  }
`;

type WelcomeWrapperPropsType = {
    type: 'signIn' | 'signUp' | 'browse'
}

export const StyledWelcomeWrapper = styled.div<WelcomeWrapperPropsType>`
  height: 500px;
  position: relative;
  background: #000;
  border-radius: 32px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    opacity: .4;
  }

  .button {
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 200px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px;
    width: 400px;
    border-radius: 30px;
    background: #3588d3;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    transition: .1s;
    cursor: pointer;

    ${mobile650(css`
      font-size: 2rem;
      height: 90px;
      width: 170px;
      top: calc(50% - 45px);
      left: calc(50% - 85px);
    `)};

    &:hover {
      background: #2376c4;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .descriptionWrapper {
    width: 100%;
    top: 25%;
    display: flex;
    justify-content: space-around;
    position: absolute;

    .description {
      background: #ffffff;
      font-size: 1.1rem;
      color: #3588d3;
      border-radius: 30px;
      padding: 3px 15px;

      ${mobile650(css`
        font-size: 0.9rem;
      `)};
    }
  }
`