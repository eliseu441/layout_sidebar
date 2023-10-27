
const headerStyle = { filter: 'blur(0.3px)', textAlign: 'center', minWidth: '70px', height: '40px',fontFamily: 'Lucida Sans', cursor: 'pointer', verticalAlign: 'middle', borderBottomWidth: '2px', color: 'white', }
const timelineColumns = {



    INFO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', fontSize:'13px', verticalAlign: "middle", backgroundColor: 'rgb(102,0,153, 1)', color: 'white', borderBottomWidth: '2px', borderColor:'white'},
        editable: false,
        dataField: 'INFO',
        text: 'INFO',
        sort: true,
    },
    PROJETO_RE: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'PROJETO_RE',
        text: 'PROJETO_RE',
        sort: true,
    },
    ELAB_DRAFT: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px' },
        editable: false,
        dataField: 'ELAB_DRAFT',
        text: 'ELAB_DRAFT',
        sort: true,
    },
    VAL_DRAFT: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px' },
        editable: false,
        dataField: 'VAL_DRAFT',
        text: 'VAL_DRAFT',
        sort: true,
    },
    APROV_DRAFT: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'APROV_DRAFT',
        text: 'APROV_DRAFT',
        sort: true,
    },
    CONSTUCAO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'CONSTUCAO',
        text: 'CONSTUCAO',
        sort: true,
    },
    GABINETE: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'GABINETE',
        text: 'GABINETE',
        sort: true,
    },
    ENGENHARIA_TX: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'ENGENHARIA_TX',
        text: 'ENGENHARIA_TX',
        sort: true,
    },
    IMPLANTACAO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'IMPLANTACAO',
        text: 'IMPLANTACAO',
        sort: true,
    },
    ATIVACAO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'ATIVACAO',
        text: 'ATIVACAO',
        sort: true,
    },
    ATIVO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'ATIVO',
        text: 'ATIVO',
        sort: true,
    },
    MIGRADO: {
        headerStyle: headerStyle,
        style: { textAlign: 'center', verticalAlign: "middle", minWidth: '200px'},
        editable: false,
        dataField: 'MIGRADO',
        text: 'MIGRADO',
        sort: true,
    }
    
}
export default timelineColumns;