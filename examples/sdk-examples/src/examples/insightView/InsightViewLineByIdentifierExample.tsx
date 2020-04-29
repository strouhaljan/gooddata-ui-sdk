// (C) 2007-2018 GoodData Corporation
import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import { workspace, lineInsightViewIdentifier } from "../../constants/fixtures";
import { useBackend } from "../../context/auth";

const style = { height: 300 };
// TODO: SDK8 Decide whether add dimesion prop to InsightView
// const insightViewProps = {
//     custom: {
//         drillableItems: [],
//     },
//     dimensions: {
//         height: 300,
//     },
// };

export const InsightViewLineByIdentifierExample: React.FC = () => {
    const backend = useBackend();

    return (
        <div style={style} className="s-insightView-line">
            <InsightView backend={backend} workspace={workspace} insight={lineInsightViewIdentifier} />
        </div>
    );
};
