import React, { useRef, useEffect, useState } from 'react';
import { Tree } from 'react-d3-tree';
import CustomNode from './CustomNode';
import { calculateAge } from './Age';
import FamilyData from './FamilyData';

const preprocessData = (data) => {
    const newData = { ...data };
    const age = calculateAge(data.DOB);
    newData.age = `${age.years} years ${age.months} months`;

    if (newData.spouse) {
        const spouseage = calculateAge(data.spouse.DOB)
        newData.spouse.age = `${spouseage.years} years ${spouseage.months} months`;

    }
    if (newData.children) {
        newData.children = newData.children.map(preprocessData);
    }
    return newData;
};


const preprocessedData = preprocessData(FamilyData);
const isMobile = window.innerWidth <= 600;
const OrgChart = () => {
    const treeContainer = useRef(null);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const dimensions = treeContainer.current.getBoundingClientRect();
        setTranslate({
            x: dimensions.width / 2,
            y: dimensions.height / 4,
        });
    }, []);

    const nodeSize = { x: 200, y: 200 };
    const separation = { siblings: 1, nonSiblings: 2 };
    return (
        <div 
            id="treeWrapper"
            ref={treeContainer}
            style= {{ width: '100%', height: '100%', border: '1px solid black' }}
        >
            <Tree
                data={preprocessedData}
                nodeSize={nodeSize}
                separation={separation}
                translate={translate}
                pathFunc='step'
                orientation="vertical"
                renderCustomNodeElement={(rd3tProps) => <CustomNode {...rd3tProps} toggleNode={rd3tProps.toggleNode} />}
            />
        </div>
    );
};

export default OrgChart;
