import { Container, Card, Image } from 'react-bootstrap';
import { FaClock } from 'react-icons/fa';
import './TimelineComponent.scss';
import React from 'react';

const timelineData = [
  {
    title: 'Ut enim ad minim veniam',
    date: '06/03/2025',
    img: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(135).webp',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    title: 'Duis aute irure dolor',
    date: '2016',
    img: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(129).webp',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
  },
  {
    title: 'Sed ut nihil unde omnis',
    date: '2015',
    img: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(131).webp',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet...',
  },
  {
    title: 'Quis autem vel eum voluptate',
    date: '2014',
    img: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(125).webp',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis...',
  },
  {
    title: 'Mussum ipsum cacilds',
    date: '2013',
    img: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(144).webp',
    content: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus...',
  },
];

export default function Timeline() {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#F0F2F5' }}>
      <div className="main-timeline-2">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-2 ${index % 2 === 0 ? 'left-2' : 'right-2'}`}>
            <Card>
              <Card.Img variant="top" src={item.img} alt="Timeline event" />
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">{item.title}</h4>
                <p className="text-muted mb-4">
                  <FaClock className="me-2" /> {item.date}
                </p>
                <p className="mb-0">{item.content}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
