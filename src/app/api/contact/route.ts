import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // 🔴 EN SIK HATA: .env.local okunmuyor veya key boş
  const apiKey = process.env.WEB3FORMS_API_KEY;

  if (!apiKey || apiKey.trim() === "") {
    console.error("[API/contact] WEB3FORMS_API_KEY tanımlı değil veya boş!");
    return NextResponse.json(
      { error: "Sunucu yapılandırma hatası: API key eksik" },
      { status: 500 }
    );
  }

  // 1. Request body'yi güvenli şekilde parse et
  let body;
  try {
    body = await req.json();
    console.log("[API/contact] Gelen veri:", body);
  } catch (parseError) {
    console.error("[API/contact] JSON parse hatası:", parseError);
    return NextResponse.json(
      { error: "Geçersiz istek formatı" },
      { status: 400 }
    );
  }

  // 2. Validasyon
  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Ad, email ve mesaj alanları zorunludur" },
      { status: 400 }
    );
  }

  // 3. Web3Forms'a gönder
  try {
    const formData = new FormData();
    formData.append("access_key", apiKey);
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    formData.append("message", message.trim());
    
    // Opsiyonel ama önerilir:
    formData.append("replyto", email.trim());
    formData.append("subject", `Portfolio Mesajı: ${name.trim()}`);

    console.log("[API/contact] Web3Forms'a istek atılıyor...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // 4. Web3Forms yanıtını güvenli parse et
    const responseText = await response.text();
    let data;

    try {
      data = JSON.parse(responseText);
    } catch {
      console.error("[API/contact] Web3Forms JSON dönmedi:", responseText.slice(0, 200));
      return NextResponse.json(
        { error: "E-posta servisi geçersiz yanıt verdi" },
        { status: 502 }
      );
    }

    console.log("[API/contact] Web3Forms yanıtı:", data);

    if (!data.success) {
      console.error("[API/contact] Web3Forms başarısız:", data);
      return NextResponse.json(
        { error: data.message || "E-posta gönderilemedi" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mesaj başarıyla gönderildi" },
      { status: 200 }
    );

  } catch (error) {
    // Network hatası, DNS hatası, timeout vb.
    console.error("[API/contact] Fetch/Network hatası:", error);
    return NextResponse.json(
      { error: "E-posta servisine bağlanılamadı" },
      { status: 503 }
    );
  }
}