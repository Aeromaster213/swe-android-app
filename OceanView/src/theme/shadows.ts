import { scale } from "react-native-size-matters";
import type { Theme } from '@emotion/react'
import { theme } from "./theme";

export const shadows = {
    primary: (theme: Theme) => {
        return {
            shadowColor: theme.colors.common.shadowDefault,
            shadowOffset: {
                width: 0,
                height: scale(-2),
            },
            shadowOpacity: 0.8,
            shadowRadius: scale(7.5),
            elevation: 10
        }
    }
}

export type Shadows = typeof shadows