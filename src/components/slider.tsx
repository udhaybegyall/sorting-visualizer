import { useContext } from 'react';
import { GlobalState } from '../store/GlobalState';

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const RangeSlider = styled(Slider)({
    color: '#d79921',
    height: 5.8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-rail': {
        border: 'none',
        backgroundColor: '#323234',
    },
    '& .MuiSlider-thumb': {
        height: 14,
        width: 14,
        backgroundColor: '#323234',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabelLabel': {
        fontWeight: 'bold',
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        color: '#1d1f20',
        backgroundColor: '#d79921',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
    // disabled styles
    '&.Mui-disabled': {
        color: '#323234',
        '& .MuiSlider-rail': {
            backgroundColor: '#323234',
        },
        '& .MuiSlider-track': {
            backgroundColor: '#323234',
        },
        '& .MuiSlider-thumb': {
            backgroundColor: '#323234',
            border: '2px solid #665c54',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'none',
            },
            '&:before': {
                display: 'none',
            },
        },
    },

});

export default function CustomizedSlider(props: any) {

    const { issorting } = useContext(GlobalState);

    return (
        <Box className="slider" sx={{ width: "100%" }}>
            <RangeSlider
                valueLabelDisplay="auto"
                defaultValue={props.defaultValue}
                min={props.min}
                max={props.max}
                onChange={props.onChange}
                disabled={issorting}
            />
        </Box>
    );
}

