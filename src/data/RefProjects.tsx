import haram from '../assets/images/RefProjects/haram.png'
import cbd from '../assets/images/RefProjects/cbd.png'
import schematicBuilder from '../assets/images/RefProjects/revit_api_schematic_builder.png'
import boqBuilder from '../assets/images/RefProjects/revit_api_boq_builder.png'
import react from '../assets/images/RefProjects/react.png'
import blazor from '../assets/images/RefProjects/blazor.png'
import avalonia from '../assets/images/RefProjects/avalonia.png'



// Interfaces
export interface IRefProject {
    page: string,
    imagePath: string,
    alt: string,
    title: string,
    content: IRefProjectBlock[]
}

export interface IRefProjectBlock {
    type: 'paragraph' | 'list' | 'listHeading',
    text: string
}

// Data
const RefProjects: IRefProject[] = [
    {
        page: 'bms',
        imagePath: haram,
        alt: 'Makkah-Haram-Expansion-Project',
        title: 'Makkah Haram and Mataf Expansion Project',
        content: [
            {
                type: 'paragraph',
                text: 
                `I\'m honored to be the BMS and Controls design and supervision Group Leader for the prominent project of Makkah Haram 
                and Mataf Expansion. With a cost of 22 billion dollars the project aims to increase the capacity of the mosque to more 
                than 2 million people. It\s truly a one of kind project. The project comprises of the following main elements:`
            },
            {
                type: 'list',
                text: 
                `The Northern Expansion building with a 74 prayer halls spreading over 300,000 square meters.`
            },
            {
                type: 'list',
                text: 
                `Service Building and Piazza with a footprint area of 500,000 square meters.`
            },
            {
                type: 'list',
                text: 
                `A Central Utility Complex (CUC) serving the, consist of a 145,000 TR Chillers Plant, Automatic Solid Waste Collection Plant, 
                Water Treatment Plant, and a central Firefighting Pumps Station.`
            },
            {
                type: 'list',
                text: 
                `A 5,000 meters Utility Tunnel and Culvert connecting the project with the central services at the CUC.`
            },
            {
                type: 'paragraph',
                text: 
                `The following Instrumentation, Control and Automation systems are provided as part of the overall Integrated Building Management 
                System (IBMS) design package, for monitoring and control of the various MEP equipment and systems serving the project:`
            },
            {
                type: 'list',
                text: 
                `The IBMS which is the heart of the automation system. The IBMS Control Room comprises of 30+ Operator Workstations, 
                allocated at the center of the Expanion builiding, and is backed-up by two data centers allowing full system redundancy.`
            },
            {
                type: 'list',
                text: 
                `The Chillers Plant is monitored and controlled by dedicated SCADA system, that also integrates with the main chilled water 
                network leak detection system to ensure seamless operation.`
            },
            {
                type: 'list',
                text: 
                `Other dedicated safety industrial control systems, with dedicated SCADA platforms are provdied for monitoring and control 
                the movable dome and skylights at the Expansion Building, as well as the automated main gates.`
            },

        ],
    },
    {
        page: 'bms',
        imagePath: cbd,
        alt: 'Egype-Central-Business-District-Project',
        title: 'Egypt Central Business District Project',
        content: [
            {
                type: 'paragraph',
                text: `I worked as the BMS Design Group Leader in Egypt\'s ambitious project; the Central Business District (CBD). The 
                project aims to become the commercial artery the Egypt\'s new Capital, and symbolizes cutting edges sustainability 
                and Smart City design. The project comprises of the following main elements:`
            },
            {
                type: 'list',
                text: `Five high rise residential towers.`
            },
            {
                type: 'list',
                text: `Eleven high rise office towers.`
            },
            {
                type: 'list',
                text: `Luxury Hotels and Branded Apartments.`
            },
            {
                type: 'list',
                text: `An Iconic Tower with a staggering 393 meters height, which is the tallest in africa.`
            },
            {
                type: 'list',
                text: `A Central Utility Complex (CUC) that provides centralized utilities for all towers including 
                a 50,000 TR Chillers Plant, Generators Plant, and a Domestic and Firefighting Pumps Station.`
            },
            {
                type: 'paragraph',
                text: `Each tower is monitored and controlled by an Integrated Building Management System (IBMS) that provides a 
                common platform for the Building Automation Systems, Security Systems, and Life Safety systems. Each tower IBMS is 
                also integrated with a Central IBMS located at the CUC.`
            },
            {
                type: 'paragraph',
                text: `The project was designed was great attention for involving the latest technologies pertaining smart building 
                and smart city systems. The project will eventually integrate with the new Administrative Capital Smart City Platform 
                that aims to provide cutting-edge smart services for the City population.`
            },
        ],
    },
    {
        page: 'revit',
        imagePath: schematicBuilder,
        alt: 'Control_Diagrams_Builder_addin',
        title: 'Control Diagrams Builder Addin Tool',
        content: [
            {
                type: 'paragraph',
                text: 
                `As an expert in Building Management System (BMS) design, control diagrams requires detailed attention to 
                accurately describe the MEP equipment control requirements. A well developed control diagram should provide 
                detailed sequence of operation, instrumentation diagram, and schedule of I/O data points. Such deliverables 
                are typically man made to suite the requirements of the MEP design, and involved continuous coordination 
                with the mechanical/ electrical designer to ensure consistency between the actual MEP equipment selections 
                and the BMS control diagrams.`
            },
            {
                type: 'paragraph',
                text: 
                `Such process, is actually prone for coordination mistakes. 
                To overcome many of the coordination pitfalls and to automate this process as much as possible we developed a 
                sophisticated addin tool, where the control diagrams, including sequence of operation and schedule of I/O data points, 
                are automatically built, from hundreds of nested 2D generic annotation Revit Families, based on extensive user selections, 
                to finally provide a complete control diagram.`
            },
            {
                type: 'listHeading',
                text: 
                `The tool provides the following features leading to significant reduction in time, man-power, 
                and coordination mistakes that accompanied the process of manually building well defined control diagrams:`
            },
            { type: 'list', text: `Extensive user selection for the mechanical equipment configuration and options` },
            { type: 'list', text: `Build a control diagram, sequence of operation, and schedule of I/O data points based on the user selections` },
            { type: 'list', text: `Establish and maintain a link between the Revit elements and the control diagrams for I/O data points quantification` },
            { type: 'list', text: `Extensive user selection for the mechanical equipment configuration and options` },
            { type: 'list', text: `Customizable user selection options using editable JSON file` },
        ],
    },
    {
        page: 'revit',
        imagePath: boqBuilder,
        alt: 'BOQ_BuildeR_Addin_Tool',
        title: 'STD-15A Bill of Quantities Builder Addin Tool',
        content: [
            {
                type: 'paragraph',
                text: 
                `Mechanical designers are always faced with the hideous task of delivering an accurate Bill of Quantity (BOQ) 
                that reflect the quantities, meters, and weights of all the elements that constitute the entire Mechanical design. 
                This process was not 100% accurate and consumed significant man-power to produce, even by using the Revit Schedules.`
            },
            {
                type: 'paragraph',
                text: 
                `In an attempt to reduce the man-power to produce a BOQ for the mechanical design. 
                We have developed an addin tool that can accurately quantify all the mechanical elements, 
                in terms of item quantities, meters, and weights, with minimal user interface.`
            },
            {
                type: 'listHeading',
                text: 
                `The addin tool would typically compare all elements within a Revit BIM to a reference BOQ spread sheet, 
                and it groups and sorts out all the mechanical equipment, pipes, and ducts, to produce a BOQ, in MS Excel sheet, 
                that complies with STD-15A format, within few minutes, rather than several hours as would have been manually 
                developed by the mechanical designers.`
            },
        ],
    },
    {
        page: 'web/react',
        imagePath: react,
        alt: 'Online_Resume',
        title: 'My Online Resume',
        content: [
            {
                type: 'paragraph',
                text: 
                `My first React project is this dynamic online resume, which i built using various libraries including React, React Router. 
                and to ensure smooth development process, the project is written entirely in TypeScript, which is a Typed Superset of JavaScript, 
                allowing to add rules about how values can be used.`
            },
            {
                type: 'paragraph',
                text: 
                `My online resume is released as a beta version with the intention to add other sections and articles about various
                topics including Building Management System design best practices, Revit API implementation, and desktop and web apps 
                development solutions.`
            }
        ],
    },
    {
        page: 'web/blazor',
        imagePath: blazor,
        alt: 'Online_Shopping_Web_App',
        title: 'Online Shopping Web Application',
        content: [
            {
                type: 'paragraph',
                text: 
                `This Blazor demo project is a replica of a real-life web application, where the web app is built 
                to have the same details, features, and visuals as of a real-life online shopping application.`
            },
            {
                type: 'paragraph',
                text: 
                `ASP.NET is used as the project’s backend, while Razor Pages are used to build a frontend that rendered completely on the Client-Side.
                The Razor Pages comprise of modular view components, that represent reusable UI code that can help break up and simplify complex layouts.`
            },
            {
                type: 'paragraph',
                text: 
                `Blazored LocalStorage library is used to access the browser's local storage, allowing persitence of the user data on his local machine
                minimizing back and forth trips to the server for outmost performance optimization and better user experience.`
            }
        ],
    },
    {
        page: 'desktop',
        imagePath: avalonia,
        alt: 'Cross-Platform_Desktop_Application',
        title: 'Cross-Platfrom Desktop Loudness Meter Application',
        content: [
            {
                type: 'paragraph',
                text: 
                `This demo project is a replica of a real-life desktop application that captures the user microphone audio, and dynamically displays
                a graphical representation of input audio level in real time.`
            },
            {
                type: 'paragraph',
                text: 
                `ManagedBase library, which is an open-source .Net wrapper for Un4Seen Bass, is used to facilitate capturing, recording, and conversion 
                of audio stream from any input device. LiveCharts library is used to render the graph chart of the captured audio stream .`
            },
            {
                type: 'paragraph',
                text: 
                `LiveCharts library is used to render the graph chart of the captured audio stream.`
            },
        ],
    },
]

// Exports
export default RefProjects