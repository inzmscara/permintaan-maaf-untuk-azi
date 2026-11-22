import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

// Kalimat rayuan tiap tombol "Nggak mau" diklik
const PLEADS = [
  "plis maafin aku ya azii",
  "nnti aku nggak diajak vc lagi dong sama kamuu",
  "ayolah ziii, maafin yaa",
  "maafin aja yaa, janji nggak ngulang✌🏻",
];

// Berapa kali "Nggak mau" boleh diklik sebelum menyerah
const MAX_NO = 4;

function fireCelebration() {
  const end = Date.now() + 2500;
  const colors = ["#ff6b9d", "#ffd166", "#8ecae6", "#b5179e", "#06d6a0"];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  setTimeout(() => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.4 },
      colors,
    });
  }, 400);
}

function EnvelopeStage({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 750);
  };

  return (
    <div className="stage stage-center">
      <button
        className={`envelope ${opening ? "is-opening" : ""}`}
        onClick={handleClick}
        aria-label="Buka amplop"
      >
        <span className="envelope-label">Untuk: azi a.k.a cewe A.Z</span>
        <span className="envelope-body">
          <span className="envelope-flap" />
          <span className="envelope-seal">📩</span>
        </span>
      </button>
      <p className="hint bounce">👆 ketuk amplopnya buat buka</p>
    </div>
  );
}

function LetterStage({ onNext }) {
  return (
    <div className="stage">
      <div className="letter pop-in">
        <p className="letter-to">hayoo aziii,</p>
        <div className="letter-body">
          <p>
            eeee....aku tau aku lagi diambekin sama kamu dan aku ngerti banget
            kenapanya, pas tadi video call, aku ga sengaja ngatain kamu
            <strong>"senderan sama tembok"</strong>.
          </p>
          <p>
            saya mengatas namanya gading khairlambang ingin mengklarifikasi
            bahwa aku cuma bercanda doang asli🙏. maaf banget ya aziii.
          </p>
          <p>
            aku ga bermaksud bikin kamu tersinggung sama sekali beneran deh, dan{" "}
            <strong>janji</strong> aku tidak akan melakukan itu lagi
          </p>
          <p>jadi jangan kapok video call lagi ya aziii.</p>
        </div>

        <p className="letter-sign">
          maafin yaa 🙏
          <br />— <strong>kouu</strong>
        </p>

        <button className="btn btn-primary" onClick={onNext}>
          lanjut 👉
        </button>
      </div>
    </div>
  );
}

function ChoiceStage({ onForgive }) {
  const [noCount, setNoCount] = useState(0);

  const yesScale = 1 + Math.min(noCount, 4) * 0.22;
  const noScale = Math.max(0.35, 1 - Math.min(noCount, 4) * 0.18);

  return (
    <div className="stage stage-center">
      <h2 className="choice-title">jadi dimaafin kan azii?</h2>
      {noCount > 0 && (
        <p className="plead" key={noCount}>
          {PLEADS[Math.min(noCount - 1, PLEADS.length - 1)]}
        </p>
      )}
      <div className="choice-buttons">
        <button
          className="btn btn-yes"
          style={{ transform: `scale(${yesScale})` }}
          onClick={onForgive}
        >
          maafin
        </button>
        <button
          className="btn btn-no"
          style={{ transform: `scale(${noScale})` }}
          onClick={() => setNoCount((c) => c + 1)}
        >
          ga mau
        </button>
      </div>
    </div>
  );
}

function CelebrationStage() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    fireCelebration();
  }, []);

  return (
    <div className="stage stage-center">
      <div className="celebrate pop-in">
        <div className="celebrate-emoji">🎉</div>
        <h2 className="celebrate-title">YEAAYYY, MAKASII AZIIIII!</h2>
        <p className="celebrate-sub">akhirnya dimaafin, jadi lega ehehehhee</p>
        <div className="voucher">
          <div className="voucher-head">🎟️ VOUCHER UNTUK AZI</div>
          <div className="voucher-body">
            berlaku buat video call bareng dan aku akan nurut apapun yang azi
            suruh kapan pun
            <div>
              <small>(asal ngotak ya azii ehehehe)</small>
            </div>
            <strong>selamanya ♾️</strong>
          </div>

          <div className="voucher-foot">ditandatangani: kouu ✍️</div>
        </div>
        <p className="celebrate-sub">
          tinggal nunjukin SS ini aja buat pake vouchernya
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [stage, setStage] = useState("envelope");

  return (
    <main className="app">
      {stage === "envelope" && (
        <EnvelopeStage onOpen={() => setStage("letter")} />
      )}
      {stage === "letter" && <LetterStage onNext={() => setStage("choice")} />}
      {stage === "choice" && (
        <ChoiceStage onForgive={() => setStage("celebration")} />
      )}
      {stage === "celebration" && <CelebrationStage />}
    </main>
  );
}
