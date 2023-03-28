import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';

export const SectionContentTitle = ({ title }: { title: string }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

export const SubSectionContentTitle = ({ title }: { title: string }) => (
  <Text style={styles.subSectionTitle}>{title}</Text>
);

export const SubSectionContentTitleRight = ({ title }: { title: string }) => (
  <Text style={styles.subSectionTitleRight}>{title}</Text>
);

export const PageTitle = ({ title }: { title: string }) => (
  <Text style={styles.pageTitle}>{title}</Text>
);

export const TitleText = ({
  style,
  content,
  lines = 1,
}: {
  style: Record<string, unknown>;
  content?: string;
  lines?: number;
}): JSX.Element =>
  content ? (
    <Text
      ellipsizeMode="tail"
      numberOfLines={lines}
      style={style}>
      {content}
    </Text>
  ) : (
    <></>
  );

const styles = StyleSheet.create({
  subSectionTitle: {
    color: colors.lowContrast,
    fontSize: sizes.S,
    fontWeight: '600',
    padding: 10,
  },
  subSectionTitleRight: {
    color: colors.lowContrast,
    fontSize: sizes.M,
    marginBottom: 10,
    marginStart: 24,
    fontWeight: '400',
  },
  sectionTitle: {
    color: colors.midContrast,
    fontSize: sizes.L,
    fontWeight: '700',
    padding: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
  pageTitle: {
    color: colors.midContrast,
    fontSize: sizes.XXL,
    fontWeight: '400',
    paddingLeft: 12,
  },
});
