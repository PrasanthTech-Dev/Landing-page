import { useState } from "react";
import LogoMark from "./LogoMark";

export default function GameCode() {
  const [code, setCode] = useState("");

  function handleSubmit() {
    if (code.trim()) {
      console.log("Joining game with code:", code);
    }
  }

  return (
    <>
      <div className="gamecode-prompt reveal">
        <h3>Do you have a game code?</h3>
        <p>Let's play for a while!</p>
      </div>
      <section className="gamecode-section reveal">
        <div className="logo-white">
          <LogoMark fill="#fff" />
          Kurtis Classroom
        </div>
        <div className="code-input">
          <input
            type="text"
            placeholder="Write the code here"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button aria-label="Submit code" onClick={handleSubmit}>
            →
          </button>
        </div>
        <div className="hint">Or try with 1234</div>
      </section>
    </>
  );
}
