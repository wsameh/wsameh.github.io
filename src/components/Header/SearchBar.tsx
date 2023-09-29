// React
import React from 'react'

// Material UI Components
import {
    TextField,
    InputAdornment,
    Fade
} from '@mui/material'

// Material UI Icons
import SearchIcon from '@mui/icons-material/Search'

// Props Interface
interface SearchBarProps {
    isVisible: boolean
}

// App Functional Component
const SearchBar: React.FC<SearchBarProps> = ({ isVisible }) => {
    return (
        <TextField 
            disabled={!isVisible}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <Fade in={isVisible} timeout={{enter: 700}}>
                            <SearchIcon sx={{display: isVisible ? 'inline' : 'none', color: 'appPrimary.contrastText',}} />
                        </Fade>
                    </InputAdornment>
                )
            }}
            sx={{
                display: {xs: 'none', 'md': 'flex'},
                marginTop: 'auto',
                marginLeft: 'auto',
                marginRight: '30px',
                width: '300px',
                '& .MuiInputBase-root': {
                    height:  isVisible ? '30px' : '0px',
                    color: 'appPrimary.contrastText',
                    border: isVisible ? (theme) => `1px solid ${theme.palette.appPrimary.contrastText}` : 'none',
                    borderRadius: '10px',
                    transition: 'height 0.3s ease-out',
                    fontWeight: '300'
                },
                '& .MuiInputBase-input': {
                    paddingY: '5px',
                    paddingX: '10px',

                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
            }}
        />
    )
}

export default SearchBar
