import {useState} from "react";

const useModalElement = () =>{
    const [modalElement, setModalElement] = useState(false);

    const closeModal = () => {
        setModalElement(false);
    };
    const openModal = () => {
        setModalElement(true);
    };

    return { modalElement,closeModal,openModal };

};
export default useModalElement;