import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { AlbumCardProps } from './AlbumCard.types';

const ALBUM_IMAGE_DEF = './src/UI/components/image/album-default.jpg';

const getImageUri = async (url: string) => {
  const imageReq = await fetch(url);
  return URL.createObjectURL(await imageReq.blob());
};

const AlbumImage = ({ url, id }: { url: string; id: string }): JSX.Element => {
  const [imageUri, setImage] = useState('def');

  useEffect(() => {
    const imageSet = async () => {
      setImage(await getImageUri(url));
    };

    imageSet();
  }, [url]);

  return (
    <View>
      <Image
        key={id.concat('-image')}
        source={{ uri: imageUri }}
        defaultSource={{ uri: ALBUM_IMAGE_DEF }}
      />
    </View>
  );
};

const AlbumInfo = ({ info }) => {};

export const AlbumCard = ({
  id,
  name,
  artist,
  image,
  label,
  explicit,
}: AlbumCardProps) => (
  <View>
    <AlbumImage
      url={image}
      id={id}
    />
    <AlbumInfo info={{ name, artist, label, explicit }} />
  </View>
);
