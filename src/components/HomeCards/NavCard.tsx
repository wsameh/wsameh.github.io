// React Libraries
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Material UI Components
import { Card, 
    Box,
    CardContent, 
    CardMedia, 
    Typography, 
    CardActions,
    CardHeader,
    Button,
} from '@mui/material'

// Data
import { INavCard } from '../../data/NavCards'

// Props Interface
interface INavCardProps {
    content: INavCard,
}

const NavCard: React.FC<INavCardProps> = ({ content }) => {


    // States
    const [isHovering, setIsHovering] = useState(false)

    // Routing
    const navigate = useNavigate()

    // Handlers
    const clickHandler = (event: React.MouseEvent<HTMLElement>, link: INavCard) => navigate(link.route)

    //JSX
    return (
        <Card
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            raised={isHovering}
            sx={{
                width: {xs: '300px', sm: '450px'},
                maxWidth: '450px',
                marginY: '20px',
                marginX: '15px',
                transition: 'margin 0.3s ease', 
                backgroundColor: 'appPrimaryLight.main',
                boxShadow: (theme) => `0px 0px 3px 0px ${theme.palette.appPrimary.light}`,
                '&:hover': (theme) => {
                    return window.innerWidth > theme.breakpoints.values.lg ?
                        {
                            marginTop: '10px',
                            marginBottom: '30px',
                            boxShadow: (theme) => `1px 1px 6px 1px ${theme.palette.appPrimary.light}`
                        } :
                        null
                }
            }}
        >
            <CardHeader
                disableTypography={true}
                title={
                    <Typography variant='navCardLabel'>
                        {content.label}
                    </Typography>
                }
                sx={{
                    paddingY: '8px',
                    backgroundColor: 'appPrimary.main',
                    boxShadow: (theme) => `1px 1px 6px 1px ${theme.palette.appPrimary.light}`
                }}
            >
            </CardHeader>
            {/* Image */}
            <CardMedia sx={{height: {xs: '200px', sm: '300px'} }}>
                <Box
                    component='img'
                    src={window.innerWidth > 600 ? content.imagePath_sm : content.imagePath_xs}
                    sx={{
                        width: '100%',
                        maxHeight: {xs: '200px', sm: '300px'},
                    }}
                />
            </CardMedia>
            {/* Content */}
            <CardContent sx={{height: {xs: '120px', sm: '120px', xl: '120px'}, marginBottom: '50px'}}>
                <Typography variant='navCardText'>
                    {content.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant='appMain' 
                    onClick={(event) => clickHandler(event, content)}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default NavCard
