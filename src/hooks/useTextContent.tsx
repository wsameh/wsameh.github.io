import { useMemo } from 'react'
import textContent, { ITextContentBlock } from '../../src/data/TextContent'

type useTextContentProps = {
    page: string
    block: string
}

export const useTextContent = ({page, block}: useTextContentProps): ITextContentBlock[] => {
  return useMemo<ITextContentBlock[]>((): ITextContentBlock[] => {
    let blocks: ITextContentBlock[] = []
    textContent.forEach((content) => {
        if(content.page === page){
          content.sections.forEach((section) => {
              if(section.name === block){
                blocks = section.blocks
              }
          })
        }
      })
    return blocks
  }, [page, block])
}