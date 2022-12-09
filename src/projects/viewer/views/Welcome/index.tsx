import React from "react";
import { Button } from "antd";
import { useNavigate } from 'react-router-dom';

function WelcomeComp () {
    const nav = useNavigate();
    const gotoPage = () => {
        nav('/features')
    }
    return (
        <div>Welcome
        <Button onClick={gotoPage}>go</Button></div>
    )
}

export default WelcomeComp;
