import React from 'react'

// Material UI Components
import { Box, Typography } from '@mui/material'

// Data
import { IRefProject } from '../../data/RefProjects'
import RefProjectImage from './RefProjectImage'
import RefProjectContent from './RefProjectContent'

// Props
interface IRefProjectProps {
  project: IRefProject
  align: 'left' | 'right'
}

const RefProject: React.FC<IRefProjectProps> = ({project, align}) => {
  return (
    <Box 
      sx={{
        backgroundColor: 'appPrimaryLight.light',
        padding: {xs: '10px 20px 30px 20px', md: '20px 30px 50px 30px'},
        marginBottom: '20px',
        borderRadius: '5px'
      }}
    >
      <Typography 
        variant='appSubtitle'
        sx={{paddingBottom: {xs: '0', md: '10px'}, textAlign: `${align.toString()}`}}
      >
        {project.title}
      </Typography>
      <Box 
        display='flex'
        sx={{
          justifyContent: 'space-evenly',
          flexDirection: {xs: 'column', md: align == 'left' ? 'row' : 'row-reverse'}
        }}
      >
        <RefProjectImage project={project} align={align}/>
        <RefProjectContent project={project} />
      </Box>
    </Box>
  )
}

export default RefProject
