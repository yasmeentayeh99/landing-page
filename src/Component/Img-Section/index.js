import './style.css'
import img_device from '../../assests/image-devices.png'
import Head from "../Head";


function Img_Section(){
    return(
        <div className="img_section ">
   <img src={img_device} alt="img_device" className="img_device"/>
            <div className="section-1">
                <Head
                    children = "A history of everything you copy"
                />
                <text className="text"
                      children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                />
            </div>
   </div>


    )
}

export default Img_Section ;