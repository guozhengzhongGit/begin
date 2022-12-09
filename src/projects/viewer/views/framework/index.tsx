import React from "react";
import {Outlet} from 'react-router-dom';

function FrameWorkComp () {
  return (
    <div>
      FrameWorkComp
      <Outlet />
    </div>
  )
}

export default FrameWorkComp;
