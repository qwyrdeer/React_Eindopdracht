import './SideMenu.css';

import CommunityPagesIcon from '../../assets/Icons/SVG/GroupIcon.svg'
import AddHuntIcon from '../../assets/Icons/SVG/PlusIcon.svg'
import AboutUsIcon from '../../assets/Icons/SVG/InfoIcon.svg'
import UserManagementIcon from '../../assets/Icons/SVG/ManageUserIcon.svg'
import Button from "../button/Button.jsx";
import React, {useContext, useState} from "react";
import HamburgerIcon from "../../assets/Icons/SVG/MenuIcon.svg";
import UserInsightIcon from "../../assets/Icons/SVG/UserInsightIcon.svg"
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../auth/AuthProvider.jsx";


function SideMenu () {
    const { auth } = useContext(AuthContext);
    const isAdmin = auth.kc?.tokenParsed?.resource_access?.galacticEndgame?.roles?.includes("ROLE_ADMIN");

    const [openMenu, toggleOpenMenu] = useState (false);
    const navigate = useNavigate();

   const handleOpenMenu = () => {
       toggleOpenMenu(prev => !prev);
   }

return (
  <>
      <nav>
          <div className={openMenu === false ? "navBaseBox" : "navBaseBox--active"}>
              <ul>
                  <li><Button
                      buttonStyle={openMenu === false ? "baseButton menuSmallButton" : "baseButton menuSideButton"}
                      buttonIcon={HamburgerIcon}
                      onClick={handleOpenMenu}
                      buttonName={openMenu === true ? 'Menu' : null}
                      />
                      </li>
                  <li><Button
                      buttonIcon={CommunityPagesIcon}
                      buttonStyle={openMenu === false ? "baseButton menuSmallButton" : "baseButton menuSideButton"}
                      onClick={() => navigate("/community-feed")}
                      buttonName={openMenu === true ? 'Community feed' : null}
                  />
                      </li>
                  <li><Button
                      buttonIcon={UserInsightIcon}
                      buttonStyle={openMenu === false ? "baseButton menuSmallButton" : "baseButton menuSideButton"}
                      onClick={() => navigate("/my-profile")}
                      buttonName={openMenu === true ? 'My hunts' : null}
                  /></li>
                  <li><Button
                      buttonIcon={AddHuntIcon}
                      buttonStyle={openMenu === false ? "baseButton menuSmallButton" : "baseButton menuSideButton"}
                      onClick={() => navigate("/add-hunt")}
                      buttonName={openMenu === true ? 'Add new hunt' : null}
                  /></li>
                  <li><Button
                      buttonIcon={AboutUsIcon}
                      buttonStyle={openMenu === false ? "baseButton menuSmallButton" : "baseButton menuSideButton"}
                      onClick={() => navigate("/about-us")}
                      buttonName={openMenu === true ? 'About us' : null}
                  /></li>
              </ul>

              <div className="adminLeftMenu">
                  {isAdmin &&
                      <Button
                          buttonIcon={UserManagementIcon}
                          buttonStyle={openMenu === false ? "baseButton menuSmallManageButton" : "baseButton menuManageButton"}
                          onClick={() => navigate("/manage-community")}
                          buttonName={openMenu === true ? 'Manage community' : null}
                      />}
              </div>
          </div>
      </nav>
  </>
);
}
export default SideMenu;
