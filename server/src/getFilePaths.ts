import fs from 'fs'
import path from 'path'

export const getFilePaths = (folderpath: string) => {
    let ans: string[] = [];

    const getFilesAndFolders = fs.readdirSync(folderpath);

    getFilesAndFolders.forEach((file) => {
        // creating the paths
        const fullPath = path.join(folderpath, file);

        // directory
        if(fs.statSync(fullPath).isDirectory()){
            ans = ans.concat(getFilePaths(fullPath));
        }else{ // file
            ans.push(fullPath);
        }
    })

    return ans;
}