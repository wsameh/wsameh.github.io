// Interfaces

export interface ITextContent {
    page: string
    route: string
    sections: ITextContentSection[]
}

export interface ITextContentSection {
    name: string
    blocks: ITextContentBlock[]
}

export interface ITextContentBlock {
    type: 'paragraph' | 'list' | 'listHeading'
    text: string
}


// Data
const textContent: ITextContent[] = [
    {
        page: 'home',
        route: '/',
        sections: [
            {
                name: 'aboutMe',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 
                        `I\'m a Mechanical Engineer specialized in Buildings and Infrastructure Automation Systems Design. 
                        I\'m currently working as a BMS and Controls design Group Leader, at one of the top multi-disciplinary design firms globally, 
                        For over than 15 years I\' Have accomplished dozens of successful missions of designing and supervising the most iconic and prominent 
                        projects in Africa and the Middle East in the field of Building Management Systems (BMS) and SCADA systems. 
                        I\'m also the Head of the Revit API tools development team with successful deployments of Revit automation tools that has 
                        successfully cut down the efforts required in the design works of the mechanical department.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `I'm an enthusiastic app developer who embarked on a self-learning journey with a passion for continuous growth in the ever evolving
                        world of technology. Through self-study and hands-on projects, I acquired  a strong foundation of programming and a divers skill set 
                        for delivering neat and efficient applications. I'm a full stack developer with a vast board of knowledge in providing 
                        Cross-platform desktop apps using Avalonia, web apps with React or Blazor, and backend APIs with ASP.NET Framework. 
                        With an analytical and systematical, mindset I'm committed to deliver the best solutions that can empower businesses 
                        and create seamless user experience.`
                    }
                ]
            }
        ]
    },
    {
        page: 'bms',
        route: '/bms',
        sections: [
            {
                name: 'intro',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 
                        `Building Management Systems have become a vital part of any new construction project. 
                        It plays a primary role in allowing facility operators to take both preventative and corrective actions to 
                        keep the facility MEP equipment operating at the most reliable and cost efficient conditions, while providing the outmost 
                        user comfort and operator convenience.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `With the ever going increase in the cost of energy and the cost of equipment operation, 
                        facility owners need to invest in solid BMS designs that provides a complete design package that ensures 
                        accurate tendering, seamless implementation, and reliable and safe facility operations, 
                        while taking into consideration any project constraints, such as limited budget, regulatory requirements, 
                        and specific Employer requirements.`
                    },
                    // Typical Deliverables
                    {
                        type: 'listHeading',
                        text: 
                        `A typical BMS design package would comprise of the following deliverables:`
                    },
                    { type: 'list', text: `Control Diagram for each interfaced MEP equipment` },
                    { type: 'list', text: `Typical Schedule of I/O Data Point for each interfaced MEP equipment` },
                    { type: 'list', text: `Detailed Sequence of Operations for each interfaced MEP equipment` },
                    { type: 'list', text: `Overall System Architecture showing the connectivity between the various system components` },
                    { type: 'list', text: `List of MEP and ELV equipment and systems interfaces` },
                    { type: 'list', text: `BMS Control Room consoles and furniture arrangement layout` },
                    { type: 'list', text: `Detailed Building Management System (BMS) Technical specifications following latest STD-15A` },
                    { type: 'list', text: `Itemized Bill of Quantities (BOQ)` },
                    // Other Input
                    {
                        type: 'paragraph',
                        text: 
                        `Attention to minor details and close coordination with other trades is mandatory to have a good solid BMS design. BMS design tasks 
                        are no limited to just providing the BMS deliverables, but also include design input to the other trades documents and drawings, to cover 
                        the interface requirements between the MEP equipment and the BMS. For an instance, all mechanical and electrical specifications sections 
                        are checked for compatibility with the BMS design requirements.`
                    },
                    {
                        type: 'listHeading',
                        text: 
                        `Other BMS design input that is covered under other trades design deliverables include the following:`
                    },
                    { type: 'list', text: `Space reservation for the BMS Control Panels` },
                    { type: 'list', text: `Exact Power and Data outlets requirements for the BMS Control Panels` },
                    { type: 'list', text: `Control details in the Mechanical installation details drawings` },
                    { type: 'list', text: `LEED requirements pertaining the mechanical systems design` },
                    { type: 'list', text: `Overall check of the Mechanical systems design to ensure seamless system operation` },
                    // Optional Deliverables
                    {
                        type: 'listHeading',
                        text: `Optional BMS design deliverables include:`
                    },
                    { type: 'list', text: `Revit modeling for the BMS Control Panels locations` },
                    { type: 'list', text: `Detailed Riser Diagrams` },
                    { type: 'list', text: `Cables Schedules and Main Cable Trunk sizing` },
                    { type: 'list', text: `Quantified list of field devices` },
                    // Other Related Services
                    {
                        type: 'listHeading',
                        text: `Other BMS Design and Supervision related services  include:`
                    },
                    { type: 'list', text: `Design Review` },
                    { type: 'list',  text: `Installations Supervision` },
                    { type: 'list',  text: `Commissioning and Testing Supervision` },
                    { type: 'list', text: `Shop Drawings and Materials Submittals Review` },
                    {
                        type: 'paragraph',
                        text: 
                        `With over than 15 years of experience in the field of Building Management Systems, i can provide best in class of BMS designs, whether it is a 
                        commercial, healthcare, hospitality or other application. I worked in numerous projects, each with a Client that had specific requirements 
                        to be met. Check out my refereneced projects.`
                    },
                ]
            }
        ]
    },
    {
        page: 'revit',
        route: '/revit',
        sections: [
            {
                name: 'intro',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 
                        `At the heart of every modern construction project a Building Information Model (BIM). 
                        Building Information Modeling is the holistic process of creating and managing information 
                        for a construction asset to produce a digital representation of a construction asset across its lifecycle.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `Autodesk Revit-based products are Parametric Building Information Modeling (BIM) tools that is used to build a 3D model 
                        for a construction asset. Autodesk Revit modeling is accomplished with real-world elements like 
                        columns, walls, pumps and electrical raceways. Revit integrates all these elements into a single holistic model 
                        that can provide accurate representation of the structure, architecture, and MEP installation of the construction asset. 
                        However significant effort and time can be consumed for high modeling accuracy and validity.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `Autodesk Revit API allow developers to add functionality for Revit by creating addin tools, using .NET Framework. 
                        These tools can help to cut-down the man-power and time required for repetitive modeling tasks.`
                    },
                    {
                        type: 'listHeading',
                        text: 
                        `My Revit addin tools are designed with the following features:`
                    },
                    {
                        type: 'list',
                        text: `Well structured code that is easy to maintain, modify, and expand.`
                    },
                    {
                        type: 'list',
                        text: `Ultra-fast execution time.`
                    },
                    {
                        type: 'list',
                        text: `Optimized memory performance.`
                    },
                    {
                        type: 'list',
                        text: `Seamless user interface using Windows Presentation Foundation (WPF).`
                    },
                ]
            }
        ]
    },
    {
        page: 'web/react',
        route: '/web',
        sections: [
            {
                name: 'intro',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 
                        `React is the one of the most popular JavaScript libraries for building user interface for web apps 
                        React strength lies in its component-based architecture, which allows breaking down complex user interfaces 
                        into re-usable components. This modular approach enhance code reusability, maintainability, and scalability.
                        .`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `With the use of Virtual DOM; React can efficiently update the user interface by minimizing the direct 
                        update of the real DOM, allowing for significantly enhancing the rendering speed, resulting in a smoother and more 
                        responsive user experience.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `React's component-based architecture, Virtual DOM, and strong community support make it an excellent choice 
                        for modern web apps development.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `With cuttin-edge technology and stunning user experiences my React web app designs provide dynamic, interactive, 
                        and visually stunning web apps, allowing seamless navigation, fluid animations, and real-time updates to let your 
                        web app feel alive and engaging.`
                    }
                ]
            }
        ]
    },
    {
        page: 'web/blazor',
        route: '/web',
        sections: [
            {
                name: 'intro',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 
                        `Blazor has gained significant attention, as an open-source web framework, for its impressive features and benefits. 
                        Blazor allows developers to build interface web applications using C# and .Net, and it utilizes WebAssembly, 
                        which is a binary instruction format, to run the code directly in the browser without the need for JavaScript.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `Blazor’s component-based architecture allows developers to build reusable UI element, allowing
                        One of Blazor’s most significant benefits is the ability to develop a full-stack web application using only C#. 
                        By leveraging the power of .NET, and the vast ecosystem of .NET libraries, tools, and capabilities, developers 
                        can seamlessly work across client-side and server-side development, reducing the development time and complexity 
                        associated with multiple languages projects.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `By executing directly in the browser using WebAssembly, Blazor results in improved application performance, 
                        heightened responsiveness, while maintaining rich and interactive user experience.`
                        
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `Using Visual Studio Blazor provides comprehensive debugging capabilities, for bot client-side and 
                        server-side code within a single codebase, which simplifies code maintenance process greatly.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `My designs for full stack Blazor web apps leverages the full power of .NET libraries in creating fast, 
                        visually appealing, and highly functional web applications. Embrace the future of web development with 
                        Blazor and levitate your online presence.`
                    },
                ]
            }
        ]
    },
    {
        page: 'desktop',
        route: '/desktop',
        sections: [
            {
                name: 'intro',
                blocks: [
                    {
                        type: 'paragraph',
                        text: 
                        `In today's digital landscope, the demand for cross-platfrom desktop applications is growing rapidly. Avalonia provides powerful 
                        solution for developing feature-rich applications that can run seamlessly on multiple platforms.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `Avalonia is an open-source, cross-platform UI framework that allows creating stunning desktop applications using .NET Core. 
                        Simlar to WPF applications; Avalonia are built using XAML and C#, making it highly versatile and efficient for UI development.`
                    },
                    {
                        type: 'paragraph',
                        text: 
                        `Avalonia is desinged to handle heavy workloads efficiently, making it an ideal choice for resource-intensive applications, while allowing 
                        deep customization and templating of user defined controls, for code reusability and seamless development process.`
                    },
                    {
                        type: 'listHeading',
                        text: 
                        `Some of the notable advantages include:`
                    },
                    { type: 'list', text: `Avalonia enables writing code once and deploying it on multiplatforms, including Windows, macOS, and Linux` },
                    { type: 'list',  text: `Rich set of controls, and styles is readily available for creating visually appealing and highly interface user interfaces.` },
                    { type: 'list',  text: `Avalonia uses a lightweight architecture, resulting in enhaced performance and speed.` },
                    {
                        type: 'paragraph',
                        text: `My Cross-Platform desktop application development services, will empower your software development business by saving time 
                        and resouces significantly and allowing for broader user base, using Avalonia framework.`
                    }
                ]
            }
        ]
    },
]

export default textContent