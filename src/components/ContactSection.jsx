import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import Reveal from "./Reveal";

// Adjust path/name to match your asset if different.
import img from "../assets/Delivery man.jpg";

/* EmailJS — set these in your .env (Vite) and they will be read at build time:
   VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
   (use the same IDs your current form already uses). */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const STATES = [
  "Abuja", "Akwa Ibom", "Anambra", "Cross River", "Delta", "Edo", "Ekiti",
  "Kaduna", "Kano", "Kogi", "Kwara", "Lagos", "Ogun", "Ondo", "Osun", "Oyo", "Rivers",
];

const EMPTY = { name: "", email: "", phone: "", state: "", description: "" };

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const hp = useRef(null); // anti-spam honeypot

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Please enter your contact number.";
    if (!form.state) next.state = "Please select a state.";
    if (!form.description.trim()) next.description = "Tell us a little about your request.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    // Honeypot: a bot filled the hidden field — silently accept without sending.
    if (hp.current && hp.current.value) {
      setStatus({ type: "ok", message: "Thank you! Your request has been sent. We'll be in touch shortly." });
      setForm(EMPTY);
      return;
    }
    if (!validate()) return;

    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,
          state: form.state,
          message: form.description,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus({ type: "ok", message: "Thank you! Your request has been sent. We'll be in touch shortly." });
      setForm(EMPTY);
    } catch (err) {
      setStatus({ type: "bad", message: "Something went wrong. Please try again or call us directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="sec" id="contact-form">
      <div className="wrap">
        <div className="cgrid">
          <Reveal className="cform" as="div">
            <span className="eyebrow">Have some goods, need a helping hand?</span>
            <h2>Contact <span className="hl">Deway</span></h2>

            <form onSubmit={onSubmit} noValidate>
              {/* anti-spam honeypot — leave empty; hidden from real users */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="company-website">Company</label>
                <input id="company-website" ref={hp} type="text" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="fg">
                <div className={`field ${errors.name ? "field--error" : ""}`}>
                  <input name="name" value={form.name} onChange={update} placeholder="Your Name" aria-label="Your Name" />
                  {errors.name && <div className="err">{errors.name}</div>}
                </div>
                <div className={`field ${errors.email ? "field--error" : ""}`}>
                  <input name="email" type="email" value={form.email} onChange={update} placeholder="Your Email Address" aria-label="Your Email Address" />
                  {errors.email && <div className="err">{errors.email}</div>}
                </div>
                <div className={`field ${errors.phone ? "field--error" : ""}`}>
                  <input name="phone" value={form.phone} onChange={update} placeholder="Your Contact Number" aria-label="Your Contact Number" />
                  {errors.phone && <div className="err">{errors.phone}</div>}
                </div>
                <div className={`field ${errors.state ? "field--error" : ""}`}>
                  <select name="state" value={form.state} onChange={update} aria-label="Select State">
                    <option value="">Select State</option>
                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <div className="err">{errors.state}</div>}
                </div>
              </div>

              <div className={`field ${errors.description ? "field--error" : ""}`}>
                <textarea name="description" value={form.description} onChange={update} placeholder="Describe your request" aria-label="Describe your request" />
                {errors.description && <div className="err">{errors.description}</div>}
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Sending…" : "Submit Your Request"} <Send className="ic" />
              </button>

              {status.message && (
                <p className={`form-note ${status.type}`} role="status">{status.message}</p>
              )}
            </form>
          </Reveal>

          <div className="cmedia">
            <img src={img} alt="Deway Logistics customer support" />
          </div>
        </div>
      </div>
    </section>
  );
}