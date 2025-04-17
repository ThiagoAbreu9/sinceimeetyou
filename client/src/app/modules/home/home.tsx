import './home.scss';
import React, { useState } from 'react';
import { useAppSelector } from 'app/config/store';
import 'react-vertical-timeline-component/style.min.css';
import TimelineComponent from 'app/shared/timelineComponent/TimelineComponent';
import { Container, Button } from 'reactstrap';
import { AnimatePresence, motion } from 'framer-motion';

export const Home = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleStart = () => {
    setShowTimeline(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!showTimeline ? (
        <motion.div
          key="intro"
          className="intro-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Container fluid className="intro-container d-flex flex-column align-items-center justify-content-center text-center">
            <div>
              <h1 className="mb-4">Since i meet you</h1>
              <p className="lead mb-4">
                Essa é a nossa TimeLine ( Linha do Tempo ) desde que nos conhecemos... Não sei se é um presente ou uma declaração, fique a
                vontade para sua interpretação também, fiz com muito carinho... Ass.: Thiago Abreu
              </p>
              <Button variant="secondary" size="lg" onClick={handleStart} className="btn btn-success">
                Start
              </Button>
            </div>
          </Container>
        </motion.div>
      ) : (
        <motion.div
          key="timeline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <TimelineComponent />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
