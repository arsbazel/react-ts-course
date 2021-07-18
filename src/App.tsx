import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is App"}/>
            <Rating value={50}/>
            <Accordion title={"Menu"}/>
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <>
        <h1>
            {props.title}
        </h1>
    </>
}

export default App;
