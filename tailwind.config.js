  // tailwind.config.js
module.exports = {
    theme: {
        extend: {
            screens: {
                'xs' : {'max': '768px'}
            },
            backgroundImage: {
                'body-pattern': "url('../assets/img/pattern.png')",
            },
            colors : {
                'principal' : '#2C39aB',
                'secundario': '#FF4C29',
                'gris'      : '#D2D2D2',
                'oscuro'    : '#082032',
            },
            animation: {
                'spin-low'   : 'spin 2s linear infinite',
                'from-bellow': 'fromBellow 500ms linear',
                'from-right' : 'fromRight 300ms linear',
            },
            keyframes: {
                fromBellow:{
                    '0%'  : { transfrom: 'translateY(0%)'},
                    '50%' : { transform: 'translateY(200%)'},
                    '100%': { transfrom: 'translateY(0%)'}
                },
                fromRight:{
                    '0%'  : { transfrom: 'translateX(200%)'},
                    '50%' : { transform: 'translateX(100%)'},
                    '100%': { transfrom: 'translateX(0%)'}
                },
            }
        }
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate  : ['responsive', 'hover', 'group-hover']
    }
}