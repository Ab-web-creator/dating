import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css';
import kamar from '../../images/kamar.png';


const Musa = () => {

  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleBubbles, setVisibleBubbles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const initialVisibility = {};
    const numberOfCases = 4;

    for (let i = 1; i <= numberOfCases; i++) {
      initialVisibility[i] = window.innerWidth > 970;
      //     console.log(initialVisibility[i])
    }
    setVisibleBubbles(initialVisibility);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSupClick = (index) => {
    setVisibleBubbles(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (

    <div className="minister-home stories">
      <div className="separate_into_two_columns">
        <main className="sep_part1">

          <div className='chapter_heading'>
            <div className="kamar">
              <img src={kamar} alt="" />
            </div>
            <div className="img_container" style={{ padding: '11px' }}>
              <svg version="1.1" fill='rgb(175, 157, 0)' viewBox="0 0 1616 1616" xmlns="http://www.w3.org/2000/svg">
                <path d="m870 1574c-8.74-7.66-18-28.9-11.9-39.5 0.481-0.639 1.42-3.07 2.09-5.41 3.53-8.48 9.04-15.4 13.7-23.8 2.61-4.71 10.3-14.8 15.6-20.6 1.31-1.42 5.3-5.92 8.88-10 27.3-23.4 51.9-53.1 83.6-59.5 2.87-0.539 3.31-0.385 2.79 0.974-0.341 0.888-1.03 1.61-1.53 1.61-0.499 0-3.04 2.08-5.64 4.61-26.1 19.6-58.8 43.3-79.6 67.2-4.65 5.56-9.68 14.4-9.68 17-1.69 9.52 3.13 26.8 15.2 27.2 6.36-1.41 6.78-8 10.8-11 0.562 0 1.02-0.442 1.02-0.982 1.6-4.17 10.3-11.7 13.9-7.58 0.603 0.726 2.32 1.57 3.82 1.89 2.86 0.594 5.85 5.17 4.08 6.26-1.41 16.9-13.8 44.1-29.9 50.9-12.4 4.55-22.6 13.1-37.3 0.645zm-384-133c-11.6-2.17-22.2-4.72-32.3-7.43-143-34.2-98.8-224-56-317 3.79-8.29 5.7-15.1 8.46-23 1.28-3.34 4.58-5.88 8-6.46 4.7-0.797 6.95 0.662 5.25 3.41-2.09 7.35-3.55 14.8-5.94 22-26 72.5-57.7 213 37.3 237 153-6.55 384-41.5 471-163 0.959-1.52 2.98-3.89 4.5-5.26 16.6-16.9 63.6-54 51.8-82-3.25-4.49-4.31-9.89-6.63-14.2-2.23-4.1-3.05-4.84-4.75-4.3-3.77 1.33-7.69 1.08-11.3 2.84-68.2 12.4-176-9.22-201-54.4-0.047-0.275-0.553-1.62-1.12-3-11-30.1 3.31-57.9 15.3-82.5 8.96-8.79 16.8-53.8 31.9-56.4 15.4-14.3 26.9-18.8 49.1-19 17.7-0.0113 43.4 3.51 45 6.16 0.322 0.521 2.91 2.01 5.74 3.32 23.1 15.6 46 36.4 63.8 57.3 8.47 15.9 33.5 29.1 36.1 47.6-0.334 0.334-0.112 0.607 0.493 0.607 3.42 4.81 7.97 11.4 9.23 17.6 6.53 4.15 44.2-10 53.1-11.2 3.25-0.368 6.43-1.29 7.05-2.04 29.6-12.2 61.3-26.4 85.2-49.2 19.9-9.44 31-38.5 50-46.7 0.961-0.341 3.12-2.61 4.8-5.05s3.52-4.43 4.09-4.43c1.14 0 14.9-13.7 14.9-14.9 0-0.389 1.79-1.81 3.97-3.16 2.19-1.35 3.99-2.8 4-3.23 22.2-25.3 67.2-58.2 92.5-55.2 4.76 0.561 5.24 0.39 10-3.57 4.84-5.96 20.1-18.5 22-23.9 10.9-13.4 37.7-24 49-36 0.648-1.05 13.5-7.49 15-7.56 0.552-0.0269 2.58-0.789 4.5-1.69 13.4-6.32 45.4-3.98 53.8 3.93 0.727 0.688 1.79 1.25 2.37 1.25 1.17 0 11.1 7.04 11.6 8.23 0.183 0.422 0.902 0.767 1.6 0.767 1.48 0 21.4 19.5 26.7 26 6.05 7.58 10.9 14.9 14.5 21.8 14.1 25.1 30.8 66.7 18.4 95.6-8.82 21.4-23.7 44-41.9 59.7-19.4 17.3-37.9 31.2-65.6 24.8-2.2-0.578-4.68-1.09-5.5-1.14-27.9-8.03-52.8-26.2-75.5-43.8-5.32-4.12-12-9.18-14.8-11.2s-5.87-4.58-6.73-5.62-2.54-2.21-3.75-2.59c-19.8-14.9-36.7-27.6-60.7-35.6-12.8-4.19-22.9-4.22-27.8-0.0801-9.23 5.01-17 10.9-25.3 17.7-25.3 25.2-52 50.4-73 76.2-2.11 2.61-5.32 6.13-7.12 7.82-35.7 26.1-60.9 58.7-91.5 71.4-9.13 5.75-20.4 7.93-30.2 13.4l-4 2.28 0.284 10.9c0.379 14.6-1.19 36-2.77 37.9-0.691 0.832-0.944 1.51-0.562 1.51s-0.013 0.707-0.878 1.57c-0.864 0.864-1.57 2.69-1.57 4.05-3.34 47.8-57 62.2-72.3 102-0.375 0.997-1.05 1.58-1.51 1.3-22.2 12.5-43.4 58.2-73 68.5-11.1 4.1-18.2 19.8-29.1 21.9-101 65-220 147-358 127zm435-430c1.31-1.31-26.1-27-43.3-40.5-11.1-8.78-22.4-16.9-23.5-16.9-0.432 0-2.85-1.32-5.37-2.93-8.75-5.6-37.1-7.81-43.9-3.42-36.8 28.4 58 55.2 71.4 57.5 3.3 0.541 8.25 1.39 11 1.89 11 2 23.2 3.9 27.5 4.27 2.48 0.216 4.76 0.472 5.08 0.568 0.321 0.096 0.851-0.093 1.18-0.419zm581-104c1.76-1.43 2.07-2.22 1.25-3.25-3.44-15.7-11.3-31.7-18.7-44.4-16.3-24.1-33.7-46.4-57.1-60.5-21.1-12.7-37.7-11.8-55.2 3.01-13 11-15.3 13.5-14.7 15.6 15.7 11.6 36.7 32.1 50.8 39.4 16.9 10.4 48.5 42.9 69.6 46 0.588 0 2.84 0.906 5.01 2.01 7.94 4.05 15.6 4.9 19.1 2.1zm-305 496c-3.58-2.7-6.95-4.92-7.5-4.93-0.55-0.017-1.88 1.29-2.97 2.9-2.28 3.41-6.23 5.53-7.9 4.24-0.626-0.483-3.64-2.89-6.7-5.35l-5.56-4.47 3.39-4.43c1.86-2.44 3.69-4.53 4.06-4.65 0.371-0.121 2.65 1.54 5.07 3.69 2.42 2.15 5.71 4.45 7.32 5.12 2.8 1.16 3.1 1.01 7.31-3.69 2.41-2.69 4.41-4.34 4.43-3.65 0.025 0.688 0.527 1.25 1.12 1.25 1.21 0 13.9 8.88 13.9 9.72 0 1.39-4.38 7.41-6.02 8.29-2.65 1.42-2.83 1.35-9.98-4.04zm-146-9.22c3.37-8.46 4.11-9.48 10-13.7 25.8-18.5 47.2-32.2 47.5-30.6 0.167 0.762-0.508 3.08-1.5 5.16-1.43 2.98-4.01 5.15-12.3 10.3-13.2 8.26-32 21.2-38.1 26.2-4.81 3.98-6.43 4.73-5.58 2.59zm256-36c-8.85-2.69-15-8.15-18.7-16.5l-1.95-4.41-2.65 4.51c-6.22 10.6-12.1 14.7-21 14.7-3.83 0-5.77-0.642-8.98-2.97-4.98-3.61-6.13-5.62-6.89-12.1-0.749-6.32-1.75-6.36-11.6-0.411-13.6 8.19-30.1 12.7-56.5 15.5-18.8 2-40.6-0.224-50.2-5.12-9.12-4.67-15-13.9-16.5-26-0.771-6.23 2.31-27.2 4.9-33.4 0.862-2.06 1.32-4.15 1.01-4.64-1.03-1.66-4.26-0.908-7.38 1.72-3.34 2.81-13.3 17.5-19.6 28.9-8.25 15-17 24.9-24 27.2-3.57 1.16-11.2-0.185-13.7-2.43-0.95-0.838-2.86-3.8-4.25-6.59-2.79-5.59-3.38-14.9-1.56-24.5 1.74-9.17 6.84-20.7 11.2-25.4 2.24-2.38 3.34-3.21 2.46-1.83-6.22 9.66-10.6 21.6-10.6 28.8 0 12.5 8.68 20.7 19.8 18.7 4.77-0.878 13.3-9.44 18.2-18.3 7.14-12.8 15.7-24.9 22.6-32 6.44-6.62 7.46-7.29 10.5-7 3.06 0.293 3.38 0.615 3.27 3.32-0.066 1.65-1.81 7.72-3.88 13.5-3.24 9.03-3.78 11.8-3.85 19.5-0.073 7.14 0.34 9.94 2 13.6 6.11 13.4 21.9 19.1 52.4 19.1 32.8-0.062 59.7-6.95 77.2-19.7 2.71-1.99 5.17-3.38 5.47-3.08 0.298 0.298-0.01 3-0.682 6.01-1.7 7.6-0.793 10.2 4.83 13.8 4.05 2.6 5.45 2.98 9.9 2.63 5.5-0.425 11.1-3.75 13.6-8.04 1.4-2.45 1.75-42.2 0.432-48.9-0.712-3.58-0.805-3.65-3.95-2.74-16.4 4.75-50.4 7.48-67.6 5.44-4.06-0.482-5.16-0.034-15 6.13-14.1 8.85-31.4 20.6-38 26-7.83 6.34-9.22 5.68-4.39-2.06 11.2-11.8 21.7-18.5 36-27.7 6.19-4 7.69-5.86 4.71-5.86-2.35 0-8.7-3.52-11.1-6.15-3.35-3.67-6.06-9.87-6.84-15.6-0.395-2.91-1.23-5.24-1.87-5.24-0.636 0.01-2.73 2.58-4.66 5.72-1.92 3.14-6.66 8.9-10.5 12.8-6.41 6.48-7.6 7.25-13.7 8.78-7.34 1.84-20.3 2.34-17.8 0.679 0.825-0.533 2.32-0.976 3.33-0.985 3.96-0.033 17.1-6.25 24-11.4 4.01-2.97 8.95-7.64 11-10.4 6.08-8.29 6.98-13.8 7.09-43.8 0.122-33.3-0.397-62.5-1.11-62.5-7.65 4.75-15.9 10.4-23 14.9-7.29 4.56-13.2 8.48-13.2 8.71 0 0.227 3.54 5.25 7.87 11.2 8.85 12.1 15.4 23.5 17.6 30.8 3.24 10.5 3.02 27.6-0.487 36.8-1.73 4.55-1.99 2.56-0.446-3.4 1.78-6.88 1.81-15.4 0.073-21.1-1.39-4.55-11.1-19.4-24.9-38.1l-7.89-10.7-5.2 3.66c-2.86 2.01-6.89 5.14-8.95 6.96-3.53 3.11-6.75 4.3-6.75 2.5 0-2.61 6.63-10.6 11.5-13.8 3.05-2.03 5.55-3.93 5.55-4.22s-2.42-4.17-5.38-8.61c-14.6-21.9-17.7-29.8-16.9-43.3 0.511-8.56 1.52-10.2 3.34-5.5 2.22 5.74 5.39 11.6 8.17 15.1 2.49 3.13 2.79 4.19 2.26 7.78-0.588 3.92-0.222 4.75 6.43 14.5 9 13.2 9.73 14.1 10.8 13.7 0.477-0.195 9.51-6.14 20.1-13.2l19.2-12.9v-10.9c0-10.4 0.141-11.1 3-15.6 1.65-2.6 3-5.34 3-6.09s0.38-1.13 0.846-0.841c0.465 0.288 1.15 6.25 1.53 13.3 0.374 7 0.836 12.9 1.03 13.1 0.56 0.56 22.3-13.6 32.6-21.2 11.5-8.47 11-8.26 11-5.35 0 3.45-6.33 12.3-10.7 14.9-4.33 2.61-20.2 12.6-28.1 17.7l-5.26 3.39 0.606 45.7c0.784 59.1 1.62 64.5 11.2 70.9 2.61 1.76 8.23 4.21 12.5 5.44l7.73 2.25 13.3-8.84c11.9-9.68 27.4-15.7 38.3-26.6 1.56-1.63 3.21-2.96 3.65-2.96 1.76 0 0.667 4.84-2.05 9.05-3.54 5.51-5.9 7.6-14.1 12.5-8.12 6.64-20.2 9.85-27 17.6 0 1.38 27.5 0.882 40.8-0.733 16-1.95 16.5-2.09 15.7-4.81-1.18-4.14-3.63-41.2-3.06-46.2 0.61-5.27 6.32-17.6 8.48-18.3 0.996-0.332 1.11 1.48 0.52 8.45-0.87 10.3-0.827 13.9 0.45 37.3 0.524 9.57 1.36 17.8 1.86 18.3 2.02 2.02 19-4.35 24.5-9.23l3.65-3.2v5.49c0 7.02 2.15 8.72 11 8.72 7.26 0 11.8-2.05 17.8-8.04l4.2-4.2v3.96c0 5.72 2.51 7.75 7.81 6.32 4.13-1.11 9.44-6.1 10.7-10 1.04-3.28 3.01-1.78 2.73 2.07-0.309 4.13 0.321 5.15 4.48 7.28 5.93 3.04 13.3 1.44 18.4-3.99 3.17-3.38 3.85-12.9 2.75-38.4-1.27-29.3-2.86-74.3-3.02-85-0.129-9.03 0.04-9.84 3.42-16.5 2.06-4.06 3.74-6.37 3.99-5.5 4.12 14.1 4.83 20 2.74 22.5-1.28 1.54-1.31 5.26-0.423 58.5 0.123 7.42 0.561 21.2 0.973 30.5 0.861 19.6 0.16 24.2-5.32 34.8-3.78 7.28-9.27 12.8-15.7 15.8-6.84 3.18-12.2 2.11-17.4-3.5-1.33-1.43-2.77-2.6-3.18-2.6s-2.93 1.33-5.58 2.95c-7.65 4.69-9.77 4.84-13.4 0.992l-3.06-3.27-3.69 2.23c-8.47 5.11-12.1 6.3-17.2 5.6-5.31-0.73-9.62-4.05-10.2-7.82-0.49-3.44-5.28-3.28-13.2 0.438l-6.85 3.21 0.676 10.1c2.12 31.7 2.43 34.3 4.65 39.5 2.74 6.38 9.34 12.4 16 14.6 6.75 2.24 26 2.09 26-0.205 0-0.292-1.74-2.62-3.87-5.17-2.13-2.55-5.26-6.83-6.95-9.51l-3.08-4.87 2.89-5.73c6.34-12.6 18.6-22.2 28.4-22.2 5.16 0 11.7 2.64 16.4 6.6 5.54 4.68 3.66 7.47-3.3 4.88-6.41-2.38-13.7-3.54-18.2-2.92-6.34 0.861-13.8 4.38-15.3 7.25-1.19 2.22-1.08 3.01 0.945 6.82 2.98 5.61 11.5 15.6 14.7 17.3 4.9 2.57 11.5 2.52 24.2-0.186 6.75-1.43 12.9-2.6 13.8-2.6 2.23 0 1.8 4.1-0.771 7.27-1.92 2.38-3.53 2.98-11.2 4.23-8.29 1.34-13.8 2.65-41.9 9.94-12 3.1-21.7 3.92-27.1 2.27zm-103-37c0.21-0.654 2.51-2.6 5.11-4.32 2.6-1.72 5.37-3.97 6.15-5 2.63-3.47 1.34-9.37-2.05-9.37-0.624 0-3.08 1.8-5.47 4-4.51 4.16-6.73 4.67-3.41 0.774 8.81-10.3 12.6-12.8 16.3-10.8 4.62 2.47 1.44 14.4-5.15 19.4-4.46 3.35-12 6.85-11.5 5.36zm222-8.94c0.898-4.03 0.802-11.8-0.522-42.2-1.22-28.1-3.37-96.2-3.31-105 0.028-4.67 0.737-7.67 2.9-12.2 3.06-6.47 5.37-7.88 5.37-3.26 0 1.54 0.942 5.6 2.09 9.01l2.09 6.2-2.1 3.55c-1.48 2.51-1.96 4.63-1.62 7.24 0.263 2.03 0.716 18.5 1 36.7s0.983 42.4 1.54 54c0.558 11.6 0.737 23.7 0.398 27-0.801 7.79-3.18 17.4-5.02 20.2-2.17 3.37-3.69 2.84-2.84-1zm-419-3.92c-9.3-5.14-12.2-15.1-9.06-30.8 1.64-8.07 8.48-24.3 12-28.5 0.927-1.1 0.558 0.025-0.819 2.5-3.46 6.21-8.62 22-8.62 26.4 0 5.06 3.73 12.5 7.41 14.7 4.63 2.82 15.6 2.59 22.1-0.48 7.24-3.4 16.3-10.5 22.2-17.6 17.5-20.7 28.7-30.8 36.3-32.8 3.35-0.865 3.53-1.14 4.1-6.34 1.05-9.59 7.73-18.9 13.5-18.9 5.62 0 14 6.66 21.3 16.9 3.7 5.21 3.84 7.29 0.855 12.5-3.76 6.58-6.36 7.87-15.6 7.75-4.45-0.058-8.09 0.287-8.09 0.765s1.35 4.04 3 7.92c4.23 9.94 3.73 9.98-1.77 0.16l-4.76-8.5-8.48 0.032c-7.48 0.028-9.12 0.382-13.9 3-5.53 3.01-13.6 10.4-20.2 18.5-18.1 22.3-27 30.7-34.9 33-4.64 1.31-14 1.22-16.5-0.164zm106-66.5 2.31-1.62-4.34-4.46c-4.83-4.96-8.65-7.3-11.9-7.3-2.04 0-2.14 0.326-1.51 5.01 0.933 7.03 1.4 7.87 4.95 8.9 4.84 1.4 7.98 1.24 10.5-0.529zm216 6.37c3.75-9.42 3.72-9.39 15-17.5 17.6-12.6 42.5-29.2 43-28.6 0.28 0.28-0.242 2.56-1.16 5.08-1.33 3.64-2.69 5.19-6.67 7.61-10.6 6.47-42.2 28-45.8 31.3-3.95 3.57-5.29 4.21-4.46 2.14zm-296-21c-0.856-1.22-1.56-3.04-1.56-4.03 0-3.39 4.11-14 7.42-19.2 3.76-5.87 15.9-18.9 13.1-14.1-0.958 1.65-2.76 4.12-4.01 5.5-4.56 5.03-10.5 14.5-11.5 18.3-0.851 3.16-0.749 4.36 0.533 6.32 2.02 3.08 3.29 3.06 4.72-0.083 1.31-2.87 3.3-3.24 4.64-0.858 1.21 2.17 0.381 5.33-2.13 8.11-2.81 3.11-8.96 3.12-11.1 0.027zm264-9.25c-0.921-0.921-1.67-2.65-1.66-3.85 0.015-2.35 7.17-16.2 9.64-18.7 0.826-0.825-0.143 1.28-2.15 4.68-2.11 3.57-3.52 7.15-3.33 8.48 0.762 5.33 11.3 4.45 12.4-1.04 1.23-6.03 2.55-9.76 4.26-12 1.78-2.3 1.8-2.22 0.833 4.24-0.867 5.8-0.769 6.81 0.836 8.59 2.09 2.31 6.73 2.66 8.41 0.631 0.558-1.51-2.28-19.5 3.08-17.1 2.62 7.74 2 17.9-3.59 22.4-2.96 2.33-9.26 2.81-12.3 0.928-1.51-0.944-2.44-0.746-4.98 1.06-4.29 3.05-9.32 3.77-11.5 1.63zm-1053-3.51c-4.77-0.913-11.4-5.52-14.5-10.1-7.97-35.3 34.2-78.1 59.3-97.3 4.4-3.31 11-8.65 14.7-11.9s7.04-5.83 7.5-5.82c0.459 0.01 0.333 0.346-0.281 0.75-0.614 0.404-2.09 2.66-3.28 5.01-16.4 26.8-59.1 48.5-63.8 80.1-0.397 5.79-0.15 7.1 1.91 10.1 2.92 4.29 8.56 8.21 11.2 7.82 1.11-0.162 4.44-3.51 7.5-7.54 5.01-6.61 5.82-7.25 9.04-7.24 7.77 0.03 10.3 2.37 11.6 10.9 0.527 3.29 0.12 5.18-2.09 9.71-7.05 12.7-23.7 18-38.8 15.4zm1010-6.6c0-0.315 1.14-2.52 2.54-4.91 3.44-5.86 10.2-10.8 62-45.3 24.2-16.1 46.1-31.1 48.8-33.3 5.93-4.96 7.22-3.33 3.2 4.06-3.56 6.55-4.37 7.21-22 18.1-30.3 18.8-80.1 52.1-87.3 58.2-3.86 3.33-7.23 4.81-7.23 3.18zm-28.4-17.1c-0.296-1.54-0.835-4.83-1.2-7.3-0.685-4.67-4.22-14-5.32-14-2.37-0.058-3.1-1.77-2.04-4.8 2.26-6.47 5.87-2.89 8.55 8.47 0.953 4.04 2.04 7.35 2.42 7.35 0.378 0 1.28-2.14 2-4.75 3.26-11.7 7.14-19.1 10.2-19.2 0.4-0.017 1.44 1.06 2.32 2.4 2.3 3.51 0.487 6.72-3.35 5.96-2.21-0.442-3-0.083-3.91 1.78-2.11 4.31-5.53 16-6.16 21.1-0.697 5.62-2.65 7.31-3.48 3zm-993-169c-7.15-0.409-15-1.21-17.5-1.78-2.48-0.572-7.02-1.06-10.1-1.08-27.6-7.49-61.7-15.3-84.9-33.2-70.7-47.4-82-128-70.9-202 27.5-104 83.5-177 145-257 1.4-1.76 3.54-3.5 4.76-3.87s2.96-1.33 3.88-2.14c0.922-0.808 2.5-1.31 3.5-1.11 2.28 0.444 1.98 4.55-0.655 9.15-4.77 11.9-12.3 22-18.1 32.5-4.36 4.57-7.89 14-11.7 17.9-35.8 57-88.8 126-89.1 185 0.137 2.59-0.0953 5.26-0.517 5.94-2.35 3.8-1.29 56.4 1.19 59.4 17.1 55.5 56.6 89.4 107 103 128 29.3 250-15 366-64.9 33.9-17 70.2-35.2 97.8-50 12.9-7.79 72.9-36.2 70.2-53.4-0.357-2.23-0.968-4.3-1.36-4.59-4.61-9.45-8.18-20.2-18.2-25-12-6.46-26-11.1-39.2-14-38.3-11-80.5-22.8-114-33.6-29.7-11.5-43.9-38.2-35.4-59 9.68-18.6 21.3-47.2 34.7-62.1 53.7-69.8 115-104 184-144 25.2-11.1 56-29.2 78.8-32.4 4.52-0.469 5.22-0.272 6.59 1.85 11.1 36 16.7 70.4 58.4 80 3.3 0.692 7.48 1.86 9.29 2.6 10.3 4.2 49.4 5.13 68.7 1.64 8.91-1.61 11.4-2.43 20.9-7 2.72-1.3 5.96-2.36 7.2-2.36 27.1-10.1 72.9-35.7 89.3-64.3 1.79-5.64 3.89-9.29 7.88-13.6 5.86-6.24 9.54-6.85 13-2.15 1.2 1.63 2.19 3.56 2.19 4.29 0 0.734-2.02 5.36-4.5 10.3-3.66 8.64-10.8 19.6-6.63 29.2 0.478 0.955 1.81 3.76 2.96 6.24 1.15 2.48 2.9 5.84 3.88 7.48 7.74 11.3 20.2 19.1 32.5 22.9 33.1 7.49 73.1 5.24 99.1-15.5 3.21-2.65 3.71-3.63 3.71-7.29 0-2.32-0.415-4.65-0.922-5.18s-1.66-3.82-2.56-7.33c-3.91-12.8-10.3-24.5-16-34.7-4.12-7.31-7.5-14.2-7.5-15.4s-0.427-2.09-0.948-2.09c-1.42 0 0.464-4.7 4.42-11 7.01-17.3 23.1-32.2 29.5-48.5 0-1.49 5.09-5.54 6.96-5.54 0.904 0 2.1-0.455 2.66-1.01 1.78-1.78 7.75 5.6 13.5 16.7 2.24 4.3 5.32 10.1 6.86 12.8 9.19 18 14 38 14.1 55.3-0.011 17.1-1.68 27.3-6 36.4-1.65 3.48-3.69 8.31-4.54 10.7-5.84 13.8-13.4 20-21.1 31.3-6.53 9.66-29.6 34.7-32 34.8-0.612 0.012-2.86 1.37-5 3.01-10.9 6.69-25.2 16-38.4 19.1-6.78 1.46-7.83 1.79-10.9 3.39-37 9.26-97.6-13-108-48.5-3.42-8.3 0.616-10.3-9.07-10.8-12.1 0.465-18.2 7.28-26.6 14.2-38.7 35.4-79.5 53-120 53.1-39.7 0.0943-68.7-13-96.2-40.6-15.3-14.8-9.2-33.3-22.3-44-19.6-10.9-40.2 2.85-56.2 11.1-40.2 28.6-164 87.5-152 124 18.3 21.8 45 28.4 68.7 32.6 34.5 8.58 107 9.96 121 51.6 4.89 12.2 11.5 46.4 6.82 56.5-8.67 36.3-22.8 58.6-43.8 84.8-50.1 50-128 86.9-182 117-88 46.7-165 68.6-260 84.8-6.32 1.09-32.5 1.1-51.5 0.011zm708-179c-4.58-0.935-4.36-3.98 0.937-12.9 6.99-11.8 7.58-12.3 14.9-13.2 35.5-15.7 77.6-44.6 106-71.5 1.38-1.37 2.9-2.49 3.38-2.49 1.32 0 18.6-16.7 25.6-24.7 0.92-1.06 1.49-3.79 1.5-7.19l0.015-5.48c-6.69-1.27-11.8-4.89-18-6.03-20.9-6.31-26.2-12.1-23-28.3 1.36-7.25 12.1-20.5 37.5-46.3 6.86-7.94 17.2-13.6 24.4-19.4 2.26-1.82 5.68-3.93 7.6-4.69 4.33-2.91 25.3-12.5 27-1.49 0 0.818 0.675 1.49 1.5 1.49s1.5 0.605 1.5 1.35c0 0.74 0.83 2.1 1.84 3.01 4.46 6.33 8.5 20.3 5.2 27.4-2.69 5.85-4.93 23.2-9.31 26.1-1.74 0.767-3.73 6.34-3.73 10.4 0 5.61 2.5 8.04 10.3 10.1 3.22 0.833 5.92 1.66 6 1.83 0.084 0.176 0.715 1.33 1.4 2.56 1.98 3.54 1.47 8.89-1.37 14.5-5.28 10.5-15.1 16.2-33.4 19.5-8.11 1.46-12 3.42-19.5 9.72-39 28.3-71.1 69.5-110 87.1-13 8.34-27.2 17.7-39.7 23.7-9.85 4.79-13.2 5.67-17.8 4.72zm179-170c1.4-0.638 2.55-1.52 2.55-1.97 0-0.445 2.14-1.43 4.75-2.2l4.75-1.39-0.142-9.39c-0.199-13.2-1.03-16.6-5.15-21.1-3.18-3.43-4.03-3.81-8.5-3.81-4.09 0-5.61 0.541-8.59 3.07-3.9 3.31-14.8 10.6-19.5 12.9-4.28 2.18-5.66 5.83-5.66 15 0 7.3 0.18 8.05 1.94 8.05 1.07 0 2.22 0.45 2.56 1 0.885 1.43 27.8 1.29 31-0.161zm225-28.9c-11.5-1.6-16.8-6.13-20.9-17.8-2.34-6.72-2.63-8.76-2.05-14.2 0.811-7.61 4.47-17.5 9.09-24.5 1.85-2.81 3.36-5.44 3.36-5.85 0-1.08 10.5-16.6 13.5-20.1 1.44-1.63 4.7-5.66 7.25-8.96 20.5-24.1 34.6-30.6 56.2-46 3.94-2.85 11-5.53 11-4.17-19 17.1-37.1 32.8-55.9 51-17.8 17.2-24.3 30.7-19.3 40.2 2.79 5.4 8.56 11.4 10.9 11.4 2.26 0 3.88-1.71 7.58-8 1.45-2.48 3.92-6.01 5.48-7.86l2.84-3.36 4.66 2.12c2.56 1.17 5.05 2.9 5.54 3.86 1.31 2.58 0.255 13.7-1.89 19.9-2.22 6.47-9.87 18.3-14.6 22.6-7.74 7.05-16.1 10.6-22.8 9.65zm-1112-135c-10.3-20.7 7.21-36.7 15.1-53.7 1.06-2.32 2.93-5.3 4.16-6.63 17.7-26 41.7-44.6 63.9-63.2 1.63-1.38 4.17-2.75 5.64-3.06 3.76-0.784 17-7.26 21.2-10.4 4.84-3.59 7.53-4.91 11.6-5.67 4.25-0.797 4 1.02-0.563 4.08-1.64 1.1-2.99 2.56-2.99 3.25-2e-3 0.688-0.64 1.25-1.42 1.25-0.779 0-1.57 0.381-1.75 0.847-0.399 1.01-14.5 11.1-15.6 11.2-20.7 17.2-56.2 41.4-67.2 62.4-1.22 2.51-2.64 4.83-3.17 5.16-0.525 0.324-0.693 1.41-0.373 2.42s0.113 2.12-0.459 2.47c-3.45 7.45 3.55 15.6 8.26 20.8 5.88 6.38 9.49 6.56 13.5 0.688 4.51-6.68 12.3-16.4 13.8-17.2 1.29-0.724 3.76 0.06 11.1 3.52 1.19 0.562 2.36 1.75 2.59 2.65 0.794 3.06-0.421 16.6-1.76 19.6-0.735 1.65-1.64 4.12-2.02 5.5-1.09 3.97-9.36 15.7-14.9 21.1-24.5 23.1-43.4 14.2-58.6-7.13zm337-98.5c7.11-23.2 8.27-75.8-2.49-96.8-8.81-20.1-17.1-46.8-31.8-62.8-2.14-2.79-4.45-5.58-6.69-7.51-8.37-8.14-2.6-10 1.55-17.9 6.32-5.53 10.5-28.5 18.1-31.5 4.56 0.203 20 20.7 25.3 30.2 19.5 42.7 34.7 109 17 146-0.464 0.56-1.37 3.94-2.02 7.52-1.26 7.01-13.7 36.5-17.5 37-1.1 0-1.49-1.18-1.49-4.5zm388-96.6c-3.17-5.37-4.99-13.5-5.67-19.2-3.65-19.8-9.54-52.1-23.4-71.5-4.97-6.67-11.9-11.4-15.6-10.6-1.81 0.363-3.16-6e-3 -4.08-1.12-2.42-2.92 1.4-16.8 6.22-22.5 1.71-2.04 11.1-7.98 12.7-7.98 1.93 0 12.1 10.1 14.1 14 3.22 6.34 8.85 24.2 14 44.4 1.19 4.12 5.9 33.1 12.8 19.9 1.03-2.06 4.24-11.2 7.13-20.2 7.2-22.6 18.1-47.3 26.6-60.2 3.2-4.82 6.27-7.92 11.2-11.3 8.07-5.51 11.7-5.91 17.5-1.89 4.59 3.18 9.69 11.5 9.7 15.9 0.017 5.58-2.94 13.3-6.42 16.8-4.53 4.53-7.2 5.13-9.21 2.07-3.78-5.78-13-8.29-17.2-4.68-10.3 15.4-22.6 37.1-26.2 53.1 0 0.757-0.64 2.79-1.42 4.53-5.22 12.5-7.57 27-7.96 39.3-0.382 12.6-1.73 16.1-7.57 20.1-3.71 2.5-4.74 2.66-7.3 1.17z" />
              </svg>
            </div>
            <div className='title_of_chapter'>
              <p> Мусо алайҳис-салом  </p>
              <p>қиссаси</p>
            </div>
          </div>

          <div className='decor_line'>
            {/* <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p> */}
          </div>

          <div className='main_text' >
            <p className='boldItalic'>

              «Батаҳқиқ, Биз Мусо ва Ҳорун­га неъмат бердик. Ик­ков­ларига ва қавмларига катта ғамдан нажот бердик. Ва уларга нусрат бердик, бас, улар ғолиб бўлдилар. Ва Биз ик­ков­ларига равшану комил баён­­ли китобни бердик. Ва икков­ла­рини сиротул мус­та­қийм­га ҳидоят қилдик» (Вас-Соффот 37:114-118).
            </p>


          </div>

          <div className='paragraph_heading'>
            <p>
              Янги фиръавннинг тахтга ўтириши
            </p>
          </div>

          <div className='main_text' >
            <p>
              Юсуф пайғамбар вафот этганларидан сўнг, орадан уч юз йигирма йилча вақт ўтди. Бу давр ичида Яъқуб (а.с.) нинг фарзандлари суръат билан кўпайиб катта бир халққа айландилар.
            </p>
            <p></p>
          </div>

          <div className='main_text' >
            <div className='speech-bubble'
              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}
            >
              <p>
                <sup>1</sup>  Ушбу фиръавн, аввалги фиръавнлардан фарқли ўлароқ, ни­ҳо­ятда жоҳил, золим ва Бани Исроилга нисбатан адовати кучли эди. Инсон бўлса ҳам, ўзини худо деб эълон қилган. Нозиот сурасида ёзилишича у: «Мен сизларнинг олий Раб­бин­гизман», деб даво қилган (79:24).
              </p>
            </div>

            <p onClick={() => handleSupClick(1)}>
              Кейин Миср тахтига янги подшоҳ келди. У Юсуф (а.с.) ни билмас, унинг Миср учун қилган хизматларини тан олмас эди.<sup>1</sup>
            </p>
            <p></p>
          </div>

          <div className='main_text' >
            <p>
              У ўз халқига: «Юртимизда Бани Исроил кундан-кунга кўпайиб кетмоқда. Агар бирон чорасини кўрмасак, ҳаддан ортиқ кучайиб кетади. Мабодо уруш бошланса, душман тарафига ўтиб бизга қарши жанг қилишлари ёки юртимиздан кетиб қолишлари мумкин», деди.
            </p>
            <p onClick={() => handleSupClick(2)}>
              Шундан сўнг мисрликлар Бани Исроилни оғир ишлар билан қийнай бошладилар. Шу мақсадда устларидан назоратчилар қўйдилар. Мисрдаги Фитум ва Раъмасис деган омбор-шаҳарлар ана шундай оғир кунларда барпо этилган.<sup>2</sup>
            </p>
            <p></p>
          </div>

          <div className='main_text' >
            <div className='speech-bubble'
              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}
            >
              <p>
                <sup>2</sup>  Фиръавн ҳам, Миср бойлари ҳам текин хизматкорлардан айрилиб қолишни истамас эдилар.
              </p>
            </div>

            <p className='vitalic'>
              Қул бўлиш нима эканини тасаввур қиласизми? Биринчидан, эртаю кеч меҳнатдан қўлингиз бўшамайди. Иккинчидан, хоҳлаган нарсангизни еб, хоҳлаган нарсангизни кия олмайсиз. Қулдорнинг мулки ҳисобланасиз. Учинчидан, қулдор қачон хоҳласа сизни калтаклаши мумкин. Энг ёмони, ҳаётингиз ўзгаришига, яхшиланишига умид йўқ. Оёқ-қўлингиз кишанланган, ўзингизни ўзингиз озод қилолмайсиз! Хўш, озодликка қандай чиқиш мумкин?
            </p>

            <p className='vitalic'>
              Бир йўли, хўжайинингиз рухсат берса, яъни қўйиб юборса. Лекин бу — камдан-кам учрайдиган ҳолат.
            </p>

            <p className='vitalic'>
              Иккинчи йўли, агар бадавлат қариндошларингиз бор бўлса, улар пул тўлаб сизни сотиб олишлари мумкин.
            </p>

            <p className='vitalic'>
              Биласизми, гуноҳ ҳам кишанга ўхшайди. Гуноҳ кишанига тушган одам уни узиб ташлашга кучи етмайди. Бирорта ёмон ишни “қилмайман” десангиз ҳам, кучингиз етмаган ва қайта-қайта қилиб қўйган ҳолларингиз бўлганми? Нажотни қаердан кутасиз? Ота-онангизданми, ака-укаларданми? Оллоҳга дуо қилинг, Оллоҳдан нажот изланг, агар чин юракдан тиласангиз Оллоҳ албатта сизга ёрдам беради.
            </p>
            <p>
              Аммо мисрликларнинг тобора ошиб бораётган зуғумига қарамай, Бани Исроил кундан-кунга кўпаяверди. Бундан ташвишланган мисрликлар уларни яна ҳам кўпроқ қийнай бошладилар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p> ДОЯЛАРГА БЕРИЛГАН БУЙРУҚ </p>
          </div>

          <div className='main_text' >
            <p>
              Кейин фиръавн доя хотинларни чақириб: «Ибронийлар туғаётган вақтда қаранглар: агар чақалоқ қиз бўлса — қолсин, ўғил бўлса — ўлдиринглар», деб амр қилди. Лекин доялар Худодан қўрқар эди. Шунинг учун фиръавнга бўйсунмай, туғилаётган ўғил болаларни ўлдирмадилар.
            </p>

            <p>
              Бир муддатдан сўнг фиръавн уларни ўз ҳузурига чақиртирди: «Нега буйруғимга итоат этмадинглар? Нега ўғил болаларни тирик қолдиряпсизлар?!»
            </p>
            <p>
              «Ё аълоҳазрат! Айб бизда эмас. Иброний хотинлар мисрликларга ўхшаб заиф эмас. Улар доя етиб бормасдан олдин туғиб қўйяпти. Бизнинг қўлимиздан ҳеч нарса келмаяпти», деб жавоб беришди улар.
            </p>
            <p>
              Шу тартибда, Бани Исроил кундан-кунга кўпайиб, катта бир халққа айланди. Оллоҳ таоло доя хотинларга марҳамат қилиб фарзандлар ато этди. Чунки уларнинг қалбида Оллоҳдан қўрқув бор эди.
            </p>
          </div>

          <div className='paragraph_heading'><p> НАВБАТДАГИ ДАСТУР </p>
          </div>

          <div className='main_text' >

            <p className="boldItalic">
              «Фиръавн аҳли сизни ёмон азобларга солиб, ўғилларингизни сўйиб, қизларингизни тирик қолдираётган эди...» (Бақара сураси, 49).
            </p>

            <p>
              Кейин фиръавн бутун Миср халқига: «Ибронийлардан туғилган ҳар бир ўғил чақалоқни Нил дарёсига ташланглар, қиз чақалоқларни тирик қолдиринглар», деб буйруқ берди.
            </p>

            <p className='vitalic'>
              Тасаввур қилинг-а? Ўзингизни уларнинг ўрнига бир қўйиб кўринг-а. Додлаётган оналарни кўз олдингизга келтиринг. Қўлидан ҳеч нарса келмаётган оталарни тушунишга ҳаракат қилинг. Тасаввур қила оласизми? Бир халқ томонидан бошқа бир халққа қарши қилинаётган улкан бир жиноят эди бу.
            </p>
          </div>

          <div className='paragraph_heading'><p>ОЛЛОҲ МУҲАББАТ СОЛГАН ПАЙҒАМБАР ТАВАЛЛУДИ</p>
          </div>

          <div className='main_text' >
            <p className="boldItalic">
              «Уни тобутга сол, (тобутни) эса дарёга ташла. Дарё уни соҳилга отсин. Уни Менинг душманим ва унинг душмани олади», дедик. Ва сенга Ўзимдан муҳаббат солдим. Буни Менинг кўз олдимда етиштирилишинг учун қилдим» (Тоҳо сураси, 20:39).
            </p>
            <p>
              Ана шундай кунларнинг бирида, Лобий қабиласида бир ўғил туғилди. Чақалоқ жуда чиройли эди. Буни кўрган онаси уч ой уни яшириб юрди. Кейин, яшириш имкони қолмагач, қамиш сават олиб ҳамма ёғини қиру қатрон билан сувади ва ўғлини ичига солиб Нил дарёси четида, қамишзорда қолдирди. Чақалоқнинг опаси эса, укамга нима бўлар экан, деб узоқроқдан қараб турди.
            </p>
            <p>
              Бироздан сўнг фиръавннинг қизи ғусл олиш учун дарёга келди. Қараса, қамишлар ичида бир сават турибди. «Бор, анави саватни олиб кел», деди канизларидан бирига. Сават қопқоғини очар экан, кўзи йиғлаб ётган чақалоққа тушди. «Иброний бола экан», деди ичи куйиб.
            </p>
            <p></p>
          </div>

          <div className='main_text' >
            <div className='speech-bubble'
              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}
            >
              <p>
                <sup>3</sup> «(Эй Мусо,) ўшанда опанг келиб: «Сизларга бу болага кафил бўладиган (аёлни) кўрсатайми», деганларини эсла!» (Тоҳо сураси, 20:40а).
              </p>
            </div>
            <p className='' onClick={() => handleSupClick(3)}>
              Шунда чақалоқнинг опаси югуриб келиб: «Болани эмизишга ибронийлардан биронта аёлни чақириб келайми?» деб сўради. <sup>3</sup>
            </p>
            <p>
              «Ҳа, — деди фиръавннинг қизи. — Чақир». Шунда қиз бориб онасини бошлаб келди. «Мана бу гўдакни ол, менга боқиб берасан, — деди фиръавннинг қизи. — Ҳақингни тўлайман».
            </p>
            <p></p>
          </div>

          <div className='main_text' >
            <div className='speech-bubble'

              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}

            >
              <p>
                <sup>4</sup>  Қуръони каримда Оллоҳ таоло марҳамат қиладики: «Сўнг Биз сени кўзлари қувонсин, ғамгин бўлмасин, деб онангнинг олдига қайтардик». Тоҳо сураси, 20:40б.
              </p>
            </div>
            <p className='vitalic' onClick={() => handleSupClick(4)}>
              Шу тариқа, чақалоқ яна онасининг бағрига қайтди.<sup>4</sup>
            </p>
            <p></p>
          </div>

          <article className='nav_arrows'>
            <div className='flex_it space_between'>
              <div style={{ marginLeft: '0px' }}
                onClick={() => navigate(-1)}>
                <div>
                  <span className='left_arrow_span'>&#8592;</span>
                </div>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > орқага қайтиш </span>
                </div>
              </div>
              <div className='central_div'>
                <div>
                  <p>Мусо (а.с.) қиссаси </p>
                </div>
              </div>
              <div style={{ marginRight: '0px' }}
                onClick={() => navigate('/qisas-uzbek/who-am-I')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > Men kimman? </span>
                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>
            </div>
          </article>
         
        </main>
        <aside></aside>
      </div>
    </div >
  )
}

export default Musa;