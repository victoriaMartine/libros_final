import fs from 'fs/promises'

const readFile = async (archive) =>{
    try {
        const wordsData = await fs.readFile(archive, 'utf-8')
        const wordsDataJSON = JSON.parse(wordsData)
        return wordsDataJSON;
    } catch (error) {
        console.log(`There was an error while trying to read the file... ${error}`)
    }
}
 const writeFile = async (archive, txt) =>{
try {
    await fs.writeFile(archive, JSON.stringify(txt,null,'\t'))
} catch(err) {
    console.error("unable to write file");
}
}
export {readFile, writeFile}