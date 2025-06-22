import React, { FC, useEffect, useState } from 'react';
import { useToggle } from './useToggle';


const Monkey: FC = () => {
    const { bool, toggle } = useToggle(false);

    return <>
        <button onClick={() => toggle()}>{bool ? 'in training' : 'watching series'}</button>
    </>

}

export default Monkey