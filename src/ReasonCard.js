import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReasonCard = ({ title, description, icon }) => {
    return (
        <div className="reason-card max-w-screen-lg mx-auto">
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
            <FontAwesomeIcon icon={icon} className="text-white text-2xl mt-2" />
        </div>
    );
};

export default ReasonCard;