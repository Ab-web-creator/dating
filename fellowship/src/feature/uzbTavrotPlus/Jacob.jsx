import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'

import Adam_svg from '../../images/adam.svg'
import kamar from '../../images/kamar.png'


const Jacob = () => {

  const navigate = useNavigate();


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleBubbles, setVisibleBubbles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const initialVisibility = {};
    const numberOfCases = 3;

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
            <div className="img_container" style={{ padding: '3px' }}>
              <svg
                fill='rgb(175, 157, 0)'
                version="1.1" viewBox="0 0 1758 1758" xmlns="http://www.w3.org/2000/svg">
                <path d="m733 1659c-3.39-0.668-8.26-6.5-10.3-12.4-1.52-4.33-1.73-6.41-1.02-10.2 2.15-11.5 14.8-31.1 31.4-48.8 7.4-7.85 16.7-15.3 20.5-16.5 1.38-0.428 5.25-2.51 8.61-4.63 3.36-2.12 6.48-3.86 6.92-3.86 1.51 0-3.98 5.2-11 10.4-3.85 2.86-13.4 11.4-21.2 19-11 10.7-14.9 15.2-17.2 19.8-3.64 7.29-3.74 9.6-0.6 14.6 5.8 9.18 7.89 9.28 14.1 0.64 2.55-3.58 5.11-6.5 5.68-6.5 0.575 0 2.29 0.884 3.8 1.96 2.42 1.73 2.71 2.48 2.35 6.25-0.641 6.76-2.02 10.9-5.31 16.1-7.29 11.5-16 16.1-26.6 14zm387-83.5c-3.18-10.6-5.09-16.6-5.69-17.8-0.404-0.825-1.7-3.98-2.88-7-3.41-8.75-9.13-20.7-15.3-32-8.56-15.6-18.4-25.5-27.5-27.5-3.47-0.762-9.42 2.06-13.6 6.48-3.27 3.42-4.48 3.75-4.53 1.24-2.7-7.06-5.81-14.7-6.95-21.8-1.11-6.97-1.07-8.48 0.306-11.8 1.54-3.67 1.69-3.75 6.88-3.72 9.35 0.055 23.4 8.78 44.4 27.7 4.48 4.01 8.8 7.3 9.59 7.3s5.41-4.09 10.2-9.1c9.64-9.96 18.9-17.5 24.8-20.2 2.22-1.01 6.24-1.72 9.72-1.72 5.44 0 6.22 0.287 9.42 3.49 5.8 5.8 6.92 11.1 7.15 33.8 0.175 17.1-2e-4 19.7-1.27 19.2-0.809-0.31-1.66-0.564-1.89-0.564s-0.418-0.661-0.418-1.47c0-3.32-9.39-19-14.3-23.8-3.05-3-8.15-3.71-10.9-1.5-3.4 2.73-8.12 14.5-9.75 24.2-2.55 15.3-2.98 19.2-4.13 37.3-1.09 17.1-2.14 23.1-3.36 19zm-434-118c-5.78-0.738-15.9-1.83-22.5-2.43-20.1-2.29-39.8-5.95-59-10.6-10.2-2.48-22.9-6.6-24.4-7.92-2-1.82-0.657-4.29 3.19-5.9 50 4.3 91 1.36 135-10.1 3.58-0.908 11-3.79 16.5-6.4 43.4-13.2 75.2-34.7 103-65.9 8.17-6.44 38-41.6 48.4-57.1 7.78-11.6 25.8-43.4 27.2-48 0.407-1.38 1.09-2.95 1.51-3.5 14.6-31.5 34.8-72.5 33.4-105-0.351-6.84-1.04-13.2-1.54-14.2-1.57-3.06-11.2-1.43-15.8 2.7-18.2 9.71-53.6 16.9-69.2 7.38-18.5-14.9-21.2-39.7-21.4-58.8-1.88-23.9-1.75-93.7 24.3-114 1.67-0.703 8.8-1.19 17.9-1.23 20-0.0279 53.8 18.2 60.3 39 2.74 2.95 8.45 17.8 10.6 18.9 18.6-15.6 79.4-49.3 81.4-81.5 0-1.21-1.19-4.24-2.65-6.73-3.38-5.76-7.93-20.9-9.97-33.1-2.11-12.7-2.63-82.4-0.692-94.5 2.21-13.8 7.58-28.7 18-49.9 8.34-16.9 12.3-20.6 21.9-20.6 68.6 26.9 79.1 110 48.9 198-2.61 5-2.01 8.99 2 13.4 18.9 17.7 73.8 18.6 88.8 14 49.6-11.8 66.9-40.7 98.7-74.4 2.6-2.76 8.98-16.8 8.98-19.8 0-2.93-7.54-10.3-11.6-11.3-3.55-0.891-26.9 0.278-31.3 1.57-4.36 1.28-8.04-0.359-10-4.46-5.57-20.1-28.2-94.5-9.55-102 2.21-0.84 5.6-2.51 7.52-3.72 4.91-3.08 16.1-4.54 38.4-5.02 25.3-0.544 32.5 0.471 41.8 5.86 28.8 15.3 39.6 40 44.2 66.9 2.18 12.9 2.15 26.9-0.127 54.6-0.676 8.24 0.38 11 6.8 17.7 18.5 21.4 41.3 35.4 59.4 46.6 5.4 3.32 8.83 4.19 16.5 4.19 14.1 0 22.7-2.51 28-6.08 26.4-22.1 28-31.5 28.7-64.3 0.266-13.2 0.024-23.9-0.61-27-8.05-38.7-19.1-62.7-38.3-94.1-14.1-23-35.1-49.7-56.1-71.4-8.28-8.56-6.55-8.19 4.39 0.926 27.7 20.4 57 42.4 82 60.9 2.74 2.01 3.12 2.64 1.75 2.9-1.83 0.619-1.75 2.34-2.86 3.39-1.43 0.475 2.14 13.4 6.16 22.4 28.4 61.8 67.9 115 54.4 184-14 46.8-51.4 76.2-91.4 67.6-27.8-8.54-56.1-24-78.6-43.8-11.9-10.6-36.4-39.2-36.4-42.4 0-0.762-1.12-2.12-2.5-3.02-2.32-1.52-2.68-1.52-5.09 0.0585-1.42 0.933-3.53 4.02-4.69 6.87-22 45.4-68.7 109-119 116-66.5 13.1-104-17.8-135-46.7-6.86-6.61-11.7-9.26-14.7-8.11-18.9 26.5-36.4 47.8-61 75.7-13.2 11.9-27.9 25.3-42.9 35.2-0.545 0-1.85 0.949-2.9 2.11-1.76 1.95-1.9 3.9-1.9 25.2 2.34 92.4-28.1 179-70.2 252-50.3 60.3-114 79.5-178 80.2-18.7 0.194-30.9-0.144-38-1.06zm390-572c12.8-5.6 26.4-42 23.5-55.1-4.82-12.3-17.2-28.8-30.2-29.1-19.6 9.82-35 56-25 72.1 4.64 7.32 18.9 21.4 21.6 21.4 1.68 0 4.4-2.54 10.1-9.43zm-641 536c-6.01-3.12-10.9-8.04-10.9-11 5.13-20.2 12.4-41.8 18.1-59.6 2.59-8.24 5.39-10.7 11.9-10.6 14.3 2 42 10.8 46.9 25.6-3.08 27.8-8.68 44.7-17.9 69.3-1.23 3.3-5.27 7.25-7.34 7.18-13.7-6.08-27.9-14.2-40.7-20.9zm923 6.77c-5.19-1.81-9.06-6.42-11.6-13.8-2.11-6.2-2.24-7.52-1.26-13.2 2.02-11.7 8.79-23.6 26.5-46.4 4.62-5.94 13-14.8 18.9-19.9 10.5-9.09 11.4-9.79 14.5-10.6 1.66-0.46 6.16-2.91 10-5.45 3.84-2.54 8.1-5.05 9.48-5.58 2.44-0.949 2.43-0.895-0.5 2.23-1.65 1.76-7.05 6.26-12 10-13.4 10.1-42.4 39.2-45.8 45.8-5.13 10.1-4.36 16 3.19 24 3.8 4.07 6.82 3.85 9.59-0.701 6.98-11.5 9.1-12.9 14.3-9.59 5.43 3.49 1.32 20.9-7.55 32-8.06 10-18.7 14.4-27.7 11.2zm-1168-204c-21.5-27.4-35.3-64.4-45.9-99.6-13.4-118-18.7-215 44.2-303 47.1-59.8 117-83.4 180-122 25-15.5 31.4-20.6 55.8-44.3 8.15-7.9 15.5-14.4 16.2-14.4 2.35 0 1.64 3.32-2.41 11.1-15.5 30.4-33.3 62.4-64.7 79.1-2.2 1.12-9.75 5.68-16.8 10.2-69.5 38.4-136 77.8-170 145-34.6 74.5-26.9 132-13 212 3.09 9.74 8.6 19 13.1 28.5 53.1 97.7 179 122 266 72.2 198-118 246-364 349-522 11.5-16.8 11.4-16.7 17.9-20 12.6-7.94 25.2-0.226 35.1-2.42 5.49-1.26 6.67-0.471 9.26 6.21 18.1 33.8 19.8 74.5 30.8 109 3.54 15-9.57 12.4-20.1 16-53.5 10.7-61.7 40.9-85.4 74.5-91.3 114-117 319-257 395-24.6 15.4-49.5 32.2-78.4 40.7-104 36.2-205 7.52-264-69.4zm1255-54.6c-9.07-4.54-38.3-13.1-39.9-18.8 0.89-17.1 8.47-81 18.7-73.8 12.4 12.5 36.3 13.6 45 28.6 1.77 3.41 1.9 9.22 0.434 19.2-1.28 8.73-4.69 24.7-6.46 30.3-0.702 2.2-1.78 5.88-2.4 8.18-1.1 4.12-5.86 9.32-8.52 9.32-0.705 0-3.81-1.35-6.9-3zm72.8-13.9c-10.4-5.85-24.3-6.61-33.4-13.1l-4.23-3.07 0.61-8.68c6.69-9.97-2.34-60.8 6.21-64.6 2.13-0.818 11.5 3.6 25.2 11.9 7.82 6.52 21.6 7.81 27.4 16.3 1.18 1.99 1.71 5.46 1.83 11.8-0.602 15.4-2.08 31.6-8.09 45.1l-2.84 6.34-4.29-0.062c-2.36-0.034-6.09-0.877-8.29-1.87zm-518-513c-1.6-3.1-1.95-23-0.521-29.6 0.479-2.2 1.14-13.2 1.48-24.4 0.333-11.2 1.04-21.2 1.57-22.2 1.13-2.11 3.12-1.62 7.26 1.79 10.6 6.46 29.3 13.5 36.5 23.3 0.712 1.17 2.73 4.91 4.49 8.32l3.19 6.19 0.748-6.5c0.412-3.58 0.69-10.8 0.618-16-0.295-21.6 0.211-23.2 5.87-19.2 8.13 4.97 16.5 9.11 24.3 14.7 17.1 12.3 18.5 14.5 20.5 31.3 2.83 23.8 3.12 29 2.39 43-0.787 14.9-1.34 18.2-3.05 18.2-0.566 0-4.92-2.58-9.68-5.74-13.1-8.04-23.6-14.7-34.8-23.3l-5.16-3.92-1.51 2.31c-0.967 1.48-1.68 5.7-1.98 11.7-0.755 15.2-2.68 22.9-5.7 22.9-13.3-11.3-37.6-18.9-46.4-32.9zm-847-35c-6.79-2.07-9.17-4.17-12.2-10.8-2.59-5.71-2.9-7.3-2.35-12.2 0.926-8.18 2.76-11.7 17.2-32.5 3.86-5.56 26.6-28 34.3-33.9 4.12-3.14 9.08-6.22 11-6.84 1.92-0.623 5.98-2.52 9-4.21 13.7-7.65 17.2-8.46 10.9-2.53-3.56 3.35-13.2 9.87-14.6 9.87-0.921 0-8.08 5.68-16.3 12.9-3.02 2.67-7.75 6.63-10.5 8.8-13.3 10.5-22.5 22.5-22.5 29.5-0.0108 2.96 4.92 9.98 9.28 13.2 3.29 2.44 4.97 1.75 8.53-3.47 1.27-1.87 3.63-4.85 5.23-6.61 2.71-2.98 3.15-3.13 6.18-2.1 5.53 1.86 5.94 2.56 5.19 8.72-2.42 20-22.7 36.9-38.4 32.2zm545-54c-5.8-4.78-18.1-13-19.4-13-0.675 0-2.41 2.02-3.86 4.49-2.43 4.14-6.75 7.51-9.66 7.51-1.17 0-19.9-14.7-19.9-15.7 0-0.251 2.47-3.51 5.48-7.24l5.48-6.78 6.27 5.81c3.45 3.2 8.52 6.98 11.3 8.41l4.99 2.6 3.01-3.33c1.66-1.83 4.41-5.1 6.12-7.25 2.53-3.2 3.36-3.69 4.5-2.7 1.48 1.3 10.6 7.45 17.6 11.9 4.94 3.15 5.21 4.82 1.65 10.2-2.15 3.25-7.78 7.98-9.51 7.98-0.222 0-2.02-1.33-4-2.97zm-227-17.6c-0.761-0.761 1.54-7.06 4.15-11.4 3.17-5.24 13.6-13.5 40.8-32.3 16.4-11.3 41.2-27.7 41.9-27.7 0.836 0-0.0766 4.6-1.69 8.5-0.681 1.65-1.29 3.22-1.35 3.5-0.477 2.17-3.76 4.82-15.1 12.1-17.2 11.1-26.9 17.5-34.1 22.3-3.25 2.17-9.7 6.44-14.3 9.5-4.63 3.06-11 7.91-14.1 10.8-3.13 2.87-5.94 4.97-6.26 4.66zm387-56.4c-7.38-2.17-15.7-7.3-20.3-12.5-3.3-3.77-9.12-14.8-9.12-17.2-2e-3 -2.83-2.07-0.892-5.09 4.77-5 9.39-13.9 18.5-20.5 20.9-8.34 3.12-15.3 2.76-22.7-1.16-9.25-4.93-12.4-10.2-13.2-21.9-0.158-2.42-0.346-4.74-0.417-5.15-0.31-1.8-5.64-0.485-10.4 2.58-18.8 12-38.7 19.4-63.2 23.6-23.6 3.98-30.3 4.56-52 4.59-19.3 0.0259-23.3-0.253-33-2.31-12.9-2.76-19.1-5.19-26.1-10.3-8.7-6.35-13.4-13.4-17-25.4-2.59-8.65-2.37-27.1 0.468-38.8 1.18-4.86 2.14-9.91 2.14-11.2 0-1.32 1.14-5.8 2.54-9.96s2.27-7.99 1.94-8.52-1.68-0.964-3.01-0.964c-1.73 0-2.25 0.422-1.83 1.5 0.415 1.08-0.106 1.5-1.86 1.5-3.49 0-3.71 0.566-2.16 5.71 2.12 7.04 1.5 8.56-0.803 1.96l-2.03-5.83-2.88 2.76c-4.13 3.96-16.4 22.8-24.4 37.4-16.3 29.9-31.4 45.5-43.6 45.4-9.61-0.145-14.6-2.97-19.9-11.3-8.46-13.2-7.92-35.7 1.43-59.6 2.56-6.56 5.54-13.5 6.63-15.4l1.97-3.5-2.78 3.08c-1.53 1.69-6.6 7.94-11.3 13.9-14.5 18.4-30 31.5-40.7 34.5-2.09 0.58-7.87 1.06-12.9 1.06-8.25 5e-3 -9.45-0.247-13.5-2.84-5.95-3.82-7.51-5.74-10.4-12.8-3.25-7.99-3.9-14-2.66-24.6 1.46-12.5 5.24-24.5 12.4-39.4 3.74-7.79 9.64-16.8 10.5-15.9 0.31 0.31-0.106 1.35-0.925 2.32-4.6 5.42-10.5 19.4-14.3 33.7-3.02 11.4-3.07 13.8-0.386 20.8 4.21 11 11.7 16.7 22.1 16.7 19.7 0 36.3-10 57.8-34.9 23.4-27.1 27.2-30.9 38.2-39.2 7.2-5.35 10.2-6.84 17-8.32 2.41-0.531 2.63-0.938 2.15-3.92-0.699-4.31 2.04-14.9 5.34-20.6 9.04-15.8 18.5-16.9 33.4-3.96 5.8 5.03 15.2 16.7 18.2 22.4 1.72 3.4 0.856 7.62-3.1 15.1-4.54 8.58-8.81 10.4-24.3 10.4-8.54 0-10.9 0.293-10.9 1.37 0 0.756 1.83 5.59 4.06 10.8 2.23 5.16 4.49 10.4 5.02 11.7 0.945 2.3 1.04 2.26 6.69-2.91 8.45-7.73 15.1-9.93 18.6-6.13 1.91 2.11 1.26 5.34-3.36 16.7-6.35 15.6-8.42 25-8.44 38.5-0.0161 10.8 0.305 13.3 2.39 18.8 3.46 9.08 9.42 15.3 19.4 20.2 13.7 6.73 31.8 10 55 10.1 20.1 0.0668 50.6-2.51 62.7-5.29 12.2-2.81 32.3-9.42 39.3-12.9 7.17-3.58 19.5-11.3 25.6-16.1 3.19-2.49 4.21-1.24 2.97 3.67-0.554 2.2-1.46 5.8-2.01 8-2.89 11.5 6.53 21.2 21.2 21.7 8.09 0.321 14.6-2.69 20.1-9.24l3.75-4.5 1.14-15.5c0.947-12.8 0.866-19.5-0.466-38.4-0.886-12.6-1.82-23.2-2.08-23.6s-4.87 0.268-10.2 1.53c-23.7 5.58-56.8 8.95-79.8 8.12-9.35-0.338-18.8-0.87-21-1.18-4.29-0.61-3.08-1.29-35.5 19.9-16.3 10.7-37.5 25.8-41.5 29.6-4.04 3.83-7.47 6.03-9.43 6.03-1.97 0-0.969-3.46 2.75-9.5 4.62-7.52 12.8-13.9 54.2-42.1 9.32-6.35 11.5-8.42 8.83-8.42-3.04-2e-3 -13.9-6.1-17.2-9.66-5.41-5.82-9.61-15-10.7-23.5-0.535-4.04-1.16-7.9-1.39-8.58-0.684-2-3.3-0.338-5.63 3.58-5.57 9.36-18.6 25.3-24.4 30-5.37 4.31-7.75 5.45-15.6 7.51-5.12 1.34-12.2 2.54-15.8 2.66-14.9 0.523-15.8-0.619-3-3.82 16.4-4.1 29.4-11.6 43.3-25.1 13.6-13.1 16-20.4 17.8-52.4 0.869-15.9 0.845-31.3-0.103-65-0.683-24.3-1.17-45.9-1.08-47.9 0.0906-2.06-0.187-3.75-0.618-3.75s-9.21 5.51-19.5 12.2-22.3 14.5-26.7 17.2-8 5.62-8.02 6.37c-0.0199 0.754 4.62 7.73 10.3 15.5 12 16.3 13.5 18.8 20.4 31.6 10.7 20.1 13.9 47.1 8.01 67.7-1.15 3.99-2.78 7.81-3.62 8.5-1.29 1.05-1.44 0.979-0.91-0.435 5.4-14.4 5.36-35.9-0.0894-46.5-3.91-7.63-22.6-35.1-39-57.2l-8.33-11.2-3.17 2.4c-1.74 1.32-5.64 4.1-8.67 6.18-3.02 2.08-7.3 5.48-9.5 7.55-4.6 4.33-8.11 6.35-9.52 5.48-1.53-0.948-1.23-1.86 2.84-8.64 2.98-4.95 5.78-7.82 12.7-13 4.9-3.68 9.05-7.11 9.22-7.61 0.17-0.509-2.13-4.47-5.12-8.81-14-20.3-24.1-38.4-27-48.3-2.66-8.96-2.02-35.1 0.868-35.1 1.24 0 3.95 5.5 4.91 10 0.539 2.51 8.75 16.1 12.8 21.2 2 2.52 2.07 3.12 0.969 7.91-1.08 4.69-0.995 5.57 0.918 9.24 3.59 6.88 23.3 34.6 24.7 34.6 0.692 9e-3 5.19-2.8 10-6.23s18.1-12.5 29.6-20.2l20.9-14-1.41-33.1 3.95-4.99c2.17-2.75 4.5-6.7 5.18-8.79 1.55-4.77 3.53-4.28 3.6 0.886 0.111 8.29 1.72 36.4 2.09 36.4 0.324 0 14.2-9 34.9-22.6 10.8-7.12 18.3-12.6 24.1-17.9 3.37-3.01 6.41-5.2 6.75-4.85 3.84 3.84-7.47 22.9-16.2 27.4-3.35 1.7-8.82 5.02-17.2 10.4-7.48 4.82-15.8 10.1-25.8 16.4l-7.01 4.4 0.41 16.6c0.225 9.13 0.629 40.2 0.896 69.1 0.505 54.5 1.29 66.2 5.25 78.8 3.28 10.4 14 17.9 32.6 22.8l9.81 2.58 7.69-5.27c4.23-2.9 14.7-9.87 23.2-15.5 27.5-18.1 40.4-27.2 46.3-32.5 4.1-3.66 6.13-4.87 6.88-4.12 1.76 1.76 0.0594 7.35-4.26 14-4.63 7.09-9.01 10.9-20.4 17.7-4.4 2.63-10.5 6.41-13.6 8.41-3.1 2-8.5 5.4-12 7.56-12.5 7.68-16.9 10.8-16.4 11.6 0.27 0.437 9.38 0.859 20.2 0.937 19.6 0.142 47.8-2.22 61.1-5.13l5.36-1.16-0.588-4.07c-3.68-25.5-5.69-66.9-3.66-75.6 0.697-3 3.51-9.64 6.24-14.8 4.26-7.96 5.19-9.12 6.49-8.04 1.6 1.33 1.55 2.96-0.633 20.8-0.7 5.72-0.726 13.9-0.0807 25 0.528 9.08 1.24 21.7 1.58 28 0.656 12.2 1.99 24.9 2.7 25.6 0.725 0.725 20.7-5.53 27.1-8.51 3.37-1.56 8.04-4.71 10.4-7 2.35-2.3 4.63-3.95 5.09-3.67s0.358 2.77-0.21 5.54c-1.3 6.35-0.176 9.77 4.17 12.7 3.59 2.42 12.1 3.88 18.1 3.09 6.06-0.813 14.5-5.55 20.5-11.5 3.08-3.06 5.61-5.94 5.61-6.39 0-0.455 0.496-0.827 1.1-0.827 0.736 0 0.904 1.64 0.503 4.93-0.526 4.32-0.282 5.31 1.99 8 2.82 3.35 5.32 3.78 11.7 2.01 5.16-1.43 9.91-5.86 13.3-12.4 3.05-5.84 3.16-5.93 5.17-4.66 0.987 0.626 1.04 1.48 0.209 3.66-1.39 3.65-0.48 7.7 2.3 10.3 3.34 3.1 12 5.58 16.8 4.81 8.79-1.4 18.2-8.78 19.6-15.4 1.31-6.18 0.822-47.6-0.983-83.2-0.932-18.4-1.97-43.8-2.31-56.5-0.338-12.6-0.907-27.7-1.26-33.5-1.03-16.7 0.0553-23.5 5.46-34.2 4.06-8.07 4.77-8.98 5.88-7.47 0.693 0.948 1.55 3.85 1.9 6.46 0.349 2.6 1.53 7.66 2.62 11.2 2.58 8.44 2.51 12-0.295 16.1l-2.29 3.39 0.751 26.5c0.413 14.6 0.754 37.5 0.758 51 0 13.5 0.465 31.2 1.02 39.5 2.18 32.2 1.16 50-3.53 61.9-4.94 12.6-15.7 25.1-26.7 31.1-9.47 5.15-21 3.03-27.4-5.06-3.43-4.3-6.02-4.46-11.6-0.686-4.79 3.23-9.91 5.63-14.1 6.61-2.5 0.588-3.44 0.088-7.23-3.88-2.4-2.5-4.95-4.55-5.67-4.55s-4.89 2.26-9.27 5.03c-4.38 2.77-9.73 5.5-11.9 6.09-4 1.08-10.5 0.587-16.3-1.23-3.97-1.25-9.3-7.15-9.3-10.3 0-5.4-6.62-5.92-16.3-1.28-2.85 1.37-7.29 3.39-9.85 4.49-4.54 1.96-4.66 2.11-4.27 5.85 0.823 7.94 2.61 31.3 3.43 44.9 0.465 7.72 1.59 16.9 2.5 20.5 4.93 19.2 18.8 29.9 41 31.6 8.82 0.669 25.5-1.22 25.5-2.9 0-0.568-1.01-2.01-2.25-3.2-5.58-5.38-14.6-17.4-18.1-24.3-1.36-2.62-1.36-3.21-0.0526-5.08 0.814-1.16 2.12-3.92 2.89-6.12 2.88-8.15 12.3-19.5 21.9-26.2 13.2-9.26 23.1-10.2 37-3.5 7.41 3.57 14.6 9.59 14.6 12.2 0 3.63-6.98 3.49-14.3-0.287-1.55-0.796-6.65-2.07-11.3-2.83-7.8-1.26-9.14-1.22-15.8 0.493-12.7 3.24-21.5 8.8-21.5 13.5 0 6.56 17.4 29.4 25.5 33.5 7.56 3.78 20.2 3.52 40.5-0.817 8.52-1.82 16.3-3.53 17.2-3.79 4.62-1.31 2.31 7.89-3.34 13.3-2.85 2.72-4.48 3.33-11.3 4.27-12.7 1.73-33.8 6.69-62 14.5-23 6.41-36.4 7.7-47.1 4.54zm-352-42.4c7.93-4.65 15.3-14.1 26.7-34.3 7.22-12.7 12.3-20.4 19.4-29.4l5.2-6.55-1.7-4.45c-1.88-4.92-10.6-20.7-12.6-22.6-0.669-0.669-2.8-1.51-4.74-1.88-5.23-0.981-20.7 1.2-25.8 3.63-7.36 3.52-17.5 11.6-24.1 19.2-3.44 3.96-4.82 5.87-3.06 4.26 4.2-3.85 4.11-1.57-0.174 4.3-12.6 17.3-17.9 39.9-12.7 54.6 2.33 6.72 8.51 13.3 14.3 15.3 5.3 1.79 14.2 0.788 19.2-2.17zm56.3-117 2.76-2.37-4.18-4.99c-7.54-9-19.3-15.3-22.1-11.9-1.45 1.74 0.259 13.8 2.44 17.3 1.54 2.45 6.84 4.11 13.6 4.26 3.59 0.0791 5.34-0.452 7.45-2.27zm806 123c-10.6-4.72-14.5-19.3-8.52-31.7 5.1-10.5 9.89-18 17.6-27.4 13-15.9 24.6-26.4 34-30.6 2.46-1.09 5.93-3.09 7.71-4.45 3.62-2.76 8.37-4.83 8.37-3.65 0 1.14-6.67 7.19-13.2 12-8.49 6.23-34.5 31.9-37.5 37-3.95 6.75-4.04 11.7-0.284 17.3 5.14 7.72 6.58 7.32 14.3-4 2.57-3.75 3-3.99 5.47-3.06 4.42 1.68 5.25 2.91 5.22 7.78-0.039 7.55-5.96 19.6-12.5 25.4-3.64 3.23-11.4 6.73-14.7 6.65-1.81-0.0447-4.48-0.613-5.94-1.26zm-328-1.29c-0.347-0.347-0.085-1.58 0.583-2.75 1.73-3.02 1.38-25.9-1.36-87.6-0.548-12.4-1-25.4-1.01-29-0.01-3.58-0.156-8.08-0.329-10-0.173-1.92-0.63-16.8-1.02-33-0.386-16.2-1.08-38.3-1.55-49-0.471-10.8-0.467-21.8 0.01-24.8 0.887-5.45 8.53-22.2 10.1-22.2 1.2 0 2.85 4.49 2.85 7.76 0 1.45 1.15 6.41 2.56 11 2.79 9.15 2.64 12.4-0.788 16.8-2.09 2.65-2.09 2.72-1.03 48.8 0.585 25.4 1.05 47.3 1.03 48.6-0.018 1.38 0.732 19.8 1.67 41 1.74 39.4 1.5 53.6-1.08 65-2.68 11.9-3.39 13.9-5.98 17-2.59 3.08-3.53 3.56-4.68 2.41zm-146-134c1.1-3.14 2.64-6.93 3.41-8.42 1.28-2.48 14.3-12.5 32.9-25.4 3.98-2.75 9.66-6.69 12.6-8.76 16.1-11.3 37.1-24.8 37.7-24.3 0.332 0.332-0.392 3.69-1.61 7.47l-2.21 6.86-13.7 8.93c-7.55 4.91-17.2 11.1-21.4 13.9-4.2 2.71-12.1 8.06-17.5 11.9-5.42 3.82-12.1 8.5-14.9 10.4s-7.4 5.64-10.3 8.3c-2.93 2.66-5.71 4.84-6.17 4.84s0.0591-2.57 1.16-5.71zm-449-6.26c-3.26-1.34-6.39-5.96-6.39-9.46 0-12.9 11.9-34.5 27.1-49.1 6.24-5.99 6.25-4.69 0.0157 3.39-10.6 13.7-14.5 19.4-17.2 24.7-3.73 7.46-4.32 14.2-1.51 17.3 2.7 2.99 3.97 2.64 6.97-1.9 2.92-4.42 3.73-4.74 6.05-2.43 1.99 1.99 2.02 7.66 0.0545 11.5-2.38 4.6-10.6 7.85-15.1 6zm399-36c-3.61-2.85-3.56-6.28 0.229-14.6 3.28-7.24 13.1-23.7 13.7-23 0.225 0.225-2.09 4.88-5.15 10.4-7.73 13.8-7.32 17.2 2.23 18 5.66 0.487 11.2-2.38 11.2-5.8 0-4.3 3.24-14.5 5.58-17.6 1.33-1.75 2.42-3.69 2.42-4.31 0-0.619 0.396-0.881 0.879-0.582 0.489 0.302 0.283 3.32-0.465 6.81-2.06 9.62-1.82 13.5 1.04 16.3 1.87 1.87 3.51 2.45 6.88 2.45 6.39 0 7.33-1.57 5.3-8.82-0.896-3.19-1.63-6.96-1.63-8.37 0-4.35 6.58-14.6 7.11-11.1 0.0627 0.412 0.268 2.09 0.457 3.72s0.802 5.93 1.36 9.54c1.38 8.9 0.107 13-5.97 19.4l-4.84 5.08h-6.46c-4.85 0-6.96-0.454-8.48-1.83-2.26-2.05-3.77-1.57-9.98 3.14-4.68 3.55-11.8 4.11-15.5 1.22zm-64.2-16c-0.322-0.521 1.38-4.02 3.79-7.78 4.63-7.22 10.2-11.7 40.4-32.9 8.19-5.73 64.6-43.7 82.8-55.7 8.25-5.46 17-11.3 19.5-13 2.48-1.68 7.72-5.25 11.6-7.93s9.88-7.34 13.2-10.4c8.39-7.59 10.6-5.57 5.61 5.06-3.91 8.26-9.6 13.9-21.3 21.1-5.88 3.61-13.4 8.34-16.7 10.5-3.3 2.16-8.02 5.16-10.5 6.66-5.3 3.22-19 12.3-38.5 25.4-7.7 5.2-17.8 11.9-22.5 14.8-21.6 13.5-51.7 34.7-58.2 40.7-4.49 4.2-7.99 5.51-9.26 3.45zm-42.3-22.7c-0.54-1.03-1.29-3.89-1.66-6.37-1.27-8.43-4.66-21.3-6.65-25.2-1.11-2.17-3.13-4.33-4.57-4.88-2.3-0.874-2.52-1.38-2-4.58 0.611-3.76 3.13-7.35 5.17-7.35 2.66 0 4.96 4.58 7.65 15.3 1.56 6.19 2.84 12 2.84 13s0.624 1.75 1.38 1.75c0.861 0 1.98-2.41 2.99-6.43 4.42-17.6 11.1-30.6 15.7-30.6 3.93 0 6.36 7.5 3.92 12.1-1.27 2.36-2.74 2.45-5.12 0.296-3.38-3.06-5.83 0.553-10.9 16-1.79 5.49-3.5 13.3-3.88 17.7-0.445 5.18-1.23 8.43-2.29 9.49-1.49 1.49-1.69 1.47-2.6-0.251z" />
              </svg>

            </div>
            <div className='title_of_chapter'>
              <p> Яъқуб алайҳис-салом  </p>
              <p>қиссаси</p>
            </div>
          </div>

          <div className='decor_line'>
            {/* <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p> */}
          </div>



          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}


            >
              <p>
                <sup>1</sup> «Ахёр» сўзи араб тилида «жуда ҳам яхши» де­ган маъ­нони бе­ради. Оят­да исм­ла­ри зикр қи­лин­ган пай­ғам­бар­лар – ҳазрати Иб­ро­ҳим, ҳаз­­ра­ти Исҳоқ ва Яъқуб – Оллоҳ танлаб ол­ган ахёр­лар эди.
              </p>
            </div>
            <p className='boldItalic' onClick={() => handleSupClick(1)}>
              «Қўллар ва кўзлар соҳиблари бўлган бандаларимиз Иброҳим, Исҳоқ ва Яъқубларни эсла. Албатта, Биз уларни холис бир хислат билан ажратдик. У (охират) диёрини эслаш эди. Албатта, улар Бизнинг ҳузуримизда танланган ахёрлардандир»<sup>1</sup>  (Қуръони карим, 38:45-47).
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ЙЎЛГА ЧИҚИШ
            </p>
          </div>

          <div className='main_text'>
            <p>
              Рафиқа Биби Ийсу (р.а.) нинг ниятидан хабардор эди. Шунга Яъқуб (а.с.) ни чақириб деди: «Аканг сени ўлдирмоқчи.
              Сен энди Ҳоронга, тоғанг Лобонникига кетмасанг бўлмайди.
              То аканг жаҳлидан тушгунча, ўша ерда тур. Қилган ишинг эсидан чиқсин, мен ўзим одам юбориб сени чақиртираман.
              Тағин бир кунда икковингиздан ҳам жудо бўлмай!»

            </p>
            <p>
              Кейин ҳазрати Исҳоқнинг олдига бориб: «Бу ҳитий келинлар мени жонимдан безор қилди. Агар Яъқуб ҳам ҳитийлардан хотин олса, менинг ўлганим яхши!» деди.
            </p>
            <p>
              Исҳоқ (а.с.) ўғли Яъқубни олдига чақирдилар ва уни дуо қилиб: «Мен сенинг канъонликлардан уйланишингни хоҳламайман, — дедилар.  — Шу бугун Байнул-наҳрайнга, бобонг Батуийлнинг уйига қараб йўлга туш. Бориб тоғанг Лобоннинг қизларидан бирига уйлан.
              Оллоҳ таоло сени баракаласин, кўп фарзандлар ато қилсин! Наслинг кўпайиб, халқлар жамоасига айлан!
              Сен ва сенинг авлодларинг буванг Иброҳимга ваъда қилинган баракага эга бўлиб, Канъон юртини, биз мусофир бўлиб яшаётган мана шу юртни қўлга киритгайсизлар!»
            </p>
            <p>
              Шу гаплар билан Исҳоқ пайғамбар уни Байнул-наҳрайнга, тоғаси Лобоннинг олдига жўнатди.
            </p>

            <p>
              Отасининг канъонлик келинлардан безор эканини, Яъқубни канъонликларга уйланма деб дуо билан Байнул-наҳрайнга жўнатганини кўриб, Ийсу (р.а.) ҳам амакиси Исмоил (а.с.) нинг уруғига борди ва Набоютнинг синглиси, Исмоил (а.с.) нинг қизи Маҳолатни хотинликка олди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ЯЪҚУБ (А.С.) НИНГ ТУШИ
            </p>
          </div>


          <div className='main_text'>
            <p>
              Шу билан Яъқуб (а.с.), Беър-Шебадан Ҳоронга — тоғасиникига қараб йўлга тушдилар.
              Кун ботарда бир жойда тўхтаб, тунни ўша ерда ўтказмоқчи бўлдилар. Тошларнинг бирига бош қўйиб, уйқуга кетдилар.
            </p>
            <p>
              Уйқусида туш кўрибдилар. Тушида бир зина турган эмиш. Зинанинг бир учи ерда, бир учи арши-аълода экан. Худонинг фаришталари зинадан тушиб-чиқиб ётган эмиш.
            </p>

            <p>
              Кейин Оллоҳ таоло аршдан Яъқуб (а.с.) га дебди: «Мен бобонг Иброҳим ва отанг Исҳоқ билан аҳд қилган Худоман. Сен ётган мана шу ерни Мен сенга ва сенинг авлодингга бераман.
              Сенинг наслинг ер юзидаги қумлардай кўп бўлади. Ғарбу шарққа, шимолу жанубга ёйилиб кетасизлар. Ер юзидаги ҳамма қавмлар сен ва сенинг зурриятинг орқали баракага ворис бўлади.

            </p>
            <p>
              Мен сен билан биргаман. Қаергаки борсанг сени ҳимоя қиламан. Вақт-соати келиб шу юртга қайтиб келасан. Мен сени ташлаб кетмайман. Сен билан бирга бўламан, айтган ҳамма ваъдаларимни амалга ошираман», дейди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ЯЪҚУБ (А.С.) ГА БЕРИЛГАН ВАЪДАЛАР
            </p>
          </div>

          <div className='main_text'>
            <p className='vitalic'>
              Шундай қилиб Оллоҳ азза ва жалл Яъқуб (а.с.) га ҳам уч нарсани ваъда берди:
            </p>
            <p className='vitalic'>
              ~ авлодлари кўп бўлишини,
            </p>
          </div>

          <div className='main_text'>
            <p className='vitalic'>
              ~ ерни унинг авлодлари эгаллашини
            </p>
          </div>

          <div className='main_text'>
            <p className='vitalic'>
              ~ ҳамда унинг зуррияти орқали ер юзидаги ҳамма халқларга барака улашишни ваъда қилди.
            </p>

            <p className='vitalic'>
              Агар эсингизда бўлса, Иброҳим пайғамбарга ҳам, Исҳоқ (а.с.) га ҳам айни шу гаплар ваъда қилиб айтилган эди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ЯЪҚУБ (А.С.) НИНГ НАЗР ОЛГАНИ
            </p>
          </div>

          <div className='main_text'>
            <p>
              Яъқуб (а.с.) уйқудан уйғониб: «Бу ер муқаддас жой экан! Мен билмабман», дедилар ҳайрон бўлиб.
              Кейин юракларига қўрқув тушиб: «Бу ер ҳақиқатан арши аълога олиб чиқадиган дарвоза экан!» дедилар.
            </p>
            <p>
              Саҳар пайти эди. Яъқуб (а.с.) туриб, бошини қўйган тошни турғиздилар-да, устидан зайтун ёғи қуйиб Оллоҳ таолога бағишладилар
              ва ўша жойга Байтил деб от қўйдилар (илгариги оти Луз эди.)
            </p>
            <p>
              Кейин: «Агар Худо мен билан бирга бўлиб, йўлда мени қўриқласа, қорнимга нон, устимга кийим бериб турса, отам уйига тинчлик билан олиб келса, мен фақат Унга хизмат қиламан. Мен тош қўйган ер Байтуллоҳ бўлади. Кейин Оллоҳ менга нимаики ато қилса, ўндан бирини назр қиламан», дедилар.
            </p>

            <p className="vitalic">
              Оллоҳ таоло Яъқуб пайғамбарга туш орқали ваҳий нозил қилди. Бир тасаввур қилинг: қани эди агар ердан Оллоҳ таоло турган жойга чиқиш учун зинапоя қўйилган бўлса! Тепага чиқиб, кўп нарсани кўриб олар эдик, кўп нарсани тушунардик, шундай эмасми?! Балки жаннатни ҳам кўрармидик, нима деб ўйлайсиз?
            </p>
            <p></p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ТОҒАСИНИНГ УЙИДА
            </p>
          </div>

          <div className='main_text'>
            <p>
              Яъқуб (а.с.) сафарини давом эттириб, ниҳоят Ҳорон ерига етиб келдилар. Қарасалар бир қудуқ турибди.
              Қудуқнинг бўйида уч сурув қўй ётган, қудуқнинг оғзига эса катта бир тош қўйилган эди. (Тош фақат ҳамма одамлар қўйларини ҳайдаб келгандан сўнг олинар, қўйлар сув ичиб бўлгач, қудуқнинг оғзини яна ўша тош билан ёпиб қўяр эдилар.)
            </p>

            <p>
              —Биродарлар, қаердансизлар? — деб сўрадилар ҳазрати Яъқуб чўпонлардан.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Ҳорондан, — деб жавоб беришди улар.
            </p>
          </div>
          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}


            >
              <p>
                <sup>2</sup>    Ноҳур — Иброҳим (а.с.) нинг туғишган акаси эди.
              </p>
            </div>
            <p onClick={() => handleSupClick(2)}>
              —Лобон деган одамни танийсизларми? Ноҳур<sup>2</sup>  деганнинг невараси.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Ҳа, таниймиз.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Яхши юрибдими?
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Ҳа, яхши, — деб жавоб берди чўпонлардан бири. — Ана, қизи Роҳийла қўйларини ҳайдаб келяпти.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Кечгача ҳали вақтли-ку, нега қўйларингизни суғориб, ўтлатишга олиб кетмайсизлар?
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Сурувларнинг ҳаммаси йиғилмаса, қудуқнинг оғзидаги тошни суролмаймиз, — дейишди улар.
            </p>

            <p>
              Улар гаплашиб турганда, Роҳийла отасининг қўйларини ҳайдаб қудуққа етиб келди. (Отасининг қўйларини Роҳийла боқар эди.)

              Шунда ҳазрати Яъқуб дарров қудуқнинг оғзидаги тошни бир ёққа ағнатиб, тоғасининг қўйларини суғордилар.
              Кейин Роҳийла билан сўрашар эканлар, ўзини тутолмай йиғлаб юбордилар:
            </p>
            <p>
              «Мен Рафиқа аммангнинг ўғлиман», деб ўзларини Роҳийлага таништирдилар. Роҳийла югуриб бориб, отасига хабар берди.
            </p>

            <p>
              Жияни келганини эшитган Лобон шошиб уни пешвоз олишга чиқди, қучоқлаб юзларидан ўпди. Кейин уйига олиб кетди. Уйда ўтирганларида Яъқуб (а.с.) бўлиб ўтган воқеаларнинг ҳаммасини тоғасига гапириб бердилар.

            </p>
            <p>
              «Қайғурма, — деди Лобон. — Сен менинг жигаримсан. Шу ерда, мен билан бирга яшайверасан».
            </p>
            <p>

            </p>
          </div>






          <article className='nav_arrows'>
            <div className='flex_it space_between'>
              <div style={{ marginLeft: '0px' }} onClick={() => navigate(-1)}>
                <div>
                  <span className='left_arrow_span'>&#8592;</span>
                </div>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > орқага қайтиш </span>
                </div>
              </div>

              <div className='central_div'>
                <div>
                  <p>Яъқуб (а.с.) қиссаси</p>
                </div>
              </div>

              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/marrying-two-daughters')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' >  Уйланиш тарихи </span>
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

export default Jacob