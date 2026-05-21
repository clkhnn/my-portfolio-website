"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "c38c86c0-ff7b-475b-be4a-4471cc9ee3b4",
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio Mesajı: ${formData.name.trim()}`,
          replyto: formData.email.trim(),
        }),
      });

      const data = await res.json();

      if (res.status === 200 && data.success) {
        alert("Mailiniz başarıyla gönderildi. Teşekkürler!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Gönderim başarısız oldu.");
      }
    } catch (error) {
      console.error("Hata:", error);
      alert("Bir bağlantı hatası oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        className="w-full p-3 border rounded-lg text-black"
        placeholder="Ad Soyad"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        className="w-full p-3 border rounded-lg text-black"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        className="w-full p-3 border rounded-lg text-black"
        rows={5}
        placeholder="Mesaj"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-500 transition w-full disabled:opacity-50"
      >
        {loading ? "Gönderiliyor..." : "Gönder"}
      </button>
    </div>
  );
}