import React, { Component } from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import Head from "next/head";

import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_TWO,
  PRIMARY_COLOR_THREE,
  ACCENT_COLOR_ONE,
  ACCENT_COLOR_TWO,
  ACCENT_COLOR_THREE
} from "./theme";

try {
    injectTapEventPlugin();
} catch (e) {
    
}

const withMaterialUI = ComposedComponent => {
    class HOC extends Component {
        static async getInitialProps (ctx) {
            const { req } = ctx;
            const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
            const subProps = await ComposedComponent.getInitialProps(ctx)

            return {
                ...subProps,
                userAgent
            };
        }
        render() {
            return (

            )
        }
    }
}
