import { createTheme } from '@mui/material/styles';
import IranYekan from "../fonts/iranyekanwebregular(fanum).woff2"


const theme = createTheme({
    palette: {
        mode: 'light',
        
        primary: {
            light: "#b3d9ff",
            main: "#0080ff",
            dark: "#004d99",
            contrastText: '#fff',
        },

    },

    typography: {
        fontFamily: IranYekan,
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },

    
    direction: "rtl",
})

export default theme;