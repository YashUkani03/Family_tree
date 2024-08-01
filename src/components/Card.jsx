import React from 'react';

const Card = ({ src,
    onClick,
    child,
    card,
    name = '',
    age = '',
    ...props
}) => {
    return (
        <>
            <div className="w-auto h-min bg-white border border-gray-600 rounded-lg shadow">
                <div className="flex flex-col  items-center pb-5 pt-3 px-4 bg-gray-100 rounded-lg" onClick={() => onClick(child)}>
                    <img className="w-16 h-14 mb-3 rounded-full shadow-lg border-black"
                        src={src}
                        alt={`${name}photo `}
                        {...props}
                    />
                        <h5 className="mb-1 text-sm font-small text-gray-900 dark:text-black " >{name}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{age}</span>
                </div>
            </div>
        </>
    )
}

export default Card