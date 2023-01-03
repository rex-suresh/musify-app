import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { AlbumCardProps, AlbumInfoParams } from './AlbumCard.types';

const ALBUM_IMAGE_DEF = './src/UI/components/image/album-default.jpg';

const getImageUri = async (url: string) => {
  const imageReq = await fetch(url);
  return URL.createObjectURL(await imageReq.blob());
};

const AlbumImage = ({ url, id }: { url: string; id: string }): JSX.Element => {
  const [imageUri, setImage] = useState('');

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
        source={{ uri: url }}
        // eslint-disable-next-line global-require
        defaultSource={require(ALBUM_IMAGE_DEF)}
      />
    </View>
  );
};

const AlbumInfo = ({ name, artist }: AlbumInfoParams) => (
  <View>
    <Text>{name}</Text>
    <Text>{artist.name}</Text>
  </View>
);

export const AlbumCard = (props: AlbumCardProps) => {
  const { id, name, artist, image, label, explicit } = props as AlbumCardProps;

  console.log(props);

  return (
    <View>
      <AlbumImage
        url={image}
        id={id}
      />
      <AlbumInfo {...{ name, artist, label, explicit }} />
    </View>
  );
};
