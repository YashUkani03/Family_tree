
import React from "react";
import Card from "./Card";

const ParentCard = ({ father, mother, onClick, nodeData }) => {
    return (
        console.log(nodeData),
        <div className="flex space-x-4 w-full">
            {nodeData ?
                <>
                    <Card
                        src={father.photo}
                        name={father.name}
                        age={father.place}
                        onClick={() => onClick(father)}
                        isSpouse={father.Gender}
                    />
                    <Card
                        src={mother.photo}
                        name={mother.name}
                        age={mother.place}
                        onClick={() => onClick(mother)}
                        isSpouse={mother.Gender}
                    />
                </>
                :
                <>
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
                        onClick={() => onClick(mother)}
                        isSpouse="F"
                    />
                </>

            }
        </div>
    );
};

export default ParentCard;