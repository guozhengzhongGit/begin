import React from "react";
import { Outlet, Routes, Route } from 'react-router-dom';
import FormComp from '../../views/Form';
function BaseLayout() {
    return (
        <div>
            布局
            <div>
                这里才是挂载子路由视图的地方
                <Routes>
                    <Route
                        path="form"
                        element={FormComp}
                    />
                </Routes>
            </div>
        </div>
    )
}


export default BaseLayout();
