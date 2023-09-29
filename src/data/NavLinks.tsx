// Interfaces
export interface INavLink {
    label: string,
    route: string,
    children: INavLink[] | null,
    type: 'pageRoute' | 'sectionRoute'
}

// Data
const navLinks: INavLink[] = [
    {
        label: 'HOME',
        route: '',
        type: 'pageRoute',
        children: null,
    },
    {
        label: 'BMS',
        route: 'bms',
        type: 'pageRoute',
        children: null,
    },
    {
        label: 'Revit API',
        route: 'revitapi',
        type: 'pageRoute',
        children: null,
    },
    {
        label: 'Web',
        route: 'web',
        type: 'pageRoute',
        children: [
            {
                label: 'React',
                route: 'react',
                type: 'sectionRoute',
                children: null
            },
            {
                label: 'Blazor',
                route: 'blazor',
                type: 'sectionRoute',
                children: null
            }
        ]
    },
    {
        label: 'Desktop',
        route: 'desktop',
        type: 'pageRoute',
        children: null
    },
    {
        label: 'CONTACT ME',
        route: 'contactMe',
        type: 'pageRoute',
        children: null
    },
]

// Exports
export default navLinks

// {
//     label: 'Revit API',
//     route: 'revitapi',
//     children: [
//         {
//             label: 'Revit API',
//             route: 'revitapi',
//             children: null
//         },
//         {
//             label: 'Revit API',
//             route: 'revitapi',
//             children: null
//         }
//     ]
// },

