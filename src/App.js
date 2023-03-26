import 'App.css';
import routes from './routes';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme/defaultTheme';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
})

const App = () => {

    React.useLayoutEffect(() => {
        document.body.setAttribute('dir', 'rtl');
    }, []);

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        {routes.map((route, index) => (
                            <Route key={index} {...route} />
                        ))}
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </CacheProvider>


    );
};

export default App;

