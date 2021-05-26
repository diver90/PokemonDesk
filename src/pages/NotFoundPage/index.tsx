import React from "react";
import TeamRocket from "./assets/Team_Rocket_trio_OS 1.png";
import Button from "../../components/Button";
import {navigate} from "hookrouter";
import {LinkEnum} from "../../routes";

import s from "./NotFound.module.scss";



const NotFound = () => {
    return (
        <div className={s.root}>
            <div className={s.code}>404</div>
            <div>
                <img className={s.teamRocket} src={TeamRocket} alt="Team Rocket"/>
                <p className={s.text}>The rocket team has won this time.</p>
                <Button onClick={() => navigate(LinkEnum.HOME)} buttonColor={'yellow'} buttonSize={'normal'} >
                    {'Main Page'}
                </Button>
            </div>
        </div>
    )
}

export default NotFound;