import axios from "axios";
import fs from "fs";

export const handleFileUpload = async (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uniqueFilename = `${Date.now()}-${file.filename}-${file.originalname}`;

  let yourStorageZone;
  const response = await axios.put(
    //url
    //stream
    //headers
    `https://storage.bunnycdn.com/${yourStorageZone}/${uniqueFilename}`,
    fileStream,
    {
      headers: {
        AccessKey: "b2163ca4-e48b-4459-a1f97436e653-dc3c-4e63",
      },
    }
  );

  if (response.data) {
    return `https://noob-bunny.b-cdn.net/${uniqueFilename}`;
  } else {
    return false;
  }
};
