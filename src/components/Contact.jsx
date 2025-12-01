import "./Contact.css";
import Card from "./Card";

import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";

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

export default function Contact() {
  return (
    <div className="contact">
      <h2>Επικοινωνία</h2>
      <Card icon={address} title={addressTitle} text={addressText}></Card>
      <Card icon={phone} title={phoneTitle} text={phoneText}></Card>
      <Card icon={mail} title={mailTitle} text={mailText}></Card>
    </div>
  );
}
