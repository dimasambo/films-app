import {FC} from "react";
import {StyledWelcomeWrapper} from "./StyledWelcome";
import * as constants from '../../../constants/constants'
import signIn from '../../../assets/media/signIn.jpg'
import signUp from '../../../assets/media/signUp.jpg'
import browse from '../../../assets/media/browse.jpg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";

type PropsType = {
    type: 'signIn' | 'signUp' | 'browse'
}

export const Welcome: FC<PropsType> = ({type}) => {
    const {
        currentUser,
        middleRegisterEmail,
        middleRegisterPassword,
        middleRegisterName
    } = useSelector((state: AppStateType) => state.auth)

    return <StyledWelcomeWrapper type={type}>
        <img src={type === 'signUp' ? signUp : (type === 'signIn' ? signIn : browse)}/>
        <Link to={type === 'signUp' ? '/sign-up' : (type === 'signIn' ? '/sign-in' : '/home')}>
            <div className={'button'} onClick={() => type === 'browse' && currentUser && alert('You are signed in!')}>
                {type === 'signUp'
                    ? (middleRegisterName === '' && middleRegisterEmail === '' && middleRegisterPassword === ''
                        ? constants.signUp
                        : constants.resumeSignUp
                    )
                    : (type === 'signIn' ? constants.signIn : constants.browse)}
            </div>
        </Link>
        <div className={'descriptionWrapper'}>
            <div className={'description'}>
                {type === 'signUp' ? constants.signUpDesc : (type === 'signIn' ? constants.signInDesc : constants.browseDesc)}
            </div>
        </div>
    </StyledWelcomeWrapper>
}