import React, {FC, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {actions} from "../../../Redux/auth-reducer";
import {StyledLogin} from "./StyledLogin";

type InitialValuesFormType = {
    email: string
    password: string
    name: string
}

const validationSchema = yup.object().shape({
    email: yup.string().required('Required').email('Invalid email address'),
    name: yup.string().required('Required'),
    password: yup.string()
        .required('Required')
        .min(6, 'Password should be more, than 6 chars')
        .matches(/(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/g,
            'Password should contain: one uppercase letter, one number and one spec symbol')
})

export const SignUp: FC = () => {
    const [formValues, setFormValues] = useState<InitialValuesFormType | null>(null)
    const [isSignedUp, setIsSignedUp] = useState(false)

    const {
        users,
        middleRegisterEmail,
        middleRegisterPassword,
        middleRegisterName
    } = useSelector((state: AppStateType) => state.auth)

    const dispatch = useDispatch()

    const onFormSubmit = (values: InitialValuesFormType) => {
        setFormValues(values)
        const sameUser = users.filter(user => user.email === values.email)
        if (sameUser.length === 0) {
            dispatch(actions.setUser(values))
            dispatch(actions.setCurrentUser(values))
            dispatch(actions.setMiddleRegisterEmail(''))
            dispatch(actions.setMiddleRegisterName(''))
            dispatch(actions.setMiddleRegisterPassword(''))
            setIsSignedUp(true)
        } else {
            alert('You have already registered account')
        }
    }

    const handleFormChange = (e: any) => {
        if (e.target.name === 'email') {
            dispatch(actions.setMiddleRegisterEmail(e.target.value))
        } else if (e.target.name === 'name') {
            dispatch(actions.setMiddleRegisterName(e.target.value))
        } else if (e.target.name === 'password') {
            dispatch(actions.setMiddleRegisterPassword(e.target.value))
        }
    }

    if (isSignedUp)
        return <Redirect to={"/home"}/>

    return <StyledLogin>
        <Formik
            validationSchema={validationSchema}
            enableReinitialize
            validateOnBlur
            initialValues={{
                email: middleRegisterEmail,
                password: middleRegisterPassword,
                name: middleRegisterName
            }}
            onSubmit={onFormSubmit}
        >
            {({touched, errors, isValid, handleSubmit, dirty, handleChange}) => (
                <Form className={''}>
                    <div className={'fieldBox'}>
                        <label htmlFor={'email'}>Email</label>
                        <Field type={"email"}
                               placeholder={"E-mail"}
                               name={"email"}
                               onChange={(e: any) => {
                                   handleChange(e);
                                   handleFormChange(e)
                               }}
                               value={middleRegisterEmail}/>
                        {touched.email && errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className={'fieldBox'}>
                        <label htmlFor={'name'}>Name</label>
                        <Field type={"name"}
                               placeholder={"Name"}
                               name={"name"}
                               onChange={(e: any) => {
                                   handleChange(e);
                                   handleFormChange(e)
                               }}
                               value={middleRegisterName}/>
                        {touched.name && errors.name && <span>{errors.name}</span>}
                    </div>
                    <div className={'fieldBox'}>
                        <label htmlFor={'password'}>Password</label>
                        <Field type={"password"}
                               placeholder={"Password"}
                               name={"password"}
                               onChange={(e: any) => {
                                   handleChange(e);
                                   handleFormChange(e)
                               }}
                               value={middleRegisterPassword}/>
                        {touched.password && errors.password && <span>{errors.password}</span>}
                    </div>
                    <button type="submit" disabled={!isValid && !dirty}>
                        Sign up
                    </button>
                </Form>
            )}
        </Formik>
    </StyledLogin>
}