import "./style.css";
import computer from "../../assests/image-computer.png"
import Pargraph from "../Pargraph";
import Head from "../Head";

const List = () => {
   return (
       <div className="section-2">
           <div className="section-img">
           <img src={computer} alt="computer" className="computer-img"/>
           </div>
           <div className="section-list" >
           <div className="">
               <Head
                   children = "Quick Search"
               />
               <text className="text"
                     children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
               />
           </div>
           <div className="">
               <Head
                   children = "iCloud Sync"
               />
               <text className="text"
                     children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
               />
           </div>
           <div className="">
               <Head
                   children = "Complete History"
               />
               <text className="text"
                     children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
               />
           </div>
           </div>

       </div>
   )
}

export default List ;