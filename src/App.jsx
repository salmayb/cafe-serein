import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";
import img9 from "./assets/9.png";
import img10 from "./assets/10.png";
import img11 from "./assets/11.png";


import { motion } from "framer-motion";
import { useState } from "react";

export default function SereinCafePage() {
  const menuItems = [
    {
      name: "Flat White",
      description: "Un café doux et équilibré pour les longues séances d'étude.",
      price: "4,80€",
      image: img7,
    },
    {
      name: "Matcha Latte",
      description: "Crémeux, léger et parfait pour des après-midi de détente.",
      price: "5,40€",
      image: img8,
    },
    {
      name: "Croissant Artisanal",
      description: "Cuisiné tous les matins.",
      price: "2,90€",
      image: img9,
    },
  ];

  const reviews = [
    {
      name: "Lucie",
      text: "L'endroit idéal pour étudier au calme et se déconnecter un moment.",
    },
    {
      name: "Marco",
      text: "La lumière, le café et l'ambiance donnent envie de rester des heures.",
    },
    {
      name: "Sara",
      text: "Très confortable. Idéal pour lire ou travailler au calme.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const [openBooking, setOpenBooking] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reserved, setReserved] = useState(false);

  return (
    <div
      className="min-h-screen text-[#5c4633] font-['Inter']"
      style={{ backgroundColor: "#eaede7" }}
    >
      {/* HERO */}
      <motion.section className="relative overflow-hidden px-6 py-20 md:px-16 lg:px-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} >

        <div className="absolute inset-0 opacity-20">
          <img
            src={img1}
            alt="Cafe"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p
              className="mb-4 inline-block rounded-full px-4 py-2 text-sm tracking-wide"
              style={{ backgroundColor: "#c1cbbe" }}
            >
              Cafétéria • Studio • Calme
            </p>

            <h1 className="mb-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight md:text-8xl">
              SEREIN
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#6d5a4a]">
              Un espace conçu pour étudier, lire, travailler et savourer un bon café en toute tranquillité. Lumière chaleureuse, musique douce et du temps pour vous.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-6 py-3 font-medium transition hover:scale-105"
                style={{ backgroundColor: "#bb936e", color: "white" }}
              >
                Voir le menu
              </a>

              <a
                href="#sobre"
                className="rounded-2xl border px-6 py-3 font-medium transition hover:scale-105"
                style={{ borderColor: "#c8a889" }}
              >
                SEREIN
              </a>
            </div>
          </div>

          <div className="relative">
            {/* CAMBIA ESTA IMAGEN POR UNA TUYA */}
            <img
              src={img1} alt="Interior cafetería"
              className="h-[520px] w-full rounded-[32px] object-cover shadow-2xl"
            />

            <div
              className="absolute -bottom-6 -left-6 rounded-3xl p-6 shadow-xl"
              style={{ backgroundColor: "#e6d5c4" }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#7b6550]">
                Ambiance
              </p>
              <p className="mt-2 text-2xl font-semibold">Silence & calme</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SOBRE SEREIN */}
      <motion.section id="sobre" className="px-6 py-20 md:px-16 lg:px-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            {/* CAMBIA ESTA IMAGEN POR UNA TUYA */}
            <img
              src={img2} alt="Cafe y estudio"
              className="h-full min-h-[450px] w-full rounded-[32px] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8c725b]">
              À propos de nous
            </p>

            <h2 className="mb-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight md:text-4xl">
              Un refuge pour se concentrer.
            </h2>

            <p className="mb-6 leading-relaxed text-[#6d5a4a]">
              Serein est né comme un café où le temps s’écoule plus lentement.
              Nous voulons créer un espace chaleureux pour les étudiants, les créatifs et
              les personnes en quête de tranquillité.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div
                className="rounded-3xl p-6"
                style={{ backgroundColor: "#e6d5c4" }}
              >
                <h3 className="mb-2 text-xl font-semibold">Wi‑Fi rápido</h3>
                <p className="text-sm leading-relaxed text-[#6d5a4a]">
                  Des espaces confortables pour travailler ou étudier pendant des heures.
                </p>
              </div>

              <div
                className="rounded-3xl p-6"
                style={{ backgroundColor: "#c1cbbe" }}
              >
                <h3 className="mb-2 text-xl font-semibold">Ambiente sereno</h3>
                <p className="text-sm leading-relaxed text-[#6d5a4a]">
                  Musique douce, éclairage chaleureux et espaces calmes.                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CABINAS DE ESTUDIO */}
      <motion.section
        className="px-6 py-20 md:px-16 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8c725b]">
              Study Pods
            </p>

            <h2 className="mb-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight md:text-5xl">
              Des espaces conçus pour vous concentrer.
            </h2>

            <p className="mb-8 leading-relaxed text-[#6d5a4a]">
              Chez Serein, vous pouvez réserver des cabines privées pour étudier,
              travailler ou vous réunir en toute tranquillité. Elles sont conçues pour vous aider
              à rester concentré sans perdre la chaleur d’un café.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">

              <div
                className="rounded-3xl p-6"
                style={{ backgroundColor: "#e6d5c4" }}
              >
                <h3 className="mb-3 text-2xl font-semibold">
                  Individuel
                </h3>

                <p className="text-sm leading-relaxed text-[#6d5a4a]">
                  Un espace privé et silencieux pour de longues sessions
                  d’étude ou de travail approfondi.

                </p>
              </div>

              <div
                className="rounded-3xl p-6"
                style={{ backgroundColor: "#c1cbbe" }}
              >
                <h3 className="mb-3 text-2xl font-semibold">
                  En groupe
                </h3>

                <p className="text-sm leading-relaxed text-[#6d5a4a]">
                  Parfait pour les réunions, les projets universitaires
                  ou les sessions collaboratives.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => setOpenBooking(true)}
                className="rounded-2xl px-6 py-3 font-medium transition hover:scale-105"
                style={{ backgroundColor: "#bb936e", color: "white" }}
              >
                Réserver une cabine
              </button>
            </div>
          </div>

          <div>
            <img
              src={img10}
              alt="Cabinas de estudio"
              className="h-full min-h-[520px] w-full rounded-[32px] object-cover shadow-xl"
            />
          </div>
        </div>
      </motion.section>

      {/* MENU */}
      <motion.section className="px-6 py-20 md:px-16 lg:px-24"
        style={{ backgroundColor: "#e6d5c4" }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} >

        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8c725b]">
              Menu
            </p>
            <h2 className="mb-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight md:text-6xl">
              Café, matcha et une touche sucrée.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="rounded-[28px] bg-white p-6 shadow-lg"
              >
                {/* CAMBIA ESTA IMAGEN POR UNA TUYA */}
                <img
                  src={item.image} alt={item.name}
                  className="mb-5 h-56 w-full rounded-2xl object-cover"
                />

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <span className="font-medium">{item.price}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#6d5a4a]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <br></br>
          <div className="flex justify-center">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-6 py-3 font-medium transition hover:scale-105"
              style={{ backgroundColor: "#bb936e", color: "white" }}
            >
              Voir le menu
            </a>
          </div>
        </div>

      </motion.section>

      {/* ESPACIO DE ESTUDIO */}
      <motion.section className="px-6 py-20 md:px-16 lg:px-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8c725b]">
              Study Space
            </p>

            <h2 className="mb-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight md:text-5xl">
              Conçu pour vous concentrer.
            </h2>

            <ul className="space-y-5 text-[#6d5a4a]">
              <li className="rounded-2xl bg-white p-5 shadow-sm">
                Grandes tables avec des prises à proximité.
              </li>
              <li className="rounded-2xl bg-white p-5 shadow-sm">
                Espaces calmes pour la lecture et l’étude.
              </li>
              <li className="rounded-2xl bg-white p-5 shadow-sm">
                Lumière naturelle et ambiance confortable toute la journée.
              </li>
            </ul>
          </div>

          <div>
            {/* CAMBIA ESTA IMAGEN POR UNA TUYA */}
            <img
              src={img3} alt="Espacio de estudio"
              className="h-full min-h-[450px] w-full rounded-[32px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* RESEÑAS */}
      <motion.section className="px-6 py-20 md:px-16 lg:px-24"
        style={{ backgroundColor: "#c1cbbe" }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6d5a4a]">
              Avis
            </p>
            <h2 className="mb-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight md:text-5xl">
              Ce que Serein transmet.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[28px] bg-white p-8 shadow-lg"
              >
                <p className="mb-6 text-lg leading-relaxed text-[#6d5a4a]">
                  “{review.text}”
                </p>

                <p className="font-semibold">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* GALERÍA */}
      <motion.section className="px-6 py-20 md:px-16 lg:px-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8c725b]">
                Galerie
              </p>
              <h2 className="mb-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight md:text-5xl">
                L’esthétique de Serein.
              </h2>
            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* CAMBIA ESTAS IMÁGENES POR LAS TUYAS */}
            <img
              src={img4} alt="Galería"
              className="h-80 w-full rounded-[28px] object-cover"
            />

            <img
              src={img5} alt="Galería"
              className="h-80 w-full rounded-[28px] object-cover"
            />

            <img
              src={img6} alt="Galería"
              className="h-80 w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* VEN A VISITARNOS */}
      <motion.section
        className="px-6 py-20 md:px-16 lg:px-24"
        style={{ backgroundColor: "#e6d5c4" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          <div>
            <img
              src={img11}
              alt="Serein Café"
              className="h-full min-h-[500px] w-full rounded-[32px] object-cover shadow-xl"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8c725b]">
              Visit Us
            </p>

            <h2 className="mb-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight md:text-5xl">
              Venez nous rendre visite.
            </h2>

            <p className="mb-8 max-w-xl leading-relaxed text-[#6d5a4a]">
              Un espace pour ralentir le rythme, savourer un bon café
              et retrouver de la concentration au milieu de la routine.
            </p>

            <div className="space-y-6">

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#8c725b]">
                  Adresse
                </p>

                <p className="text-lg font-medium">
                  Place De Brouckère, Boulevard Émile Jacqmain 6, Bruxelles
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#8c725b]">
                  Horaires
                </p>

                <p className="text-lg font-medium">
                  Lundi — Vendredi
                </p>

                <p className="mt-1 text-[#6d5a4a]"> 8:30 — 19:00 (période normale)</p> <p> 8:30 — 21:00 (bloqus/examens)</p><br></br>
                <p className="text-lg font-medium">Samedi — Dimanche</p>
                <p className="mt-1 text-[#6d5a4a]"> 9:00 — 18:30 (période normale)</p> <p> 9:00 — 21:00 (bloqus/examens)</p> 

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#8c725b]">
                  Instagram
                </p>

                <p className="text-lg font-medium">
                  @serein.cafe
                </p>
              </div>

            </div>
          </div>

        </div>
      </motion.section>

      {openBooking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

          <div className="w-[90%] max-w-md rounded-3xl bg-white p-6 shadow-2xl">

            {!reserved ? (
              <>
                <h2 className="mb-4 font-['Cormorant_Garamond'] text-3xl font-semibold">
                  Réservez votre cabine
                </h2>

                <div className="space-y-4">

                  <input
                    type="date"
                    className="w-full rounded-xl border p-3"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />

                  <input
                    type="time"
                    className="w-full rounded-xl border p-3"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />

                  <button
                    onClick={() => setReserved(true)}
                    className="w-full rounded-2xl py-3 font-medium text-white transition hover:scale-105"
                    style={{ backgroundColor: "#bb936e" }}
                  >
                    Confirmer la réservation
                  </button>

                  <button
                    onClick={() => setOpenBooking(false)}
                    className="w-full text-sm text-gray-500"
                  >
                    Fermer
                  </button>

                </div>
              </>
            ) : (
              <div className="text-center">

                <h2 className="mb-4 font-['Cormorant_Garamond'] text-3xl font-semibold">
                  Réservation confirmée !
                </h2>

                <p className="mb-6 text-[#6d5a4a]">
                  Nous vous attendons chez Serein pour votre session de concentration.
                </p>

                <p className="mb-6 text-sm text-gray-500">
                  {date} · {time}
                </p>

                <button
                  onClick={() => {
                    setOpenBooking(false);
                    setReserved(false);
                    setDate("");
                    setTime("");
                  }}
                  className="rounded-2xl px-6 py-3 font-medium text-white"
                  style={{ backgroundColor: "#bb936e" }}
                >
                  Fermer
                </button>
              </div>
            )}

          </div>

        </div>
      )}

      {/* FOOTER */}
      <footer
        className="px-6 py-14 md:px-16 lg:px-24"
        style={{ backgroundColor: "#bb936e", color: "white" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">SEREIN</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
              Un lieu pour savourer le café, trouver la tranquillité et créer
              des moments de concentration.
            </p>
          </div>

          <div className="space-y-2 text-sm text-white/90">
            <p>📍Place De Brouckère, Boulevard Émile Jacqmain 6, Bruxelles</p>
            <p>📷 @serein.cafe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
