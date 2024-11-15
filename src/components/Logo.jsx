import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

const Logo = () => {
    return ( 
        <img src={logoHeader} alt="logo da digital store" />
     );
}

const LogoNoFooter = () => {
    return(
        <img src={logoFooter} alt="" />
    )
}
 
export default Logo;
export {LogoNoFooter};