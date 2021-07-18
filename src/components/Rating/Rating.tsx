import React from "react";;

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
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

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
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