// import React from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
// } from "reactstrap";
// import { history } from "../../../../history";
// import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
// import axios from "axios";
// class ViewMOC extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {},
//     };
//   }

//   componentDidMount() {
//     let { id } = this.props.match.params;
//     axios
//       .get(`http://3.108.185.7/nodejs/api/dealer/getonebank/${id}`)
//       .then(response => {
//         // console.log(response.data);
//         console.log(response.data.data);
//         this.setState({ data: response.data.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div>
//           <Row>
//             <Col sm="12">
//               <div>
//                 <Breadcrumb listTag="div">
//                   <BreadcrumbItem href="/analyticsDashboard" tag="a">
//                     Home
//                   </BreadcrumbItem>
//                   <BreadcrumbItem href="/app/setting/moc/mOCList" tag="a">
//                     Bank List
//                   </BreadcrumbItem>
//                   <BreadcrumbItem active>View MOC</BreadcrumbItem>
//                 </Breadcrumb>
//               </div>
//             </Col>
//           </Row>
//           <Card className="overflow-hidden app-ecommerce-details">
//             <Row className="m-2">
//               <Col>
//                 <h1 col-sm-6 className="float-left">
//                   View Bank
//                 </h1>
//               </Col>
//               <Col>
//                 <Button
//                   className=" btn btn-danger float-right"
//                   onClick={() => history.push("/app/setting/moc/mOCList")}>
//                   Back
//                 </Button>
//               </Col>
//             </Row>
//             <CardBody className="pb-0">
//               <Row className="mb-5 mt-2">
//                 <Col md="6" sm="12" className="mb-4">
//                   <h4>Master Oil Company</h4>
//                   <h6 className=""> {this.state.data.name}</h6>
//                 </Col>
                
               
//               </Row>
//             </CardBody>
//           </Card>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default ViewMOC;