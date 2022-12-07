import {FC} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {StyledAuthWrapper} from './StyledAuthWrapper'
import {Welcome} from "./Welcome/Welcome";

export const Auth: FC = () => {
    return <StyledAuthWrapper>
        <Carousel>
            <Welcome type={'signIn'} />
            <Welcome type={'signUp'} />
            <Welcome type={'browse'} />
        </Carousel>
    </StyledAuthWrapper>
}