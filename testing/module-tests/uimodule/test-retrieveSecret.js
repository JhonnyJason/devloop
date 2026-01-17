import "./activateDebug.js"
import * as ui from "../../../output/uimodule.js"

while (true) {
    const input = await ui.retrieveSecret("Enter a secret:")
    console.log(`The input was: "${input}"`)
}
