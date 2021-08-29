import axios from "axios";
import AWS from "aws-sdk";
const hostname = new AWS.Endpoint("sgp1.digitaloceanspaces.com");
const s3 = new AWS.S3({
  region: "sgp1",
  endpoint: hostname,
  accessKeyId: "UAT4XP74G5KN63HKRKN5",
  secretAccessKey: "6CqnIOKef6Pt3Yc04TKDbeBbmZ6UA6YSFXhIjvc5WMQ",
});

export const uploadVideoDO = (file, setProgress) => {
  const params = {
    Bucket: "saav/vidlime/videos",
    Key: file.name,
    ContentType: "video/mp4",
    Body: file,
    ACL: "public-read",
  };

  return new Promise((resolve, reject) => {
    s3.putObject(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        reject();
      } else {
        resolve();
      }
    }).on("httpUploadProgress", function (evt) {
      setProgress((evt.loaded / evt.total) * 100);
    });
  });
};
