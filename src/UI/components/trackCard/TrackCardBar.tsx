import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TitleText } from '../common/Titles';
import { TrackCardProps } from './TrackCard.types';

const default_track_image = require('./../../images/track-default.png');

const TrackBarImage = ({
  url,
  id,
}: {
  url: string;
  id: string;
}): JSX.Element => {
  return (
    <View>
      <FastImage
        key={id.concat('-image')}
        source={{ uri: url }}
        style={{}}
        defaultSource={default_track_image}
      />
    </View>
  );
};

const TrackBarInfo = ({
  name,
  artist,
}: {
  name: string;
  artist: { name: string; id: string };
}) => (
  <View>
    <TitleText
      content={name}
      style={{}}
    />
    <TitleText
      content={artist.name}
      style={{}}
    />
  </View>
);

export const TrackCardBar = (props: TrackCardProps) => {
  const { id, name, artist, image } = props;

  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={{}}>
        <TrackBarImage
          url={image}
          id={id}
        />
        <TrackBarInfo {...{ artist, name }} />
      </View>
    </TouchableHighlight>
  );
};
