import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../colors';
import { ListSectionVertical } from '../common/ListSection';
import { TrackCardProps } from '../trackCard/TrackCard.types';
import { TrackCardBar } from '../trackCard/TrackCardBar';

const trackBar = ({ item }: { item: unknown }) => {
  const props = item as TrackCardProps;
  return <TrackCardBar {...props} />;
};

export const PlaylistTrackList = () => {
  const tracks: unknown[] = [
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
    {
      id: 'tra123',
      name: 'Beat it',
      artist: { name: 'Micheal Jackson', id: '123' },
      album: { name: 'something', id: '123' },
      image: '',
      playbackSeconds: 12,
      song: 'something',
    },
  ];

  return (
    <ListSectionVertical
      title="Tracks"
      data={tracks}
      renderItem={trackBar}
      listStyle={styles.list}
      sectionStyle={styles.section}
    />
  );
};

const styles = StyleSheet.create({
  section: { width: '100%', flex: 1 },
  list: {},
});
