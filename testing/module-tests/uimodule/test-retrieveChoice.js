import "./activateDebug.js"
import * as ui from "../../../output/uimodule.js"

const options = ["execute taskcycle", "configure", "die!"]

while (true) {
    const choice = await ui.retrieveChoice("Provide your Choice:", options)
    console.log(`The choice was: "${choice}"`)
}
