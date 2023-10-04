import "./sidebar.css";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
           <Link to="/pets"> {/* Link to the feed page */}
              <span className="sidebarListItemText">Pets</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/food">
            <span className="sidebarListItemText">Food</span>
            </Link>
          </li>
          
        </ul>
        

      </div>
    </div>
  );
}





