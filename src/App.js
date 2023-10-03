import React from "react";
import "./App.css";

// import fond
import "@fontsource/roboto/100.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import material ui components

import {Box,Stack, createTheme} from '@mui/material';

// import project components
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import  Add  from "./components/Add";
import { ThemeProvider } from "@emotion/react";

function App() {
  // state management
const [mode, setMode] = React.useState('light')

  // side effect management

  // functions management

  const handleTheme= ()=>{
    setMode(mode==='light' ?  'dark' : 'light' )
  }

  // data management

  const darkMode = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <>
    <ThemeProvider theme={darkMode}>


      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Navbar />
        <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
          <Sidebar handleTheme={handleTheme} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
    </>
  );
}

export default App;




