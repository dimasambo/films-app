import {FC} from "react";
import {StyledHeader} from "./StyledHeader";
import {actions} from "../../Redux/auth-reducer";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import * as constants from '../../constants/constants'

export const Header: FC = () => {
    const currentUser = useSelector((state: AppStateType) => state.auth.currentUser)
    const dispatch = useDispatch()

    return <StyledHeader>
        <div className={'logoName'}>{constants.logoName}</div>
        {currentUser
            ? <div className={'infoWrapper'}>
                <div>{currentUser.name}</div>
                <Link to={'/welcome'}>
                    <div className={'logOutButton'}
                         onClick={() => dispatch(actions.removeCurrentUser())}>
                        {constants.logOut}
                    </div>
                </Link>
            </div>
            : <div className={'infoWrapper'}>
                <Link to={'/welcome'}>
                    <div className={'logOutButton'}>
                        {constants.logIn}
                    </div>
                </Link>
            </div>
        }
    </StyledHeader>
}