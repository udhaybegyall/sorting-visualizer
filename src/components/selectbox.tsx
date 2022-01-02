import { useContext } from 'react';
import Select from 'react-select';

import { GlobalState } from '../store/GlobalState';

const options = [
    { value: 'Bubble sort', label: 'Bubble sort' },
    { value: 'Selection sort', label: 'Selection sort' },
    { value: 'Quick sort', label: 'Quick sort' },
    { value: 'Merge sort', label: 'Merge sort' },
    { value: 'Insertion sort', label: 'Insertion sort' },
];

const styles = {
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: '#28272a',
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
        backgroundColor: '#28272a',
        color: '#76c74a',
        fontSize: '14px',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#323234',
        },
    }),
    singleValue: (base: any, state: any) => ({
        ...base,
        color: '#76c74a',
        fontSize: '14px',
        fontWeight: 'bold',
    }),
    placeholder: (base: any, state: any) => ({
        ...base,
        color: '#76c74a',
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
};

const Selectbox = () => {

    const { setAlgo, algo } = useContext(GlobalState);

    const onSelect = (selected: any) => {
        setAlgo!(selected.value);
    }

    console.log(algo);

    return (
        <div style={{ marginTop: "20px" }}>
            <Select
                styles={styles}
                options={options}
                onChange={onSelect}
                placeholder="Select algorithm"
            />
        </div>
    )
}

export default Selectbox
