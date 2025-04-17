import { Container, Card, Button } from 'react-bootstrap';
import { FaClock } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TimelineComponent.scss';

const timelineData = [
  {
    title: 'Primeiro Contato :)',
    date: '25/02/2025',
    img: './content/images/primeiroContato.jpeg',
    content:
      'Esse foi nosso primeiro contato na vida — tudo começou com um comentário sobre um cachorro velho te julgando... e, a partir daí, fomos conversando sobre de onde a gente se conhecia, se íamos nos encontrar no Rio, já que os dois iam viajar pra lá na época do Carnaval, rs.',
  },
  {
    title: 'Distância - SP (Rachel) e RJ (Thiago)',
    date: '25/02/2025',
    img: './content/images/image1.jpeg',
    content:
      'Onde nos encontrávamos antes de nos conhecermos... você, morando em São Paulo e eu, morando em Manaus, indo só passar uns dias no RJ. Parecia meio improvável, não? Mas você decidiu com seus amigos que iriam pro Carnaval do Rio de Janeiro também (Olha a sorte)',
  },
  {
    title: 'Dia que marcamos de nos vermos no RJ',
    date: '06/03/2025',
    img: './content/images/image2.jpeg',
    content:
      'Foi quando saímos do virtual. A gente combinou de nos encontrarmos no bar que você gostava, no Rio, bem na época do Carnaval. Eu levei bala de cupuaçu comprado no aeroporto Eduardo Gomes(MAO), que tinha comentado que gostava.',
  },
  {
    title: 'Local do primeiro encontro...',
    date: '06/03/2025',
    img: './content/images/nativo.jpg',
    content:
      'Quiosque Nativoo – Copacabana. Infelizmente não tenho uma foto daquele dia, mas algumas lembranças ficaram, e guardo essa data com carinho. Lembro que eu estava um pouco nervoso, trêmulo, com as mãos suadas. Foi ali que percebi que nunca tinha saído com alguém assim — um encontro de verdade. Mas, em nenhum momento, houve aquele silêncio constrangedor; tudo fluiu naturalmente. A conversa rendeu tanto que perdemos a noção do tempo, os bares foram fechando, acabamos caminhando pela orla… menti um pouco (rs) e, felizmente, você gostou de mim.',
  },
  {
    title: 'Causando inveja',
    date: '07/03/2025',
    img: './content/images/cupuaçu.jpeg',
    content: 'Você gostou tanto do presente que até foi fazer inveja no instagram.',
  },
  {
    title: 'Caindo na armadilha',
    date: '07/03/2025',
    img: './content/images/f_rachel.jpeg',
    content: 'Aqui começou pequenos tweets tentando me iludir e eu cai logo! Sou desses também, último romântico de Manaus. ',
  },
  {
    title: '',
    date: '22/03/2025',
    video: './content/videos/video_thiago_e_rachel.mp4',
    content:
      'Primeiro rolê que você foi comigo e com meus amigos, esse video aqui que eu vi que estava fdd já, recebi comentários como " Nunca vi essa tua cara , vc parece feliz e realmente eu estou. ',
  },
  {
    title: 'Te levando pra rolê no Carito ( Sertanejo )',
    date: '29/03/2025',
    img: './content/images/carito_rachel.jpeg',
    content: 'Dia que fomos ao carito ouvir sertanejo e você não sabia uma musica direito kk ACOSTUME-SE',
  },
  {
    title: 'Cassina - Coworking',
    date: '11/04/2025',
    img: './content/images/rachel_estudando.jpeg',
    content: 'Fomos a um coworking juntos , você estudando toda feliz e eu trabalhando...',
  },
  {
    title: 'Rachel Gata de óculos',
    date: '11/04/2025',
    img: './content/images/rachel_oculos.jpeg',
    content:
      'Você fica mt linda de óculos, essa é minha foto favorita... Vou terminar aqui mas não terminei essa TimeLine, é só pq vc me deu mais 10minutos pra terminar, enfim, queria te dizer: Obrigado por esse tempo e espero ter mts mais momentos e fotos com você pra eu por aqui, creio que não temos muitas fotos pq quando estamos juntos, o tempo passa diferente.',
  },
];

export default function Timeline() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  // Ref para o container
  const timelineRef = useRef<HTMLDivElement>(null);

  const startIndex = currentPage * itemsPerPage;
  const currentItems = timelineData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(timelineData.length / itemsPerPage);

  // Função para rolar ao topo
  const scrollToTop = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToPrevious = () => {
    setCurrentPage(prev => {
      const newPage = Math.max(prev - 1, 0);
      scrollToTop(); // Rolar ao topo após mudar a página
      return newPage;
    });
  };

  const goToNext = () => {
    setCurrentPage(prev => {
      const newPage = Math.min(prev + 1, totalPages - 1);
      scrollToTop(); // Rolar ao topo após mudar a página
      return newPage;
    });
  };

  return (
    <Container
      fluid
      className="timeline-container d-flex justify-content-center flex-column py-5 w-100 position-relative"
      ref={timelineRef} // Ref no container
    >
      <div className="main-timeline-2">
        <AnimatePresence mode="wait">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`timeline-2 ${(startIndex + index) % 2 === 0 ? 'left-2' : 'right-2'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Card
                style={{
                  maxWidth: '500px',
                  margin: '1rem auto',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
              >
                {item.video ? (
                  <video
                    controls
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  >
                    <source src={item.video} type="video/mp4" />
                    Seu navegador não suporta vídeo.
                  </video>
                ) : (
                  <Card.Img
                    variant="top"
                    src={item.img}
                    alt="Timeline event"
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                )}
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-4">{item.title}</h4>
                  <p className="text-muted mb-4">
                    <FaClock className="me-2" /> {item.date}
                  </p>
                  <p className="mb-0">{item.content}</p>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Paginação */}
      <div className="d-flex justify-content-center mt-4 gap-3">
        <Button variant="primary" onClick={goToPrevious} disabled={currentPage === 0}>
          Anterior
        </Button>
        <span className="align-self-center">
          Página {currentPage + 1} de {totalPages}
        </span>
        <Button variant="primary" onClick={goToNext} disabled={currentPage === totalPages - 1}>
          Próximo
        </Button>
      </div>
    </Container>
  );
}
