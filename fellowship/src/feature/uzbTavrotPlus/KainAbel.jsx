import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'
import kamar from '../../images/kamar.png'
import KainAbel_svg from '../../images/KainAbel.svg'


const KainAbel = () => {

  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleBubbles, setVisibleBubbles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const initialVisibility = {};
    const numberOfCases = 2;
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
            <div className="img_container">
              <svg
                fill='rgb(175, 157, 0)'

                version="1.1" viewBox="0 0 139 140" xmlns="http://www.w3.org/2000/svg">
                <path d="m81 140c8e-3 -0.503 1.62-3.03 2.89-4.54 2.12-2.51 1.2-2.92-2.61-1.19-5.05 2.29-8.47 3.11-13.1 3.11-2.7 3e-3 -4.49-0.313-6.48-1.14-0.467-0.194-0.562-0.0544-0.574 0.842-8e-3 0.591-0.2 1.51-0.426 2.03l-0.412 0.96-0.23-1.76c-0.157-1.2-0.583-2.3-1.34-3.44-0.824-1.25-1.06-1.89-0.909-2.48 0.11-0.44 0.303-0.863 0.429-0.941 0.125-0.0775 0.932 0.359 1.79 0.971 2.41 1.71 5.12 2.43 9.11 2.42 4.07-0.0138 6.87-0.678 11.7-2.76 3.47-1.51 4.81-1.7 5.39-0.773 0.66 1.05-0.0839 2.78-2.54 5.87-2.35 2.97-2.68 3.32-2.67 2.82zm19.5-1.14c-1.22-0.606-1.8-2.77-1.33-5 0.571-2.72 2.31-6.06 4.19-8.02l1.68-1.76-1.01 1.76c-2.85 4.96-3.79 7.93-2.82 8.9 0.573 0.573 1.67 0.465 2.58-0.256 1.08-0.846 1.19-0.814 1.19 0.33 0 2.87-2.44 5.06-4.48 4.05zm-65.7-2.9c-0.42-0.42-0.865-1.3-0.988-1.96-0.505-2.69 1.61-7.9 4.4-10.8l1.61-1.68-1.06 1.92c-3.06 5.52-3.76 7.74-2.77 8.74 0.592 0.592 2.01 0.455 2.66-0.256 0.804-0.889 1.12-0.801 1.12 0.314 0 1.68-0.912 3.43-2.07 3.98-1.44 0.685-1.98 0.637-2.88-0.26zm40.5-11.4c-5.28-1.02-6.96-8.16-3.86-16.4 0.386-1.02 0.766-1.8 0.846-1.72 0.0798 0.0798-0.142 1.28-0.494 2.66-1.43 5.63-1.21 7.91 0.949 9.86 2.25 2.03 5.81 2.01 9.96-0.0681 4.68-2.34 11.5-8.04 11.5-9.64 0-0.966-1.03-1.35-4.41-1.64-3.35-0.287-4.45-0.809-4.96-2.35-0.686-2.06 0.747-5.56 2.84-6.94 0.513-0.338 1.47-0.616 2.12-0.617 3.32-6e-3 6.53 6.44 5.72 11.5-0.436 2.71-1.22 4.02-4.08 6.89-4.45 4.45-9.54 7.87-12.5 8.37-0.693 0.118-1.48 0.256-1.74 0.307-0.264 0.0514-1.12-0.0304-1.9-0.182zm15.7-21.7c-1.18-1.08-2.28-1.44-3.46-1.14-0.614 0.154-0.795 0.381-0.72 0.902 0.12 0.829 1.01 1.13 3.46 1.16l1.76 0.0225-1.04-0.944zm-43.2 18.8c-0.919-0.206-1.8-0.724-2.62-1.55-2.34-2.34-2.92-5.92-3.38-21l-0.217-7.04-1.06-0.891c-3.9-3.27-5.19-13.7-2.53-20.5 0.408-1.06 0.969-2.71 1.25-3.68 0.278-0.968 0.635-1.96 0.793-2.2 0.184-0.283 0.0791-0.912-0.295-1.76-0.32-0.726-0.758-2.33-0.974-3.56l-0.392-2.24-0.452 2.24c-0.63 3.12-1.53 4.47-5.02 7.52-8.41 7.37-16.1 11.3-21.9 11.3-2.38-0.0106-2.88-0.126-4.78-1.1-2.44-1.25-3.89-2.99-4.91-5.9-1.78-5.07-1.39-12.7 0.877-17.2 1.09-2.15 1.3-1.54 0.437 1.26-2.62 8.46-0.391 15.6 5.41 17.3 4.06 1.18 10.1-0.178 15.6-3.54 5.87-3.55 11.8-8.48 13.2-10.9 0.431-0.786 0.548-2.21 0.642-7.84 0.177-10.6-0.784-24.2-2.35-33.3-0.41-2.39-0.409-2.99 9.6e-4 -4.94 0.586-2.78 0.968-3.21 1.39-1.58 1.06 4.06 1.36 5.47 1.94 9.08 0.98 6.11 1.26 9.7 1.78 22.7 0.494 12.5 0.7 14.5 1.73 16.8 0.869 1.96 2.08 2.53 4.91 2.29 3.23-0.27 5.17-1.3 8.5-4.51 1.57-1.51 3.08-2.74 3.37-2.74 0.431 0 0.527 0.35 0.527 1.91 0 1.66 0.122 2.05 0.935 2.96 0.856 0.957 1.08 1.04 2.72 1 3.12-0.0726 4.1-1.35 2.75-3.57-0.351-0.576-0.639-1.42-0.639-1.87 0-1.02 0.909-4.21 1.26-4.43 0.547-0.338 1.72 3.19 1.87 5.62 0.328 5.42-2.26 9.57-5.98 9.57-1.6-0.0013-3.29-0.824-3.85-1.88-0.186-0.348-0.495-1.36-0.687-2.26-0.192-0.894-0.453-1.62-0.581-1.62-0.128 0-1.27 1.14-2.54 2.54-3.02 3.32-5.41 4.59-8.67 4.59-1.79 0-2.47-0.154-3.61-0.823l-1.4-0.823 0.732 2.18c1.02 3.04 1.66 7.46 2.11 14.6l0.386 6.07 1.28 0.28c3.13 0.686 8.05-0.332 12.5-2.59 4.6-2.32 12.3-8.11 14.6-11 1.37-1.7 1.63-4.47 1.39-14.5-0.265-10.9-1-19.6-2.3-27.2-0.284-1.66-0.406-3.49-0.288-4.32 0.306-2.15 0.793-3.84 1.11-3.84 0.154 0 0.642 1.55 1.09 3.44 2.15 9.19 2.34 11.1 3.41 35.3 0.52 11.8 1.56 13.9 6.56 13.3 2.79-0.348 5.13-1.67 8.42-4.75 1.63-1.53 3.1-2.7 3.25-2.61 0.156 0.0967 0.277 0.963 0.269 1.93-0.0197 2.2 0.612 3.21 2.31 3.72 0.706 0.211 1.34 0.325 1.42 0.252 0.19-0.19-0.929-6.22-1.52-8.22-0.475-1.59-0.467-1.81 0.135-3.76 0.351-1.14 0.767-2.07 0.923-2.07 0.656 0 2.21 5.57 2.71 9.68 0.101 0.836 0.264 2.17 0.364 2.97l0.181 1.45 1.18-0.197c3.44-0.576 3.8-1.03 2.62-3.34-0.352-0.69-0.64-1.56-0.64-1.94 0-0.97 0.943-4.09 1.3-4.32 0.166-0.103 0.62 0.507 1.01 1.35 0.583 1.27 0.709 2.13 0.717 4.9 0.01 3.1-0.0625 3.51-0.949 5.28-0.908 1.82-1.07 1.96-2.98 2.71l-2.02 0.786 0.197 5.61c0.791 22.6 0.751 21.9 1.46 23.8 0.797 2.13 1.76 2.99 3.7 3.28 1.87 0.28 5.15-0.478 4.97-1.15-0.0707-0.26-0.348-1.11-0.616-1.89-0.968-2.81 0.602-8.42 3.27-11.7 0.902-1.11 1.09-1.62 1.23-3.48 0.0949-1.2 0.272-2.28 0.394-2.4 0.226-0.226 6.79 3.07 7.11 3.57 0.301 0.469-0.656 0.87-1.67 0.697l-0.96-0.165 1.12 0.958c1.17 1 2.59 1.98 5.57 3.82 0.982 0.606 2.15 1.63 2.59 2.26 2.6 3.75 1.29 10.6-2.26 11.8-1.52 0.518-6.43 0.291-9.09-0.421l-1.74-0.466-1.62 1.05c-3.55 2.31-6.66 3.12-9.44 2.45-2.72-0.653-4.11-2.21-5.02-5.6-0.472-1.77-0.947-8.49-1.22-17.3-0.0986-3.17-0.266-7.73-0.371-10.1l-0.192-4.37-1.15-0.217c-2.51-0.47-3.98-1.83-4.58-4.22-0.192-0.762-0.439-1.39-0.55-1.39-0.111 0-1.29 1.15-2.63 2.55-3.02 3.17-5.5 4.49-8.43 4.49-3.95 6.4e-4 -5.93-1.92-6.89-6.69l-0.559-2.75-0.242 1.44c-0.54 3.21-1.35 4.64-4.07 7.2-4.06 3.82-8.98 7.32-13.4 9.54-4.55 2.29-6.87 2.9-10.4 2.73l-2.43-0.123 9e-3 2.73c5e-3 1.5 0.141 5.61 0.303 9.13 0.326 7.08 0.698 8.76 2.28 10.3 0.916 0.877 1.11 0.926 3.75 0.921 1.99-3e-3 3.46-0.215 5.18-0.745 2.84-0.876 6.5-2.61 7.81-3.7 0.921-0.766 0.926-0.788 0.373-1.63-0.939-1.43-3.1-2.16-6.91-2.33-1.95-0.0851-3.73-0.333-4.23-0.592-2.84-1.45-2.3-7.21 1.01-10.7 1.42-1.49 2.48-1.79 4.39-1.26 1.81 0.508 4.47 2.87 5.62 5 2.08 3.84 2.58 9.14 1.2 12.7-2.12 5.57-10.9 9.84-17.2 8.42zm80.9-10.8c0.48 0 1.13-0.19 1.45-0.423 1.01-0.736-0.104-2.26-2.96-4.05-1.35-0.85-2.85-1.85-3.33-2.23l-0.87-0.685-0.171 0.896c-0.294 1.54-1.07 4.71-1.29 5.27-0.145 0.369 6.4e-4 0.598 0.477 0.749 0.959 0.304 4.87 0.738 5.39 0.597 0.234-0.0642 0.819-0.117 1.3-0.117zm-9.9-2.12c1.22-1.02 1.93-2.35 1.93-3.56 0-1.23-1.49-4.15-2.44-4.78-0.719-0.471-0.845-0.452-1.99 0.309-1.38 0.916-3.1 3.31-3.42 4.77-0.279 1.27 0.544 2.42 2.42 3.38 1.8 0.922 2.28 0.906 3.5-0.118zm-59.4-6.55c-2.16-2.27-5.26-2.6-5.26-0.566 0 0.955 1.5 1.47 4.46 1.52l1.74 0.0328zm-18.2-19.4c-0.333-5.21-1.52-12.2-2.07-12.2-0.337 0-0.972 2.97-1.19 5.59-0.215 2.55 0.27 5.43 1.24 7.37 0.595 1.19 1.78 2.72 2.1 2.72 0.0783 0 0.0435-1.55-0.0774-3.44zm-17.8 32.2c-6e-3 -1.45-0.293-4.22-0.638-6.16-1.44-8.08-1.43-7.94-0.762-9.31 0.413-0.846 1.04-1.47 1.95-1.93 1-0.505 1.25-0.769 0.976-1.04-0.525-0.525-0.899-0.453-1.73 0.331-0.407 0.382-0.804 0.63-0.883 0.551-0.287-0.287 0.433-2.65 1.07-3.51 0.645-0.872 0.646-0.906 0.0642-2.59-0.324-0.938-0.917-2.4-1.32-3.25-0.629-1.33-0.83-1.52-1.47-1.36-0.541 0.136-1.03-0.0696-1.79-0.749l-1.05-0.936 0.699-1.23c0.974-1.71 1.78-1.74 3.32-0.128 0.928 0.975 1.44 1.94 2 3.79l0.755 2.48 0.57-2.56c0.753-3.38 1.36-4.84 2.34-5.61 1.03-0.809 1.11-0.801 2.12 0.21 0.907 0.907 1.05 1.69 0.495 2.73-0.344 0.642-0.36 0.64-1.2-0.167-0.498-0.478-1.01-0.72-1.24-0.581-0.591 0.365-1.29 2.26-1.97 5.38-0.343 1.56-0.723 3.09-0.845 3.4-0.149 0.379-0.0691 0.56 0.248 0.56 0.77 0 3.42 2.21 3.62 3.02 0.105 0.416-0.0287 1.17-0.298 1.69-0.4 0.773-0.866 1.04-2.6 1.51-1.16 0.314-2.42 0.818-2.79 1.12l-0.678 0.549 0.853 3.01c1.1 3.9 1.58 8.74 1.12 11.4-0.188 1.1-0.471 2-0.629 2s-0.292-1.19-0.297-2.64zm42.2-20.1c-1.01-0.702-1.84-1.41-1.84-1.58 0-0.474 1.71-3.83 1.95-3.83 0.119 0 1.1 0.593 2.19 1.32 1.08 0.724 2.02 1.26 2.08 1.2 0.0575-0.0645 0.413-0.729 0.79-1.48s0.763-1.36 0.857-1.36c0.282 0 3.92 2.53 4.13 2.87 0.208 0.336-0.743 2.65-1.48 3.62-0.411 0.533-0.573 0.476-2.51-0.886l-2.07-1.46-0.735 1.45c-0.404 0.795-0.912 1.44-1.13 1.43-0.217-0.0089-1.22-0.591-2.23-1.29zm66.1-1.52c-0.201-0.845-0.803-2.5-1.34-3.68-0.908-2-1.03-2.13-1.81-1.94-0.62 0.156-1.03 0.0215-1.62-0.526-0.95-0.892-0.975-1.42-0.134-2.8 0.522-0.856 0.783-1.02 1.36-0.844 1.71 0.517 3.52 3.21 3.95 5.89 0.114 0.714 0.3 1.3 0.414 1.3s0.381-0.9 0.594-2c0.861-4.44 1.86-6.41 3.36-6.58 1.12-0.13 2.21 1.47 1.87 2.75-0.287 1.07-0.849 1.25-1.3 0.413-0.454-0.848-1.49-0.848-1.94-8.3e-5 -0.194 0.363-0.76 2.47-1.26 4.67-0.497 2.21-1.1 4.21-1.34 4.45-0.373 0.373-0.495 0.206-0.805-1.1zm-46.1-1.79c-1.1-0.757-2.09-1.45-2.18-1.55-0.227-0.227 1.72-4.08 2.06-4.08 0.144 0 1.08 0.576 2.09 1.28 1 0.704 1.89 1.28 1.97 1.28s0.448-0.612 0.825-1.36 0.74-1.42 0.806-1.49c0.0663-0.0732 1.06 0.502 2.2 1.28 1.35 0.914 2.08 1.63 2.08 2.03 0 0.478-1.23 2.99-1.79 3.67-0.0541 0.0652-1.04-0.551-2.18-1.37l-2.08-1.49-0.815 1.61c-0.448 0.885-0.849 1.6-0.89 1.59-0.041-0.0102-0.978-0.638-2.08-1.39zm22.4-2.61-1.97-1.43 0.824-1.91c0.453-1.05 0.971-1.91 1.15-1.91 0.562 0 4.37 2.62 4.36 3-0.0114 0.554-1.71 3.51-2.07 3.6-0.176 0.0472-1.21-0.559-2.29-1.35zm3.86-9.3c1.06-2.96 0.893-2.83 5.76-4.54 2.48-0.87 5.74-1.96 7.24-2.43 1.5-0.465 5.21-1.72 8.25-2.8 3.04-1.07 5.61-1.88 5.7-1.78 0.127 0.127-0.918 2.57-1.29 3.02-0.0328 0.0398-4.01 1.5-8.84 3.24-7.08 2.56-13.7 5.06-16.9 6.35-0.304 0.125-0.294-0.126 0.0438-1.07zm-63.8-3.36c-0.968-0.698-1.9-1.4-2.06-1.57-0.3-0.299 1.32-4.15 1.75-4.15 0.114 0 1.03 0.576 2.04 1.28 1 0.704 1.94 1.28 2.07 1.28 0.133 0 0.561-0.656 0.95-1.46l0.708-1.46 1.2 0.676c0.658 0.372 1.69 1.08 2.3 1.58l1.1 0.907-0.56 1.24c-0.308 0.68-0.816 1.57-1.13 1.99l-0.569 0.75-1.87-1.31c-1.03-0.72-1.99-1.31-2.14-1.31s-0.586 0.648-0.971 1.44c-0.385 0.792-0.779 1.43-0.876 1.41-0.0969-0.0151-0.968-0.599-1.94-1.3zm15.8-0.984c-1.1-0.737-2-1.53-2-1.77 0-0.679 1.58-3.6 1.94-3.6 0.66 0 4.14 2.6 4.14 3.09 0 0.568-1.6 3.63-1.89 3.63-0.104-0.0019-1.09-0.607-2.19-1.34zm58.4-7.69c-0.104-2.22-0.608-6.2-1.17-9.2-1.15-6.19-1.16-6.45-0.346-8.25 0.513-1.13 0.924-1.51 2.31-2.12l1.69-0.751-0.886-0.409c-0.812-0.375-0.966-0.333-1.84 0.505l-0.954 0.914v-0.999c0-1.28 0.509-2.62 1.34-3.5l0.653-0.697-0.719-2.18c-0.395-1.2-1.13-3.01-1.64-4.03-0.821-1.64-0.993-1.81-1.55-1.51-0.807 0.432-2.44-0.358-2.92-1.41-0.482-1.06 0.982-3.39 2.13-3.39 1.75 0 4.29 3.79 4.87 7.29 0.206 1.24 0.725 1.7 0.734 0.651 0.0118-1.36 1.51-6.6 2.2-7.73 1.13-1.83 2.43-2 3.71-0.474 0.672 0.799 0.815 1.23 0.662 1.99-0.309 1.54-0.709 1.7-1.76 0.692-1.72-1.64-2.47-0.55-3.71 5.42-0.405 1.94-0.827 3.75-0.939 4.03-0.145 0.366 0.0696 0.627 0.744 0.907 1.19 0.493 3.89 3.05 3.89 3.68 0 0.261-0.244 0.985-0.541 1.61-0.428 0.897-0.814 1.2-1.84 1.46-2.07 0.522-3.96 1.27-4.65 1.85l-0.644 0.536 0.658 2.08c1.09 3.45 1.61 6.37 1.81 10.1 0.176 3.41-0.252 6.85-0.852 6.85-0.133 0-0.324-1.76-0.425-3.92zm-37.6-3.31c-1.43-1.82-1.16-4.83 0.78-8.69 0.987-1.96 3.89-5.72 4.19-5.42 0.0685 0.0685-0.569 1.34-1.42 2.82-2.5 4.36-3.18 6.65-2.24 7.59 0.602 0.602 2 0.451 2.99-0.32l0.895-0.704-0.195 1.65c-0.226 1.91-0.859 3.03-2.01 3.55-1.3 0.592-2.28 0.441-2.99-0.463zm-69.5-1.99c1.7-2.08 2.88-3.96 2.88-4.58 0-0.779-0.925-1.23-1.82-0.888-0.611 0.232-0.737 0.175-0.737-0.334 0-0.988 1.36-2.33 2.36-2.33 1.2 0 1.62 0.509 1.62 1.93 0 2.08-1.95 5.09-4.47 6.89l-0.96 0.687zm-8.96-14.3c0-0.0644 1.4-0.947 3.12-1.96 5.32-3.14 10.2-6.46 11.2-7.69 1.22-1.39 1.58-1.28 0.85 0.253-1.32 2.78-5.97 6.18-11.2 8.22-3.16 1.22-3.97 1.46-3.97 1.18zm47-1.2c-1.01-1.01-0.675-3.48 1.03-7.64 1.24-3.03 1.38-3.63 1.39-6.08 0.0184-3.07-0.551-4.63-2.55-6.96-1.27-1.49-1.36-1.96-0.538-2.97l0.58-0.716 1.18 1.38c2.52 2.94 3.37 8.1 2.02 12.2l-0.599 1.82 1.15 1.08c1.48 1.39 1.87 2.48 1.62 4.44-0.244 1.84-1.09 3.05-2.57 3.67-1.44 0.6-1.92 0.557-2.72-0.24zm3.56-2.83c1.12-0.791 1-1.28-0.586-2.4-1.31-0.92-1.41-0.942-1.81-0.398-0.637 0.871-0.906 2.76-0.469 3.28 0.449 0.541 1.7 0.328 2.86-0.487zm25 0.183c0.44-0.437 3.34-2.21 6.43-3.94 6.92-3.86 7.27-4.09 6.82-4.56-0.599-0.625-3.97-0.979-9.34-0.981-2.86-9.6e-4 -5.2-0.0921-5.2-0.202 0-0.491 2.6-4.84 3.26-5.47 0.406-0.38 1.16-0.85 1.67-1.04 2.67-1.01 12.3-0.613 15.1 0.628 1.37 0.607 1.44 0.698 1.25 1.65-0.273 1.37-3.4 5.95-5.66 8.29-2.22 2.3-4.19 3.26-10.1 4.92-2.29 0.645-4.38 1.24-4.64 1.33-0.264 0.0882-0.12-0.197 0.32-0.634zm-60.5-8.61c-0.199-0.741-0.776-2.26-1.28-3.37-0.868-1.92-0.968-2.02-1.82-1.83-0.724 0.159-1.08 0.0109-1.82-0.762l-0.919-0.959 0.854-1.29c0.47-0.71 1.09-1.29 1.37-1.29 1.41 0 4.28 4.55 4.28 6.79 0 1.2 0.332 0.404 0.979-2.35 1.02-4.32 1.83-5.72 3.34-5.72 1.37 0 2.29 2.25 1.43 3.52-0.275 0.411-0.408 0.377-0.926-0.24-1.37-1.63-2.24-0.504-3.22 4.16-0.842 3.99-0.954 4.33-1.46 4.53-0.302 0.116-0.553-0.253-0.802-1.18zm85.9-12.1c-1.42-1.56-1.1-5.04 0.792-8.8 1.17-2.32 3.66-5.58 4-5.24 0.0765 0.0765-0.502 1.21-1.29 2.53-1.58 2.65-2.7 5.37-2.7 6.54 0 0.943 1.07 1.75 2.02 1.53 0.385-0.0928 1.02-0.462 1.42-0.82l0.72-0.652v1.35c0 1.56-0.643 2.98-1.67 3.7-1 0.701-2.59 0.633-3.29-0.142zm-63.8-8.79c0-0.128 0.59-0.902 1.31-1.72 1.61-1.82 2.28-3.07 2.15-3.99-0.115-0.809-1.32-1.12-2.04-0.524-0.372 0.309-0.462 0.279-0.462-0.151 0-0.803 0.866-2.32 1.45-2.54 2.83-1.08 3.52 1.63 1.34 5.23-0.917 1.51-3.76 4.31-3.76 3.7zm54.5-6.07c2.12-2.58 2.62-3.71 2-4.56-0.373-0.51-0.56-0.536-1.44-0.202-1 0.379-1.01 0.374-0.814-0.48 0.242-1.03 1.58-2.3 2.41-2.3 0.906 0 1.61 0.886 1.6 2.02-0.0142 2.05-2.11 5.25-4.58 7.02-0.745 0.53-0.551 0.182 0.833-1.5zm-38.5-0.604c-0.103-1.25-0.436-2.2-1.16-3.33-1.05-1.63-1.23-2.46-0.708-3.28 0.256-0.405 0.428-0.376 1.2 0.198 1.41 1.04 3.61 2.09 5.37 2.56 3.64 0.972 9.81 0.298 14.1-1.54 5.29-2.28 6-2.52 6.6-2.33 0.908 0.288 1.28 1.51 0.853 2.77-0.366 1.08-4.7 6.79-4.96 6.54-0.265-0.265 1.16-2.7 2.45-4.2 2.44-2.82 1.43-3.28-2.87-1.31-4.85 2.22-7.73 2.89-12.5 2.88-3.3-0.00412-4.29-0.121-5.64-0.67l-1.64-0.665-0.143 1.73c-0.204 2.46-0.768 2.84-0.95 0.643z" strokeWidth=".32" />
              </svg>
            </div>
            <div className='title_of_chapter'>
              <p> ҚОБИЛ БИЛАН ҲОБИЛ  </p>
              <p>ҲИКОЯСИ</p>
            </div>
          </div>

          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>

          <div className='main_text'>
            <p className='boldItalic' >

              «Уларга Одамнинг икки ўғли ҳақидаги хабарни ҳаққирост тиловат қилинг. У иккови қурбонлик қилганида биридан қабул бўлиб, биридан қабул бўлмади. Шунда у «Қасамки, сени ўлдирурман», деганида, биродари айтди: «Оллоҳ фақат тақводорлардангина қурбонлик қабул қилар»  <span className='vitalic'> (Моида сураси 5:27). </span>
            </p>
            <p></p>
          </div>
          <div className='main_text'>
            <p>Одам алайҳис-салом билан Ҳавво (р.а.) кейин фарзандлар кўришади. Биринчи ўғилга Қобил деб, иккинчи ўғилга Ҳобил деб от қўйишади. Йиллар ўтиб улар улғайди. Ҳобил чўпон бўлди, Қобил — деҳқон.

            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}
            >
              <p>
                <sup>1</sup> Табарийнинг “Тарих” китобига қаранг.
              </p>
            </div>
            <p onClick={() => handleSupClick(1)}>
              Бир куни Қобил ердан олган ҳосилининг бир қисмини олиб келиб, Оллоҳга назр қилди. Ҳобил эса сурувидаги сара<sup>1</sup>  қўчқорларидан сўйиб, энг яхши қисмини қурбон қилди. Шунда Яратганга Ҳобил ва унинг қурбонлиги манзур бўлди.


            </p>

            <p>
              Қобил ва унинг ҳадяси эса маъқул бўлмади. Қобил бундан қаттиқ аччиқланиб, қовоғини осди.
            </p>
            <p>«Нега хафа бўласан? — деб сўради Худо. — Нега қовоқ осиб юрибсан? Билиб қўй, тўғри қилинган амал қабул бўлади, бироқ агар амалинг нотўғри бўлса, гуноҳ сени аллақачон бўсағада пойлаб ётган. Эҳтиёт бўлмасанг, сени эгаллаб олади! Аслида, сен унинг устидан ҳоким бўлишинг керак!» деди.
            </p>
            <p className='vitalic'> Кўряпсизми, Қобил қурбонлиги қабул бўлмаганидан кейин ғазабланди. Худонинг ишидан норози бўлди. Бу эса гуноҳ. Гуноҳга йўл берсангиз, у сизни ҳам ўзига қул қилади. Аслида эса биз гуноҳнинг устидан ҳоким бўлишимиз керак. </p>

          </div>

          <div className='paragraph_heading'>
            <p>   ГУНОҲНИНГ ҚУДРАТИ </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}
            >
              <p>
                <sup>2</sup> Кейинги оятда Оллоҳ таолонинг бир қарға юборгани ва ўликни қандай кўмиш кераклигини кўрсатгани ёзилган. Бу ер юзидаги биринчи ўлик эди.
              </p>  </div>
            <p className='boldItalic' onClick={() => handleSupClick(2)} > «Бас, нафси унга ўз биродарини ўлдиришни чиройли кўрсатиб Қобил уни ўлдирди ва зиён кўргувчилардан бўлиб қолди» <span className='vitalic'>(Моида сураси 5:30).</span><sup>2</sup>
            </p>
            <p></p>
          </div>
          <div className='main_text'>
            <p>
              <span className='vitalic'>Қобил Оллоҳ таолонинг сўзларини ўзлаштира олмади. У Худога итоат қилиш ўрнига,</span> укаси Ҳобилни даштга олиб бориб ўлдирди.

              Кейин Худо Қобилдан: «Уканг Ҳобил қани?» деб сўради.

              «Билмайман. Нима, мен укамга қоровулманми?» деб жавоб берди Қобил.
            </p>
            <p>
              «Нима қилиб қўйдинг?! — деди Оллоҳ. — Уканг қони тупроқдан Менга фарёд қиляпти! Энди ер сени қарғайди. Қанча ишлов берсанг ҳам, сенга ҳосил бермайди. Бутун умр ватанингдан узоқда, сарсон-саргардон бўлиб яшайсан!» деди.
            </p>

            <p className='vitalic'>
              Савол: Қобил нега Ҳобилни ўлдирди? Нима учун одамлар кўп ҳолатда гуноҳ ишлардан ўзларини тўхтата олмайди? Нима деб ўйлайсиз? Нахотки гуноҳда инсонни қул қилишга қодир бир куч мавжуд бўлса?!
            </p>
            <p className='boldItalic'>
              «Биз Бани Исроилга: «Ким бир жонни ноҳақдан ёки ер юзида фасод қилмаган тақдирда ҳам ўлдирса, худди ҳамма одамларни ўлдиргандек бўлади. Ким уни тирилтирса, худди ҳамма одамларни тирилтиргандек бўлади», деб ёздик. Батаҳқиқ, пайғамбарларимиз уларга баёнотлар олиб келдилар. Сўнгра, бундан кейин ҳам, улардан кўплари ер юзида исроф қилгувчилардан бўлдилар»

              <span className='vitalic'>   (Моида сураси 5:32).  </span>
            </p>
            <p></p>
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
                  <p>Қобил ва Ҳобил қиссаси </p>
                </div>
              </div>

              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/noah')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' >  Нуҳ (а.с.) қиссаси </span>
                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>
            </div>
          </article>
         
        </main>

        <aside>
        </aside>
      </div>
    </div >
  )
}

export default KainAbel