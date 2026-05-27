// AUTO-GENERATED from spongebob-podium.hbs - DO NOT EDIT DIRECTLY
// Run 'npm run build:templates' to regenerate

export const SPONGEBOB_PODIUM_TEMPLATE = `<style>
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }

  body {
    font-family: 'Comic Sans MS', 'Chalkboard SE', cursive;
    font-size: 26px;
    color: #3b2000;
    background: linear-gradient(180deg, #5bc8f5 0%, #87d9f7 100%);
    width: 1200px;
    padding: 10px;
    position: relative;
    overflow: hidden;
  }

  .container {
    width: 100%;
    padding: 20px;
    border-radius: 18px;
    background: transparent;
    position: relative;
    z-index: 1;
  }

  /* ------------------------
     Podium area
     ------------------------ */
  .podium-wrap {
    display: flex;
    gap: 20px;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 20px;
  }

  .podium-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 280px;
  }

  .podium-pos {
    font-size: 32px;
    font-weight: 800;
    color: #ff5722;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.8),
      0 2px 5px rgba(200, 50, 0, 0.35);
    margin-bottom: 8px;
  }

  .podium-block {
    width: 100%;
    border-radius: 12px 12px 6px 6px;
    padding: 18px 14px 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
  }

  .podium-block::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 10%;
    width: 80%;
    height: 35%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 50%;
    pointer-events: none;
  }

  .podium-name {
    font-size: 24px;
    font-weight: 800;
    margin: 6px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.75),
      0 2px 6px rgba(0, 0, 0, 0.12);
  }

  .podium-score {
    font-size: 22px;
    font-weight: 700;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.5),
      0 2px 6px rgba(0, 0, 0, 0.15);
  }

  /* 1st place - golden sand castle */
  .col-1 .podium-block {
    height: 300px;
    background:
      linear-gradient(to top,
        rgba(194, 154, 50, 0.95),
        rgba(255, 215, 80, 0.9),
        rgba(255, 235, 140, 0.85),
        rgba(255, 215, 80, 0.9)
      );
    border: 3px solid rgba(200, 160, 50, 0.8);
    box-shadow:
      0 0 24px rgba(255, 200, 0, 0.45),
      inset 0 2px 8px rgba(255, 255, 255, 0.4),
      inset 0 -4px 12px rgba(160, 120, 20, 0.3);
    color: #5a3800;
  }

  /* 2nd place - lighter sand */
  .col-2 .podium-block {
    height: 220px;
    background:
      linear-gradient(to top,
        rgba(180, 160, 120, 0.9),
        rgba(220, 200, 160, 0.85),
        rgba(240, 225, 190, 0.8)
      );
    border: 2px solid rgba(180, 160, 120, 0.7);
    box-shadow:
      0 4px 16px rgba(0, 80, 150, 0.15),
      inset 0 2px 6px rgba(255, 255, 255, 0.35),
      inset 0 -3px 8px rgba(140, 120, 80, 0.2);
    color: #5a4020;
  }

  /* 3rd place - wet sand */
  .col-3 .podium-block {
    height: 180px;
    background:
      linear-gradient(to top,
        rgba(150, 130, 90, 0.9),
        rgba(190, 170, 130, 0.85),
        rgba(210, 195, 160, 0.8)
      );
    border: 2px solid rgba(150, 130, 90, 0.6);
    box-shadow:
      0 4px 12px rgba(0, 80, 150, 0.12),
      inset 0 2px 4px rgba(255, 255, 255, 0.25),
      inset 0 -3px 8px rgba(120, 100, 60, 0.2);
    color: #5a4020;
  }

  /* Bamboo frame for table rows */
  .bamboo-frame {
    position: relative;
    padding: 0 22px;
  }

  .bamboo-frame::before,
  .bamboo-frame::after {
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
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

  /* ------------------------
     Bottom table
     ------------------------ */
  .table-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 8px;
  }

  .table-row {
    display: grid;
    grid-template-columns: 64px 1fr auto 120px;
    align-items: center;
    gap: 14px;
    padding: 12px 14px;
    background: rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.55);
    box-shadow: 0 4px 16px rgba(0, 80, 150, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  .table-pos {
    font-weight: 800;
    font-size: 1.2em;
    color: #ff5722;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.8),
      0 2px 5px rgba(200, 50, 0, 0.35);
  }

  .table-name {
    font-weight: 700;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.75),
      0 2px 6px rgba(0, 0, 0, 0.12);
  }

  .table-stat {
    font-size: 0.9em;
    opacity: 0.8;
  }

  .table-score {
    font-weight: 800;
    text-align: right;
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.5),
      0 2px 6px rgba(0, 0, 0, 0.15);
  }
</style>

<body>
  <!-- Background flowers (same as spongebob scoreboard) -->
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

  <div class="container">
    <div class="podium-wrap">
      {{#with players.[1]}}
        <div class="podium-col col-2">
          <div class="podium-pos">2</div>
          <div class="podium-block">
            <div class="podium-name">
              {{&emoji }}
              {{name}}
              {{&emoji }}
            </div>
            <div class="podium-score">{{totalScore}}</div>
          </div>
        </div>
      {{/with}}

      {{#with players.[0]}}
        <div class="podium-col col-1">
          <div class="podium-pos">1</div>
          <div class="podium-block">
            <div class="podium-name">
              {{&emoji }}
              {{name}}
              {{&emoji }}
            </div>
            <div class="podium-score">{{totalScore}}</div>
          </div>
        </div>
      {{/with}}

      {{#with players.[2]}}
        <div class="podium-col col-3">
          <div class="podium-pos">3</div>
          <div class="podium-block">
            <div class="podium-name">
              {{&emoji }}
              {{name}}
              {{&emoji }}
            </div>
            <div class="podium-score">{{totalScore}}</div>
          </div>
        </div>
      {{/with}}
    </div>

    <div class="table-wrap">
      {{#each players}}
        <div class="bamboo-frame">
          <div class="table-row">
            <div class="table-pos">{{position}}</div>
            <div class="table-name" style="color: {{color}};">{{name}}</div>
            <div class="table-stat">{{stat}}</div>
            <div class="table-score" style="color: {{color}};">{{totalScore}}</div>
          </div>
        </div>
      {{/each}}
    </div>
  </div>
</body>
`;
