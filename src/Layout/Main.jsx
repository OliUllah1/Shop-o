import React from 'react';
import MenuBar from '../Pages/Shared/MenuBar/MenuBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;