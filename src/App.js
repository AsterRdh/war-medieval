import logo from './logo.svg';
import './App.css';
import './pages/indexPage'
import { Button } from 'react-desktop/windows';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';
import IndexPage from "./pages/indexPage";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

  return (

    <div className="App">
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <IndexPage className="App-info" theme={'dark'}/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    </div>
  );
}

export default App;
