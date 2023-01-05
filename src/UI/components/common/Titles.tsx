import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';

export const SectionContentTitle = ({ title }: { title: string }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

export const PageTitle = ({ title }: { title: string }) => (
  <Text style={styles.pageTitle}>{title}</Text>
);

export const TitleText = ({
  style,
  content,
}: {
  style: Record<string, unknown>;
  content: string;
}): JSX.Element => (
  <Text
    ellipsizeMode="tail"
    numberOfLines={1}
    style={style}>
    {content}
  </Text>
);

const styles = StyleSheet.create({
  sectionTitle: {
    color: colors.fontL,
    fontSize: sizes.L,
    fontWeight: '700',
    padding: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
  pageTitle: {
    color: colors.fontL,
    fontSize: sizes.XXL,
    fontWeight: '400',
    paddingLeft: 12,
  },
});
