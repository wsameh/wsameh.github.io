// Material UI Components
import { createTheme } from '@mui/material/styles';

// App Theme
export const MuiTheme = createTheme({

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1050,
      lg: 1200,
      xl: 1500,
    },
  },

  palette: {
    appPrimary: {
      main: 'rgba(79, 69, 87, 1)',
      light: 'rgba(109, 93, 110, 1)',
      dark: 'rgba(57, 54, 70, 1)', 
      contrastText: 'rgba(255, 230, 199, 1)',
    },
    appTransPrimary: {
      main: 'rgba(79, 69, 87, 0.75)',
      light: 'rgba(109, 93, 110, 0.75)',
      dark: 'rgba(57, 54, 70, 0.7)', 
      contrastText: 'rgba(255, 230, 199, 0.75)',
    },
    appPrimaryLight: {
      main: 'rgb(224, 218, 206)',
      light: 'rgb(224, 218, 220)',
      dark: 'rgb(147, 132, 148)',
      contrastText: 'rgba(57, 54, 70, 1)',
    },
    appButton: {
      light: 'rgb(123, 74, 130)',
      main: 'rgb(106, 46, 117)',
      dark: 'rgb(69, 25, 82)',
    },
    appDivider: {
      main: 'rgb(202, 88, 220)'
    }
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
            height: '64px',
            minHeight: '64px'
        }
      },
      variants: [
        {
          props: { variant: 'auto'},
          style: () => ({
            height: 'auto',
            minHeight: 'auto'
          })
        },
      ]
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: 'carouselHeading'},
          style: ({theme}) => ({
            display: 'block',
            fontFamily: 'Lora',
            fontSize: '2rem',
            color: theme.palette.appPrimary.contrastText,
          })
        },
        {
          props: { variant: 'appHeading'},
          style: ({theme}) => ({
            display: 'inline-block',
            fontSize: '1.5rem',
            fontWeight: '500',
            marginTop: '50px',
            marginBottom: '15px',
            color: theme.palette.appPrimary.dark,
          })
        },
        {
          props: { variant: 'aboutMe'},
          style: ({theme}) => ({
            display: 'block',
            color: theme.palette.appPrimary.dark,
            [theme.breakpoints.down('sm')]:{
              fontSize: '0.825rem',
              fontWeight: '400',
            },
            [theme.breakpoints.up('md')]:{
              fontSize: '0.875rem',
              fontWeight: '400',
            },
            [theme.breakpoints.up('lg')]:{
              fontSize: '0.95rem',
              fontWeight: '400',
            },
            [theme.breakpoints.up('xl')]:{
              fontSize: '1.1rem',
              fontWeight: '400',
            }
          })
        },
        {
          props: { variant: 'appSubtitle'},
          style: ({theme}) => ({
            display: 'block',
            color: theme.palette.appPrimary.dark,
            [theme.breakpoints.down('sm')]:{
              fontSize: '0.95rem',
              fontWeight: '400',
            },
            [theme.breakpoints.up('md')]:{
              fontSize: '1.25rem',
              fontWeight: '400',
            }
          })
        },
        {
          props: { variant: 'appBody'},
          style: ({theme}) => ({
            display: 'block',
            [theme.breakpoints.up('xs')]:{
              fontSize: '0.825rem',
              fontWeight: '400',
              lineHeight: '1rem',
            },
            [theme.breakpoints.up('sm')]:{
              fontSize: '0.9rem',
              fontWeight: '500',
              lineHeight: '1.1rem',
            },
            [theme.breakpoints.up('md')]:{
              fontSize: '1.025rem',
              fontWeight: '500',
              lineHeight: '1.2rem',
            },
            color: theme.palette.appPrimary.dark,
            padding: '8px 0px 8px 0px',
            textAlign: 'justify',
          })
        },
        {
          props: { variant: 'appListHeading'},
          style: ({theme}) => ({
            display: 'block',
                       [theme.breakpoints.up('xs')]:{
              fontSize: '0.825rem',
              fontWeight: '400',
              lineHeight: '1rem',
            },
            [theme.breakpoints.up('sm')]:{
              fontSize: '0.9rem',
              fontWeight: '500',
              lineHeight: '1.1rem',
            },
            [theme.breakpoints.up('md')]:{
              fontSize: '1.025remrem',
              fontWeight: '500',
              lineHeight: '1.2rem',
            },
          })
        },
        {
          props: { variant: 'appList'},
          style: ({theme}) => ({
            display: 'block',
            [theme.breakpoints.up('xs')]:{
              fontSize: '0.825rem',
              fontWeight: '400',
              lineHeight: '1rem',
            },
            [theme.breakpoints.up('sm')]:{
              fontSize: '0.9rem',
              fontWeight: '500',
              lineHeight: '1.1rem',
            },
            [theme.breakpoints.up('md')]:{
              fontSize: '1.025rem',
              fontWeight: '500',
              lineHeight: '1.2rem',
            },
            color: theme.palette.appPrimary.dark,
            padding: '0px 20px 0px 0px',
            textAlign: 'justify',
          })
        },
        {
          props: { variant: 'navCardLabel'},
          style: ({theme}) => ({
            margin: 'auto',
            display: 'block',
            [theme.breakpoints.up('xs')]:{
              fontSize: '0.95rem',
              fontWeight: '400',
            },
            [theme.breakpoints.up('sm')]:{
              fontSize: '1.15rem',
              fontWeight: '500',
            },
            fontFamily: 'verdana',
            textAlign: 'center',
            color: theme.palette.appPrimary.contrastText,
          })
        },
        {
          props: { variant: 'navCardText'},
          style: ({theme}) => ({
            display: 'block',
            [theme.breakpoints.up('xs')]:{
              fontSize: '0.8rem',
              fontWeight: '400',
              lineHeight: '1.2rem',
            },
            [theme.breakpoints.up('sm')]:{
              fontSize: '0.9rem',
              fontWeight: '400',
              lineHeight: '1.25rem',
            },
            [theme.breakpoints.up('md')]:{
              fontSize: '0.95rem',
              fontWeight: '400',
              lineHeight: '1.3rem',
            },
            [theme.breakpoints.up('lg')]:{
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '1.35rem',
            },
            color: theme.palette.appPrimary.dark,
          })
        },
        {
          props: { variant: 'helperText'},
          style: () => ({
            display: 'block',
            fontSize: '0.75rem',
            minHeight: '30px',
            color: 'red',
            padding: '5px',
          })
        },
      ]
    },

    MuiButton: {
      variants: [
        {
          props: { variant: 'appMain' },
          style: ({theme}) => ({
            minWidth: '125px',
            height: '35px',
            margin: '10px 10px 5px auto',
            borderRadius: '5px',
            [theme.breakpoints.up('xs')]:{
              minWidth: '100px',
              height: '30px',
              fontSize: '0.75rem',
              fontWeight: '400',
            },
            [theme.breakpoints.up('md')]:{
              minWidth: '120px',
              height: '35px',
              fontSize: '0.85rem',
              fontWeight: '400',
            },
            backgroundColor: theme.palette.appButton.main,
            color: theme.palette.appPrimary.contrastText,
            fontSize: '0.8rem',
            '&:hover': {
                backgroundColor: theme.palette.appButton.light,
                color: theme.palette.appPrimary.contrastText,
            }
          }),
        },
        {
          props: { variant: 'headerNavLink' },
          style: () => ({
            minWidth: '80px',
            margin: '0px',
            padding: '0px',
            borderRadius: '0',
            fontSize: '0.8rem',
            '&:hover': {
              backgroundColor: 'inherit',
            },
          }),
        },
        {
          props: { variant: 'sideNavLink' },
          style: () => ({
            width: '100%',
            height: '32px',
            margin: '0px',
            borderRadius: '0',
            '&:hover' : {
              backgroundColor: 'inherit'
            }
          }),
        },
        {
          props: { variant: 'navCardLink' },
          style: ({theme}) => ({
            height: '50px',
            width: '120px',
            margin: '0px 0px 5px 10px',
            padding: '0px',
            color: theme.palette.secondary.main,
            fontSize: '0.9rem',
            textTransform: 'none',
            textAlign: 'center',
            '&:hover' : {
              fontWeight: '700',
              fontSize: '0.95rem',
              backgroundColor: 'inherit'
            }
          }),
        },
        {
          props: { variant: 'footerLabel' },
          style: ({theme}) => ({
            display: 'inline',
            width: '100%',
            padding: '0px',
            fontSize: '0.75rem',
            borderRadius: '0',
            marginBottom: '10px',
            color: theme.palette.appPrimary.contrastText,
            '&:hover': {
              backgroundColor: 'inherit',
            },
          }),
        },
        {
          props: { variant: 'footerLink' },
          style: ({theme}) => ({
            display: 'inline',
            width: '100%',
            padding: '0px',
            textAlign: 'center',
            fontSize: '0.75rem',
            borderRadius: '0',
            textTransform: 'capitalize',
            color: theme.palette.appPrimary.contrastText,
            '&:hover': {
              backgroundColor: 'inherit',
            },
          }),
        },
      ]
    },

    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: () => ({
            width: '300px',
            '& .MuiInputBase-root': {
                height: '40px',
                color: 'appPrimary.main',
                borderRadius: '5px',
                fontWeight: '400'
            },
            '& .MuiInputBase-input': {
                paddingY: '5px',
                paddingX: '10px',
            },
            '& .MuiFormLabel-root': {
                position: 'absolute',
                transform: `translateY(-50%)`,
                top: '50%',
                left: '15px',
                transition: 'top 0.2s, font-size 0.2s',
            },
            '& .MuiInputLabel-shrink': {
                position: 'absolute',
                transform: `translateY(-50%)`,
                top: '0',
                left: '10px',
                paddingLeft: '5px',
                fontSize: '0.75em',
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'appPrimary.main',
            },
          }),
        },
      ]
    }
  },

  transitions: {
    duration: {
      enteringScreen: 900,
      leavingScreen: 900,
    },
  },
});