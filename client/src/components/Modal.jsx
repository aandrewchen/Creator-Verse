import React from 'react'

import './Modal.css'

const Modal = ({ open, onClose, onDelete }) => {
  if (!open) return null

  return (
    <dialog onClick={onClose} open={open}>
      <article onClick={(e) => {
        e.stopPropagation()
      }}>
        <h3 className="medium-title">Confirm your action!</h3>
        <p className="medium-text">
          Are you sure you want to delete this creator? This action cannot be undone!
        </p>
        <footer>
          <a href="#cancel" role="button" onClick={onClose} className="secondary">Cancel</a>
          <a href="#confirm" role="button" onClick={onDelete} className="red">Delete</a>
        </footer>
      </article>
    </dialog>
  )
}

export default Modal