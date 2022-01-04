import { useContext } from 'react';
import Select from 'react-select';

import { GlobalState } from '../store/GlobalState';

const options = [
    { value: 'Bubble sort', label: 'Bubble sort' },
    { value: 'Selection sort', label: 'Selection sort' },
    { value: 'Quick sort', label: 'Quick sort' },
    { value: 'Merge sort (under 🚧)', label: 'Merge sort (under 🚧)' },
    { value: 'Insertion sort', label: 'Insertion sort' },
];

const styles = {
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: '#242424',
        width: '100%',
        border: 'none',
        borderRadius: '5px',
        boxShadow: 'none',
        '&:hover': {
            border: 'none',
        },
        '&:focus': {
            border: 'none',
        },
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: '#242424',
        color: '#665c54',
        fontSize: '14px',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#323234',
        },
    }),
    singleValue: (base: any, state: any) => ({
        ...base,
        color: '#d79a21bb',
        fontSize: '14px',
        fontWeight: 'bold',
    }),
    placeholder: (base: any, state: any) => ({
        ...base,
        color: '#665c54',
        fontSize: '14px',
        fontWeight: 'bold',
    }),
    menu: (base: any, state: any) => ({
        ...base,
        backgroundColor: '#28272a',
        color: '#76c74a',
        fontSize: '14px',
        fontWeight: 'bold',
        width: '100%',
    }),
    indicatorSeparator: (base: any, state: any) => ({
        ...base,
        display: 'none',
    }),
    // change the dropdown arrow
    dropdownIndicator: (base: any, state: any) => ({
        ...base,
        color: '#665c54',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }),
};

const Selectbox = () => {

    const { setAlgo, algo, issorting } = useContext(GlobalState);

    console.debug(algo);

    return (
        <div style={{ marginTop: "20px" }}>
            <Select
                styles={styles}
                options={options}
                onChange={(selected: any) => setAlgo!(selected.value)}
                placeholder="Select algorithm"
                isDisabled={issorting}
            />
        </div>
    )
}

export default Selectbox
