// (C) 2020 GoodData Corporation
import React from "react";
import { ThemeProvider } from "@gooddata/sdk-ui-theme-provider";
import { recordedBackend } from "@gooddata/sdk-backend-mockingbird";
import { ReferenceRecordings } from "@gooddata/reference-workspace";
import { ITheme } from "@gooddata/sdk-backend-spi";

const workspace = "testWorkspace";
const theme: ITheme = {
    palette: {
        primary: {
            base: "#009882",
        },
        error: {
            base: "#AE1500",
        },
        success: {
            base: "#68bf00",
        },
        warning: {
            base: "#b300db",
        },
        darkMode: true,
        gray: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
        },
    },
    button: {
        borderRadius: "20px",
        dropShadow: false,
        textCapitalization: true,
    },
    tooltip: {
        backgroundColor: "#00594c",
        color: "#d6f7f2",
    },
    modal: {
        title: {
            color: "#009882",
            lineColor: "#00594c",
        },
        outsideBackgroundColor: "#d6f7f2",
        dropShadow: false,
        borderWidth: "0",
        borderColor: "#00594c",
        borderRadius: "20px",
    },
    dashboards: {
        filterBar: {
            backgroundColor: "#212121",
            filterButton: {
                backgroundColor: "#424242",
            },
        },
    },
};
const backend = recordedBackend(ReferenceRecordings.Recordings, { theme });

export const wrapWithTheme = (component: JSX.Element): JSX.Element => (
    <ThemeProvider workspace={workspace} backend={backend}>
        {component}
    </ThemeProvider>
);
