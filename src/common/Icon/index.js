import React from 'react';

const Icon = ({ className, iconName, cover }) => {
    const style = cover ? { background: `url('../../img/${iconName}.png') 0% 0% / cover no-repeat` } : 
    { background: `url('../../img/${iconName}.png') 0% 0% / contain no-repeat` };
    return <div className={className} style={style} ></div>
};

export default Icon;