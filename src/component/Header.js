import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component{

    render() {
        return(
            <Fragment>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Movie Center</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><NavLink exact to={"/"}>Home</NavLink></li>
                            <li><NavLink exact to={"/movie_real"}>현재상영영화</NavLink></li>
                            <li><NavLink exact to={"/movie_sch"}>개봉예정영화</NavLink></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">박스오피스
                                    <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><NavLink exact to={"/box_week"}>주간</NavLink></li>
                                    <li><NavLink exact to={"/box_month"}>월간</NavLink></li>
                                    <li><NavLink exact to={"/box_year"}>연간</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink exact to={"/movie_reserve"}>영화예매</NavLink></li>
                            <li><NavLink exact to={"/news"}>영화뉴스</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }

}

export default Header;