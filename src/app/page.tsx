"use client";


export default function Page() {


return (
<main className="min-h-screen bg-white text-gray-900">


  {/* NAV */}
  <header className="sticky top-0 bg-white/80 backdrop-blur border-b z-50">

  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
{/* LOGO */}
<h1 className="font-bold">Mustafa Çelikhan Çelik</h1>

{/* NAVLINKLER */}
<nav className="flex gap-6 text-sm text-gray-600">
  <a href="#about" className="hover:text-black">Hakkımda</a>
  <a href="#projects" className="hover:text-black">Projeler</a>
  <a href="#tech" className="hover:text-black">Teknolojiler</a>
  <a href="#references" className="hover:text-black">Referanslar</a>
  <a href="#contact" className="hover:text-black">İletişim</a>
</nav>

  </div>
</header>
  {/* HERO */}
  <section className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-4xl md:text-6xl font-bold">
      Full Stack Developer
    </h2>
    <p className="text-gray-600 mt-6 max-w-2xl">
      Modern, hızlı ve ölçeklenebilir web uygulamalarından ayrı Java ile projeler geliştiriyorum.
    </p>
  </section>

  {/* ABOUT */}
  <section id="about" className="bg-gray-50 py-20">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-6">Hakkımda</h3>

      <p className="text-gray-700 leading-relaxed">
        Şu anda mevcut yazılım bilgimin yanında siber güvenlik eğitimi alıyorum. Siber güvenliği yazılım

geçmişimle birleştirmenin, sistem mimarilerini daha iyi anlamamı sağladığına inanıyorum. Ayrıca her yaz
dönemi bir yazılım şirketinde gönüllü olarak çalıştım ve bu sayede projelerin nasıl başladığını ve zaman
içinde nasıl ilerlediğini yakından gözlemleme fırsatı buldum. Okulda edindiğim bilgileri pekiştirmek ve
becerilerimi daha da geliştirmek amacıyla halen çeşitli kurslar almaktayım.
</p>


      <h4 className="font-semibold mt-8">Kariyer Geçmişi</h4>
      <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
        <li>Frontend Developer - React projeleri</li>
        <li>Backend Developer - Java projeleri</li>
        <li>Full Stack Developer - Next.js & Node.js</li>
      </ul>

      <h4 className="font-semibold mt-8">Eğitim</h4>
      <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
        <li>Doğuş Üniversitesi / İngilizce Bilgisayar Mühendisliği</li>
        <li>C Ve Sistem Programcıları Derneği / Programlamaya giriş</li>
        <li>UDEMY / C#</li>
        <li>UDEMY / SQL</li>
        <li>UDEMY / Etik Hackleme </li>
        <li>Self-learning & project based experience(Java, JavaScript, Next.js, TypeScript )</li>
      </ul>
    </div>
    <div className="flex flex-col items-center mt-6">

  <div className="flex gap-4">
<a
  href="My_Resume.pdf"
  target="_blank"
  className="bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 transition"
>
  CV Görüntüle
</a>

<a
  href="My_Resume.pdf"
  download
  className="border border-gray-300 px-5 py-3 rounded-full hover:bg-gray-100 transition"
>
  CV İndir
</a>

  </div>
</div>
      </section>
  {/* PROJECTS */}
  <section id="projects" className="py-20">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-10">Projeler</h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border p-6 rounded-xl hover:shadow-md transition">
          <h4 className="font-semibold">Employee tracking system</h4>
          <p className="text-gray-600 mt-2">
            Amaç: Kullanıcıların çalışan ekleyip çıkartabildiği, çalışanlarının çalışma sürelerini gösteren ve kullanıcı raporu olan uygulama.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Kullanılan araçlar: Java
          </p>
        </div>

        <div className="border p-6 rounded-xl hover:shadow-md transition">
          <h4 className="font-semibold">Flight tracking page</h4>
          <p className="text-gray-600 mt-2">
            Amaç: Yolcuyu uçuş süreci için bilgilendirme sayfası
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Kullanılan araçlar: HTML, CSS, JavaScript
          </p>
        </div>

<div className="border p-6 rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold">Game for fun</h4>
              <p className="text-gray-600 mt-2">
                Amaç: Kullanıcının boş vakitlerinde eğlenebilmesi için küçük oyunlar.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Kullanılan araçlar: Java
              </p>
            </div>
          </div>
        </div>
      </section>
  {/* TECH STACK */}
  <section id="tech" className="bg-gray-50 py-20">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-10">Kullandığım Teknolojiler</h3>

      <div className="flex flex-wrap gap-3">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Tailwind CSS",
          "Java",
          "Git",
          "JavaScript",
        ].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </section>

  {/* REFERENCES */}
  <section id="references" className="py-20">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-10">Referanslar</h3>

      <div className="space-y-6">

        <div className="border p-6 rounded-xl">
          <p className="text-gray-700">
            “Çok disiplinli ve hızlı çalışan bir geliştirici.”
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Oğuz Gonca — Turknet / Staj Yöneticisi
          </p>
          <p className="text-sm text-gray-500 mt-2">
           0555 376 09 64
          </p>
        </div>

        <div className="border p-6 rounded-xl">
          <p className="text-gray-700">
            “UI ve backend entegrasyonlarında çok başarılı.”
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Ersay Boyar — Founder @ CATS Yazılım (Staj Yöneticisi)
          </p>
          <p className="text-sm text-gray-500 mt-2">
            0554 150 33 67
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="bg-gray-50 py-20">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

      {/* FORM */}
      <div>
        <h3 className="text-3xl font-bold mb-6">Bana Ulaş</h3>

        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const name = String(formData.get("name") ?? "");
            const email = String(formData.get("email") ?? "");
            const message = String(formData.get("message") ?? "");

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, message }),
            });

            if (!res.ok) {
              // Basit hata yönetimi: burada ileride toast/alert'e çevrilebilir
              const data = await res.json().catch(() => null);
              alert(data?.error ?? "Gönderim başarısız.");
              return;
            }

            alert("Mesaj alındı. Teşekkürler!");
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Ad Soyad"
            name="name"
            autoComplete="name"
            required
          />
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <textarea
            className="w-full p-3 border rounded-lg"
            rows={5}
            placeholder="Mesaj"
            name="message"
            required
          />

          <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-500 transition w-full">
            Gönder
          </button>
        </form>
      </div>

      {/* CONTACT INFO */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">İletişim Bilgileri</h3>

        <p>📧 celikhan.celik10@gmail.com</p>
        <p>📱 +90 538 703 10 31</p>
        <p>💼 LinkedIn: linkedin.com/in/mustafa-celikhan-celik/</p>
        <p>🐙 GitHub: github.com/clkhnn</p>
      </div>

    </div>
  </section>

  {/* FOOTER */}
  <footer className="border-t py-10 text-center text-gray-500">
    © {new Date().getFullYear()} Portfolio • Built with Next.js
  </footer>

</main>

);
}