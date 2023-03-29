import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { useQuery } from 'react-query';
import { colors } from '../colors';
import { AlbumCardProps } from '../components/albumCard/AlbumCard.types';
import { AlbumCardItem } from '../components/albumCard/AlbumSection';
import { ArtistCardProps } from '../components/artistCard/ArtistCard.types';
import { ArtistCardItem } from '../components/artistCard/ArtistSection';
import {
  ListSection,
  ListSectionVertical,
} from '../components/common/ListSection';
import { TitleText } from '../components/common/Titles';
import { PlaylistCardProps } from '../components/playlistCard/PlaylistCard.types';
import { PlaylistCardItem } from '../components/playlistCard/PlaylistSection';
import { trackBar } from '../components/trackCard/TrackCard';
import { TrackCardProps } from '../components/trackCard/TrackCard.types';
import { sizes } from '../fontSizes';

type SearchResultData = {
  artists: ArtistCardProps[];
  albums: AlbumCardProps[];
  tracks: TrackCardProps[];
  playlists: PlaylistCardProps[];
};

const ArtistSearchResult = ({
  searchData: { artists },
}: {
  searchData: SearchResultData;
}) => {
  if (!artists || artists.length < 1) {
    return <></>;
  }

  return (
    <ListSection
      title={'Artists'}
      data={artists}
      renderItem={ArtistCardItem}
      listStyle={styles.horizontalList}
      sectionStyle={styles.horizontalSection}
      subTitle
    />
  );
};

const AlbumSearchResult = ({
  searchData: { albums },
}: {
  searchData: SearchResultData;
}) => {
  if (!albums || albums.length < 1) {
    return <></>;
  }

  return (
    <ListSection
      title={'Albums'}
      data={albums}
      renderItem={AlbumCardItem}
      listStyle={styles.horizontalList}
      sectionStyle={styles.horizontalSection}
      subTitle
    />
  );
};

const PlaylistSearchResult = ({
  searchData: { playlists },
}: {
  searchData: SearchResultData;
}) => {
  return (
    <ListSection
      title={'Playlists'}
      data={playlists}
      renderItem={PlaylistCardItem}
      listStyle={styles.horizontalList}
      sectionStyle={styles.horizontalSection}
      subTitle
    />
  );
};

const TrackSearchResult = ({
  searchData: { tracks },
}: {
  searchData: SearchResultData;
}) => {
  if (!tracks || tracks.length < 1) {
    return <></>;
  }
  return (
    <ListSectionVertical
      title={'Tracks'}
      data={tracks}
      renderItem={trackBar}
      listStyle={styles.verticalList}
      sectionStyle={styles.verticalSection}
      scrollable={false}
      subTitle
    />
  );
};

const isResponseEmpty = (response?: SearchResultData) => {
  if (!response) {
    return true;
  }

  return !Object.keys(response).some(
    (partKey) => response[partKey as keyof SearchResultData].length > 1,
  );
};

export const SearchResultScreen = ({
  searchKey,
  initiateSearch,
  request,
  onReqComplete,
}: {
  searchKey: string;
  initiateSearch: boolean;
  request: () => unknown;
  onReqComplete: () => void;
}) => {
  const { data, isLoading, isError, refetch } = useQuery(
    `search-result-${searchKey}`,
    request,
    {
      enabled: initiateSearch && Boolean(searchKey.trim()),
      onSettled: onReqComplete,
    },
  );
  const searchData = data as SearchResultData;

  if (isError) {
    return (
      <View style={styles.errorBox}>
        <TitleText
          style={styles.responseError}
          content="An Error Occurred !"
        />
        <Button onPress={() => refetch()}>Retry</Button>
      </View>
    );
  }

  if (!isLoading && isResponseEmpty(searchData)) {
    return (
      <View style={styles.errorBox}>
        <Text style={styles.responseError}>No results</Text>
      </View>
    );
  }

  return isLoading ? (
    <View style={styles.errorBox}>
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'small' : 'large'}
        color={colors.light}
      />
    </View>
  ) : (
    <>
      <ArtistSearchResult searchData={searchData} />
      <TrackSearchResult searchData={searchData} />
      <AlbumSearchResult searchData={searchData} />
    </>
  );
};

const styles = StyleSheet.create({
  horizontalList: {
    height: 210,
  },
  horizontalSection: {
    marginTop: 15,
    paddingTop: 20,
  },
  verticalList: {
    maxHeight: 340,
  },
  verticalSection: {
    marginTop: 15,
    paddingTop: 20,
  },
  indicator: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dark,
  },
  errorBox: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
  },
  responseError: {
    color: colors.light,
    fontSize: sizes.S,
    textAlign: 'center',
  },
});
