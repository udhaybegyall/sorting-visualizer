import BarsGenerator from './barsGenerator';
import TimeTaken from './badges/timetaken';
interface Props {

}

const Mainbar = (props: Props) => {
    return (
        <div className='main-bar'>
            <BarsGenerator />
            <TimeTaken />
        </div>
    )
}

export default Mainbar;