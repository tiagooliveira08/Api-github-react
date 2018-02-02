import React from "react";
import {render} from "react-dom";

import {AppContainer} from "react-hot-loader";

import App from "./components/app";

const renderApp = Component =>{
	render(
    <AppContainer>
        <Component />    
    </AppContainer>,document.getElementById("app"),
    )
};

renderApp(App);

if(module.hot){
    module.hot.accept("./components/app",() =>{
        renderApp(App);
    })
}



