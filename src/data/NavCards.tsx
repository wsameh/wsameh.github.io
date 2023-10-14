import bms_sm from '../assets/images/NavCards/bms_sm.png'
import revit_sm from '../assets/images/NavCards/revit_api_sm.png'
import react_sm from '../assets/images/NavCards/react_sm.png'
import blazor_sm from '../assets/images/NavCards/blazor_sm.png'
import desktop_sm from '../assets/images/NavCards/avalonia_sm.png'

import bms_xs from '../assets/images/NavCards/bms_xs.png'
import revit_xs from '../assets/images/NavCards/revit_api_xs.png'
import react_xs from '../assets/images/NavCards/react_xs.png'
import blazor_xs from '../assets/images/NavCards/blazor_xs.png'
import desktop_xs from '../assets/images/NavCards/avalonia_xs.png'


// Interfaces
export interface INavCard {
    title: string,
    imagePath_xs: string,
    imagePath_sm: string,
    alt: string,
    label: string,
    text: string,
    route: string,
}

// Data
const navCards: INavCard[] = [
    {
        title: 'BMS',
        imagePath_xs: bms_xs,
        imagePath_sm: bms_sm,
        alt: 'Building Management System',
        label: 'Building Management System',
        text: `Have a construction project ?  
            A well designed BMS drawings and documents are mandatory for successful installation of any automation and control system.  
            My Building Management System design package allows cost efficient and seamless implementation, while guarantees, 
            and safe, user friendly, and energy conservative facility operations.`,
        route: '/bms',
    },
    {
        title: 'Revit',
        imagePath_xs: revit_xs,
        imagePath_sm: revit_sm,
        alt: 'Revit Addins',
        label: 'Revit Addins',
        text: `Need to automate Revit tasks that takes extensive time and effort to accomplish ? 
            Need your design engineers to focus on the design core rather getting distracted by time consuming tasks in Revit ? 
            Revit automation tools will empower your design firm businesses, and market competitivity, by reducing the 
            time of Revit model design delivery.`,
        route: 'revitapi',
    },
    {
        title: 'React',
        imagePath_xs: react_xs,
        imagePath_sm: react_sm,
        alt: 'image-01',
        label: 'React Web Apps',
        text: `Time to bolster your web site to have a striking looks and unique user experience using cutting-edge technology ?  
            My React web app designs can supercharge your web site to have fast load times, 
            seamless interactivity, and stunning UI experience that will boost your online business.`,
        route: 'web/react',
    },
    {
        title: 'Blazor Web Apps',
        imagePath_xs: blazor_xs,
        imagePath_sm: blazor_sm,
        alt: 'image-01',
        label: 'Full Stack Blazor Web Apps',
        text: `Revolutionize your web app and experience the power of Blazor! 
            Create stunning, high-performance web apps with seamless integration into 
            .NET backend that will transform your online presence and boost productivity with 
            powerful features, cutting-edge data management and seamless UI experience.`,
        route: 'web/blazor',
    },
    {
        title: 'Desktop',
        imagePath_xs: desktop_xs,
        imagePath_sm: desktop_sm,
        alt: 'image-01',
        label: 'Cross-platform Desktop Apps',
        text: `Discover the power of Avalonia: a cutting-edge 
            cross platform desktop framework. Create high performance, 
            and stunning UI designs, seamlessly on Windows, macOS, and Linux 
            with single, robust, and modular codebase powered by cutting-edge .NET Core. 
            Boost your productivity, reduce development time, and reach a wider audience.`,
        route: 'desktop',
    }
]

// Exports
export default navCards