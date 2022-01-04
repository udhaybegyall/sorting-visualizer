import { useContext } from 'react';
import { GlobalState } from '../../store/GlobalState';

interface Props {

}

const Timetaken = (props: Props) => {

    const { timetaken } = useContext(GlobalState);

    return (
        <div className='time-taken-badge'>
            <h3>Time :</h3>
            <h4>{timetaken} Sec</h4>
        </div>
    )
}

export default Timetaken;
