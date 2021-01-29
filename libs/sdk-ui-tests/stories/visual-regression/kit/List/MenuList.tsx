// (C) 2007-2020 GoodData Corporation
import React from "react";

import { ItemsWrapper, Separator, Header, Item } from "@gooddata/sdk-ui-kit";

import { storiesOf } from "@storybook/react";
import { UiKit } from "../../../_infra/storyGroups";

import "./styles.scss";
import { wrapWithTheme } from "../../themeWrapper";

const ListExamples = () => (
    <div className="library-component screenshot-target">
        <h4>Menu without spacing</h4>

        <ItemsWrapper smallItemsSpacing>
            <Item>Item text</Item>
            <Header>Header text</Header>
            <Item>Item text</Item>
            <Separator />
            <Item>Item text</Item>
        </ItemsWrapper>

        <h4>Menu with spacing</h4>

        <ItemsWrapper>
            <Item>Item</Item>
            <Item checked>Checked item</Item>
            <Item disabled>Disabled item</Item>
            <Item subMenu>Sub-menu item</Item>
            <Item>Item text</Item>
        </ItemsWrapper>
    </div>
);

storiesOf(`${UiKit}/Menu List`, module).add("full-featured", () => wrapWithTheme(<ListExamples />));
