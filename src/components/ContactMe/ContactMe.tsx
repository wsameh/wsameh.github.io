// React Libraries
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import EmailJs, { EmailJSResponseStatus } from '@emailjs/browser';

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
interface IFormValues {
    name: string,
    email: string,
    message: string
}

// Data

const defaultValues: IFormValues = {
    name: '',
    email: '',
    message: '',
}

const ContactMe = () => {

    // Context
    const alertContext = useContext(AlertContext)

    // States
    const [textAreaHover, setTextAreaHover] = useState<boolean>(false)

    // Navigation
    const location = useLocation()

    const [values, setValues] = useState<IFormValues>(defaultValues);
    const [isFocused, setIsFocused] = useState(false);

    // const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().required('Required')
            .email('Use valid email (e.g: jone.luke@mail.com)'),
        message: Yup.string().required('Required')
            .min(5, 'Message must have a minimum of 50 characters')
            .max(2000, 'Message can\'t exceed 2000 characters')
        // phoneNumber: Yup.string().matches(phoneRegex, 'styled using caption typography theme in src/dashboardTheme.js'),
        // password: Yup.string().min(4).max(20).required('styled using styled(Typography) on HelperText.jsx'),
        // confirmPassword: Yup
        //   .string()
        //   .oneOf([Yup.ref("password"), undefined], "Passwords Don't Match")
        //   .required(),
    })

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: yupResolver(validationSchema)
    });

    console.log(values)

    const handleMessage = async (data: IFormValues) => {

        console.log('handleMessage fire')
        console.log(process.env.EMAILJS_SERVICE_ID?.toString())
        console.log(process.env.EMAILJS_PUBLIC_KEY?.toString())
        console.log(process.env.EMAILJS_TEMPLATE_ID?.toString())

        const form = document.createElement('form')
        const message = {
            user_name: data.name,
            user_email: data.email,
            user_message: data.message,
        };
        Object.entries(message).forEach(pair => {
            let input = document.createElement('input')
            input.name = pair[0]
            input.value = pair[1]
            form.appendChild(input)
        })
        if(process.env.REACT_APP_EMAILJS_SERVICE_ID !== undefined && process.env.REACT_APP_EMAILJS_TEMPLATE_ID !== undefined){
            EmailJs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, message, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                alertContext.setAlert({severity: 'success', children: 'Message has been successfully submitted', open: true})
            }, (error) => {
                alertContext.setAlert({severity: 'error', children: 'Message is not submitted', open: true})
            });
            reset(defaultValues)
            setValues(defaultValues)
        }
    }

    const handleChange = (values: IFormValues) => {
        setValues(values);
    }

    useEffect(() => {
        setValues(defaultValues);
        reset(defaultValues);
    }, [location])

    // JSX
    return (
        <Box width='500px' margin='100px auto 100px auto' >
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
                onChange = {(event) => handleChange({ ...values, name: event.target.value})}
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
                onChange = {(event) => handleChange({ ...values, email: event.target.value})}
                sx={{width: '100%'}}
            />
            <Typography variant='helperText' gutterBottom>
                {errors.email?.message}
            </Typography>

            <Box position='relative'>
                <textarea
                    required
                    {...register('message')}
                    value = {values.message}
                    onChange = {(event) => handleChange({ ...values, message: event.target.value})}
                    onMouseEnter={() => setTextAreaHover(true)}
                    onMouseLeave={() => setTextAreaHover(false)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        height: '300px',
                        width: '100%',
                        padding: '5px 10px',
                        fontWeight: '400px',
                        borderColor: errors.message ? 'red' : textAreaHover ? 'black' : 'rgba(0, 0, 0, 0.3)',
                        outlineColor: errors.message ? 'red' : 'rgba(25, 118, 210)',
                        borderRadius: '5px',
                        resize: 'none',
                    }}
                />
                <Typography
                    sx={{
                        position: 'absolute',
                        transform: `translateY(-50%)`,
                        top: isFocused ? '0' : '10%',
                        left: isFocused ? '10px' : '15px',
                        paddingX: isFocused ? '5px' : '0',
                        fontSize: isFocused ? '12px' : '16px',
                        color: errors.message ? 'red' : isFocused ? 'rgba(25, 118, 210)' : 'rgba(0, 0, 0, 0.6)',
                        backgroundColor: 'white',
                        transition: 'top 0.2s, font-size 0.2s',
                        zIndex: '5'
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
                    onClick={handleSubmit(handleMessage)}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default ContactMe
