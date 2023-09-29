import React from 'react'

// Material Ui Components
import { Typography, ListItem, ListItemIcon, } from '@mui/material'

// Material Icons
import CircleIcon from '@mui/icons-material/CircleOutlined'

// Data
import { ITextContentBlock } from '../../../src/data/TextContent'

interface IPageContentProps {
  blocks: ITextContentBlock[]
}

const PageContent: React.FC<IPageContentProps> = ({ blocks }) => {

  return (
    <>
      {blocks.map((block) => {
        if(block.type === 'paragraph')
        return (
          <Typography variant='appBody'>
            {block.text}
          </Typography>
        )
        else if(block.type === 'listHeading'){
          return(
            <Typography variant='appBody'>
              {block.text}
            </Typography>
          )
        }
        else if(block.type === 'list')
        return (
          <ListItem disablePadding
            sx={{
              margin: '0px 0px 5px 20px',
              '& .MuiListItemIcon-root': { minWidth: '20px' },
              '& .MuiSvgIcon-root': { width: '10px' }
            }}
          >
            <ListItemIcon>
              <CircleIcon/>
            </ListItemIcon>
            <Typography variant='appList'>
              {block.text}
            </Typography>
          </ListItem>
        )
        else
          return null
      })}
    </>
  )
}

export default PageContent
