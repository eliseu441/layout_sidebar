
import ReactDOM from 'react-dom';
import React, { useState, useEffect, Component } from 'react';
import DataTable from "react-data-table-component";
import {useNavigate} from 'react-router-dom'



const Modal = ({ isOpen, onClose, children }) => {
    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: isOpen ? 'block' : 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
    };



    return ReactDOM.createPortal(
        <div style={modalStyle}>
            <div className="ml-0 col-12" class='modalContentStyle'>
                <div class='closeModal'>
                    <button className="btn btn-danger " onClick={onClose}><i class="bi bi-x-lg"></i></button>
                </div>

                {children}
            </div>

        </div>,
        document.body
    );
};


const ModalEdit = ({ idSite, open, onClose, dadosSite }) => {
    const [isOpen, setIsOpen] = useState(open ? open : false);
    const [etapa, setEtapa] = useState('');
    const closeModal = async () => {
        onClose('parâmetro enviado');

        setIsOpen(false);
    };
    const columns = [
      {
        name: "EDITAR",
        cell: (row) => <button class="btn btn-outline-primary button-circuito-modal"  id="teste" onClick={() => redirection(row.ID_SITE)}><i class="bi bi-send-plus-fill"></i></button>,
        width: "100px"
        
      },
      {
        name: "ID_SITE", selector: "ID_SITE", sortable: true
        
      },
      {
        name: "CIRCUITO", selector: "CIRCUITO", sortable: true
      },
      {
        name: "ID_ENGENHARIA", selector: "ID_ENGENHARIA", sortable: true
      },
      {
        name: "META", selector: "META", sortable: true
      },
      {
        name: "SITE", selector: "SITE", sortable: true
      },
      {
        name: "PROJETO", selector: "PROJETO", sortable: true
      },
      {
        name: "TOPOLOGIA", selector: "TOPOLOGIA", sortable: true, width:"210px"
      },
      {
        name: "STATUS_MACRO", selector: "STATUS_MACRO", sortable: true
      },
      {
        name: "RESPONSAVEL", selector: "RESPONSAVEL", sortable: true
      },
      {
        name: "STATUS_TRECHO", selector: "STATUS_TRECHO", sortable: true
      },
      {
        name: "TOPOLOGIA_FINAL", selector: "TOPOLOGIA_FINAL", sortable: true
      }
  
    ];
  
      const navigate = useNavigate()
      const redirection= (id) => {


        const params = {
          id:id
        }
        navigate(`/editarSite/${params.id}`);
      
      }
      
      

    return (
        <div>
            {isOpen ?
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <h3 style={{ fontWeight: "bold" }} class="mb-4 headerModal ">Sites no circuito {idSite}</h3>
                    
                    <div class="row">
                    </div>
                    <div class='col-12 row table-topo'>
                        <DataTable
                            columns={columns}
                            data={dadosSite}
                        />
                    </div>
                    <div >


                    </div>
                </Modal>
                : <></>
            }

        </div >
    );
};

export default ModalEdit;