import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSize } from '../../features/currentSalad/currentSalad';
import ButtonActive from '../styles/ButtonActive';

function Size() {
    const dispatch = useDispatch();
    const size = useSelector(state => state.currentSalad.value.size);

    const handleSize = saladSize => {
        dispatch(updateSize({ size: saladSize }))
    }

    return (
        <div>
            <ButtonActive active={size === "small" ? true : false} onClick={() => { handleSize("small") }}>small</ButtonActive>
            <ButtonActive active={size === "medium" ? true : false} onClick={() => { handleSize("medium") }}>medium</ButtonActive>
            <ButtonActive active={size === "large" ? true : false} onClick={() => { handleSize("large") }}>large</ButtonActive>
        </div>
    )
}

export default Size;