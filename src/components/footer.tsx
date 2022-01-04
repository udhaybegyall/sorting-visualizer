import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
interface Props {

}

export const Footer = (props: Props) => {
    return (
        <div className='footer'>
            <p>Created by <span><a href="https://www.instagram.com/udhaybegyall/" target="_blank" rel="noopener noreferrer">@udhaybegyall</a></span></p>
            <div className="icons">
                <a href="https://github.com/udhaybegyall" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/udhaybegyall/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="linkedin" /></a>
            </div>
        </div>
    )
}

export default Footer;
