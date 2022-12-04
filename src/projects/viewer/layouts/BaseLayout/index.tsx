import React from "react";
import { Outlet } from 'react-router-dom';
function BaseLayout() {
    return (
        <div>
            布局
            <div>
                这里才是挂载子路由视图的地方
                <Outlet />
            </div>
        </div>
    )
}


export default BaseLayout();
