import React from 'react';

export default function Overlay({openModal, closeModal}) {
    return (
        <div
            role={'button'}
            className={`overlay ${openModal ? 'overlay-active': ''}`}
            onClick={() => closeModal(true)}
        />
    )
}