// AUTO-GENERATED from spongebob-scoreboard.hbs - DO NOT EDIT DIRECTLY
// Run 'npm run build:templates' to regenerate

export const SPONGEBOB_SCOREBOARD_TEMPLATE = `<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  p { margin: 0; }
  body {
    font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
    font-size: 26px;
    color: #3b2000;
    background: linear-gradient(180deg, #5bc8f5 0%, #87d9f7 100%);
    width: 1200px;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  .scoreboard {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    border-radius: 18px;
    background: transparent;
    border: none;
  }

  .bamboo-frame {
    position: relative;
    padding: 0 22px;
  }

  .bamboo-frame::before,
  .bamboo-frame::after {
    content: '';
    position: absolute;
    top: -8px;
    bottom: -8px;
    width: 18px;
    border-radius: 9px;
    background:
      repeating-linear-gradient(
        to bottom,
        transparent 0px,
        transparent 30px,
        rgba(90, 50, 0, 0.88) 30px,
        rgba(90, 50, 0, 0.88) 36px,
        transparent 36px,
        transparent 60px
      ),
      linear-gradient(
        to right,
        rgba(220, 185, 90, 0.9) 0%,
        rgba(200, 160, 70, 0.4) 25%,
        transparent 55%,
        rgba(90, 50, 0, 0.35) 100%
      ),
      #c8a046;
    box-shadow: 2px 0 6px rgba(0, 0, 0, 0.3), -1px 0 3px rgba(0, 0, 0, 0.15);
  }
  .bamboo-frame::before { left: 0; }
  .bamboo-frame::after  { right: 0; }

  .player-entry {
    display: grid;
    grid-template-columns: 38% 1fr;
    align-items: center;
    gap: 16px;
    padding: 14px 10px;
    background: rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.55);
    box-shadow: 0 4px 16px rgba(0, 80, 150, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5);
    position: relative;
  }

  .scoreboard > .bamboo-frame:nth-of-type(1) .player-entry {
    background: rgba(255, 215, 50, 0.35);
    border: 2px solid rgba(255, 200, 30, 0.7);
    box-shadow: 0 0 24px rgba(255, 200, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }
  .scoreboard > .bamboo-frame:nth-of-type(1) h3.name {
    font-size: 40px;
  }

  .player-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .position {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  h2 {
    margin: 0;
    font-size: 1.5em;
    color: #ff5722;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.8),
      0 2px 5px rgba(200, 50, 0, 0.35);
  }

  h3.name {
    margin: 0;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.75),
      0 2px 6px rgba(0, 0, 0, 0.12);
  }

  .score-section {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    height: 4rem;
    background: radial-gradient(
      ellipse at 40% 30%,
      rgba(255, 255, 255, 0.72) 0%,
      rgba(200, 235, 255, 0.3) 45%,
      rgba(150, 210, 255, 0.08) 100%
    );
    border: 1.5px solid rgba(255, 255, 255, 0.85);
    border-radius: 999px;
    box-shadow:
      inset 0 2px 8px rgba(255, 255, 255, 0.65),
      inset 0 -2px 6px rgba(100, 180, 255, 0.18),
      0 4px 14px rgba(80, 160, 240, 0.2);
    font-weight: 700;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .score-section::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 10%;
    width: 80%;
    height: 42%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 50%;
    pointer-events: none;
  }

  .progress-bar {
    height: 3rem;
    width: 100%;
    border-radius: 999px;
    border: 3px solid rgba(200, 160, 70, 0.6);
    background: rgba(200, 175, 100, 0.3);
    overflow: hidden;
    position: relative;
  }

  .progress {
    height: 100%;
    min-width: 3%;
    border-radius: 999px;
    position: relative;
    box-shadow: inset 0 -4px 10px rgba(0, 0, 0, 0.2), inset 0 3px 8px rgba(255, 255, 255, 0.35);
  }

  p.score {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    font-weight: 700;
    white-space: nowrap;
    color: #fff;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.5),
      0 2px 8px rgba(0, 0, 0, 0.9),
      0 0 14px rgba(255, 255, 255, 0.3);
  }
</style>

<body>
  <!-- Single SVG with one reusable flower symbol, placed 16 times -->
  <svg style="position:absolute;top:0;left:0;pointer-events:none;z-index:0;filter:blur(2.5px);" width="1200" height="1" xmlns="http://www.w3.org/2000/svg" overflow="visible">
    <defs>
      <symbol id="f" viewBox="0 0 100 100">
        <g transform="translate(50,50)">
          <g fill="none" stroke="currentColor" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
            <path d="M 0,-9 Q -11,-9 -11,-26 Q -11,-42 0,-43 Q 11,-42 11,-26 Q 11,-9 0,-9 Z"/>
            <path d="M 0,-9 Q -11,-9 -11,-26 Q -11,-42 0,-43 Q 11,-42 11,-26 Q 11,-9 0,-9 Z" transform="rotate(60)"/>
            <path d="M 0,-9 Q -11,-9 -11,-26 Q -11,-42 0,-43 Q 11,-42 11,-26 Q 11,-9 0,-9 Z" transform="rotate(120)"/>
            <path d="M 0,-9 Q -11,-9 -11,-26 Q -11,-42 0,-43 Q 11,-42 11,-26 Q 11,-9 0,-9 Z" transform="rotate(180)"/>
            <path d="M 0,-9 Q -11,-9 -11,-26 Q -11,-42 0,-43 Q 11,-42 11,-26 Q 11,-9 0,-9 Z" transform="rotate(240)"/>
            <path d="M 0,-9 Q -11,-9 -11,-26 Q -11,-42 0,-43 Q 11,-42 11,-26 Q 11,-9 0,-9 Z" transform="rotate(300)"/>
            <circle r="9"/>
          </g>
          <circle r="4" fill="currentColor" stroke="none"/>
        </g>
      </symbol>
    </defs>
    <!-- yellow -->
    <use href="#f" width="120" height="120" color="#ffd700" transform="translate(60,27)    rotate(12,60,60)"/>
    <use href="#f" width="126" height="126" color="#ffd700" transform="translate(1080,225) rotate(28,63,63)"/>
    <use href="#f" width="130" height="130" color="#ffd700" transform="translate(720,495)  rotate(8,65,65)"/>
    <!-- teal -->
    <use href="#f" width="94"  height="94"  color="#00bfa5" transform="translate(660,90)   rotate(-8,47,47)"/>
    <use href="#f" width="116" height="116" color="#00bfa5" transform="translate(96,540)   rotate(-5,58,58)"/>
    <use href="#f" width="100" height="100" color="#00bfa5" transform="translate(180,630)  rotate(-38,50,50)"/>
    <!-- magenta -->
    <use href="#f" width="132" height="132" color="#f50057" transform="translate(1020,450) rotate(20,66,66)"/>
    <use href="#f" width="78"  height="78"  color="#f50057" transform="translate(600,720)  rotate(45,39,39)"/>
    <use href="#f" width="88"  height="88"  color="#f50057" transform="translate(960,828)  rotate(22,44,44)"/>
    <!-- blue -->
    <use href="#f" width="88"  height="88"  color="#3d5afe" transform="translate(360,675)  rotate(-22,44,44)"/>
    <use href="#f" width="106" height="106" color="#3d5afe" transform="translate(936,135)  rotate(-30,53,53)"/>
    <!-- lime -->
    <use href="#f" width="108" height="108" color="#76ff03" transform="translate(780,792)  rotate(35,54,54)"/>
    <use href="#f" width="94"  height="94"  color="#76ff03" transform="translate(36,315)   rotate(-15,47,47)"/>
    <!-- cyan -->
    <use href="#f" width="100" height="100" color="#00e5ff" transform="translate(360,18)   rotate(-18,50,50)"/>
    <use href="#f" width="116" height="116" color="#00e5ff" transform="translate(1056,45)  rotate(40,58,58)"/>
    <use href="#f" width="120" height="120" color="#00e5ff" transform="translate(540,378)  rotate(-12,60,60)"/>
  </svg>

  <div class="scoreboard">
    {{#each players}}
      <div class="bamboo-frame">
        <div class="player-entry">
          <div class="player-details">
            <div class="position">
              <h2>{{{position}}}</h2>
              {{{positionDelta}}}
            </div>
            <h3 class="name" style="color: {{color}};">{{name}}</h3>
            <div class="score-section">
              <p style="color: {{color}};">+{{latestScore}}</p>
              {{{emoji}}}
            </div>
          </div>
          <div class="progress-bar">
            <div
              class="progress"
              style="width: {{scorePercentage}}%; background: {{color}};"
            >
              <p class="score">{{totalScore}}</p>
            </div>
          </div>
        </div>
      </div>
    {{/each}}
  </div>
</body>
`;
