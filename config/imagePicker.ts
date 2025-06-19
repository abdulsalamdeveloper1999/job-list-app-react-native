import * as ImagePicker from "expo-image-picker";

export const pickImage = async (): Promise<string | null> => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    return result.assets[0].uri;
  }

  return null;
};
