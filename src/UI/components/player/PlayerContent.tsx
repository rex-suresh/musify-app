import React from 'react';
import { PlayerArt } from './PlayerArt';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';

export const PlayerContent = () => (
  <>
    <PlayerArt />
    <ProgressBar />
    <PlayerControls />
  </>
);
