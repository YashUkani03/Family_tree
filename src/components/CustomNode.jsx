import React, { useState } from "react";
import PersonDetailsModal from './PersonalDetails';
import Card from "./Card";
import ParentCard from "./ParentCard";

const isMobile = window.innerWidth <= 600;
const CustomNode = ({ nodeDatum, toggleNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false)

    const handleClick = () => {
        setCollapsed(!collapsed);
        if (toggleNode) {
            toggleNode(nodeDatum);
        }
    };

    const handleImageClick = (data) => {
        setIsModelOpen(data)

    }

    const closeModel = () => {
        setIsModelOpen(false)
    }
    return (

        <g>
            <foreignObject x="-50" y="-90" className= {isMobile ? 'w-96' : "w-full"} height="180" >
                {
                    nodeDatum.spouse ? (
                        <div>

                            <ParentCard
                                father={nodeDatum}
                                mother={nodeDatum.spouse}
                                onClick={handleImageClick}
                            />
                        </div>
                    ) : (
                        <div className="w-fit">

                            <Card
                                src={nodeDatum.photo || '../images/P1.jpg'}
                                name={nodeDatum.name}
                                age={nodeDatum.place}
                                child={nodeDatum}
                                onClick={handleImageClick}
                            />
                        </div>
                    )}

            </foreignObject>

            {nodeDatum.children && (
                <polygon
                    points={collapsed
                        ? "0,0 12,6 0,12"
                        : "0,0 6,12 12,0"}
                    fill="darkgrey"
                    stroke='darkgrey'
                    onClick={handleClick}
                    transform="translate(-40, -82)"
                />
            )}
            {isModelOpen &&
                <PersonDetailsModal
                    isOpen={Boolean(isModelOpen)}
                    onRequestClose={closeModel}
                    person={isModelOpen}

                />
            }
        </g>
    )
};

export default CustomNode;