import React, { useCallback, useEffect, useState } from 'react';
import { eventPhotos } from '../img/events';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import ShowecaseNav from '../Components/PhotoShowcase/ShowecaseNav';
import { travelPhotos } from '../img/travel';

function PhotoShowcase() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [page, setPage] = useState('events');

  const [photos, setPhotos] = useState([]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    //

    if (page === 'events') {
      setPhotos(eventPhotos);
    } else if (page === 'travel') {
      setPhotos(travelPhotos);
    } else if (page === ' automotive') {
      alert('wagis');
    }
  }, [page]);

  return (
    <div className="container photoshowcase">
      <ShowecaseNav page={page} setPage={setPage} />
      <Gallery photos={photos} onClick={openLightbox} />

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default PhotoShowcase;
