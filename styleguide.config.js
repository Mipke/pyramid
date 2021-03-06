module.exports = {
    title: 'Pyramid',
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
        savePropValueAsString: true,
    }).parse,
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Rubik'
                }
            ],
            raw: '<style>body { font-family: "Rubik", "Helvetica", "Arial", sans-serif }</style>'
        }
    },
    theme: {
        color: {
            link: 'firebrick',
            linkHover: 'salmon'
        },
        fontFamily: {
            base: '"Rubik", "Helvetica", "Arial", sans-serif',
            monospace: '"Rubik", "Helvetica", "Arial", sans-serif',
        }
    }
};
