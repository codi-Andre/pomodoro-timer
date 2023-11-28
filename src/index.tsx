/* @refresh reload */
import { render } from "solid-js/web"

import "./reset-styles.css"
import "./index.css"
import App from "./App"

const root = document.getElementById("root")

render(() => <App />, root!)
