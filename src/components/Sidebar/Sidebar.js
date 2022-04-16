import React, {useEffect, useState} from "react";
import classnames from "classnames";
import "./sidebar.css";
import {useHistory, useLocation} from "react-router";
import {NavbarBrand} from "reactstrap";

const Sidebar = (props) => {

    const history = useHistory();

    const [open,setOpen] = useState(window.matchMedia("(min-width: 1024px)").matches || false);


    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const ontoggleNav = () => {
        setOpen(!open);
    };

    const onLogOut = () => {
        history.push('/');
    }

    return (
    <div>
        <div className="bodyWrap">
            <NavbarBrand>
                <span className="hmbger" onClick={ontoggleNav} style={{cursor: "pointer"}}>&#9776;&nbsp;</span>
            </NavbarBrand>
            <div className={classnames({blur: mobile && open})}/>
            <div
                className={classnames(
                    "sidenav",
                    {sidenavOpen: open},
                    {sidenavClose: !open}
                )}
            >
                <a
                    href="#!"
                    className="closebtn hidex"
                    onClick={() => ontoggleNav("0px")}
                >
                    &times;
                </a>
                <div className="mt-4">
                    <span className="h2 text-white p-3"></span>
                </div>
                {
                        <div className={"pt-5 mt-5"}>
                            <a href="#!">Persona <hr/></a>
                            <a href="#!" onClick={() =>  { history.push('/Blog')}}>Blog</a>
                            <a href="#!" className="pt-4" onClick={() =>  { history.push('/Admired')}}>Admired</a>
                            <a href="#!" className="pt-4" onClick={() =>  { history.push('/Niche')}}>Niche</a>
                            <a href="#!" className="pt-4" onClick={() =>  { history.push('/Talkathon')}}>Talkathon</a>
                            <a href="#!" className="pt-4" onClick={() =>  { history.push('/Contour')}}>Contour</a>
                            <a href="#!" style={{position: 'absolute', bottom: '8%'}} onClick={onLogOut}>Logout</a>
                        </div>
                }
            </div>

            <div
                className={classnames(
                    "main",
                    {mainShrink: open},
                    {mainExpand: !open},
                    {noscroll: mobile && open}
                )}
                style={{paddingLeft: '3%'}}
            >
                {props.children}
            </div>
        </div>
    </div>
);
}

export default Sidebar;
