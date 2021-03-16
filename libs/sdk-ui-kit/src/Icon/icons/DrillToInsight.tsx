// (C) 2021 GoodData Corporation
import React from "react";

import { IIconProps } from "../typings";

/**
 * @internal
 */
export const DrillToInsight: React.FC<IIconProps> = ({ color }) => {
    return (
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon
                    id=""
                    fill={color || "#94A1AD"}
                    points="3.32421875 2.17578125 3.32421875 7.42578125 11.609375 7.42578125 8.3828125 4.19921875 9.203125 3.37890625 13.8242188 8 9.203125 12.6210938 8.3828125 11.8007812 11.609375 8.57421875 3.32421875 8.57421875 3.32421875 13.8242188 2.17578125 13.8242188 2.17578125 2.17578125"
                ></polygon>
            </g>
        </svg>
    );
};
