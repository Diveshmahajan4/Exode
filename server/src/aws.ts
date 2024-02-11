import fs from 'fs'
import aws from 'aws-sdk'

export const uploadFile = async ( fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(fileName);
    const ans = await S3.upload({
        Body: fileContent,
        Bucket: 'exode',
        Key: fileName, 
    }).promise();

    console.log(ans);
}