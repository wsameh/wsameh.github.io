import bms from '../assets/images/Carousel/bms.png'
import revit from '../assets/images/Carousel/revit_api.png'
import react from '../assets/images/Carousel/react.png'
import blazor from '../assets/images/Carousel/blazor.png'
import avalonia from '../assets/images/Carousel/avalonia.png'


// Interfaces
export interface ICarouselData {
    index: number | null,
    label: string,
    path: string,
    alt: string,
    discription1: string
    discription2: string
}

// Data
const carouselData: ICarouselData[] = [
    {
        index: null,
        label: 'Building Management System',
        path: bms,
        alt: 'Building Management System',
        discription1: 'Building Management System Design Expert',
        discription2: 'Provide best in class BMS designs',
    },
    {
        index: null,
        label: 'Revit API',
        path: revit,
        alt: 'Revit API',
        discription1: 'Need Revit API add-ins',
        discription2: 'with extensive dynamic UI ?' 
    },
    // {
    //     index: null,
    //     label: 'image-03',
    //     path: bms2,
    //     alt: 'image-03',
    //     discription1: 'Industrial, Commercial, Health Care, etc...',
    //     discription2: 'Can provide a fully coordinated BMS design for your new project',
    // },
    {
        index: null,
        label: 'React',
        path: react,
        alt: 'React Web Development',
        discription1: 'Professional Web Dev.',
        discription2: 'Create modernized web apps in React.' 
    },
    {
        index: null,
        label: 'Blazor',
        path: blazor,
        alt: 'Blazor Web Development',
        discription1: 'Professional Web Dev.',
        discription2: 'Build fully flidged web apps in .NET and Blazor' 
    },
    {
        index: null,
        label: 'Cross-platform App Development',
        path: avalonia,
        alt: 'Cross-platform App Development',
        discription1: 'Cross-Platform desktop apps development',
        discription2: 'in Avalonia',
    },
] 

// Exports
export default carouselData;