"use client";

import { useState } from "react";

type Lang = "fr" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (fr: string, en: string) => (lang === "fr" ? fr : en);

  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "24px" }}>
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <h1 style={{ letterSpacing: 1, margin: 0 }}>
          <span style={{ color: "#86e1ff" }}>Override</span>: <span style={{ color: "#ff6ec7" }}>Genesis</span>
        </h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setLang("fr")}
            aria-pressed={lang === "fr"}
            style={btn(lang === "fr")}
          >FR</button>
          <button
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            style={btn(lang === "en")}
          >EN</button>
        </div>
      </header>

      {/* Pitch */}
      <section style={{ marginTop: 24 }}>
        <h2 style={h2Style}>{t("Pitch", "Pitch")}</h2>
        <p style={pStyle}>
          {t(
            "Override: Genesis explore une mégalopole au bord de la rupture : gangs, rites numériques et corporations s’y disputent les consciences. Trois mini-teasers dévoilent peu à peu l’esthétique, la cadence, et l’émotion — jusqu’au regard de Tina, figure centrale, à la frontière entre loyauté et survie.",
            "Override: Genesis explores a megalopolis on the brink: gangs, digital rites and corporations vying for minds. Three mini-teasers gradually reveal the look, the pacing and the emotion—culminating in Tina’s gaze, a central figure torn between loyalty and survival."
          )}
        </p>
        <p style={pStyle}>
          {t(
            "Le projet avance par itérations courtes : design de personnages, scènes Sora, montages nerveux, et règles de qualité (tolérance d’erreurs < 10–15 % à l’écran). L’objectif : une mini-série cyberpunk maîtrisée visuellement et émotionnellement.",
            "The project advances in short iterations: character design, Sora scenes, punchy edits, and a quality rule (visible errors < 10–15%). The goal: a cyberpunk mini-series with tight visual and emotional control."
          )}
        </p>
      </section>

      {/* Teasers */}
      <section style={{ marginTop: 24 }}>
        <h2 style={h2Style}>{t("Teasers", "Teasers")}</h2>

        <VideoCard
          title={t("Teaser 1 — Premiers clans & tension", "Teaser 1 — First clans & tension")}
          // Option A: YouTube
          src="https://www.youtube.com/embed/Bb22NCloDJ8?si=P8wELyDdaIg1Qi76"
          note={t("Maelstrom/Corpo/Animals, rythme brut, premières lignes esthétiques.", "Maelstrom/Corpo/Animals, raw pacing, first aesthetic lines.")}
        />
        <VideoCard
          title={t("Teaser 2 — Émotion & rituels", "Teaser 2 — Emotion & rituals")}
          src="https://www.youtube.com/embed/22JFmp7OeLs?si=_9AT6I-tWFOsUV6Z"
          note={t("Mox bar, Voodoo vibes, Sixth Street, apparition de Tina.", "Mox bar, Voodoo vibes, Sixth Street, Tina’s reveal.")}
        />
        <VideoCard
          title={t("Teaser 3 — À venir", "Teaser 3 — Coming soon")}
          src="https://www.youtube.com/embed/YOUTUBE_ID_3"
          note={t("Valentinos, Tiger Claws, mercenaire principal.", "Valentinos, Tiger Claws, main mercenary.")}
        />
      </section>

      {/* About */}
      <section style={{ marginTop: 24 }}>
        <h2 style={h2Style}>{t("À propos — VeenaDev", "About — VeenaDev")}</h2>
        <p style={pStyle}>
          {t(
            "VeenaDev conçoit des teasers IA cinématiques avec attention : prompts Sora précis, direction artistique cohérente, montage millimétré, et sens du détail (gestion des erreurs, focales, hiérarchie visuelle). Objectif : donner une identité qui tient sur la durée.",
            "VeenaDev builds cinematic AI teasers with care: precise Sora prompts, coherent art direction, tight editing, and obsessive detail (error handling, lenses, visual hierarchy). Goal: craft an identity that lasts."
          )}
        </p>
      </section>

      {/* Contact */}
      <section style={{ marginTop: 24, marginBottom: 48 }}>
        <h2 style={h2Style}>{t("Contact pro", "Business contact")}</h2>
        <ul style={{ lineHeight: 1.9, paddingLeft: 18 }}>
          <li>
            {t("Email", "Email")}: <a style={aStyle} href="mailto:veenadev.contact@gmail.com">veenadev.contact@gmail.com</a>
          </li>
          <li>
            {t("Instagram (portfolio rapide)", "Instagram (quick portfolio)")}: <a style={aStyle} href="https://instagram.com/veenadev" target="_blank">instagram.com/veenadev</a>
          </li>
          <li>
            {t("YouTube (teasers)", "YouTube (teasers)")}: <a style={aStyle} href="https://youtube.com/@veenadev" target="_blank">youtube.com/@veenadev</a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={{ opacity: 0.7, fontSize: 12, borderTop: "1px solid #1b2330", paddingTop: 16 }}>
        © {new Date().getFullYear()} VeenaDev — {t("Page de présentation non officielle, univers cyberpunk (fan pitch).", "Unofficial pitch page, cyberpunk universe (fan pitch).")}
      </footer>
    </main>
  );
}

function VideoCard({ title, src, note }: { title: string; src: string; note?: string }) {
  return (
    <div style={{ marginBottom: 24, border: "1px solid #1b2330", borderRadius: 12, overflow: "hidden", background: "#0f141b" }}>
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{title}</h3>
        {note && <p style={{ margin: "0 0 12px", opacity: 0.8 }}>{note}</p>}
      </div>
      {/* YouTube embed */}
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    </div>
  );
}

const h2Style: React.CSSProperties = { margin: "24px 0 12px", fontSize: 20, letterSpacing: 0.5 };
const pStyle: React.CSSProperties = { margin: "0 0 12px", lineHeight: 1.7, opacity: 0.95 };
const aStyle: React.CSSProperties = { color: "#86e1ff", textDecoration: "none" };

function btn(active: boolean): React.CSSProperties {
  return {
    background: active ? "#1b2330" : "transparent",
    border: "1px solid #1b2330",
    color: "#e6e9ef",
    padding: "6px 10px",
    borderRadius: 8,
    cursor: "pointer",
  };
}
