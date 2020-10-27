import React from 'react'
import logo from './logo.svg';
import './App.css';
import {useMatomo} from '@datapunt/matomo-tracker-react'

function App() {
    const {trackPageView, trackEvent} = useMatomo()
    const x = {"Low": [0.83, 0.86, 0.72, 0.65, 0.61, 0.66, 0.63, 0.63, 0.62, 0.64, 0.58, 0.64, 0.63, 0.66, 0.62, 0.61, 0.62, 0.65, 0.74, 0.9, 0.85, 0.81, 0.84, 0.79, 0.77, 0.79, 0.76, 0.67, 0.6, 0.64, 0.61, 0.63, 0.6, 0.66, 0.65, 0.62, 0.66, 0.6, 0.6, 0.63, 0.6, 0.64, 0.61, 0.63, 0.59, 0.63, 0.56, 0.63, 0.61, 0.62, 0.63, 0.64, 0.61, 0.62, 0.65, 0.61, 0.77, 6.56, 4.32, 4.33, 0.61, 0.65, 0.61, 0.6, 0.6, 0.62, 0.61, 0.63, 0.63, 0.63, 0.61, 0.63, 0.6, 0.63, 0.63, 0.58, 0.63, 0.59, 0.61, 0.6, 0.64, 0.66, 0.65, 0.6, 0.62, 0.6, 0.63, 0.64, 0.63, 0.66, 0.76, 0.86, 0.86, 0.79, 0.82, 0.81, 0.85, 0.82, 0.82, 0.66, 0.66, 0.61, 0.64, 0.65, 0.63, 0.65, 0.62, 0.63, 0.64, 0.6, 0.59, 0.61, 0.63, 0.67, 0.79, 0.8, 0.87, 0.93, 0.81, 0.85, 0.85, 0.83, 0.76, 0.66, 0.66, 0.57, 0.59, 0.58, 0.61, 0.62, 0.63, 0.63, 0.63, 0.59, 0.59, 0.64, 0.63, 0.67, 0.78, 0.85, 0.82, 0.87, 0.85, 0.86, 0.86, 0.83, 0.81, 0.66, 0.67, 0.62, 0.01, 0.63, 0.62, 0.58, 0.56, 0.58, 0.6, 0.62, 0.61, 0.59, 0.57, 0.58, 0.7, 0.79, 0.79, 0.75, 0.76, 0.79], "High": [1.27, 1.43, 1.03, 1.11, 0.84, 0.82, 0.81, 0.79, 0.91, 1.62, 0.83, 0.79, 0.85, 1.57, 1.45, 0.9, 0.91, 1.32, 1.01, 1.21, 4.12, 1.22, 2.13, 1.76, 1.01, 1.56, 0.97, 1.39, 0.83, 1.01, 0.89, 0.78, 0.85, 1.84, 0.84, 1.49, 0.85, 1.13, 1.46, 0.81, 0.86, 1.3, 0.8, 0.92, 0.86, 1.22, 1.62, 1.52, 0.85, 1.46, 0.79, 1.13, 0.83, 0.8, 0.88, 0.84, 12.26, 9.11, 8.17, 7.91, 13.25, 1.43, 1.12, 2.05, 0.81, 1.41, 0.77, 0.78, 1.06, 1.47, 1.31, 0.86, 0.88, 1.51, 0.79, 1.07, 0.89, 1.79, 0.77, 0.85, 0.88, 1.71, 0.91, 0.82, 0.79, 1.08, 1.34, 0.84, 0.85, 1.35, 1.12, 1.12, 4.45, 1.53, 1.96, 1.91, 2.16, 6.52, 1.61, 0.96, 0.83, 1.36, 0.83, 1.26, 0.79, 1.46, 0.87, 0.83, 0.78, 1.27, 1.64, 0.83, 0.84, 1.2, 1.1, 1.19, 1.03, 5.24, 1.77, 1.11, 1.03, 1.68, 4.61, 1.38, 1.02, 0.81, 0.8, 0.86, 0.87, 1.86, 0.88, 0.83, 0.84, 1.19, 1.28, 0.97, 0.82, 1.4, 1.04, 1.11, 1.18, 1.6, 14.54, 1.99, 1.14, 1.65, 0.98, 1.1, 0.8, 0.83, 8.62, 4.09, 1.61, 0.83, 0.78, 0.78, 0.88, 2.05, 1.36, 0.87, 0.8, 0.75, 1.58, 1.15, 1.07, 1.71, 1.52, 1.02], "Open": [0.9, 1.13, 0.87, 0.92, 0.69, 0.66, 0.63, 0.78, 0.82, 1.17, 0.81, 0.76, 0.64, 1.57, 0.76, 0.74, 0.69, 0.71, 0.94, 0.9, 0.99, 1.03, 2.13, 1.76, 0.95, 0.9, 0.97, 0.81, 0.75, 1.01, 0.89, 0.71, 0.8, 1.84, 0.74, 1.49, 0.8, 0.93, 0.72, 0.73, 0.7, 0.81, 0.66, 0.92, 0.71, 0.8, 0.7, 1.52, 0.85, 0.67, 0.7, 0.76, 0.77, 0.72, 0.7, 0.65, 0.77, 6.89, 8.17, 5.39, 13.25, 0.81, 0.63, 0.79, 0.78, 0.75, 0.64, 0.78, 1.06, 0.98, 0.9, 0.82, 0.69, 0.7, 0.71, 1.07, 0.72, 1.79, 0.74, 0.79, 0.79, 1.06, 0.76, 0.7, 0.72, 0.66, 1.34, 0.84, 0.65, 0.97, 0.86, 1.12, 1.07, 1.28, 1.96, 1.91, 1.24, 1.05, 1.14, 0.96, 0.78, 0.85, 0.83, 0.84, 0.76, 0.89, 0.75, 0.7, 0.74, 0.95, 0.74, 0.72, 0.7, 0.89, 0.79, 0.99, 0.91, 1.09, 1.22, 0.92, 0.98, 1.05, 0.93, 0.84, 1.02, 0.67, 0.73, 0.71, 0.87, 1.86, 0.72, 0.79, 0.78, 0.85, 0.7, 0.81, 0.82, 0.72, 1.0, 1.11, 0.97, 1.09, 2.71, 1.99, 0.97, 1.27, 0.91, 0.94, 0.77, 0.77, 0.69, 0.81, 0.91, 0.64, 0.62, 0.63, 0.88, 0.84, 1.29, 0.87, 0.8, 0.68, 0.75, 1.15, 1.07, 0.87, 1.23, 0.88], "Close": [1.06, 0.96, 0.77, 0.7, 0.81, 0.81, 0.67, 0.74, 0.78, 0.7, 0.65, 0.7, 0.85, 0.69, 0.68, 0.75, 0.84, 0.81, 1.01, 1.0, 0.98, 0.91, 0.95, 0.92, 0.94, 0.85, 0.76, 0.8, 0.82, 0.73, 0.68, 0.76, 0.71, 0.66, 0.66, 0.77, 0.73, 0.61, 0.6, 0.77, 0.86, 0.64, 0.72, 0.84, 0.59, 0.63, 0.71, 0.63, 0.61, 0.62, 0.75, 0.67, 0.66, 0.65, 0.75, 0.61, 9.68, 7.84, 4.41, 7.91, 0.66, 0.76, 0.61, 0.64, 0.63, 0.62, 0.68, 0.66, 0.67, 0.73, 0.61, 0.73, 0.6, 0.75, 0.71, 0.79, 0.66, 0.72, 0.77, 0.7, 0.87, 0.69, 0.73, 0.6, 0.7, 0.85, 0.76, 0.68, 0.85, 1.04, 1.12, 0.86, 0.97, 0.88, 0.85, 0.83, 1.52, 6.52, 0.82, 0.82, 0.68, 0.61, 0.69, 0.72, 0.63, 0.68, 0.64, 0.78, 0.68, 0.6, 0.73, 0.75, 0.66, 0.72, 1.02, 0.96, 1.0, 0.96, 0.96, 0.86, 0.85, 0.83, 0.88, 0.66, 0.66, 0.57, 0.72, 0.58, 0.61, 0.62, 0.73, 0.66, 0.63, 0.74, 0.65, 0.68, 0.66, 0.9, 0.94, 0.85, 0.82, 1.39, 1.2, 0.86, 0.91, 1.0, 0.85, 0.77, 0.73, 0.81, 1.87, 0.69, 0.75, 0.66, 0.78, 0.7, 0.69, 2.05, 0.79, 0.65, 0.62, 0.72, 1.11, 0.86, 0.79, 1.71, 0.92, 0.96], "Mean": [0.995, 1.0225, 0.8783299999999999, 0.81, 0.72833, 0.73417, 0.71917, 0.715, 0.7325, 0.88833, 0.71167, 0.7125, 0.71, 0.8658299999999999, 0.78667, 0.73583, 0.7225, 0.7975, 0.89, 0.9825, 1.4466700000000001, 1.0015399999999999, 1.05182, 0.9791700000000001, 0.8958299999999999, 0.9441700000000001, 0.845, 0.8225, 0.71917, 0.74083, 0.72167, 0.7075, 0.73333, 0.895, 0.71917, 0.7925, 0.72333, 0.76917, 0.75917, 0.71, 0.705, 0.78583, 0.70167, 0.745, 0.70833, 0.81417, 0.77, 0.7775, 0.70667, 0.7625, 0.715, 0.755, 0.70417, 0.7058300000000001, 0.72833, 0.685, 7.99, 7.56917, 4.70333, 4.8133300000000006, 3.8975, 0.8266700000000001, 0.72833, 0.78769, 0.69917, 0.77, 0.7, 0.6958300000000001, 0.7416699999999999, 0.91455, 0.76167, 0.74, 0.70538, 0.7775, 0.72833, 0.77, 0.72083, 0.79, 0.69833, 0.745, 0.74273, 0.905, 0.7316699999999999, 0.6875, 0.6925, 0.79143, 0.7583300000000001, 0.70667, 0.7025, 0.84667, 0.8966700000000001, 0.987, 1.34917, 1.08833, 1.0091700000000001, 0.97083, 1.14583, 1.565, 0.9933299999999999, 0.7725, 0.7416699999999999, 0.78667, 0.7225, 0.79, 0.7, 0.81833, 0.7225, 0.72167, 0.7025, 0.83, 0.77167, 0.7075, 0.69917, 0.8041699999999999, 0.88333, 0.96, 0.9463600000000001, 1.5133299999999998, 0.9858299999999999, 0.9233299999999999, 0.9158299999999999, 1.0008299999999999, 1.2425, 0.81583, 0.7633300000000001, 0.71, 0.7075, 0.6975, 0.70833, 0.9008299999999999, 0.715, 0.7308, 0.70417, 0.7952, 0.73583, 0.73333, 0.71167, 0.81417, 0.9025, 0.95667, 0.97667, 1.10917, 3.0175, 1.0333299999999999, 0.9491700000000001, 1.03583, 0.8858299999999999, 0.79833, 0.74667, 0.7366699999999999, 2.00727, 1.04083, 0.8391700000000001, 0.67167, 0.67357, 0.6575, 0.69083, 0.88364, 0.79833, 0.6791699999999999, 0.68083, 0.66833, 1.06417, 0.9325, 0.9233299999999999, 0.9516700000000001, 0.9541700000000001, 0.8841700000000001]}
    const w = JSON.stringify({"Low": [0.83, 0.86, 0.72, 0.65, 0.61, 0.66, 0.63, 0.63, 0.62,0.83, 0.86, 0.72, 0.65, 0.61, 0.66, 0.63, 0.63, 0.62,0.83, 0.86, 0.72, 0.65, 0.61, 0.66, 0.63, 0.63, 0.62,0.83, 0.86, 0.72, 0.65, 0.61, 0.66, 0.63, 0.63, 0.62,0.83, 0.86, 0.72, 0.65, 0.61, 0.66, 0.63, 0.63, 0.62], "a":234555, "arr":[2,3,4,5,6,7,8]})
    let u = 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuu'
    console.log(w)
    React.useEffect(() => {
        trackPageView()
    }, [])

    const handleOnClick = (e) => {
        // Track click on button
        console.log(e)
        trackEvent({ category: 'sample-page', action: 'click-event', customDimensions: [{
            id: 1,
                value:JSON.stringify({x:e.pageX, y:e.pageY})
            }]})
    }
    return (
        <div className="App" onClick={handleOnClick}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button type="button" onClick={handleOnClick}>
                    Click me
                </button>

            </header>
        </div>
    );
}

export default App;
