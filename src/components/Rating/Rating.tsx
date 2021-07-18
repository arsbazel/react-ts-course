import React from "react";

export function Rating(props: any) {
    let arr = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= props.value) {
          arr.push(<Star selected={true}/>)
      } else {
          arr.push(<Star selected={false}/>)
      }
    }

    return (
        <div>
            {arr}
        </div>
    );
}

function Star(props: any) {
    if (props.selected === true) {
        return (
            <span>
            <b>Star</b>
        </span>
        );
    } else {
        return (<span>
            Star
        </span>
        )
    }

}

export default Rating