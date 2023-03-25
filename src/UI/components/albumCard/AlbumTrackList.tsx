import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { albumDetail } from '../../../APIservice/request';
import { playQueue } from '../../../services/PlayerActions';
import { colors } from '../../colors';
import {
  ListSectionVerticalWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { trackBar } from '../trackCard/TrackCard';
import { TrackCardProps } from '../trackCard/TrackCard.types';

const play_Image = require('../../images/play-button.png');

const AlbumActions = ({ onPress }: { onPress: () => void }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.playIconBox}>
      <FastImage
        source={play_Image}
        style={styles.playIcon}
      />
    </View>
  </TouchableHighlight>
);

export const AlbumTrackList = ({ id }: { id: string }) => {
  const [list, setList] = useState([] as TrackCardProps[]);

  const updateQueue = () => {
    playQueue(list);
  };

  const updateQueueList = (listData: TrackCardProps[]) => {
    setList(listData);
  };

  const props: ListSectionWrapperProps = {
    queryName: `album-tracks-${id}`,
    query: albumDetail(id),
    title: 'Tracks',
    itemCard: trackBar,
    listStyle: styles.list,
    sectionStyle: styles.section,
    setActionData: updateQueueList,
    scrollable: false,
  };

  return (
    <View style={styles.listContainer}>
      <AlbumActions onPress={updateQueue} />
      <ListSectionVerticalWrapper {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    position: 'relative',
    flex: 1,
  },
  list: {},
  section: { width: '100%', flex: 1 },
  playIcon: {
    width: 25,
    aspectRatio: 1,
    marginLeft: 4,
  },
  playIconBox: {
    width: 45,
    margin: 10,
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: colors.light,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
