
import ReactDOM from 'react-dom';
import React, { useState, useEffect, Component, useRef } from 'react';
import { Combobox } from 'react-widgets';
import Switch from "react-switch";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";



const Modal = ({ isOpen, onClose, children, wrapperRef }) => {
    const modalStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,


        justifyContent: 'center',
        display: isOpen ? 'flex' : 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
    };



    return ReactDOM.createPortal(
        <div style={modalStyle} >
            <div className="ml-0" class='modalContentStyle' ref={wrapperRef}>
                <div class='closeModal'>
                    <button className="btn btn-danger" id="close-modal-edit" onClick={onClose}><i class="bi bi-x-lg"></i></button>
                </div>

                {children}
            </div>

        </div>,
        document.body
    );
};
function useOutsideAlerter(ref) {

    useEffect(() => {


        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log('teste')
                var checkbox = document.querySelector("#close-modal-edit")
                checkbox.click()

            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}


const ModalEdit = ({ idSite, open, onClose, dadosSite }) => {
    const [isOpen, setIsOpen] = useState(open ? open : false);
    const [etapa, setEtapa] = useState('');
    const [tipoConstrucao, setTipoConstrucao] = useState('');
    const [justificativa, setJustificativa] = useState('');
    const [portas, setPortas] = useState('');
    const [hostname, setHostname] = useState('');
    const [checkPlan, setCheackPlan] = useState(false);
    const [checkRealizado, setCheackRealizado] = useState(false);
    const [dobPlan, setDobPlan] = useState(null);
    const [dobReal, setDobReal] = useState(null);
    const [focusedReal, setFocusedReal] = useState(false);
    const [focusedPlan, setFocusedPlan] = useState(false);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);


    const setDatePlan = (date) => {
        setDobPlan(date);
        setFocusedPlan(false);
    };
    const setDateReal = (date) => {
        setDobReal(date);
        setFocusedReal(false);
    };


    const handleChangePlan = nextChecked => {
        setCheackPlan(nextChecked);
    };
    const handleChangeRealizado = nextChecked => {
        setCheackRealizado(nextChecked);
    };
    const options = ['INFRA/GABINETE', 'CONSTRUÇÃO REDE EXT', 'LIB IMPLANTAÇÃO', 'INSTALAÇÃO', 'ATIVAÇÃO', 'PROJETO REDE EXT', 'ELABORAÇÃO DRAFT', 'APROVAÇÃO DRAFT', 'MIGRAÇÃO', 'SINÓPTICO', 'CONFIGURAÇÃO', 'STATUS SITE'];
    const tipo_construcao = ['FLAT', 'DUPLA'];
    const justificativaOptions = ['FLAT', 'DUPLA'];
    const portasOptions = [1, 2, 3, 4];


    const closeModal = async () => {
        onClose('parâmetro enviado');

        setIsOpen(false);
    };
    const onFocusChangePlan = ({ focused }) => {
        setFocusedPlan(focused);
    };
    const onFocusChangeReal = ({ focused }) => {
        setFocusedReal(focused);
    };
    console.log(etapa)


    return (
        <div >
            {isOpen ?
                <Modal isOpen={isOpen} onClose={closeModal} wrapperRef={wrapperRef}>
                    <h3 style={{ fontWeight: "bold" }} class="mb-4 headerModal ">ID_SITE: {idSite}</h3>
                    <div class='row'>
                        <div className="dadosSite" class='col-12 mb-2 dadosSite'>
                            <div class='col-4 mb-1'>
                                <span class='infos'> Projeto: </span>
                                <span>{dadosSite[0].PROJETO}</span>

                            </div>

                            <div class='col-4 mb-1'>
                                <span class='infos'> SubProjeto: </span>
                                <span>{dadosSite[0].SUBPROJETO}</span>
                            </div>

                            <div class='col-4 mb-1'>
                                <span class='infos'> Regional: </span>
                                <span>{dadosSite[0].REGIONAL}</span>
                            </div>

                            <div class='col-4 mb-1'>
                                <span class='infos'> Tipo Site: </span>
                                <span>{dadosSite[0].TIPO_SITE}</span>
                            </div>

                            <div class='col-4 mb-1'>
                                <span class='infos'> Classificação: </span>
                                <span>{dadosSite[0].CLASSIFICACAO}</span>
                            </div>

                            <div class='col-4 mb-1'>
                                <span class='infos'> Site: </span>
                                <span>{dadosSite[0].SITE}</span>
                            </div>

                            <div class='col-4 mb-1'>
                                <span class='infos'> Ano-base: </span>
                                <span>{dadosSite[0].ANO_BASE}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class='col-4 comboSite'>
                            <span> Escolha a etapa que deseja editar:  </span>
                            <Combobox
                                textField='name'
                                data={options}
                                className="col-12 comboSiteText"
                                placeholder="ETAPA"
                                onChange={(param) => setEtapa(param)}
                            />

                        </div>
                    </div>
                    <div class='col-12 row'>
                        {etapa !== '' ?


                            <div class='mt-3 col-md-6 row'>
                                <span class='col-12'>Data Planejada</span>
                                <div class="col-2 mt-2">
                                    <Switch
                                        height={20}
                                        handleDiameter={30}
                                        width={48}
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                        onChange={handleChangePlan}
                                        onColor="#86d3ff"
                                        onHandleColor="#2693e6"
                                        checked={checkPlan} />
                                </div>
                                <div class='col-4 datePicker d-flex p-2'>
                                    <SingleDatePicker
                                        date={dobPlan}
                                        onOutsideClick={true}
                                        numberOfMonths={1}
                                        onDateChange={setDatePlan}
                                        openDirection='up'
                                        placeholder="dd/mm/yyyy"
                                        focused={focusedPlan}
                                        disabled={!checkPlan}
                                        onFocusChange={onFocusChangePlan}
                                        id="dobPlan"
                                    />
                                </div>
                                <button className="btn btn-danger col-2 mt-1 deleteDate" onClick={e => setDatePlan(null)}> <i class="bi bi-trash-fill"></i> </button>


                                <span class='col-12'>Data Realizada</span>
                                <div class="col-2 mt-2">
                                    <Switch
                                        height={20}
                                        handleDiameter={30}
                                        width={48}
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                        onChange={handleChangeRealizado}
                                        onColor="#86d3ff"
                                        onHandleColor="#2693e6"
                                        checked={checkRealizado} />
                                </div>
                                <div class='col-4 datePicker'>
                                    <SingleDatePicker
                                        date={dobReal}
                                        onOutsideClick={true}
                                        numberOfMonths={1}
                                        onDateChange={setDateReal}
                                        openDirection='up'
                                        placeholder="dd/mm/yyyy"
                                        focused={focusedReal}
                                        disabled={!checkRealizado}
                                        onFocusChange={onFocusChangeReal}
                                        id="dobReal"
                                    />

                                </div>
                            </div>

                            : <></>
                        }
                        {etapa == 'CONSTRUÇÃO REDE EXT' ?


                            <div class="col-md-6 mt-4">
                                <div class='col-5'>
                                    <span> Tipo de construção:  </span>
                                    <Combobox
                                        textField='construcao'
                                        data={tipo_construcao}
                                        className="col-12 comboSiteText"
                                        placeholder="CONSTRUCAO"
                                        onChange={(param) => setTipoConstrucao(param)}
                                    />

                                </div>
                            </div>

                            : <></>
                        }
                        {etapa == 'LIB IMPLANTAÇÃO' ?


                            <div class="col-md-6 mt-4">
                                <div class='col-5'>
                                    <span> Quantidade de portas:  </span>
                                    <i class="bi bi-arrow-down"></i>
                                    <Combobox
                                        textField='construcao'
                                        data={portasOptions}
                                        className="col-12 comboSiteText"
                                        placeholder="PORTAS UPLINK"
                                        onChange={(param) => setPortas(param)}
                                    />

                                </div>
                                <div class='col-5'>
                                    <span> Justificativa:  </span>
                                    <i class="bi bi-arrow-down"></i>
                                    <Combobox
                                        textField='construcao'
                                        data={justificativaOptions}
                                        className="col-12 comboSiteText"
                                        placeholder="JUSTIFICATIVA"
                                        onChange={(param) => setJustificativa(param)}
                                    />

                                </div>

                            </div>


                            : <></>
                        }
                        {etapa == 'ATIVAÇÃO' ?


                            <div class="col-md-6 mt-4">
                                <span> QTD. Portas UPlink Ativado: </span>
                                <div class='col-5'>

                                    <Combobox
                                        textField='construcao'
                                        data={portasOptions}
                                        className="col-12 comboSiteText"
                                        placeholder="PORTAS UPLINK"
                                        onChange={(param) => setPortas(param)}
                                    />

                                </div>
                            </div>

                            : <></>
                        }
                        {etapa == 'PROJETO REDE EXT' ?


                            <div class="col-md-6 mt-4">
                                <span> Tipo de Projeto: </span>
                                <div class='col-5'>

                                    <Combobox
                                        textField='construcao'
                                        data={justificativaOptions}
                                        className="col-12 comboSiteText"
                                        placeholder="TIPO PROJETO"
                                        onChange={(param) => setJustificativa(param)}
                                    />

                                </div>
                            </div>

                            : <></>
                        }
                        {etapa == 'SINÓPTICO' ?


                            <div class="col-md-6 mt-4">
                                <span> Hostname: </span>
                                <div>
                                    <input type="text" class="hostname" value={hostname} onChange={e => setHostname(e.target.value)} />
                                </div>

                            </div>

                            : <></>
                        }

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