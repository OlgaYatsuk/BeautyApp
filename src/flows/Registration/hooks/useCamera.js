import {useState} from 'react';
import {GetPhotosParamType, GetPhotosReturnType} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const initialState: GetPhotosReturnType = {
  edges: [],
  page_info: {
    end_cursor: '',
    has_next_page: false,
    start_cursor: '',
  },
};

const defaultConfig: GetPhotosParamType = {
  first: 20,
  groupTypes: 'All',
};

export default function useCameraRoll() {
  const [photos, setPhotos] = useState(initialState);

  async function getPhotos(config = defaultConfig) {
    try {
      const photosFromCameraRoll = await CameraRoll.getPhotos(config);
      console.log(photosFromCameraRoll)
      setPhotos(photosFromCameraRoll);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  async function saveToCameraRoll(tag: string, type?: 'photo' | 'video') {
    try {
      await CameraRoll.saveToCameraRoll(tag, type);
    } catch (err) {
      console.log('error saving to camera roll: ', err);
    }
  }

  return [photos, getPhotos, saveToCameraRoll];
}
