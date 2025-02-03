
interface ModalProps {
    imageUrl:string ;
    onClose:() => void;
}

const Modal: React.FC<ModalProps> = ({imageUrl,onClose}) =>{
    return(
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="close-btn">X</button>
          <img src={imageUrl} alt="Imagen ampliada" className="modal-image" />
        </div>
      </div>
    )
}

export default Modal