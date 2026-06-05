import BookingForm from "../components/BookingForm";
import ContactInfo from "../components/ContactInfo";

export default function Booking() {
  return (
    <>
      <section className="book-head dot-grid">
        <div className="wrap">
          <span className="eyebrow fade d1">Book a Delivery</span>
          <h1 className="fade d2">Book a <span className="hl">Delivery</span></h1>
          <p className="fade d3">
            Tell us what&apos;s moving and where. Fill in the details below and our team will confirm
            your pickup by phone — no payment needed to book.
          </p>
        </div>
      </section>

      <section className="sec book-body">
        <div className="wrap">
          <BookingForm />
        </div>
      </section>

      <ContactInfo />
    </>
  );
}