// (C) 2007-2019 GoodData Corporation
import React from "react";
import { DonutChart } from "@gooddata/sdk-ui-charts";
import { newMeasure } from "@gooddata/sdk-model";

import {
    workspace,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    franchiseFeesIdentifierOngoingRoyalty,
} from "../../constants/fixtures";
import { useBackend } from "../../context/auth";

const measures = [
    newMeasure(franchiseFeesAdRoyaltyIdentifier, m => m.format("#,##0")),
    newMeasure(franchiseFeesInitialFranchiseFeeIdentifier, m => m.format("#,##0")),
    newMeasure(franchiseFeesIdentifierOngoingRoyalty, m => m.format("#,##0")),
];

const style = { height: 300 };

export const DonutChartExample: React.FC = () => {
    const backend = useBackend();

    return (
        <div style={style} className="s-donut-chart">
            <DonutChart backend={backend} workspace={workspace} measures={measures} />
        </div>
    );
};
