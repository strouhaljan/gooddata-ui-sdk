// (C) 2019-2020 GoodData Corporation
import { IColorPalette } from "@gooddata/sdk-model";

import { ITheme } from "./theme";

export {
    ThemeFontUri,
    ThemeColor,
    IThemeColorFamily,
    IThemeColorGrayscale,
    IThemeWidgetTitle,
    IThemeTypography,
    IThemePalette,
    IThemeKpi,
    IThemeChart,
    ITheme,
} from "./theme";

/**
 * This service provides access to workspace styling settings such as color palette.
 *
 * The contract here is that styling settings ARE applied in Analytical Designer and Dashboard applications and
 * so any SDK code that embeds entities created by those applications MUST also use the same styling settings in
 * order to maintain consistent user experience.
 *
 * @public
 */
export interface IWorkspaceStylingService {
    /**
     * Asynchronously returns items in the color palette.
     *
     * @returns promise of color palette
     */
    getColorPalette(): Promise<IColorPalette>;

    /**
     * Asynchronously returns theme.
     *
     * @returns promise of theme
     */
    getTheme(): Promise<ITheme>;
}
