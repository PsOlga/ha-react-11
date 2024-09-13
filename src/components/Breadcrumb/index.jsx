
import React from "react";
import {Link, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
    "/": "Главная",
    "/allArticles": "Список статей",
    "/article": "Статья",
};

const Breadcrump = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" > ГЛАВНАЯ</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.sliсe(0, index + 1).join("/")}`;
                    return (
                        <li key={to}>
                            <span> / </span>
                            <Link to={to}>{breadcrumbNameMap[to]}</Link>
                        </li>

                    )
                })}
            </ul>
        </nav>
    )
};
export default Breadcrump;
