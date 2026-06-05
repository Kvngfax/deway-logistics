import { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  User, Phone, MapPin, PackageCheck, CalendarClock, Boxes, Truck, ArrowRight, CheckCircle2,
} from "lucide-react";

/* EmailJS — reuse your service + public key, add a booking-specific template.
   In .env:
     VITE_EMAILJS_SERVICE_ID=...            (same as contact form)
     VITE_EMAILJS_BOOKING_TEMPLATE_ID=...   (NEW template, formatted for bookings)
     VITE_EMAILJS_PUBLIC_KEY=...            (same as contact form)
   In the EmailJS template, set the "To" address to
   (or use the {{to_email}} variable we pass below). */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_EMAIL = "dewaylogistics@gmail.com";

const DELIVERY_TYPES = [
  "Same-Day Delivery",
  "Next-Day Delivery",
  "Interstate Delivery",
  "Corporate Courier Services",
  "SME Logistics Solutions",
  "E-commerce Delivery",
  "Last-Mile Delivery",
  "Warehousing & Inventory Management",
];

const PACKAGE_TYPES = [
  "Document / Envelope",
  "Parcel / Box",
  "Fragile item",
  "Electronics",
  "Food / Perishable",
  "Clothing / Textiles",
  "Furniture / Bulky",
  "Other",
];

const EMPTY = {
  senderName: "", senderPhone: "", pickupAddress: "",
  receiverName: "", receiverPhone: "", receiverAddress: "",
  deliveryType: "", pickupDate: "", pickupTime: "",
  packageType: "", packageWeight: "", packageDimensions: "", packageQuantity: "1",
  instructions: "",
};

const REQUIRED = {
  senderName: "Sender name is required.",
  senderPhone: "Sender phone is required.",
  pickupAddress: "Pickup address is required.",
  receiverName: "Receiver name is required.",
  receiverPhone: "Receiver phone is required.",
  receiverAddress: "Receiver address is required.",
  deliveryType: "Please choose a delivery type.",
  pickupDate: "Please choose a pickup date.",
  pickupTime: "Please choose a pickup time.",
  packageType: "Please select a package type.",
  packageQuantity: "Quantity is required.",
};

