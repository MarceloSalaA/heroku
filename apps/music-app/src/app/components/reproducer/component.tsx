import { Song } from '@apoloplay/definitions';
import { FC, useEffect, useState } from 'react';
import './reproducer.css';

interface ReproducerProps {
  song?: Song;
}

let playing = false;
let trackSwitch = false;
const togglePlay = (audio: HTMLAudioElement) => {
  // Play / pause the audio?
  const method = audio.paused ? 'play' : 'pause';
  playing = audio.paused ? true : false;
  if (playing) {
    startSpin(document.querySelector('.spinner') as HTMLDivElement);
    toggleSongPanel(
      document.querySelector('.spinner__disc') as HTMLDivElement,
      document.querySelector('.song-panel') as HTMLDivElement,
      document.querySelector('.play') as HTMLButtonElement
    );
  } else {
    stopSpin(document.querySelector('.spinner') as HTMLDivElement);
    toggleSongPanel(
      document.querySelector('.spinner__disc') as HTMLDivElement,
      document.querySelector('.song-panel') as HTMLDivElement,
      document.querySelector('.play') as HTMLButtonElement
    );
  }
  // Update the progress bar.
  const percent = (audio.currentTime / audio.duration) * 100;
  const progressBar = document.querySelector(
    '.progress__filled'
  ) as HTMLDivElement;
  progressBar.style.flexBasis = `${percent}%`;

  // Skip to next track if at the end of the song.
  if (percent === 100) {
    trackSwitch = true;
    // handleForwardButton();
  }
  audio[method]();
};

const toggleSongPanel = (
  spinnerDisc: HTMLDivElement,
  songPanel: HTMLDivElement,
  playButton: HTMLButtonElement
) => {
  if (!trackSwitch) {
    // Scale the disc
    spinnerDisc.classList.toggle('scale');

    // Show / hide song panel
    songPanel.classList.toggle('playing');

    // Change button icon
    playButton.classList.toggle('playing');
  }
};

const startSpin = (spinner: HTMLDivElement) => {
  // Start spinning the disc
  spinner.classList.add('spin');
};

const stopSpin = (spinner: HTMLDivElement) => {
  // Stop spinning the disc
  const spin: HTMLDivElement = document.querySelector(
    '.spin'
  ) as HTMLDivElement;
  spin.addEventListener(
    'animationiteration',
    () => {
      if (!playing) {
        spin.style.animation = 'none';
        spinner.classList.remove('spin');
        spin.style.animation = '';
      }
    },
    {
      once: true,
    }
  );
};

let mousedown = false;

function scrub(e: any) {
  const audio = document.querySelector('.player__audio') as HTMLAudioElement;
  const progress = document.querySelector('.progress') as HTMLDivElement;
  const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;

  audio.currentTime = scrubTime;
}

export const Reproducer: FC<ReproducerProps> = ({ song }) => {
  useEffect(() => {
    const source = document.querySelector('source') as HTMLSourceElement;
    const audio = document.querySelector('.player__audio') as HTMLAudioElement;
    if (!source || !song?.url) {
      return;
    }
    if (!audio.paused) {
      togglePlay(audio);
    }
    source.srcset = song.url;
    audio.load();
  }, [song]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="player">
        <audio className="player__audio viewer">
          <source src={song?.url} type="audio/mpeg" data-trackid="1" />
        </audio>
        <div className="song-panel">
          <div className="song-info">
            <div className="song-info__title">{song?.name}</div>
            <div className="song-info__artist">
              {song?.publish_year.valueOf()}
            </div>
            <div
              className="progress"
              onClick={() => scrub}
              onMouseMove={() => {
                (e: any) => mousedown && scrub(e);
              }}
              onMouseDown={() => {
                mousedown = true;
              }}
              onMouseUp={() => {
                mousedown = false;
              }}
            >
              <div className="progress__filled"></div>
            </div>
          </div>
        </div>
        <div className="player-controls">
          <div className="spinner">
            <div
              className="spinner__disc"
              style={{
                backgroundImage: `url(${song?.image})`,
              }}
            >
              <div className="center__disc"></div>
            </div>
          </div>
          <button
            className="play"
            onClick={() =>
              togglePlay(
                document.querySelector('.player__audio') as HTMLAudioElement
              )
            }
          >
            <i className="fa fa-play fa-3x"></i>
            <span className="pause left"></span>
            <span className="pause right"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Reproducer;
