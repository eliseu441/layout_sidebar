
const headerStyle = { filter: 'blur(0.3px)', textAlign: 'center', minWidth: '70px', height: '40px', fontFamily: 'Lucida Sans', cursor: 'pointer', verticalAlign: 'middle', borderBottomWidth: '2px', color: 'white', }
const colunas = {



    STATUS_MACRO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'STATUS_MACRO',
        text: 'STATUS MACRO',
        sort: true,
    },
    ESCOPO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle"},
        editable: false,
        dataField: 'ESCOPO',
        text: 'ESCOPO',
        sort: true,
    },
    PENDENTE_ACUM: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'PENDENTE_ACUM',
        text: 'ACUMULADO',
        sort: true,
    },
    CONCLUÍDO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'CONCLUIDO',
        text: 'CONCLUIDO',
        sort: true,
    },
    PROGRESSAO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle"},
        editable: false,
        dataField: 'PROGRESSAO',
        text: 'PROGRESSAO',
        sort: true,
    },
    PEND_ESTEIRA_STATUS: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", backgroundColor: 'rgb(226, 113, 0, 0.3)' },
        editable: false,
        dataField: 'PEND_ESTEIRA',
        text: 'PEND. ESTEIRA',
        sort: true,
    },
    DIRETOR: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", backgroundColor: 'rgb(226, 113, 0, 0.3)' },
        editable: false,
        dataField: 'DIRETOR',
        text: 'DIRETOR',
        sort: true,
    },
    
}
export default colunas;