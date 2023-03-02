import Tilt from 'react-parallax-tilt';
import './Logo.css';
import logo from './logo.png';


const Logo=()=>{
    return(
        <div className="ma4 mt0">
        <Tilt className="parallax-effect-glare-scale tilt"
         perspective={500}
         glareEnable={true}
         glareMaxOpacity={0.45}
         scale={1.02}
         gyroscope={true}
         style={{width:'200px',height:'200px'}}
         >
        <img src={logo} alt='logo' className='logo'/>
        </Tilt>
        </div>
    )
};
export default Logo;