const initView = {

    'javascript-icon': {

        projects: [{

            name: 'YouBIM UI',

            position: 'Developer',

            description: 'Backbone based UI Framework, for data access and 2D Views (SVG). Contained all the information about BIM Models and the main implementation of our 3D Viewer.',

            exampleData: [
                "../images/example-data/youbim.png",
                "../images/example-data/youbim2.png",
                "../images/example-data/youbim3.png"
            ],

            technologies: [
                "../images/comptech/backbone.svg",
                "../images/comptech/grunt.svg",
                "../images/comptech/sass.svg",
                "../images/comptech/html5.svg",
                "../images/comptech/css3.svg"
            ]

        },
        {

            video: '../videos/example-data/beepress.mp4',

            name: 'BEPRESS',

            position: 'Co-Founder - Developer',

            description: [
                'After winning the Hackaton at Blas Pascal University, Argentina, we were awarded with an ',
                'incubation process for our project, beeprees. ',
                'Beepress was an online platform for perdiodistic data exchange, were realtime information was the',
                'key for a growing social network world, were every person had the chance to be a journalist. ',
                'The key was in the moderators’ comunity, in charge of filtering and cataloging the information ',
                'uploaded by the Users.'
            ].join(' '),

            exampleData: [],

            technologies: [
                "../images/comptech/backbone.svg",
                "../images/comptech/html5.svg",
                "../images/comptech/css3.svg"
            ]

        },
        {

            name: 'SOUTHWEST My Account',

            position: 'Developer',

            description: [
                'In globant i was assigned to the southwest account which was tasked to create and maintain the',
                'website southwest.com. Always in contact with our client and meeting his requirements, working in this',
                'account was a wonderful experience.',
                'The experience through this job was great, as I improved communication skills, software lifecycle',
                'understandings, complex software processes for creation, test, and deployment and the tools which',
                'help you to work on big teams spread among the world.'
            ].join(' '),

            exampleData: [],

            technologies: [
                "../images/comptech/backbone.svg",
                "../images/comptech/grunt.svg",
                "../images/comptech/sass.svg",
                "../images/comptech/html5.svg",
                "../images/comptech/css3.svg"
            ]

        },
        {

            video: '../videos/example-data/siat.mp4',

            name: 'SIAT',

            position: 'Architech - Lead Programmer',

            description: [
                'Siat is an ecosystem of technologies applied to the 5 dimensions of exploration according to the',
                'WHO with the aim of improving the degree of therapeutic adherence of the different chronic',
                'diseases. Since the last decade, scientific and technological development has enabled the',
                'application of information and communication technologies (ICT) in the area of Health, being new',
                'tools in the search to improve adherence to the treatment of diseases. The use of ICTs has been',
                'well accepted by specialist physicians and also by patients suffering from chronic diseases to',
                'increase their follow-up, physician-patient interaction and generate real-time traceability of',
                'treatment.',
                'To achieve such platform we had to create an Android application to provide to the user easy',
                'access to alarms, information, and direct contact with his doctor. Also a Rest API, to perform all',
                'data storage. Since the user internet connection was intermitent, and data consistency was crucial,',
                'we had to create a new syncronization system to make sure data across all systems was consistent.'
            ].join(' '),

            exampleData: [],

            technologies: [
                "../images/comptech/backbone.svg",
                "../images/comptech/grunt.svg",
                "../images/comptech/sass.svg",
                "../images/comptech/html5.svg",
                "../images/comptech/css3.svg"
            ]

        }]

    },

    'unity-icon': {

        projects: [{
            name: 'YouBIM 3D Viewer',

            position: 'Architech - Lead Programmer',

            description: [
                'Since BIM models tend to be massive models, where optimization is not the main goal of the',
                'modeler, our viewer had to achieve such performance that will allow it to transfer and render this',
                'models with not problem. The 3D Viewer also had to be accessed from the Web.',
                'For this task we created a rendering engine on top of WebGL to avoid the pitfalls of libraries',
                'mainly intended for game development (thus, not optimized for massive data rendering).',
            ].join(' '),

            exampleData: [],

            technologies: [
                "../images/comptech/backbone.svg",
                "../images/comptech/grunt.svg",
                "../images/comptech/sass.svg",
                "../images/comptech/html5.svg",
                "../images/comptech/css3.svg"
            ]
        }]

    }
}

export default initView