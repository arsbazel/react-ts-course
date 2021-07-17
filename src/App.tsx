import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion />
        </div>
    );
}

function AppTitle() {
    return <>
        <h1>
            This is App
        </h1>
    </>
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    return (<div>
            Star
        </div>
    );
}

function Accordion() {
    return (
        <>
            <AccordionTitle />
            <AccordionBody />
        </>
    );
}

function AccordionTitle() {
    return (
        <h3>Меню</h3>
    );

}

function AccordionBody() {
   return (
           <ul>
               <li>1</li>
               <li>2</li>
               <li>3</li>
           </ul>
       )
}

export default App;
