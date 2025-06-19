export async function uploadToCloudinary(imageUri: string) {
  const data = new FormData();
  console.log(imageUri);

  data.append("file", {
    uri: imageUri,
    type: "image/jpeg",
    name: "jobImage.jpg",
  } as any);

  data.append("upload_preset", "my_unsigned_preset");

  data.append("cloud_name", "dpqpnvn8u");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dpqpnvn8u/image/upload",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data", // ✅ required in React Native
        },
        body: data,
      }
    );

    const json = await res.json();

    if (json.secure_url) {
      return json.secure_url;
    } else {
      console.log("Upload failed:", json);
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
