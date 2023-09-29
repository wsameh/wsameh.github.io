import React from 'react'

// Material UI Components
import { Box, Typography, ListItem, ListItemIcon } from '@mui/material'

// Material Icons
import CircleIcon from '@mui/icons-material/Circle'

// Data
import { IRefProject } from '../../data/RefProjects'

// Interfaces
interface RefProjectContentProps {
    project: IRefProject,
}

const RefProjectContent: React.FC<RefProjectContentProps> = ({project}) => {
    return (
        <Box sx={{ marginTop: {xs: '10px', md: '0'}}}>
            {project.content.map((item) => {
                if(item.type == 'paragraph')
                return (
                    <Typography variant='appBody'>
                    {item.text}
                    </Typography>
                )
                if(item.type == 'listHeading')
                return (
                    <Typography variant='appBody'>
                    {item.text}
                    </Typography>
                )
                else if(item.type == 'list')
                return (
                    <ListItem disablePadding
                    sx={{
                        marginLeft: '10px',
                        marginBottom: '5px',
                        '& .MuiListItemIcon-root': { minWidth: '20px' },
                        '& .MuiSvgIcon-root': { width: {xs: '5px', md: '8px'} }
                    }}
                    >
                    <ListItemIcon sx={{marginBottom: 'auto'}}>
                        <CircleIcon/>
                    </ListItemIcon>
                    <Typography variant='appList'>
                        {item.text}
                    </Typography>
                    </ListItem>
                )
                else
                return null
            })}
        </Box>
    )
}

export default RefProjectContent
