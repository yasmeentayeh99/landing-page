import logo from '../../assests/logo.svg'
import './style.css'
import Pargraph from "../Pargraph";
import background from '../../assests/bg-header-desktop.png'
import Button from "../Button";
import Head from "../Head";



function Header(){
    return(
        <div className="header" style={{ backgroundImage: `url(${background})` }}>
            <img src={logo} alt="logo" className="logo"/>
          <div className="section-1">
             <Head
                 children = "A history of everything you copy"
             />
              <text className="text"
                  children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              />
          </div>
            <div className="buttons">
            <Button
                color="hsl(171, 66%, 44%)"
                children = "Download for IOS"
            />
            <Button
                color="hsl(233, 100%, 69%)"
                children = "Download for MAC"
            />
            </div>

        </div>
    )
}
export default Header;