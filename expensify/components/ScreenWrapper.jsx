import React from "react";
import { Platform, StatusBar, View } from "react-native"

export const ScreenWrapper = ({children}) => {
    let statusBarHeight = Platform.OS=='ios' ? 30 : 0;

    return (
        <View style={{ paddingTop: statusBarHeight}}>
            {
                children
            }
        </View>
    )
}

