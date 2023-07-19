import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "../assets/logo.png";
import { styled } from "styled-components";
// import TermAndCondition from "./TermAndCondition";

function GenerateInvoice() {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 400],
    });

    // pdf.internal.scaleFactor = 1;
    // const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.height;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    // pdf.pagesplit();
    pdf.save("invoice-001.pdf");
  });
}

const numWords = require("num-words");

class InvoiceModal extends React.Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.showModal}
          onHide={this.props.closeModal}
          size="lg"
          centered
        >
          <div className="pb-4 py-4 px-2">
            <Row>
              <Col md={6}>
                <Button
                  variant="primary"
                  className="d-block w-100"
                  onClick={GenerateInvoice}
                >
                  <BiPaperPlane
                    style={{
                      width: "15px",
                      height: "15px",
                      marginTop: "-3px",
                    }}
                    className="me-2"
                  />
                  Send Invoice{" "}
                </Button>{" "}
              </Col>{" "}
              <Col md={6}>
                <Button
                  variant="outline-primary"
                  className="d-block w-100 mt-3 mt-md-0"
                  onClick={GenerateInvoice}
                >
                  <BiCloudDownload
                    style={{
                      width: "16px",
                      height: "16px",
                      marginTop: "-3px",
                    }}
                    className="me-2"
                  />
                  Download Copy{" "}
                </Button>{" "}
              </Col>{" "}
            </Row>{" "}
          </div>{" "}
          <div id="invoiceCapture" className="m-2">
            <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100">
              <div className="">
                <h6 className="fw-bold my-2">
                  <img src={logo} alt="Logo" />
                </h6>{" "}
              </div>{" "}
              <div className="text-end p-4">
                <h6 className="fw-bold mb-1">
                  Invoice Number: {this.props.info.invoiceNumber || ""}{" "}
                </h6>{" "}
                <div className="fw-bold mt-2"> Current Date: </div>{" "}
                <div> {new Date().toLocaleDateString()} </div>{" "}
                {/* <div>{this.props.info.dateOfIssue || ""}</div> */}{" "}
              </div>{" "}
            </div>{" "}
            <div>
              <h2
                className="fw-bold text-center
            m - 2 "
              >
                {" "}
                Contract Cum Invoice{" "}
              </h2>{" "}
            </div>{" "}
            <div className="p-4">
              <Row className=" align-items-center py-2 border-bottom border-top border-dark">
                <Col lg={3}>
                  <h6 className="fw-bold "> Company Name: </h6>{" "}
                </Col>{" "}
                <Col>
                  <h6 className=""> {this.props.info.CompanyName || ""} </h6>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row className=" align-items-center py-2 border-bottom border-dark">
                <Col lg={3}>
                  <h6 className="fw-bold "> Address: </h6>{" "}
                </Col>{" "}
                <Col>
                  <h6 className=""> {this.props.info.Address || ""} </h6>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row className=" align-items-center py-2 border-bottom border-dark">
                <Col className="border-end border-dark">
                  <div className="d-flex">
                    <h6 className="fw-bold"> Location / Landmark: & nbsp; </h6>{" "}
                    <h6 className=""> {this.props.info.landmark || ""} </h6>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col lg={3} className="border-end border-dark">
                  <div className="d-flex ">
                    <h6 className="fw-bold "> City: & nbsp; </h6>{" "}
                    <h6 className=""> {this.props.info.city || ""} </h6>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col lg={3}>
                  <div className="d-flex">
                    <h6 className="fw-bold "> Pincode: & nbsp; </h6>{" "}
                    <h6 className=""> {this.props.info.pincode || ""} </h6>{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row className=" align-items-center py-2 border-bottom border-dark">
                <Col lg={3}>
                  <h6 className="fw-bold "> GST No.: </h6>{" "}
                </Col>{" "}
                <Col>
                  <h6 className=""> {this.props.info.GstNo || ""} </h6>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row className=" align-items-center py-2 border-bottom border-dark">
                <Col lg={3}>
                  <h6 className="fw-bold "> Website: </h6>{" "}
                </Col>{" "}
                <Col>
                  <h6 className=""> {this.props.info.Website || ""} </h6>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row className=" align-items-center py-2 border-bottom border-dark">
                <Col lg={4} className="border-end border-dark">
                  <div className="d-flex">
                    <h6 className="fw-bold "> Contact Person Name: </h6>{" "}
                    <h6 className=""> {this.props.info.personName || ""} </h6>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col lg={4} className="border-end border-dark">
                  <div className="d-flex">
                    <h6 className="fw-bold "> Mobile: </h6>&nbsp;{" "}
                    <h6 className=""> {this.props.info.Mobile || ""} </h6>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col lg={4} className="">
                  <div className="d-flex">
                    <h6 className="fw-bold "> Email: & nbsp; </h6>{" "}
                    <h6 className=""> {this.props.info.Email || ""} </h6>{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row className=" align-items-center py-2 border-bottom border-dark ">
                <Col>
                  <h6 className="fw-bold ">
                    {" "}
                    Product & Service Detail: & nbsp;{" "}
                  </h6>{" "}
                  <ul style={{ listStyleType: "number" }}>
                    {" "}
                    {this.props.info.data.map((item) => {
                      return (
                        <ul style={{ listStyleType: "disc" }}>
                          <li> {item} </li>{" "}
                        </ul>
                      );
                    })}{" "}
                  </ul>{" "}
                </Col>{" "}
              </Row>{" "}
              <Table className="m-0">
                <thead>
                  <tr>
                    <th> DESCRIPTION </th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  {
                    <tr>
                      <td> {this.props.info.pkDesc} </td>{" "}
                      <td className="text-end fw-bold"> </td>{" "}
                    </tr>
                  }{" "}
                </tbody>{" "}
              </Table>{" "}
              <Table>
                <tbody>
                  <tr>
                    <td className="text-capitalize"> </td>{" "}
                    <td className="">
                      <span className="fw-bold"> AMOUNT: </span>{" "}
                      {this.props.info.total}{" "}
                    </td>{" "}
                    <td> & nbsp; </td>{" "}
                  </tr>{" "}
                  <tr className="text-end">
                    <td className="border-0"> </td>{" "}
                    <td className="fw-bold" style={{ width: "100px" }}>
                      SUBTOTAL{" "}
                    </td>{" "}
                    <td className="text-end" style={{ width: "100px" }}>
                      {" "}
                      {this.props.currency} {this.props.subTotal}{" "}
                    </td>{" "}
                  </tr>{" "}
                  {this.props.taxRate !== 0.0 && (
                    <tr className="text-end">
                      <td className="border-0"> </td>{" "}
                      <td className="fw-bold" style={{ width: "100px" }}>
                        TAX{" "}
                      </td>{" "}
                      <td className="text-end" style={{ width: "100px" }}>
                        {" "}
                        {this.props.currency} {this.props.taxRate}{" "}
                      </td>{" "}
                    </tr>
                  )}{" "}
                  <tr className="text-end">
                    <td className="border-1">
                      <span className="fw-bold"> Payment in words: </span>{" "}
                      {numWords(this.props.info.total)}{" "}
                    </td>{" "}
                    <td className="fw-bold" style={{ width: "100px" }}>
                      TOTAL{" "}
                    </td>{" "}
                    <td className="text-end" style={{ width: "100px" }}>
                      {" "}
                      {this.props.currency} {this.props.total}{" "}
                    </td>{" "}
                  </tr>{" "}
                </tbody>{" "}
              </Table>{" "}
              <div className="d-flex">
                <h6 className="fw-bold "> Payment Method: & nbsp; </h6>{" "}
                <div>
                  <h6> {this.props.info.title} </h6>{" "}
                </div>{" "}
              </div>{" "}
              {this.props.info.title === "Cheque" ? (
                <Row>
                  <Col lg={6}>
                    <div className="d-flex">
                      <h6 className="fw-bold "> Cheque / CC Number: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.cheque1 || ""} </h6>{" "}
                    </div>{" "}
                    <div className="d-flex">
                      <h6 className="fw-bold "> Bank Name: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.Bname1 || ""} </h6>{" "}
                    </div>{" "}
                    <div className="d-flex">
                      <h6 className="fw-bold "> Branch: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.branch1 || ""} </h6>{" "}
                    </div>{" "}
                    <div className="d-flex">
                      <h6 className="fw-bold "> Date: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.date1 || ""} </h6>{" "}
                    </div>{" "}
                  </Col>{" "}
                  <Col lg={6}>
                    <div className="d-flex">
                      <h6 className="fw-bold "> Cheque / CC Number: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.cheque2 || ""} </h6>{" "}
                    </div>{" "}
                    <div className="d-flex">
                      <h6 className="fw-bold "> Bank Name: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.Bname2 || ""} </h6>{" "}
                    </div>{" "}
                    <div className="d-flex">
                      <h6 className="fw-bold "> Branch: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.branch2 || ""} </h6>{" "}
                    </div>{" "}
                    <div className="d-flex">
                      <h6 className="fw-bold "> Date: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.date2 || ""} </h6>{" "}
                    </div>{" "}
                  </Col>{" "}
                </Row>
              ) : this.props.info.title === "NEFT" ? (
                <Row>
                  <Col lg={6}>
                    <div className="d-flex">
                      <h6 className="fw-bold "> Account No.: </h6>&nbsp;{" "}
                      <h6 className=""> {this.props.info.neftacc || ""} </h6>{" "}
                    </div>{" "}
                    <div className="d-flex">
                      <h6 className="fw-bold "> Transaction ID: </h6>&nbsp;{" "}
                      <h6 className="">
                        {" "}
                        {this.props.info.TransactionId || ""}{" "}
                      </h6>{" "}
                    </div>{" "}
                  </Col>{" "}
                </Row>
              ) : this.props.info.title === "Credit Card" ? (
                ""
              ) : this.props.info.title === "Cash" ? (
                ""
              ) : (
                ""
              )}{" "}
              {this.props.info.notes && (
                <div className="bg-light py-3 px-4 rounded">
                  {" "}
                  {this.props.info.notes}{" "}
                </div>
              )}{" "}
            </div>{" "}
            <div id="sign-stamp ">
              <Row className="d-flex mx-4">
                <Col lg={12}>
                  <div className="my-4">
                    <h6> Pancard No.AUOPK6002E </h6>{" "}
                    <h6> GSTIN No .27 AUOPK6002E1ZS </h6>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col md={4} lg={3}>
                  <div className="sign-detail">
                    <span> </span>{" "}
                    <h6 style={{ textDecoration: "overline" }}>
                      Exicutive Name & Signature{" "}
                    </h6>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col md={4} lg={3}>
                  <div className="sign-detail">
                    <span> </span>{" "}
                    <h6 style={{ textDecoration: "overline" }}>
                      {" "}
                      Approved By{" "}
                    </h6>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col md={4} lg={3}>
                  <div className="sign-detail">
                    <span> </span>{" "}
                    <h6 style={{ textDecoration: "overline" }}>
                      Authorized Signature & Stamp{" "}
                    </h6>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col md={4} lg={3}>
                  <div className="sign-detail">
                    <span> </span>{" "}
                    <h6 style={{ textDecoration: "overline" }}>
                      {" "}
                      Designation{" "}
                    </h6>{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row>
                <Col>
                  <div className="bg-light">
                    <h6 className="text-center m-0 p-2">
                      Haware Fantasia Business Park, Office no.S15, Second
                      floor, Nano Wing, Sector 30 A, Vashi, Navi Mumbai,
                      Maharashtra 400703{" "}
                    </h6>{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>{" "}
            </div>{" "}
            {/* <TermAndCondition /> */}{" "}
          </div>{" "}
        </Modal>{" "}
        <hr className="mt-4 mb-3" />
      </div>
    );
  }
}

export default InvoiceModal;
