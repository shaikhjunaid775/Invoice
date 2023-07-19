import React, { Component } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import logo from "../assets/logo.png";
import InvoiceModal from "./InvoiceModal";
import CreditCardInput from "react-credit-card-input";
import cardImage from "../assets/credit-card.png";

// import "react-credit-cards/es/styles-compiled.css";

// const numWords = require('num-words')

export class InvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CompanyName: "",
            GstNo: "",
            Address: "",
            city: "",
            pincode: "",
            Website: "",
            personName: "",
            Mobile: "",
            Email: "",
            pkDesc: "",
            GstAmount: "",
            cheque1: "",
            cheque2: "",
            Bname1: "",
            Bname2: "",
            branch1: "",
            branch2: "",
            date1: "",
            date2: "",
            isOpen: false,
            currency: "₹",
            currentDate: "",
            invoiceNumber: 1,
            dateOfIssue: "",
            total: "0",
            subTotal: "0",
            taxRate: "0",
            taxAmmount: "18.5",
            isWebsite: "",
            isSEO: "",
            isTV: "",
            isOthers: "",
            cardNumber: "",
            cardName: "",
            expiry: "",
            cvc: "",
            issuer: "",
            focused: "",
            formData: null,
            title: "",
            neftacc: "",
            TransactionId: "",
            data: [],
        };
        this.state.items = [{
            id: 0,
            name: "",
            description: "",
            date: "",
            // price: "1.00",
            // quantity: 1,
        }, ];
        this.editField = this.editField.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.checkedBox = this.checkedBox.bind(this);
    }

    editField = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        // this.CalculateTotal();
        console.log(event.target.name);
    };

    checkedBox = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            this.setState({ data: [...this.state.data, event.target.name] });
        } else {
            const index = this.state.data.indexOf(event.target.name);
            this.state.data.splice(index, 1);
            this.setState({ data: this.state.data });
        }
    };

    handleSelect(title) {
        // alert(`selected ${title}`);
        this.setState({ title });
    }

    openModal = (event) => {
        event.preventDefault();

        // this.handleCalculateTotal();
        // console.log(this.state);
        this.setState({ isOpen: true });
    };
    closeModal = (event) => this.setState({ isOpen: false });

    render() {
        return ( <
            Form onSubmit = { this.openModal } >
            <
            Row >
            <
            Col md = { 8 }
            lg = { 9 } >
            <
            Card className = "p-4 p-xl-5 my-3 my-xl-4" >
            <
            div className = "d-flex flex-row align-items-start justify-content-between " >
            <
            div className = "d-flex flex-column" >
            <
            div className = "d-flex flex-column" >
            <
            div className = "" >
            <
            img src = { logo }
            alt = "Logo" / >
            <
            /div>{" "} <
            /div>{" "} <
            /div>{" "} <
            div className = "d-flex flex-column align-items-center" >
            <
            span className = "fw-bold" >
            Current & nbsp; Date: & nbsp; { " " } { new Date().toLocaleDateString() } { " " } <
            /span>{" "} <
            div className = "d-flex flex-row align-items-center" >
            <
            span className = "fw-bold me-2" >
            Invoice & nbsp; Number: & nbsp; { " " } <
            /span>{" "} <
            input type = "tel"
            name = { "invoiceNumber" }
            onChange = {
                (event) => this.editField(event) }
            value = { this.state.invoiceNumber }
            min = "1"
            style = {
                {
                    maxWidth: "70px",
                }
            }
            required = "required" /
            >
            <
            /div>{" "} <
            /div>{" "} <
            /div>{" "} <
            hr className = "my-4" / >
            <
            Row className = "mb-5" >
            <
            Col >
            <
            Form.Label className = "fw-bold" > Company Name: < /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "Company Name.." }
            value = { this.state.CompanyName }
            type = "text"
            name = "CompanyName"
            className = "my-2"
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "CompanyName"
            required = "required" /
            >
            <
            Form.Label className = "fw-bold" > Address: < /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "Address.." }
            value = { this.state.Address }
            type = "text"
            name = "Address"
            className = "my-2"
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "Address"
            required = "required" /
            >
            <
            Row className = " align-items-center my-2" >
            <
            Col lg = { 4 } >
            <
            Form.Label className = "fw-bold" >
            Location / Landmark:
            <
            /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "landmark.." }
            value = { this.state.landmark }
            type = "text"
            name = "landmark"
            className = "my-2"
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "Address"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col lg = { 4 } >
            <
            Form.Label className = "fw-bold" > City: < /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "City.." }
            value = { this.state.city }
            type = "text"
            name = "city"
            className = "my-2"
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "city"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col lg = { 4 } >
            <
            Form.Label className = "fw-bold" > Pincode: < /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "Pincode.." }
            value = { this.state.pincode }
            type = "number"
            name = "pincode"
            className = "my-2"
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "pincode"
            required = "required" /
            >
            <
            /Col>{" "} <
            /Row>{" "} <
            Form.Label className = "fw-bold" > GST Number: < /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "GST Number.." }
            value = { this.state.GstNo }
            type = "text"
            name = "GstNo"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "GstNo"
            required = "required" /
            >
            <
            Form.Label className = "fw-bold" > Website: < /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "Website.." }
            value = { this.state.Website }
            type = "text"
            name = "Website"
            className = "my-2"
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "Website"
            required = "required" /
            >
            <
            Row >
            <
            Form.Label className = "fw-bold" > { " " }
            Contact Person: { " " } <
            /Form.Label>{" "} <
            Col lg = { 4 } >
            <
            Form.Label className = "fw-bold" > Name: < /Form.Label>

            <
            Form.Control rows = { 3 }
            placeholder = { "Name.." }
            value = { this.state.personName }
            type = "text"
            name = "personName"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "personName"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col lg = { 4 } >
            <
            Form.Label className = "fw-bold " > Mobile: < /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "Mobile .." }
            value = { this.state.Mobile }
            type = "number"
            name = "Mobile"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "Mobile"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col lg = { 4 } >
            <
            Form.Label className = "fw-bold " > Email: < /Form.Label>{" "} <
            Form.Control rows = { 3 }
            placeholder = { "Email Number.." }
            value = { this.state.Email }
            type = "email"
            name = "Email"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "Email"
            required = "required" /
            >
            <
            /Col>{" "} <
            /Row>{" "} <
            Row >
            <
            div className = "p-3 mb-3 mt-3 bg-dark text-white text-center fw-bold" >
            PRODUCT & SERVICE DETAILS { " " } <
            /div>{" "} <
            div className = "d-flex justify-content-around" >
            <
            div className = "form-check" >
            <
            label className = "form-check-label" >
            <
            input type = "checkbox"
            onChange = {
                (event) => this.checkedBox(event) }
            className = "form-check-input"
            // defaultChecked="false"
            name = "Website" /
            >
            Website { " " } <
            /label>{" "} <
            /div>{" "} <
            div className = "form-check" >
            <
            label className = "form-check-label" >
            <
            input type = "checkbox"
            onChange = {
                (event) => this.checkedBox(event) }
            className = "form-check-input"
            // defaultChecked="false"
            name = "TV" /
            >
            TV { " " } <
            /label>{" "} <
            /div>{" "} <
            div className = "form-check" >
            <
            label className = "form-check-label" >
            <
            input type = "checkbox"
            onChange = {
                (event) => this.checkedBox(event) }
            className = "form-check-input"
            // defaultChecked="false"
            name = "SEO"
            value = "SEO" /
            >
            SEO { " " } <
            /label>{" "} <
            /div>{" "} <
            div className = "form-check" >
            <
            label className = "form-check-label" >
            <
            input type = "checkbox"
            onChange = {
                (event) => this.checkedBox(event) }
            className = "form-check-input"
            // defaultChecked="false"
            name = "others" /
            >
            Others { " " } <
            /label>{" "} <
            /div>{" "} <
            /div>{" "} <
            /Row>{" "} <
            Form.Label className = "fw-bold " >
            Pakage Description:
            <
            /Form.Label>{" "} <
            Form.Control as = "textarea"
            placeholder = { "Pakage Description.." }
            value = { this.state.pkDesc }
            type = "text"
            name = "pkDesc"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "pkDesc"
            required = "required" /
            >
            <
            Row >
            <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " >
            Billing / Payment Details:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Amount.." }
            value = { this.state.subTotal }
            type = "number"
            name = "subTotal"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "subTotal"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col md = { 6 }
            lg = { 6 } >
            <
            Row className = "mt-4 justify-content-end" >
            <
            Col lg = { 8 } >
            <
            div className = "d-flex flex-row align-items-start justify-content-between" >
            <
            span className = "fw-bold" > SubTotal: < /span>{" "} { this.state.subTotal } { " " } <
            /div>{" "} <
            div className = "d-flex flex-row align-items-start justify-content-between mt-2 " >
            <
            span className = "fw-bold align-self-center w-100" >
            GST: (18.5 % ) { " " } <
            /span>

            <
            Form.Control placeholder = { "GST Amount.." }
            type = "number"
            name = "taxRate"
            value = { this.state.taxRate }
            className = "my-2 fw-bold"
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "taxRate"
            required = "required" /
            >
            <
            /div>{" "} <
            hr / >
            <
            div className = "d-flex flex-row align-items-start justify-content-between"
            style = {
                {
                    fontSize: "1.125rem",
                }
            } >
            <
            span className = "fw-bold align-self-center w-100" >
            Total:
            <
            /span>{" "} <
            Form.Control placeholder = { "Total Amount.." }
            type = "number"
            name = "total"
            className = "my-2 fw-bold"
            value = { this.state.total }
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "total"
            required = "required" /
            >
            <
            /div>{" "} <
            /Col>{" "} <
            /Row>{" "} <
            hr className = "my-4" / >
            <
            /Col>{" "} <
            /Row>{" "} <
            Form.Check inline label = " I certify that i have read & accept Package details sheet
            with term & conditions started overleaf "
            name = "Checkbox"
            required /
            >
            <
            Tabs defaultActiveKey = "Cheque"
            id = "justify-tab-example"
            className = "mb-3"
            activeKey = { this.state.title }
            onSelect = { this.handleSelect }
            justify >
            <
            Tab eventKey = "Cheque"
            title = "Cheque/DD" >
            <
            div >
            <
            Row className = "my-4" >
            <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " >
            Cheque / CC No.:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Cheque/CC No..." }
            value = { this.state.cheque1 }
            type = "text"
            name = "cheque1"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "cheque1"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " >
            Cheque / CC No.:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Cheque/CC No..." }
            value = { this.state.cheque2 }
            type = "text"
            name = "cheque2"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "cheque2"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " >
            Bank Name:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Bank Name.." }
            value = { this.state.Bname1 }
            type = "text"
            name = "Bname1"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "Bname1"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " >
            Bank Name:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Bank Name.." }
            value = { this.state.Bname2 }
            type = "text"
            name = "Bname2"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "Bname2"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " >
            Branch Name:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Branch.." }
            value = { this.state.branch1 }
            type = "text"
            name = "branch1"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "branch1"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " >
            Branch Name:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Branch.." }
            value = { this.state.branch2 }
            type = "text"
            name = "branch2"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            autoComplete = "branch2"
            required = "required" /
            >
            <
            /Col>{" "} <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " > { " " }
            Date: { " " } <
            /Form.Label>{" "} <
            Form.Control value = { this.state.date1 }
            type = "date"
            name = "date1"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            />{" "} <
            /Col>{" "} <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " > { " " }
            Date: { " " } <
            /Form.Label>{" "} <
            Form.Control value = { this.state.date2 }
            type = "date"
            name = "date2"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            />{" "} <
            /Col>{" "} <
            p >
            Note: Cheque / DD to be issued in favour of { " " } <
            b > "SPOTPIXEL." < /b>{" "} <
            /p>{" "} <
            /Row>{" "} <
            /div>{" "} <
            /Tab>{" "} <
            Tab eventKey = "NEFT"
            title = "NEFT/RTGS" >
            <
            Row className = "my-4" >
            <
            Col md = { 6 }
            lg = { 6 } >
            <
            Form.Label className = "fw-bold " >
            Account No.:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Account No..." }
            value = { this.state.neftacc }
            type = "text"
            name = "neftacc"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            />{" "} <
            Form.Label className = "fw-bold " >
            Transaction Number:
            <
            /Form.Label>{" "} <
            Form.Control placeholder = { "Transaction No..." }
            value = { this.state.TransactionId }
            type = "text"
            name = "TransactionId"
            className = "my-2 "
            onChange = {
                (event) => this.editField(event) }
            />{" "} <
            /Col>{" "} <
            /Row>{" "} <
            /Tab>{" "} <
            Tab eventKey = "Credit Card"
            title = "Credit Card" >
            <
            br / >
            <
            Form >
            <
            Row className = "text-center" >
            <
            Col sm = { 11 } >
            <
            img src = { cardImage }
            alt = "" / >
            <
            /Col>{" "} <
            Col sm = { 11 } >
            <
            CreditCardInput cardCVCInputRenderer = {
                ({
                    handleCardCVCChange,
                    props,
                }) => ( <
                    input {...props }
                    onChange = {
                        handleCardCVCChange((e) =>
                            console.log("cvc change", e)
                        )
                    }
                    disabled /
                    >
                )
            }
            cardExpiryInputRenderer = {
                ({
                    handleCardExpiryChange,
                    props,
                }) => ( <
                    input {...props }
                    onChange = {
                        handleCardExpiryChange((e) =>
                            console.log("expiry change", e)
                        )
                    }
                    disabled /
                    >
                )
            }
            cardNumberInputRenderer = {
                ({
                    handleCardNumberChange,
                    props,
                }) => ( <
                    input {...props }
                    onChange = {
                        handleCardNumberChange((e) =>
                            console.log("number change", e)
                        )
                    }
                    disabled /
                    >
                )
            }
            />{" "} <
            /Col>{" "} <
            /Row>{" "} <
            br / >
            <
            br / >
            <
            h6 className = "text-left" >
            Note: Credit card Payment is not available at this moment. { " " } <
            /h6>{" "} <
            /Form>{" "} <
            /Tab>{" "} <
            Tab eventKey = "Cash"
            title = "Cash" > { " " } <
            /Tab>{" "} <
            /Tabs>{" "} <
            /Col>{" "} <
            /Row>{" "} <
            Row >
            <
            Col lg = { 4 }
            md = { 3 } >
            <
            Button variant = "primary"
            type = "submit"
            className = "d-block w-100" >
            Review Invoice { " " } <
            /Button>{" "} <
            InvoiceModal showModal = { this.state.isOpen }
            closeModal = { this.closeModal }
            info = { this.state }
            currency = { this.state.currency }
            subTotal = { this.state.subTotal }
            taxRate = { this.state.taxRate }
            total = { this.state.total }
            />{" "} <
            /Col>{" "} <
            /Row>{" "} <
            hr className = "my-4" / >
            <
            div className = "d-flex flex-column" >
            <
            div className = "d-flex flex-column" >
            <
            div className = "mb-2" >
            <
            p className = "text-center" >
            Haware Fantasia Business Park, Office no.S15, Second floor, Nano Wing, Sector 30 A, Vashi, Navi Mumbai,
            Maharashtra 400703 { " " } <
            /p>{" "} <
            /div>{" "} <
            div className = "footer text-center" >
            <
            Row >
            <
            Col md = { 4 }
            lg = { 4 } >
            <
            div className = "footer-detail" >
            <
            p > Mob.: +91 9819052514 < /p>{" "} <
            /div>{" "} <
            /Col>{" "} <
            Col md = { 4 }
            lg = { 4 } >
            <
            div className = "footer-detail" >
            <
            p > Email: support @spotpixel.in < /p>{" "} <
            /div>{" "} <
            /Col>{" "} <
            Col md = { 4 }
            lg = { 4 } >
            <
            div className = "footer-detail" >
            <
            p > Website: www.spotpixel.in < /p>{" "} <
            /div>{" "} <
            /Col>{" "} <
            /Row>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>{" "} <
            /Card>{" "} <
            /Col>{" "} <
            /Row>{" "} <
            /Form>
        );
    }
}

export default InvoiceForm;