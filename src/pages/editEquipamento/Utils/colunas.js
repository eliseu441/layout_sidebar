
const headerStyle = {filter: 'blur(0.3px)', textAlign: 'center', minWidth: '70px', fontFamily: 'Lucida Sans', cursor: 'pointer', verticalAlign: 'middle', borderBottomWidth: '2px', borderColor: 'rgb(0, 0, 0, 0.7)',  color: 'white', }
const colunas = {



    NR_SERIE: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'ID_SITE',
        text: 'NR_SERIE',
        sort: true, 
    },
    FABRICANTE: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'DATA_INSERCAO',
        text: 'FABRICANTE',
        sort: true,
    },
    MODELO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'ID_ENGENHARIA',
        text: 'MODELO',
        sort: true,
    },
    ID_OBRA: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'REGIONAL',
        text: 'ID_OBRA',
        sort: true,
    },
    REGIONAL: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'UF',
        text: 'REGIONAL',
        sort: true,
    },
    UF: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'SITE',
        text: 'UF',
        sort: true,
    },
    SITE_DEFINIDO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'TIPO_SITE',
        text: 'SITE_DEFINIDO',
        sort: true,
    },
    PROJETO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'CLASSIFICACAO',
        text: 'PROJETO',
        sort: true,
    },
    SUBPROJETO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'META_ANO',
        text: 'SUBPROJETO',
        sort: true,
    },
    DATA_INCLUSAO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'META_MES',
        text: 'DATA_INCLUSAO',
        sort: true,
    },
    SITE_INSTALADO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'HOSTNAME',
        text: 'SITE_INSTALADO',
        sort: true,
    },
    DATA_INSTALACAO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center' },
        editable: false,
        dataField: 'PROJETO',
        text: 'DATA_INSTALACAO',
        sort: true,
    }
}
export default colunas;