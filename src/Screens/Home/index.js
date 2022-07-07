import Button from "../../Component/Button";
import Header from "../../Component/Header";
import List from "../../Component/Box-list";
import Head from "../../Component/Head";
import './style.css'
import Img_Section from "../../Component/Img-Section";
import {Card} from "../../Component/Card";
import {ReactComponent as BlackList} from '../../assests/icon-blacklist.svg'
import {ReactComponent as Text} from '../../assests/icon-text.svg'
import {ReactComponent as Preview} from '../../assests/icon-preview.svg'
import Google from '../../assests/logo-google.png'
import Ibm from '../../assests/logo-ibm.png'
import Microsoft from '../../assests/logo-microsoft.png'
import Hewlett from '../../assests/logo-hp.png'
import Vector from '../../assests/logo-vector-graphics.png'
import {Section4} from "../../Component/Section-4";
import {Footer} from "../../Component/Footer";
const list =[
    {id:0, icon:<BlackList/>, title:'Create blacklLists', descr:'\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec '} ,
    {id:1, icon:<Text/>, title:'Plain Text Snippets', descr:'\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec '} ,
    {id:2, icon:<Preview/>, title:'Sneak Preview', descr:'\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} ,
]

const imglist = [
    {img : Google},
    {img : Ibm},
    {img : Microsoft},
    {img : Hewlett},
    {img : Vector},
]

function Home(){
    return(
        <>
            <Header/>
            <div className="section-3">
                <Head
                    children = "Keep track of your snippets"
                />
                <text className="text"
                      children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                />
            </div>
             <List/>

            <div className="section-3">
                <Head
                    children = "Access clipboard anywhere"
                />
                <text className="text"
                      children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                />
            </div>

            <Img_Section/>

            <div className="icon_sections">
                {list.map(item=>
                    <Card title={item.title} descr={item.descr} icon={item.icon}/>
                )}
            </div>

            <div className="company-imgs">
                {imglist.map(item=>
                    <img src={item.img}  alt='' className="company-img"/>
                )}
            </div>
            <Section4 />
            <Footer />
        </>
    )
}
export default Home;