import './home.scss';
import React, { useState } from 'react';
import { useAppSelector } from 'app/config/store';
import 'react-vertical-timeline-component/style.min.css';
import TimelineComponent from 'app/shared/timelineComponent/TimelineComponent';

export const Home = () => {
  return <TimelineComponent></TimelineComponent>;
};

export default Home;
