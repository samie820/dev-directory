import fs from "fs"
import dotenv from "dotenv"

// Get firebaseStorageInstance

// Initalize Environment Variables
dotenv.config()

const USER_DATA_PATH = process.env.USER_DATA_PATH
let allUserData = {}

fs.readdir(USER_DATA_PATH, (err, files) => {
    console.info(files)
    // Check if there was any errors while trying to read directory
    if (err) {
        throw new Error(err.message)
    }

    // Check if it's the first file being commited and set id to 1
    if (files.length <= 1) {
        fs.readFile(USER_DATA_PATH + files[files.length - 1], (err, data) => {
            if (err) {
                throw new Error(err.message)
            }
            let parsedData = JSON.parse(data.toLocaleString())
            parsedData.id = 1
            fs.writeFile(USER_DATA_PATH + files[files.length - 1], JSON.stringify(parsedData))
        })
    }

    else {
        const orderedContent = getOrderedFilesInDirectory()
        fs.readFile(USER_DATA_PATH + orderedContent[0].file, (err, data) => {
            if (err) {
                throw new Error(err.message)
            }
            let parsedData = JSON.parse(data.toLocaleString())
            let lastFile = fs.readFileSync(USER_DATA_PATH + orderedContent[1].file)

            // When a user updates their json, check if an id was already assigned, if not, lEAVE IT BE!
            Object.keys(parsedData).indexOf('id') = -1 ?
                parsedData.id = (JSON.parse(lastFile.toLocaleString())).id + 1 : null
            fs.writeFileSync(USER_DATA_PATH + orderedContent[0].file, JSON.stringify(parsedData))
        })

        files.forEach(fileName => {
            console.log(fileName)
            let data = fs.readFileSync(USER_DATA_PATH + fileName)
            let parsedData = JSON.parse(data.toLocaleString())
            allUserData[parsedData.id] = parsedData
        })

        fs.writeFileSync(`${USER_DATA_PATH}../data.json`, JSON.stringify(allUserData))

        // TODO: Move dats.json to firebase and load from server in Graphql Datalayer
        console.log(allUserData)
    }
})

// Get ordered list of items in the directory
const getOrderedFilesInDirectory = () => fs.readdirSync(USER_DATA_PATH)
    .filter(f => fs.lstatSync(USER_DATA_PATH + f).isFile())
    .map(file => ({file, createdTime: fs.lstatSync(USER_DATA_PATH +  file).ctime}))
    .sort((a,b) => b.createdTime.getTime() - a.createdTime.getTime())

// Get name of the newest file in directory
const getNewestFileInDirectory = () =>
     getOrderedFilesInDirectory.length > 0 ? getOrderedFilesInDirectory[0] : null