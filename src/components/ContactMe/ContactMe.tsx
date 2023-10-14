// React Libraries
import { useState, useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { UseFormHandleSubmit, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import EmailJs from '@emailjs/browser';

// Material UI Components
import {
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material'

// Context
import { AlertContext } from '../Context/AlertContext';

// Interfaces
type FormValues = {
    name: string,
    email: string,
    message: string
}

// Data
const defaultValues: FormValues = {
    name: '',
    email: '',
    message: '',
}

const ContactMe = () => {

    // Validation Schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().required('Required').email('Use valid email (e.g: jone.luke@mail.com)'),
        message: Yup.string().required('Required')
            .min(30, 'Message must have at least 30 characters')
            .max(3000, 'Message must not exceed 3000 characters'),
    })

    // Context
    const alertContext = useContext(AlertContext)

    // States
    const [values, setValues] = useState<FormValues>(defaultValues);
    const [isFocused, setIsFocused] = useState(false);
    const [textAreaHover, setTextAreaHover] = useState<boolean>(false)

    // Navigation
    const location = useLocation()

    // Hooks
    const { register, handleSubmit, reset, formState: {errors}, setValue} = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        setValues(defaultValues);
        reset(defaultValues);
    }, [location])

    // Handlers
    const changeHandler = (values: FormValues) => {
        setValues(values);
        setValue('message', values.message, { shouldValidate: false })
    }

    const submitHandler = async (data: FormValues) => {

        let messageDTO = {
            user_name: data.name,
            user_email: data.email,
            user_message: data.message,
        };
        if(process.env.REACT_APP_EMAILJS_SERVICE_ID !== undefined && process.env.REACT_APP_EMAILJS_TEMPLATE_ID !== undefined){
            await EmailJs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, messageDTO, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                alertContext.setAlert({severity: 'success', children: 'Message has been successfully submitted', open: true})
                console.log(`Status: ${result.status}, Message: ${result.text}`)
                setValues(defaultValues);
                reset(defaultValues);
            }, (error) => {
                alertContext.setAlert({severity: 'error', children: 'Message was not submitted', open: true})
                console.log(`Status: ${error.status}, Message: ${error.text}`)
            });
        }
    }

    // JSX
    return (
        <Box margin='100px auto 100px auto' sx={{ width: {xs: '80%', md: '700px'}}}>
            <Typography variant='appHeading' >
                Contact Me
            </Typography>

            <TextField
                variant='outlined'
                label = "Name"
                required
                {...register('name')}
                error = {errors.name ? true : false}
                value = {values.name}
                onChange = {(event) => changeHandler({ ...values, name: event.target.value})}
                sx={{width: '100%'}}
            />
            <Typography variant='helperText' gutterBottom>
                {errors.name?.message}
            </Typography>

            <TextField
                variant='outlined'
                label = "Email"
                required
                {...register('email')}
                error = {errors.email ? true : false}
                value = {values.email}
                onChange = {(event) => changeHandler({ ...values, email: event.target.value})}
                sx={{width: '100%'}}
            />
            <Typography variant='helperText' gutterBottom>
                {errors.email?.message}
            </Typography>

            {/* Message TextArea */}
            <Box position='relative'>
                <textarea
                    id='contact-textarea'
                    className='appTextarea'
                    {...register('message')}
                    value = {values.message}
                    onChange = {(event) => changeHandler({ ...values, message: event.target.value})}
                    onMouseEnter={() => setTextAreaHover(true)}
                    onMouseLeave={() => setTextAreaHover(false)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        borderColor: errors.message ? 'red' : textAreaHover ? 'black' : 'rgba(0, 0, 0, 0.3)',
                        outlineColor: errors.message ? 'red' : 'rgba(25, 118, 210)',
                    }}
                />
                <Typography
                    className='appTextarea-label'
                    onClick={() => document.getElementById('contact-textarea')?.focus()}
                    sx={{
                        top: isFocused || values.message ? '0' : '10%',
                        left: isFocused || values.message ? '10px' : '15px',
                        paddingX: isFocused || values.message ? '5px' : '0',
                        fontSize: isFocused || values.message ? '12px' : '16px',
                        color: errors.message ? 'red' : isFocused ? 'rgba(25, 118, 210)' : 'rgba(0, 0, 0, 0.6)',
                    }}
                >
                    Message *
                </Typography>
            </Box>

            <Box
                width='100%'
                display='flex'
                justifyContent='space-between'
            >
                <Typography variant='helperText' gutterBottom>
                    {errors.message?.message}
                </Typography>
                <Button
                    variant='appMain'
                    onClick={handleSubmit(submitHandler)}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default ContactMe
