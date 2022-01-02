import BarsGenerator from './barsGenerator';

interface Props {

}

const Mainbar = (props: Props) => {
    return (
        <div className='main-bar'>
            <BarsGenerator />
        </div>
    )
}

export default Mainbar;