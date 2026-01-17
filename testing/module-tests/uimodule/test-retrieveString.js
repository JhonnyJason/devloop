import "./activateDebug.js"
import * as ui from "../../../output/uimodule.js"

while (true) {
    const input = await ui.retrieveString("Enter a string:")
    console.log(`The input was: "${input}"`)
}
