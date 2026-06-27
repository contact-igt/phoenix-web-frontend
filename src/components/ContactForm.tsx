"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all the required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact-form-wrapper">
      <p className="contact-desc" style={{ marginBottom: "2rem", color: "#a0a0a0", fontSize: "0.9rem" }}>
        We're here to support you on your fitness journey and answer any questions or concerns you may have.
        <br /><br />
        Feel free to get in touch with us through the following contact options.
      </p>

      <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <input 
          type="text" 
          name="name"
          placeholder="What's your name?" 
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <input 
            type="email" 
            name="email"
            placeholder="What's your email?" 
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
          />
          <input 
            type="tel" 
            name="mobile"
            placeholder="What's your mobile number?" 
            style={{ width: '100%', padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
          />
        </div>

        <select style={{ width: '100%', padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: '#a0a0a0', fontSize: '0.9rem', outline: 'none', appearance: 'none' }}>
          <option>Choose our services</option>
        </select>

        <input 
          type="text" 
          name="subject"
          placeholder="Subject" 
          style={{ width: '100%', padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
        />

        <div style={{ marginTop: '1rem' }}>
          <button 
            type="submit"
            disabled={status === "submitting"}
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
              background: '#fff', color: '#000', border: 'none', 
              padding: '0.5rem 1rem', borderRadius: '20px', 
              fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' 
            }}
          >
            {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', background: '#000', color: '#fff', borderRadius: '50%', fontSize: '0.8rem' }}>↗</span>
          </button>
        </div>
      </form>

      <p style={{ marginTop: '2rem', color: '#a0a0a0', fontSize: '0.8rem', lineHeight: '1.5' }}>
        If you'd rather get started with a visit — then<br />
        write to us at <a href="mailto:hello@hyperfit.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>hello@hyperfit.com</a>
      </p>
    </div>
  );
}