export default function BookingForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const hp = useRef(null); // anti-spam honeypot

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    Object.keys(REQUIRED).forEach((k) => {
      if (!String(form[k]).trim()) next[k] = REQUIRED[k];
    });
    if (form.packageQuantity && Number(form.packageQuantity) < 1)
      next.packageQuantity = "Quantity must be at least 1.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus({ type: "bad", message: "Please complete the highlighted fields." });
      return false;
    }
    return true;
  };

  const buildMessage = () =>
    [
      "NEW BOOKING REQUEST",
      "",
      "— Sender —",
      `Name: ${form.senderName}`,
      `Phone: ${form.senderPhone}`,
      `Pickup address: ${form.pickupAddress}`,
      "",
      "— Receiver —",
      `Name: ${form.receiverName}`,
      `Phone: ${form.receiverPhone}`,
      `Address: ${form.receiverAddress}`,
      "",
      "— Delivery —",
      `Type: ${form.deliveryType}`,
      `Pickup: ${form.pickupDate} at ${form.pickupTime}`,
      "",
      "— Package —",
      `Type: ${form.packageType}`,
      `Quantity: ${form.packageQuantity}`,
      `Weight: ${form.packageWeight || "—"}`,
      `Dimensions: ${form.packageDimensions || "—"}`,
      "",
      "— Special instructions —",
      form.instructions || "None",
    ].join("\n");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    // Honeypot: a bot filled the hidden field — silently accept without sending.
    if (hp.current && hp.current.value) {
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: TO_EMAIL,
          sender_name: form.senderName,
          sender_phone: form.senderPhone,
          pickup_address: form.pickupAddress,
          receiver_name: form.receiverName,
          receiver_phone: form.receiverPhone,
          receiver_address: form.receiverAddress,
          delivery_type: form.deliveryType,
          pickup_date: form.pickupDate,
          pickup_time: form.pickupTime,
          package_type: form.packageType,
          package_weight: form.packageWeight,
          package_dimensions: form.packageDimensions,
          package_quantity: form.packageQuantity,
          special_instructions: form.instructions,
          message: buildMessage(),
        },
        { publicKey: PUBLIC_KEY }
      );
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus({ type: "bad", message: "Something went wrong sending your booking. Please try again or call us." });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus({ type: "", message: "" });
    setDone(false);
  };

  if (done) {
    return (
      <div className="bk-success">
        <div className="bk-success-ic"><CheckCircle2 /></div>
        <h2>Booking received!</h2>
        <p>
          Thank you, {form.senderName || "there"}. Your {form.deliveryType || "delivery"} request has
          been sent to our team. We&apos;ll call you on {form.senderPhone || "your number"} shortly to
          confirm pickup.
        </p>
        <button className="btn btn-primary" onClick={reset}>Book another delivery</button>
      </div>
    );
  }

  const field = (name, label, props = {}, opts = null) => {
    const errored = errors[name];
    const id = `bk-${name}`;
    return (
      <div className={`bk-field ${props.span2 ? "span-2" : ""} ${errored ? "is-error" : ""}`}>
        <label htmlFor={id}>{label}{REQUIRED[name] ? <span className="req">*</span> : null}</label>
        {opts ? (
          <select id={id} name={name} value={form[name]} onChange={update}>
            <option value="">{props.placeholder || "Select…"}</option>
            {opts.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : props.textarea ? (
          <textarea id={id} name={name} value={form[name]} onChange={update} placeholder={props.placeholder} rows={4} />
        ) : (
          <input
            id={id}
            name={name}
            type={props.type || "text"}
            value={form[name]}
            onChange={update}
            placeholder={props.placeholder}
            min={props.min}
            step={props.step}
            inputMode={props.inputMode}
          />
        )}
        {errored && <span className="bk-err">{errored}</span>}
      </div>
    );
  };

  return (
    <div className="booking-grid">
      <form className="bk-form" onSubmit={onSubmit} noValidate>
        {/* anti-spam honeypot — leave empty; hidden from real users */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="bk-company-website">Company</label>
          <input id="bk-company-website" ref={hp} type="text" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        {status.message && <p className={`form-note ${status.type}`} role="alert">{status.message}</p>}

        <section className="bk-section">
          <div className="bk-sec-head"><span className="bk-num"><User className="ic" /></span><h3>Sender details</h3></div>
          <div className="bk-fields">
            {field("senderName", "Sender name", { placeholder: "Full name" })}
            {field("senderPhone", "Phone number", { type: "tel", inputMode: "tel", placeholder: "e.g. 0803 000 0000" })}
            {field("pickupAddress", "Pickup address", { span2: true, placeholder: "Street, area, city, state" })}
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-sec-head"><span className="bk-num"><MapPin className="ic" /></span><h3>Receiver details</h3></div>
          <div className="bk-fields">
            {field("receiverName", "Receiver name", { placeholder: "Full name" })}
            {field("receiverPhone", "Receiver phone number", { type: "tel", inputMode: "tel", placeholder: "e.g. 0803 000 0000" })}
            {field("receiverAddress", "Receiver's address", { span2: true, placeholder: "Street, area, city, state" })}
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-sec-head"><span className="bk-num"><Truck className="ic" /></span><h3>Delivery details</h3></div>
          <div className="bk-fields">
            {field("deliveryType", "Delivery type", { span2: true, placeholder: "Select delivery type" }, DELIVERY_TYPES)}
            {field("pickupDate", "Pickup date", { type: "date", min: today })}
            {field("pickupTime", "Pickup time", { type: "time" })}
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-sec-head"><span className="bk-num"><Boxes className="ic" /></span><h3>Package details</h3></div>
          <div className="bk-fields">
            {field("packageType", "Package type", {}, PACKAGE_TYPES)}
            {field("packageQuantity", "Quantity", { type: "number", min: 1, inputMode: "numeric" })}
            {field("packageWeight", "Weight (kg)", { type: "number", min: 0, step: "0.1", inputMode: "decimal", placeholder: "Optional" })}
            {field("packageDimensions", "Dimensions (L×W×H cm)", { placeholder: "Optional, e.g. 30×20×15" })}
          </div>
        </section>

        <section className="bk-section">
          <div className="bk-sec-head"><span className="bk-num"><PackageCheck className="ic" /></span><h3>Special instructions</h3></div>
          <div className="bk-fields">
            {field("instructions", "Anything we should know?", { span2: true, textarea: true, placeholder: "Handling notes, alternate contact, landmark, etc. (optional)" })}
          </div>
        </section>

        <button type="submit" className="btn btn-primary bk-submit" disabled={loading}>
          {loading ? "Sending booking…" : "Confirm Booking"} <ArrowRight className="ic" />
        </button>
      </form>

      <aside className="bk-summary">
        <div className="bk-sum-card">
          <h4>Booking summary</h4>

          <div className="bk-route">
            <div className="bk-stop">
              <span className="dot pickup" />
              <div>
                <span className="lbl">Pickup</span>
                <span className="val">{form.pickupAddress || "Pickup address"}</span>
              </div>
            </div>
            <div className="bk-line" />
            <div className="bk-stop">
              <span className="dot drop" />
              <div>
                <span className="lbl">Drop-off</span>
                <span className="val">{form.receiverAddress || "Receiver's address"}</span>
              </div>
            </div>
          </div>

          <div className="bk-sum-row">
            <span className="k">Delivery type</span>
            <span className="v">{form.deliveryType ? <span className="bk-badge">{form.deliveryType}</span> : "—"}</span>
          </div>
          <div className="bk-sum-row">
            <span className="k"><CalendarClock className="ic" /> Pickup</span>
            <span className="v">{form.pickupDate ? `${form.pickupDate}${form.pickupTime ? ` · ${form.pickupTime}` : ""}` : "—"}</span>
          </div>
          <div className="bk-sum-row">
            <span className="k">Package</span>
            <span className="v">
              {form.packageType ? `${form.packageQuantity || 1} × ${form.packageType}` : "—"}
              {form.packageWeight ? ` · ${form.packageWeight}kg` : ""}
            </span>
          </div>

          <p className="bk-reassure">
            No payment now — we&apos;ll confirm your pickup and pricing by phone.
          </p>
          <a href="tel:+2349038556298" className="bk-call"><Phone className="ic" /> +234-903-855-6298</a>
        </div>
      </aside>
    </div>
  );
}