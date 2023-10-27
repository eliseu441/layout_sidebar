
const headerStyle = { filter: 'blur(0.3px)', textAlign: 'center', minWidth: '70px', height: '70px', fontFamily: 'Lucida Sans', cursor: 'pointer', verticalAlign: 'middle', borderBottomWidth: '2px', color: 'white', }
const colunas = {



    ID_SITE: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'ID_SITE',
        text: 'ID_SITE',
        sort: true,
    },
    REMANESCENTES: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", backgroundColor: 'rgb(226, 113, 0, 0.3)' },
        editable: false,
        dataField: 'REMANESCENTES',
        text: 'ADJACENTES',
        sort: true,
    },
    ID_ENGENHARIA: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'ID_ENGENHARIA',
        text: 'ID_ENGENHARIA',
        sort: true,
    },
    META: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'META',
        text: 'META',
        sort: true,
    },
    SITE: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", backgroundColor: 'rgb(219, 35, 35, 0.7)' },
        editable: false,
        dataField: 'SITE',
        text: 'SITE',
        sort: true,
    },
    PROJETO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'PROJETO',
        text: 'PROJETO',
        sort: true,
    },
    TOPOLOGIA: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'TOPOLOGIA',
        text: 'TOPOLOGIA',
        sort: true,
    },
    STATUS_MACRO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'STATUS_MACRO',
        text: 'STATUS_MACRO',
        sort: true,
    },
    RESPONSAVEL: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'RESPONSAVEL',
        text: 'RESPONSAVEL',
        sort: true,
    },
    STATUS_TRECHO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'STATUS_TRECHO',
        text: 'STATUS_TRECHO',
        sort: true,
    },
    TOPOLOGIA_FINAL: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle" },
        editable: false,
        dataField: 'TOPOLOGIA_FINAL',
        text: 'TOPOLOGIA_FINAL',
        sort: true,
    }
}
export default colunas;