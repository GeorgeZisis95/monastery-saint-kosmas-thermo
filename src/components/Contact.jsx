import "./Contact.css";
import Card from "./Card";

import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import { forwardRef } from "react";

const addressTitle = <h3>Διεύθυνση</h3>;
const addressText = (
  <>
    <p>Ιερά Μονή Αγίου Κοσμά</p>
    <p>Μέγα Δέντρο, Θέρμο Αιτωλοακαρνανίας</p>
    <p>Τ.Κ. 30015</p>
  </>
);

const phoneTitle = <h3>Τηλέφωνο</h3>;
const phoneText = (
  <>
    <p>26440 24050</p>
    <p>(Καθημερινά, 09:00 - 17:00)</p>
  </>
);

const mailTitle = <h3>Email</h3>;
const mailText = (
  <>
    <p>imagioukosma@gmail.com</p>
    <p>(Απαντάμε εντός δύο ημερών)</p>
  </>
);

function Contact(_, ref) {
  return (
    <div className="contact" ref={ref}>
      <h2>Επικοινωνία</h2>
      <div className="cards">
        <Card icon={address} title={addressTitle} text={addressText}></Card>
        <Card icon={phone} title={phoneTitle} text={phoneText}></Card>
        <Card icon={mail} title={mailTitle} text={mailText}></Card>
      </div>
      <div className="visit">
        <h2>Ώρες Επισκεπτηρίου</h2>
        <p>
          <strong>Καθημερινές:</strong> 8:00 - 13:00 & 16:00 -19:00
        </p>
        <p>
          <strong>Κυριακές:</strong> 7:00 - 13:00
        </p>
        <p className="sub-script">
          Οι γυναίκες επισκέπτριες μπορούν να επισκεφτούν το αρχονταρίκι και το
          καθολικό.
        </p>
      </div>
    </div>
  );
}

export default forwardRef(Contact);
