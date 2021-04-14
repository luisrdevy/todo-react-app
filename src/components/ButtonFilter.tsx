import React from "react";

interface IButtonFilter {
    name: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

const ButtonFilter: React.FC<IButtonFilter> = ({ name, setFilter }) => {

    return (<button onClick={() => setFilter(name)}>{name} tasks</button>)
}

export default ButtonFilter;