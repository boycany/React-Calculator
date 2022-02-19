import React from 'react';
import Draggable from 'react-draggable';
import App from './App'

const AppContainer = () => {
 
    return ( window.screen.width > 576
        ? <Draggable>
            <div>
                <App />
            </div>       
        </Draggable>
        : <div>
            <App />
        </div>      
    )  
}

export default AppContainer