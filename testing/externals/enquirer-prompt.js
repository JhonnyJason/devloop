import enquirer from "enquirer"


async function retrieveString(prompt) { try {
    const resp = await enquirer.prompt({
        type: "input",
        name: "value",
        message: prompt
    })
    console.log(`The input was: "${resp.value}"`)

} catch (err) {
    console.log("Prompt Cancelled!")
    process.exit(0)
}}


retrieveString("Enter a string:")
