import { getDownloadURL } from 'firebase/storage';

export const getBackgroundImage = async (ref, setBackroungUrl) => {
  console.log(ref);
  await getDownloadURL(ref).then((url) => {
    setBackroungUrl(url);
  });
};
