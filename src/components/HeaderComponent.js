import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";

const HeaderNav = () => {
    
    const [navOpen, setNavOpen] = useState(false);

    return(
        <React.Fragment>
            <Navbar className='navbar-dark fixed-top' expand="md">
            <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
                    <NavbarBrand className="me-auto">
                        <GoPerson />
                    </NavbarBrand>
                    <Collapse isOpen={navOpen} navbar>
                        <Nav className='ms-auto' navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>
                                    <><BiHome /> Home</>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/aboutMe'>
                                    <><FaInfo /> About Me</>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/skillSet'>
                                    <><GiSkills /> Skills</>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/projects'>
                                    <><VscGithubAlt /> Projects</>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/certifications'>
                                    <><AiOutlineSafetyCertificate /> Certifications</>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/contactMe'>
                                    <><TiContacts /> Contact Me</>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

const Header = () => {

    return(
        <>
            <HeaderNav />
        </>
    );
}

export default Header;