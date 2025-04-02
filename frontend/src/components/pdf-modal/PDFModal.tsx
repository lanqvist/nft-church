/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button, Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Document, Page } from 'react-pdf';

import politika from './assets/Politika_v_otnoshenii_obrabotki_PDn.pdf';
import soglasie from './assets/Soglasie.pdf';

import { useRef, useState } from 'react';

import styles from './PDFModal.module.css';

export const PDFModal = ({ opened, close, type = 'politika' }) => {
    const isMobile = useMediaQuery('(max-width: 50em)');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageWidth, setPageWidth] = useState(0);

    const modalBodyRef = useRef(null)
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    }

    const goToPreviousPage = () => {
      if (pageNumber > 1) {
          setPageNumber(pageNumber - 1);
      }
    };

    const goToNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    return (
        <Modal.Root
            opened={opened}
            onClose={close}
            fullScreen={isMobile}
            transitionProps={{ transition: 'fade', duration: 200 }}
            onEnterTransitionEnd={() => {
              if (opened && modalBodyRef.current) {
                setPageWidth(modalBodyRef.current.clientWidth);
            }
            }}
            centered
            keepMounted
            size={isMobile ? "100%" : "xl"}
        >
            <Modal.Overlay />
            <Modal.Content className={styles.content}>
                <Modal.Header className={styles.header}>
                    <Modal.CloseButton className={styles.closeIcon} />
                </Modal.Header>

                <Modal.Body className={styles.body} >
                    <div className={styles.container} ref={modalBodyRef}>
                        <Document
                          file={type === 'politika' ? politika : soglasie}
                          onLoadSuccess={onDocumentLoadSuccess}
                        >
                          <Page pageNumber={pageNumber} width={pageWidth} />
                        </Document>
                    </div>
                </Modal.Body>
                <div className={styles.footer}>
                  {numPages > 1 && (
                    <div className={styles.pagination}>
                      <Button 
                        className={styles.button} 
                        variant="default"
                        color="green"
                        onClick={goToPreviousPage}
                        disabled={pageNumber === 1}
                      >
                          {'<'}
                      </Button>

                      <span>{`${pageNumber} из ${numPages}`}</span>

                      <Button 
                        className={styles.button} 
                        variant="default" 
                        color="green" 
                        onClick={goToNextPage}
                        disabled={pageNumber === numPages}
                      >
                          {'>'}
                      </Button>
                    </div>
                    )}
                    <Button className={styles.closeButton} variant="default" color="green" onClick={close}>
                        Закрыть
                    </Button>
                </div>
            </Modal.Content>
        </Modal.Root>
    );
};
