(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[163],{1972:function(e,a,t){"use strict";t.r(a);var i=t(13),r=t(14),n=t(16),l=t(15),o=t(0),s=t.n(o),c=t(1268),d=t(1271),u=t(791),m=t(795),g=t(792),f=t(790),p=t(801),h=t(176),S=t(818),w=t(170),v=t(304),b=t(301),z=t(436),E=t(259),N=t(40),C=t.n(N),P=(t(819),t(798)),D=t(21),y=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Name",field:"firstname",width:175,filter:!1,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Roles",field:"roles",filter:!1,width:250},{headerName:"address",field:"address",filter:!1,width:250},{headerName:"Actions View",field:"lastname",filter:!1,width:175},{headerName:"Mobille No.",field:"number",filter:"agNumberColumnFilter",width:140},{headerName:"Joining Date.",field:"Joining Date",filter:"agNumberColumnFilter",width:140},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(v.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return D.a.push("/app/staffManagement/staffForm")}}),s.a.createElement(b.a,{className:"mr-50",size:"25px",color:"blue"}),s.a.createElement(z.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("/api/aggrid/data").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,r=a.defaultColDef;return s.a.createElement(s.a.Fragment,null,s.a.createElement(P.a,{breadCrumbTitle:"staff Management"}),s.a.createElement(c.a,{className:"overflow-hidden agGrid-card"},s.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(u.a,{className:"p-1 ag-dropdown"},s.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(E.a,{className:"ml-50",size:15})),s.a.createElement(g.a,{right:!0},s.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(p.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(w.a.Consumer,null,(function(a){return s.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(s.a.Component);a.default=y}}]);
//# sourceMappingURL=163.96f6a36b.chunk.js.map