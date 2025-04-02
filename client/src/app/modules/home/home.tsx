import './home.scss';

import React, { useState } from 'react';
import { useAppSelector } from 'app/config/store';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';

const images = {
  event1: 'Test',
  event2: 'https://via.placeholder.com/200?text=Event+2',
  event3: 'https://via.placeholder.com/200?text=Event+3',
  event4: 'https://via.placeholder.com/200?text=Event+4',
};

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  const [hoverImage, setHoverImage] = useState<string | null>(null);

  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
      <div className="row w-100">
        <div className="col-lg-12">
          <div className="horizontal-timeline">
            <ul className="list-inline items d-flex justify-content-center">
              <li className="list-inline-item items-list text-center">
                <div className="px-4">
                  <div className="event-date badge bg-info">2 June</div>
                  <h5 className="pt-2">Event One</h5>
                  <p className="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>
                  <div>
                    <a href="#" className="btn btn-primary btn-sm">
                      Read more
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-inline-item items-list text-center">
                <div className="px-4">
                  <div className="event-date badge bg-success">5 June</div>
                  <h5 className="pt-2">Event Two</h5>
                  <p className="text-muted">Everyone realizes why a new common language one could refuse translators.</p>
                  <div>
                    <a
                      href="#"
                      className="btn btn-primary btn-sm"
                      onMouseEnter={() => {
                        setHoverImage(images.event1);
                        setShowAlert(true); // Exibe o alerta
                      }}
                      onMouseLeave={() => setHoverImage(null)}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-inline-item items-list text-center">
                <div className="px-4">
                  <div className="event-date badge bg-danger">7 June</div>
                  <h5 className="pt-2">Event Three</h5>
                  <p className="text-muted">If several languages coalesce the grammar of the resulting simple and regular</p>
                  <div>
                    <a href="#" className="btn btn-primary btn-sm">
                      Read more
                    </a>
                  </div>
                </div>
              </li>
              <li className="list-inline-item items-list text-center">
                <div className="px-4">
                  <div className="event-date badge bg-warning">8 June</div>
                  <h5 className="pt-2">Event Four</h5>
                  <p className="text-muted">Languages only differ in their pronunciation and their most common words.</p>
                  <div>
                    <a href="#" className="btn btn-primary btn-sm">
                      Read more
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
