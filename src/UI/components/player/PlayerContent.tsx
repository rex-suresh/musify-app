import React from 'react';
import { TrackCardProps } from '../trackCard/TrackCard.types';
import { PlayerArt } from './PlayerArt';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';

export const PlayerContent = (props: TrackCardProps) => (
  <>
    <PlayerArt {...props} />
    <ProgressBar />
    <PlayerControls />
  </>
);
