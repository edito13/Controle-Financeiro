import React, { useState } from "react";
import ThemeContext from "./assets/ThemeContext";
import Routes from "./routes";

const App = () => {
    
    const [Theme, setTheme] = useState('Light')
    const ToggleTheme = () => setTheme(Theme === 'Light' ? 'Dark' : 'Light')
        
    return (
        <ThemeContext.Provider value={{ Theme, ToggleTheme }}>
            <Routes />
        </ThemeContext.Provider>
    )
}

export default App;
