import {Field, Form, Formik} from "formik";
import React, {FC, useState} from "react";
import {StyledLogin} from "./StyledLogin";
import * as yup from 'yup'
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {actions} from "../../../Redux/auth-reducer";

type InitialValuesFormType = {
    email: string
    password: string
}

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Required')
        .email('Invalid email address'),
    password: yup.string()
        .required('Required')
        .min(6, 'Password should be more, than 6 chars')
        .matches(/(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/g,
            'Password should contain: one uppercase letter, one number and one spec symbol')
})

export const SignIn: FC = () => {

    const currentUser = useSelector((state: AppStateType) => state.auth.currentUser)
    const users = useSelector((state: AppStateType) => state.auth.users)

    const [formValues, setFormValues] = useState<InitialValuesFormType | null>(null)

    const dispatch = useDispatch()

    const onFormSubmit = (values: InitialValuesFormType) => {
        setFormValues(values)
        const currentAuthUser = users.filter(user => user.email === values.email && user.password === values.password)
        if(currentAuthUser.length !== 0) {
            dispatch(actions.setCurrentUser(currentAuthUser[0]))
        }else {
            alert(`Cant find people with such email and password!\nPlease, check your info, or register if you haven't yet!`)
        }
    }

    if (currentUser)
        return <Redirect to={"/home"}/>

    return <StyledLogin>
        <Formik
            validationSchema={validationSchema}
            enableReinitialize
            validateOnBlur
            initialValues={{email: '', password: ''}}
            onSubmit={onFormSubmit}
        >
            {({ touched, errors, isValid, handleSubmit, dirty}) => (
                <Form className={''}>
                    <div className={'fieldBox'}>
                        <label htmlFor={'email'}>Email</label>
                        <Field type={"email"}
                               placeholder={"E-mail"}
                               name={"email"}/>
                        {touched.email && errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className={'fieldBox'}>
                        <label htmlFor={'password'}>Password</label>
                        <Field type={"password"}
                               placeholder={"Password"}
                               name={"password"}/>
                        {touched.password && errors.password && <span>{errors.password}</span>}
                    </div>
                    <button type="submit" disabled={!isValid && !dirty}>
                        Sign in
                    </button>
                </Form>
            )}
        </Formik>
    </StyledLogin>
}