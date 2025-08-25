import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const uploadToS3 = (file: Express.Multer.File, key: string) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME as string,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read",
  };

  return s3.upload(params).promise();
};

export default s3;
