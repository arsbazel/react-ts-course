import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return(
            <>
                <AccordionTitle title={props.title}/>
            </>
        );
    } else {
        return (
            <>
                <AccordionTitle title={props.title}/>
                <AccordionBody />
            </>
        );
    }

}

function AccordionTitle(props: any) {
    return (
        <h3>{props.title}</h3>
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

export default Accordion;