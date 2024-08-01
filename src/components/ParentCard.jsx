
import React from "react";
import Card from "./Card";

const ParentCard = ({ father, mother, onClick }) => {
    return (
        <div className="flex space-x-4 w-full">
            <Card
                src={father.photo}
                name={father.name}
                age={father.place}
                onClick={() => onClick(father)}
            />
            <Card
                src={mother.photo}
                name={mother.name}
                age={mother.place}
                onClick={()=> onClick(mother)}
            />
        </div>
    );
};

export default ParentCard;