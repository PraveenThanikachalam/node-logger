import { format } from "date-fns"
import fs from "fs"
import fsPromises from "fs/promises"
import path from "path"
import { v4 as uuid } from "uuid" 
import { fileURLToPath } from "url"

const  __dirname = path.dirname(fileURLToPath(import.meta.url));

const logEvents = async ( message, logFileName ) => {
    const DateTime = format(new Date(),"yyyy-MM-dd\tHH:mm:ss")
    const logItem = `${DateTime}\t${uuid()}\t${message}\n`
    
    try {
        if(!fs.existsSync(path.join(__dirname, "..","logs" ))){
            await fsPromises.mkdir(path.join(__dirname,"..","logs"))
        }
        await fsPromises.appendFile(path.join(__dirname,"..","logs",logFileName),logItem)
    }catch(err){
        console.log(err);
    }
}

const logger = (req,res,next)=>{
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`,"reqLogs.log")
    console.log(req.method, req.url);
    next()
}

export default logger
