import React from 'react'

// Material UI Components
import { Box, Skeleton } from '@mui/material'

// Data
import { IRefProject } from '../../data/RefProjects'

// Interfaces
interface RefProjectImageProps {
    project: IRefProject,
    align: 'left' | 'right'
}

const RefProjectImage: React.FC<RefProjectImageProps> = ({ project, align }) => {
  return (
    project.imagePath ? (
        <Box
          component='img'
          src={project.imagePath}
          sx={{
            width: {xs: '300px', sm: '400px', md: '450px', lg: '550px', xl: '600px'},
            maxWidth: '600px',
            maxHeight: '400px',
            marginTop: '10px',
            marginBottom: 'auto',
            marginRight: {xs: 'auto', md: align === 'left' ? '30px' : '0'},
            marginLeft: {xs: 'auto', md: align === 'right' ? '30px' : '0'},
          }}
        />
      ) : (
      <Skeleton variant="rectangular" 
        sx={{
          width: {xs: '100%', md: '450px', lg: '550px', xl: '600px'},
          height: '400px',
          marginTop: '10px',
          marginBottom: 'auto',
          marginRight: {xs: 'auto', md: align == 'left' ? '30px' : '0'},
          marginLeft: {xs: 'auto', md: align == 'right' ? '30px' : '0'},
        }}
      />
    )
  )
}

export default RefProjectImage
