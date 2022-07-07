import './style.css'
import {ReactComponent as Logo} from '../../assests/logo.svg'
import {ReactComponent as Facebook} from '../../assests/icon-facebook.svg'
import {ReactComponent as Tweeter} from '../../assests/icon-twitter.svg'
import {ReactComponent as Instagram} from '../../assests/icon-instagram.svg'

export const Footer =  () => {
    return (
        <div className="footer">
            <footer className="footer-distributed">

                <div className="footer-left">

                   <div><a className='prett' href='#'><Logo/></a></div>


                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">Company Name © 2015</p>
                </div>

                <div className="footer-center">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu
                        auctor lacus vehicula sit amet.
                    </p>

                </div>

                <div className="footer-right">

                    <div className="footer-icons">

                        <ul>
                            <li><Facebook/></li>
                            <li><Tweeter/></li>
                            <li><Instagram/></li>
                        </ul>

                    </div>

                </div>

            </footer>



        </div>
    )

}
