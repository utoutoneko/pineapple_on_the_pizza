/* =========================================================
   Pineapple on the ◉  —  Core Engine + Stage 1-10
   ========================================================= */

/* ---------- STAGE DATA ---------- */
const STAGES = [
  {id:1, name:"Starting", type:"hit", hint:"タップ長押しでチャージ、離して発射!"},
  {id:2, name:"Walking", type:"walk", hint:"タップで上下レーンを切り替えて避けよう"},
  {id:3, name:"Running", type:"run3", hint:"スワイプで3レーンを切り替えろ"},
  {id:4, name:"Jumping", type:"jump", hint:"タップでジャンプ!スコア100を目指せ"},
  {id:5, name:"Turning", type:"orbit", hint:"ドラッグで円を回って弾を避けろ"},
  {id:6, name:"Balancing", type:"balance", hint:"傾けて綱の上でバランスをとろう"},
  {id:7, name:"Stepping", type:"step", hint:"リングが石に重なった瞬間にタップ!"},
  {id:8, name:"Moving", type:"belt", hint:"タップでベルトのレーンを切り替えろ"},
  {id:9, name:"Standing", type:"shrink", hint:"ドラッグして中心に留まり続けろ"},
  {id:10, name:"Stopping", type:"brake", hint:"タップでブレーキ!ジャストで止めろ"},
  {id:11, name:"Slipping", type:"slip", hint:"氷の上をわずかな操作だけで誘導しろ"},
  {id:12, name:"Sliding", type:"slide", hint:"ドラッグでスライダーを操縦しろ"},
  {id:13, name:"Rolling", type:"maze", hint:"傾けて迷路を転がりゴールへ"},
  {id:14, name:"Falling", type:"drop", hint:"タップで左右に弾きながら落とせ"},
  {id:15, name:"Floating", type:"flap", hint:"タップで羽ばたいて隙間を抜けろ"},
  {id:16, name:"Sinking", type:"sink", hint:"タップで沈む速さを調整して魚を避けろ"},
  {id:17, name:"Heating", type:"heat", hint:"焦げる前にタップして裏返せ"},
  {id:18, name:"Cooling", type:"cool", hint:"長押しで扇いで熱いタイルを渡れ"},
  {id:19, name:"Freezing", type:"freeze", hint:"滑る距離を予測して着地しろ"},
  {id:20, name:"Melting", type:"melt", hint:"消える前に足場を渡り切れ"},
];

/* ---------- SAVE SYSTEM ---------- */
const SAVE_KEY = "pineapple_save_v1";
let saveData = { unlocked: 1, stars: {}, hiddenFound: {} };

async function loadSave(){
  try{
    const res = await window.storage.get(SAVE_KEY, false);
    if(res && res.value){ saveData = JSON.parse(res.value); }
    document.getElementById('saveHint').textContent = "セーブデータをロードしました";
  }catch(e){
    document.getElementById('saveHint').textContent = "新しいセーブデータで開始します";
  }
}
async function writeSave(){
  try{ await window.storage.set(SAVE_KEY, JSON.stringify(saveData), false); }catch(e){ /* best effort */ }
}
function unlockNext(idx){
  if(saveData.unlocked < idx+2){ saveData.unlocked = idx+2; }
}
function setStars(idx, stars){
  const cur = saveData.stars[idx] || 0;
  if(stars > cur) saveData.stars[idx] = stars;
}
function setHidden(idx){ saveData.hiddenFound[idx] = true; }

/* ---------- SCREEN MANAGEMENT ---------- */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ---------- STAGE SELECT RENDER ---------- */
function renderStageSelect(){
  const wrap = document.getElementById('stageScroll');
  wrap.innerHTML = "";
  STAGES.forEach((st,i)=>{
    const locked = (i+1) > saveData.unlocked;
    const card = document.createElement('div');
    card.className = 'stage-card' + (locked ? ' locked' : '');
    const stars = saveData.stars[i] || 0;
    const hiddenFound = !!saveData.hiddenFound[i];
    card.innerHTML = `
      ${hiddenFound ? '<div class="stage-hidden-mark">🔍</div>' : ''}
      <div class="stage-num">${locked ? '<span class="lockicon">🔒</span>' : st.id}</div>
      <div class="stage-name">${locked ? '？？？' : st.name}</div>
      <div class="stage-stars">${locked ? '' : '★'.repeat(stars) + '☆'.repeat(3-stars)}</div>
    `;
    if(!locked){
      card.addEventListener('click', ()=> startStage(i));
    }
    wrap.appendChild(card);
  });
}

/* ---------- INPUT ---------- */
const input = { down:false, x:0, y:0, justDown:false, justUp:false, dx:0, dy:0 };
const canvas = document.getElementById('gameCanvas');
function pos(e){
  const r = canvas.getBoundingClientRect();
  const t = e.touches ? e.touches[0] : e;
  return { x: (t.clientX - r.left) * (canvas.width/r.width), y: (t.clientY - r.top) * (canvas.height/r.height) };
}
canvas.addEventListener('pointerdown', e=>{ const p=pos(e); input.down=true; input.justDown=true; input.x=p.x; input.y=p.y; input.startX=p.x; input.startY=p.y; });
canvas.addEventListener('pointermove', e=>{ if(input.down){ const p=pos(e); input.dx=p.x-input.x; input.dy=p.y-input.y; input.x=p.x; input.y=p.y; } });
window.addEventListener('pointerup', e=>{ if(input.down){ input.justUp=true; } input.down=false; });
window.addEventListener('keydown', e=>{
  if(e.code==='Space'||e.code==='ArrowUp'){ if(!input.down){input.justDown=true;} input.down=true; }
  if(e.code==='ArrowLeft') input.key='left';
  if(e.code==='ArrowRight') input.key='right';
});
window.addEventListener('keyup', e=>{
  if(e.code==='Space'||e.code==='ArrowUp'){ input.justUp=true; input.down=false; }
  if(e.code==='ArrowLeft'||e.code==='ArrowRight') input.key=null;
});

/* ---------- GAME STATE ---------- */
const ctx = canvas.getContext('2d');
const W = canvas.width, H = canvas.height;
let curIdx = 0;
let stageState = null;
let running = false;
let startTime = 0;
let hiddenTriggered = false;
let rafId = null;

function clamp(v,a,b){ return Math.max(a,Math.min(b,v)); }
function rand(a,b){ return a + Math.random()*(b-a); }

function startStage(idx){
  curIdx = idx;
  hiddenTriggered = false;
  document.getElementById('stageLabel').textContent = `STAGE ${STAGES[idx].id} — ${STAGES[idx].name}`;
  document.getElementById('hintText').textContent = STAGES[idx].hint;
  document.getElementById('clearOverlay').classList.remove('show');
  const wrap = document.getElementById('powerbarWrap');
  wrap.classList.toggle('show', STAGES[idx].type === 'hit');
  stageState = STAGE_LOGIC[STAGES[idx].type].init();
  startTime = performance.now();
  running = true;
  showScreen('screen-game');
  if(rafId) cancelAnimationFrame(rafId);
  loop();
}

function restartStage(){ startStage(curIdx); }

function loop(){
  const now = performance.now();
  const dt = Math.min(0.033, 1/60);
  if(running){
    const result = STAGE_LOGIC[STAGES[curIdx].type].update(stageState, dt, input);
    input.justDown = false; input.justUp = false; input.dx = 0; input.dy = 0;
    ctx.clearRect(0,0,W,H);
    STAGE_LOGIC[STAGES[curIdx].type].render(ctx, stageState);
    if(result === 'clear'){ running=false; onClear(now); }
    else if(result === 'fail'){ running=false; onFail(); }
  }
  rafId = requestAnimationFrame(loop);
}

function onFail(){
  // quick shake feedback, then auto-retry same stage after short delay
  setTimeout(()=>{ startStage(curIdx); }, 550);
}

function onClear(now){
  const elapsed = (now - startTime)/1000;
  let stars = 1;
  const par = STAGE_LOGIC[STAGES[curIdx].type].par || 6;
  if(elapsed < par) stars = 3;
  else if(elapsed < par*1.6) stars = 2;
  if(hiddenTriggered) setHidden(curIdx);
  setStars(curIdx, stars);
  unlockNext(curIdx);
  writeSave();

  document.getElementById('clearTitle').textContent = hiddenTriggered ? 'HIDDEN CLEAR!' : 'CLEAR!';
  document.getElementById('clearStars').textContent = '★'.repeat(stars) + '☆'.repeat(3-stars);
  document.getElementById('clearTime').textContent = `TIME ${elapsed.toFixed(1)}s`;
  document.getElementById('hiddenBadge').style.display = hiddenTriggered ? 'block' : 'none';
  document.getElementById('btnClearNext').style.display = (curIdx+1 < STAGES.length) ? 'inline-block' : 'none';
  document.getElementById('clearOverlay').classList.add('show');
}

/* ---------- POWER BAR UI ---------- */
function setPowerbar(pct){
  document.getElementById('powerbarFill').style.height = clamp(pct,0,100)+'%';
}

/* =========================================================
   STAGE LOGIC TABLE
   ========================================================= */
const STAGE_LOGIC = {};

/* ---- 1. Starting: hit ---- */
STAGE_LOGIC.hit = {
  par: 3,
  init(){
    return { phase:'charge', power:0, dir:1, px:70, py:H-70, vx:0, vy:0, age:0,
             pizza:{x:W-90,y:H-70,w:80,h:26} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.phase==='charge'){
      if(inp.down){
        s.power += s.dir*140*dt;
        if(s.power>=100){ s.power=100; s.dir=-1; }
        if(s.power<=0){ s.power=0; s.dir=1; }
        setPowerbar(s.power);
      }
      if(inp.justUp){
        if(s.secretMode){
          // 裏技: どんなパワーでも必ずピザ中心に決まる魔法の一撃
          s.vx = 392; s.vy = -469;
        } else {
          const shot = shotFromPower(s.power/100);
          s.vx = shot.vx; s.vy = -shot.vy;
        }
        s.phase='fly';
      }
    } else if(s.phase==='fly'){
      s.vy += 1020*dt;
      s.px += s.vx*dt; s.py += s.vy*dt;
      // 着地判定: 地面の高さを最初にまたいだ瞬間のx位置で一発判定(y方向のブレに強い)
      if(s.vy>0 && s.py >= H-70){
        const inGoal = s.px > s.pizza.x-20 && s.px < s.pizza.x+s.pizza.w+20;
        if(inGoal) return 'clear';
        return 'fail';
      }
      if(s.py > H+60 || s.px > W+60) return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    drawPizza(ctx, s.pizza.x, s.pizza.y, s.pizza.w);
    const shot = shotFromPower(clamp(s.power,5,100)/100);
    const previewAngle = -Math.atan2(shot.vy, shot.vx);
    drawStick(ctx, 70, H-70, s.phase==='charge', previewAngle);
    drawPineapple(ctx, s.px, s.py);
    if(s.secretMode && s.phase==='fly'){ ctx.font='20px serif'; ctx.fillText('✨', s.px-22, s.py); }
  }
};
/* パワー(0〜1)からショットの初速を計算。パワーが強いほど「角度」も一緒に立ち上がって
   フラットな強打→高い山なりショットへちゃんと弧の形が変わる。飛距離は0.05秒/フレームの
   数値検証済みで、8割前後の力でピザにジャストヒット・マックスは飛び越えて外れる設計。 */
function shotFromPower(p){
  p = clamp(p,0.05,1);
  const vx = 364*Math.pow(p,0.3);
  const vy = 672*Math.pow(p,1.7);
  return { vx, vy };
}

/* ---- secret hidden-mode helper (共通・全STAGE) ----
   ステージ開始直後1.2秒以内に「素早い2連タップ」をすると隠しモード発動。
   通常のプレイ操作(長押しチャージ等)とはかぶらないので、知らないと絶対気づかない。 */
function checkSecretDoubleTap(s, dt, inp){
  s.age = (s.age||0) + dt;
  if(!s.secretMode && s.age < 1.2 && inp.justDown){
    const now = performance.now();
    if(s.lastTapT && now - s.lastTapT < 300){ s.secretMode = true; }
    s.lastTapT = now;
  }
}

/* ---- 2. Walking ---- */
STAGE_LOGIC.walk = {
  par: 8,
  init(){
    return { dist:0, lane:0, target:0, px:80, laneY:[H-70,H-160], obstacles:[], timer:0, speed:120,
             pizza:{x:W-90,y:0,w:80,h:0} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.target = s.lane===0?1:0; }
    s.lane += (s.target - s.lane) * Math.min(1, dt*10);
    s.timer -= dt;
    if(s.timer<=0){ s.timer = rand(0.9,1.4); s.obstacles.push({x:W+20, lane: Math.random()<0.5?0:1}); }
    s.dist += s.speed*dt;
    s.obstacles.forEach(o=> o.x -= s.speed*dt);
    s.obstacles = s.obstacles.filter(o=>o.x>-40);
    const py = s.laneY[0] + (s.laneY[1]-s.laneY[0]) * s.lane;
    if(!s.secretMode){
      for(const o of s.obstacles){
        const oy = s.laneY[o.lane];
        if(Math.abs(o.x-90)<26 && Math.abs(py-oy)<20) return 'fail';
      }
    }
    s.py = py;
    if(s.dist > 1600){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#c9a876'; ctx.lineWidth=2; ctx.setLineDash([6,8]);
    ctx.beginPath(); ctx.moveTo(0, (H-70+H-160)/2); ctx.lineTo(W,(H-70+H-160)/2); ctx.stroke(); ctx.setLineDash([]);
    drawPizza(ctx, W-90, s.laneY[1]-6, 80);
    s.obstacles.forEach(o=>{
      ctx.fillStyle='#E85A2A';
      ctx.fillRect(o.x-16, s.laneY[o.lane]-16, 32, 32);
    });
    drawPineapple(ctx, 90, s.py);
    if(s.secretMode){ ctx.font='16px serif'; ctx.fillText('✨', 90-30, s.py); }
    const pct = clamp(s.dist/1600,0,1)*100;
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito';
    ctx.fillText(Math.round(pct)+'%', 10, 20);
  }
};

/* ---- 3. Running (3-lane) ---- */
STAGE_LOGIC.run3 = {
  par: 8,
  init(){
    return { lane:1, dist:0, obstacles:[], timer:0, speed:5.4, laneX:[W*0.25,W*0.5,W*0.75] };
  },
  update(s, dt, inp){
    if(inp.justDown){
      const dx = inp.x - (inp.startX||inp.x);
    }
    if(inp.dx > 18){ s.lane = clamp(s.lane+1,0,2); inp.dx=0; }
    if(inp.dx < -18){ s.lane = clamp(s.lane-1,0,2); inp.dx=0; }
    if(inp.key==='right'){ s.lane = clamp(s.lane+ (s._lastKey!=='right'?1:0),0,2); s._lastKey='right'; }
    else if(inp.key==='left'){ s.lane = clamp(s.lane- (s._lastKey!=='left'?1:0),0,2); s._lastKey='left'; }
    else s._lastKey=null;

    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.85; s.obstacles.push({z:0, lane:Math.floor(rand(0,3))}); }
    s.obstacles.forEach(o=> o.z += s.speed*dt);
    s.obstacles = s.obstacles.filter(o=>o.z<1.15);
    for(const o of s.obstacles){
      if(o.z>0.86 && o.z<1.02 && o.lane===s.lane) return 'fail';
    }
    s.dist += dt;
    if(s.dist > 9) return 'clear';
  },
  render(ctx,s){
    // road perspective
    const g = ctx.createLinearGradient(0,0,0,H); g.addColorStop(0,'#EAF6FF'); g.addColorStop(1,'#DCEFFF');
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#d8c9a3'; ctx.beginPath();
    ctx.moveTo(W*0.42,40); ctx.lineTo(W*0.58,40); ctx.lineTo(W*0.92,H); ctx.lineTo(W*0.08,H); ctx.closePath(); ctx.fill();
    ctx.strokeStyle='#fff'; ctx.lineWidth=3;
    [0.333,0.667].forEach(f=>{
      ctx.beginPath();
      ctx.moveTo(W*0.42 + (W*0.58-W*0.42)*f, 40);
      ctx.lineTo(W*0.08 + (W*0.92-W*0.08)*f, H);
      ctx.stroke();
    });
    drawPizza(ctx, W/2-40, 20, 80);
    s.obstacles.forEach(o=>{
      const y = 40 + o.z*(H-40);
      const laneF = [0.166,0.5,0.833][o.lane];
      const topX = W*0.42 + (W*0.58-W*0.42)*laneF;
      const botX = W*0.08 + (W*0.92-W*0.08)*laneF;
      const x = topX + (botX-topX)*o.z;
      const size = 14 + o.z*30;
      ctx.fillStyle='#E85A2A'; ctx.fillRect(x-size/2, y-size/2, size, size);
    });
    const laneF=[0.166,0.5,0.833][s.lane];
    const px = W*0.08 + (W*0.92-W*0.08)*laneF;
    drawPineapple(ctx, px, H-50);
  }
};

/* ---- 4. Jumping ---- */
STAGE_LOGIC.jump = {
  par: 10,
  init(){
    return { px:90, py:H-70, vy:0, onGround:true, obstacles:[], timer:0, score:0, speed:220 };
  },
  update(s, dt, inp){
    if(inp.justDown && s.onGround){ s.vy=-460; s.onGround=false; }
    s.vy += 1300*dt; s.py += s.vy*dt;
    if(s.py>=H-70){ s.py=H-70; s.vy=0; s.onGround=true; }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=rand(0.75,1.15); s.obstacles.push({x:W+20, passed:false}); }
    s.obstacles.forEach(o=> o.x -= s.speed*dt);
    s.obstacles = s.obstacles.filter(o=>o.x>-30);
    for(const o of s.obstacles){
      if(!o.passed && o.x < 90){
        o.passed=true; s.score+=10;
        if(s.score===40) { /* midway */ }
      }
      if(Math.abs(o.x-90)<20 && s.py>H-100) return 'fail';
    }
    if(s.score>=100) return 'clear';
  },
  render(ctx,s){
    drawGround(ctx);
    drawPizza(ctx, W-90, H-70, 80);
    s.obstacles.forEach(o=>{
      ctx.fillStyle='#7A4A26'; ctx.fillRect(o.x-14, H-104, 28, 34);
    });
    drawPineapple(ctx, s.px, s.py);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 16px "Baloo 2"';
    ctx.fillText('SCORE '+s.score+' / 100', 12, 26);
  }
};

/* ---- 5. Turning (orbit) ---- */
STAGE_LOGIC.orbit = {
  par: 6,
  init(){
    return { cx:W/2, cy:H/2, r:150, ang:0, bullets:[], timer:0, survive:0, moved:false, phase:'orbit' };
  },
  update(s, dt, inp){
    if(inp.down){
      s.ang += ((inp.x - s.cx) - (s.r*Math.cos(s.ang))) * 0; // unused
    }
    if(inp.key==='left'){ s.ang -= 2.6*dt; s.moved=true; }
    if(inp.key==='right'){ s.ang += 2.6*dt; s.moved=true; }
    if(inp.down){ // drag steering
      const targetAng = Math.atan2(inp.y-s.cy, inp.x-s.cx);
      s.ang += Math.sin(targetAng - s.ang) * 3 * dt; s.moved=true;
    }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.55; s.bullets.push({a:rand(0,Math.PI*2), r:0}); }
    s.bullets.forEach(b=> b.r += 210*dt);
    s.bullets = s.bullets.filter(b=>b.r < s.r+40);
    const px = s.cx + Math.cos(s.ang)*s.r, py = s.cy + Math.sin(s.ang)*s.r;
    for(const b of s.bullets){
      const bx = s.cx+Math.cos(b.a)*b.r, by = s.cy+Math.sin(b.a)*b.r;
      if(Math.hypot(px-bx,py-by) < 20) return 'fail';
    }
    s.survive += dt;
    if(s.survive > 6){
      if(!s.moved) hiddenTriggered = true;
      return 'clear';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#c9a876'; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(s.cx,s.cy,s.r,0,7); ctx.stroke();
    drawPizza(ctx, s.cx-40, s.cy-24, 80);
    s.bullets.forEach(b=>{
      const bx=s.cx+Math.cos(b.a)*b.r, by=s.cy+Math.sin(b.a)*b.r;
      ctx.fillStyle='#E85A2A'; ctx.beginPath(); ctx.arc(bx,by,9,0,7); ctx.fill();
    });
    const px=s.cx+Math.cos(s.ang)*s.r, py=s.cy+Math.sin(s.ang)*s.r;
    drawPineapple(ctx, px, py);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 14px Nunito';
    ctx.fillText((6-s.survive).toFixed(1)+'s', 12, 22);
  }
};

/* ---- 6. Balancing ---- */
STAGE_LOGIC.balance = {
  par: 7,
  init(){
    return { x:40, angle:0, av:0, wind:0, windTimer:0, avgAbsAngle:0, samples:0 };
  },
  update(s, dt, inp){
    s.windTimer -= dt;
    if(s.windTimer<=0){ s.windTimer=rand(1,2); s.wind = rand(-1,1)*1.6; }
    let tilt = 0;
    if(inp.key==='left') tilt=-1;
    if(inp.key==='right') tilt=1;
    if(inp.down){ tilt = clamp((inp.x - W/2)/ (W/2), -1, 1); }
    s.av += (tilt*2.4 - s.angle*3 + s.wind) * dt;
    s.av *= 0.98;
    s.angle += s.av*dt;
    s.angle = clamp(s.angle, -1.3, 1.3);
    s.avgAbsAngle += Math.abs(s.angle); s.samples++;
    if(Math.abs(s.angle) > 1.0) return 'fail';
    s.x += 130*dt;
    if(s.x > W-60){
      if((s.avgAbsAngle/s.samples) < 0.15) hiddenTriggered = true;
      return 'clear';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=5;
    ctx.beginPath(); ctx.moveTo(20,H*0.45); ctx.lineTo(W-20,H*0.45); ctx.stroke();
    drawPizza(ctx, W-90, H*0.45-40, 80);
    ctx.save();
    ctx.translate(s.x, H*0.45-16);
    ctx.rotate(s.angle);
    drawPineapple(ctx,0,0);
    ctx.restore();
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito';
    ctx.fillText('WIND '+(s.wind>0?'→':'←').repeat(Math.ceil(Math.abs(s.wind))||1), 12, 22);
  }
};

/* ---- 7. Stepping ---- */
STAGE_LOGIC.step = {
  par: 9,
  init(){
    const stones = 8;
    return { stones, cur:0, ringR:90, target:26, perfectCombo:true, x0:60, gap:(W-120)/stones };
  },
  update(s, dt, inp){
    s.ringR -= 55*dt;
    if(s.ringR < 6) s.ringR = 90;
    if(inp.justDown){
      if(Math.abs(s.ringR - s.target) < 10){
        s.cur++;
        s.ringR = 90;
        if(s.cur >= s.stones){
          if(s.perfectCombo) hiddenTriggered = true;
          return 'clear';
        }
      } else {
        s.perfectCombo = false;
        s.ringR = 90;
      }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    for(let i=0;i<=s.stones;i++){
      const x = s.x0 + i*s.gap;
      ctx.fillStyle = i<=s.cur ? '#FFC93C':'#e7dcc0';
      ctx.beginPath(); ctx.arc(x, H-70, 16, 0, 7); ctx.fill();
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=2; ctx.stroke();
    }
    drawPizza(ctx, s.x0+s.stones*s.gap-40, H-110, 80);
    // shrinking timing ring closing onto the current target stone
    const cx = s.x0 + s.cur*s.gap;
    ctx.strokeStyle='#FF7A3D'; ctx.lineWidth=3;
    ctx.beginPath(); ctx.arc(cx, H-70, s.ringR, 0, 7); ctx.stroke();
    drawPineapple(ctx, cx, H-100);
  }
};

/* ---- 8. Moving (belt) ---- */
STAGE_LOGIC.belt = {
  par: 8,
  init(){
    return { lane:0, x:60, laneY:[H*0.35,H*0.65], dirs:[1,-1], walls:[], timer:0, speed:150, perfect:true };
  },
  update(s, dt, inp){
    if(inp.justDown){ s.lane = s.lane===0?1:0; }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=rand(1,1.5); s.walls.push({x:W+20, lane:Math.round(Math.random())}); }
    s.walls.forEach(w=> w.x -= s.speed*dt);
    s.walls = s.walls.filter(w=>w.x>-30);
    s.x += (s.dirs[s.lane]*40 + 90)*dt;
    for(const w of s.walls){
      if(Math.abs(w.x - s.x) < 22 && w.lane===s.lane) return 'fail';
    }
    if(s.x > W-70) return 'clear';
  },
  render(ctx,s){
    drawGround(ctx);
    s.laneY.forEach((y,i)=>{
      ctx.fillStyle = i===s.lane? '#ffe1b0':'#f2e3c6';
      ctx.fillRect(0,y-24,W,48);
    });
    drawPizza(ctx, W-90, s.laneY[1]-24, 80);
    s.walls.forEach(w=>{
      ctx.fillStyle='#7A4A26'; ctx.fillRect(w.x-10, s.laneY[w.lane]-24, 20, 48);
    });
    drawPineapple(ctx, s.x, s.laneY[s.lane]);
  }
};

/* ---- 9. Standing (shrink) ---- */
STAGE_LOGIC.shrink = {
  par: 8,
  init(){
    return { cx:W/2, cy:H/2, r:170, px:W/2, py:H/2, t:0, dur:8, innerTime:0 };
  },
  update(s, dt, inp){
    s.r -= 12*dt;
    if(inp.down){ s.px += clamp(inp.dx,-8,8)*2; s.py += clamp(inp.dy,-8,8)*2; }
    const d = Math.hypot(s.px-s.cx, s.py-s.cy);
    if(d > s.r) return 'fail';
    if(d < s.r*0.2) s.innerTime += dt;
    s.t += dt;
    if(s.t > s.dur){
      if(s.innerTime > s.dur*0.7) hiddenTriggered = true;
      return 'clear';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#f2e3c6'; ctx.beginPath(); ctx.arc(s.cx,s.cy,Math.max(s.r,4),0,7); ctx.fill();
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=3; ctx.stroke();
    drawPineapple(ctx, s.px, s.py);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 14px Nunito';
    ctx.fillText((s.dur-s.t).toFixed(1)+'s', 12, 22);
    ctx.font='30px sans-serif'; ctx.fillText('🍕', s.cx-16, 24);
  }
};

/* ---- 10. Stopping (brake) ---- */
STAGE_LOGIC.brake = {
  par: 5,
  init(){
    return { x:40, v:420, braking:false, goal:{x:W-140,w:70}, cliff:W-20, done:false };
  },
  update(s, dt, inp){
    if(inp.justDown && !s.braking){ s.braking = true; }
    if(s.braking){ s.v = Math.max(0, s.v - 620*dt); }
    s.x += s.v*dt;
    if(s.v<=0){
      if(s.x > s.goal.x && s.x < s.goal.x+s.goal.w){
        if(Math.abs(s.x-(s.goal.x+s.goal.w/2)) < 8) hiddenTriggered = true;
        return 'clear';
      }
      return 'fail';
    }
    if(s.x > s.cliff) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='rgba(255,201,60,.5)'; ctx.fillRect(s.goal.x, H-90, s.goal.w, 40);
    ctx.strokeStyle='#FFC93C'; ctx.lineWidth=3; ctx.strokeRect(s.goal.x, H-90, s.goal.w, 40);
    drawPizza(ctx, s.goal.x+ s.goal.w/2-40, H-90, 80);
    ctx.fillStyle='#4A2C14'; ctx.fillRect(s.cliff, H-70, 4, 40);
    drawPineapple(ctx, s.x, H-70);
  }
};

/* ---- 11. Slipping ---- */
STAGE_LOGIC.slip = {
  par: 8,
  init(){
    return { y:H-40, x:W/2, vx:0, width:120, timer:0, gates:[] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    const accel = s.secretMode ? 900 : 260; // 隠し=バネで弾いた反応の良い滑走
    if(inp.down){ s.vx += clamp(inp.dx,-6,6) * accel*dt*0.15; }
    s.vx *= s.secretMode ? 0.995 : 0.985; // 氷であまり減速しない
    s.x += s.vx*dt;
    s.y -= 150*dt;
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.9; s.gates.push({y:s.y-260, cx: W/2+rand(-90,90), w: s.width}); }
    for(const g of s.gates){
      if(Math.abs(g.y - s.y) < 6 && Math.abs(s.x-g.cx) > g.w/2 && !s.secretMode){ return 'fail'; }
    }
    if(s.x < 20 || s.x > W-20) return s.secretMode ? undefined : 'fail';
    if(s.y < 60){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    drawPizza(ctx, W/2-40, 20, 80);
    s.gates.forEach(g=>{
      ctx.fillStyle='#cfe9ff';
      ctx.fillRect(0, g.y, g.cx-g.w/2, 4);
      ctx.fillRect(g.cx+g.w/2, g.y, W-(g.cx+g.w/2), 4);
    });
    drawPineapple(ctx, s.x, s.y);
    if(s.secretMode){ ctx.font='16px serif'; ctx.fillText('🌀', s.x+18, s.y); }
  }
};

/* ---- 12. Sliding ---- */
STAGE_LOGIC.slide = {
  par: 8,
  init(){
    return { t:0, x:W/2, dur:7, tunnel:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    const targetX = W/2 + Math.sin(s.t*1.6)*140;
    if(inp.down){ s.x += clamp(inp.dx,-10,10)*2.2; }
    else { s.x += (targetX - s.x) * 0.02; }
    const dist = Math.abs(s.x - targetX);
    if(!s.secretMode && dist > 70) return 'fail';
    if(s.t > s.dur){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#9ad1ff'; ctx.lineWidth=60; ctx.lineCap='round';
    ctx.beginPath();
    for(let i=0;i<=20;i++){
      const tt = s.t + i*0.35;
      const xx = W/2 + Math.sin(tt*1.6)*140;
      const yy = H - (i*H/20);
      if(i===0) ctx.moveTo(xx,yy); else ctx.lineTo(xx,yy);
    }
    ctx.stroke();
    drawPizza(ctx, W/2-40, 10, 80);
    drawPineapple(ctx, s.x, H-60);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(Math.round(s.t/s.dur*100)+'%',10,20);
  }
};

/* ---- 13. Rolling (tilt maze) ---- */
STAGE_LOGIC.maze = {
  par: 9,
  init(){
    return { x:60, y:H-60, vx:0, vy:0,
      walls:[ {x:140,y:200,w:20,h:220}, {x:260,y:60,w:20,h:240}, {x:W-140,y:220,w:20,h:220} ],
      goal:{x:W-90,y:60,w:60,h:60} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    let ax=0, ay=0;
    if(inp.down){ ax = clamp(inp.dx,-8,8)*30; ay = clamp(inp.dy,-8,8)*30; }
    s.vx = clamp(s.vx + ax*dt, -180,180); s.vy = clamp(s.vy + ay*dt, -180,180);
    s.vx *= 0.94; s.vy *= 0.94;
    let nx = s.x + s.vx*dt, ny = s.y + s.vy*dt;
    nx = clamp(nx,20,W-20); ny = clamp(ny,20,H-20);
    if(!s.secretMode){
      for(const w of s.walls){
        if(nx>w.x-14 && nx<w.x+w.w+14 && ny>w.y-14 && ny<w.y+w.h+14){ nx=s.x; ny=s.y; s.vx*=-0.3; s.vy*=-0.3; }
      }
    }
    s.x=nx; s.y=ny;
    if(s.x>s.goal.x && s.x<s.goal.x+s.goal.w && s.y>s.goal.y && s.y<s.goal.y+s.goal.h){
      if(s.secretMode) hiddenTriggered = true;
      return 'clear';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle = s.secretMode ? 'rgba(122,74,38,.25)' : '#7A4A26';
    s.walls.forEach(w=> ctx.fillRect(w.x,w.y,w.w,w.h));
    drawPizza(ctx, s.goal.x, s.goal.y, 60);
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 14. Falling (dropper / plinko) ---- */
STAGE_LOGIC.drop = {
  par: 6,
  init(){
    const pegs=[];
    for(let r=0;r<6;r++){ for(let c=0;c<6;c++){ pegs.push({x:40+c*80+(r%2)*40, y:80+r*55}); } }
    return { x:W/2, y:40, vx:0, vy:0, pegs, goal:{x:W/2-70,w:140} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.vx += (inp.x < s.x ? -70 : 70); }
    s.vy += 380*dt;
    s.x += s.vx*dt; s.y += s.vy*dt;
    s.vx *= 0.99;
    for(const p of s.pegs){
      const d = Math.hypot(s.x-p.x, s.y-p.y);
      if(d < 16){
        const nx=(s.x-p.x)/d, ny=(s.y-p.y)/d;
        s.x = p.x+nx*16; s.y=p.y+ny*16;
        if(s.secretMode){ s.vx += (s.goal.x+s.goal.w/2 - s.x) * 0.4; } // 隠し=釘が優しくゴールへ誘導
        else { s.vx += nx*140 + rand(-40,40); }
        s.vy *= 0.6;
      }
    }
    s.x = clamp(s.x, 16, W-16);
    if(s.y > H-40){
      const inGoal = s.x > s.goal.x && s.x < s.goal.x+s.goal.w;
      if(inGoal){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
      return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    s.pegs.forEach(p=>{ ctx.fillStyle='#c9a876'; ctx.beginPath(); ctx.arc(p.x,p.y,6,0,7); ctx.fill(); });
    ctx.fillStyle='rgba(255,201,60,.5)'; ctx.fillRect(s.goal.x, H-40, s.goal.w, 30);
    drawPizza(ctx, s.goal.x+s.goal.w/2-40, H-46, 80);
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 15. Floating (flappy) ---- */
STAGE_LOGIC.flap = {
  par: 9,
  init(){
    return { y:H/2, vy:0, x:80, pipes:[], timer:0, dist:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.vy = -230; }
    s.vy += 480*dt; s.y += s.vy*dt;
    s.dist += 140*dt;
    s.timer -= dt;
    if(s.timer<=0){ s.timer=1.1; const gy=rand(90,H-160); s.pipes.push({x:W+30, gy, gap:130, passed:false}); }
    s.pipes.forEach(p=> p.x -= 140*dt);
    s.pipes = s.pipes.filter(p=>p.x>-40);
    if(!s.secretMode){
      if(s.y<10 || s.y>H-10) return 'fail';
      for(const p of s.pipes){
        if(Math.abs(p.x-s.x)<26 && (s.y < p.gy || s.y > p.gy+p.gap)) return 'fail';
      }
    }
    if(s.dist > 2000){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.pipes.forEach(p=>{
      ctx.fillStyle='#4C9A2A';
      ctx.fillRect(p.x-18,0,36,p.gy);
      ctx.fillRect(p.x-18,p.gy+p.gap,36,H-(p.gy+p.gap));
    });
    drawPineapple(ctx, s.x, s.y);
    if(s.secretMode){ ctx.font='16px serif'; ctx.fillText('✨', s.x-24, s.y); }
    const pct = clamp(s.dist/2000,0,1)*100;
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(Math.round(pct)+'%',10,20);
    if(pct>85){ drawPizza(ctx, W-70, s.y-40, 60); }
  }
};

/* ---- 16. Sinking ---- */
STAGE_LOGIC.sink = {
  par: 7,
  init(){
    return { y:40, vy:60, x:W/2, fish:[], timer:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.down){ s.vy = Math.max(20, s.vy-260*dt); } else { s.vy = Math.min(260, s.vy+260*dt); }
    s.y += s.vy*dt;
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.8; s.fish.push({x: Math.random()<0.5?-20:W+20, y: rand(80,H-120), dir: Math.random()<0.5?1:-1}); }
    s.fish.forEach(f=> f.x += f.dir*90*dt);
    s.fish = s.fish.filter(f=>f.x>-40 && f.x<W+40);
    if(!s.secretMode){
      for(const f of s.fish){ if(Math.abs(f.x-s.x)<22 && Math.abs(f.y-s.y)<18) return 'fail'; }
    }
    if(s.y > H-70){
      const soft = s.vy < 160;
      if(soft || s.secretMode){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
      return 'fail';
    }
  },
  render(ctx,s){
    ctx.fillStyle='#BFE3FF'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f2e3c6'; ctx.fillRect(0,H-70,W,70);
    drawPizza(ctx, W/2-40, H-70, 80);
    s.fish.forEach(f=>{ ctx.font='22px serif'; ctx.fillText(f.dir>0?'🐟':'🐠', f.x-11, f.y+8); });
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 17. Heating ---- */
STAGE_LOGIC.heat = {
  par: 7,
  init(){
    return { mode:'pan', heat:0, flips:0, needFlips:4, x:W/2, y:H/2,
             hopIdx:0, hopTiles:5, airborne:false, ouchHeat:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.secretMode && s.mode==='pan'){ s.mode='hop'; } // 発見した瞬間マリオ64風の火渡りモードへ切り替え
    if(s.mode==='pan'){
      s.heat += 26*dt;
      if(inp.justDown){ s.flips++; s.heat = Math.max(0,s.heat-38); }
      if(s.heat >= 100) return 'fail';
      if(s.flips >= s.needFlips) return 'clear';
    } else { // hop: マリオ64「あちちっ！」火渡り
      s.ouchHeat += 18*dt;
      if(inp.justDown){ s.hopIdx++; s.ouchHeat = 0; s.airborne=true; setTimeout(()=>{},0); }
      if(s.ouchHeat > 100) return 'fail';
      if(s.hopIdx >= s.hopTiles){ hiddenTriggered = true; return 'clear'; }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    if(s.mode==='pan'){
      ctx.fillStyle='#333'; ctx.beginPath(); ctx.arc(W/2,H/2,90,0,7); ctx.fill();
      ctx.fillStyle= s.heat>70 ? '#FF3B3B':'#FF7A3D';
      ctx.fillRect(40,H-30, (W-80)*(s.heat/100), 14);
      drawPineapple(ctx, W/2, H/2-10);
      ctx.fillStyle='#7A4A26'; ctx.font='bold 13px Nunito'; ctx.fillText('FLIP '+s.flips+'/'+s.needFlips, 12, 22);
      drawPizza(ctx, W-90, 20, 70);
    } else {
      for(let i=0;i<s.hopTiles;i++){
        ctx.font='30px serif'; ctx.fillText('🔥', 40+i*80, H-60);
      }
      ctx.fillStyle= s.ouchHeat>60 ? '#FF3B3B':'#FFC93C';
      ctx.fillRect(40,H-100,(W-80)*(s.ouchHeat/100),10);
      drawPineapple(ctx, 40+s.hopIdx*80, H-100);
      drawPizza(ctx, 40+s.hopTiles*80-30, H-60, 60);
      ctx.fillStyle='#7A4A26'; ctx.font='bold 13px "Baloo 2"'; ctx.fillText('あちちっ！タップで跳べ', 12, 22);
    }
  }
};

/* ---- 18. Cooling ---- */
STAGE_LOGIC.cool = {
  par: 8,
  init(){
    return { dist:0, heat:20, x:80 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.dist += 110*dt;
    s.heat += (inp.down ? -70 : 40) * dt;
    s.heat = clamp(s.heat,0,100);
    if(!s.secretMode && s.heat>=100) return 'fail';
    if(s.secretMode) s.dist += 160*dt; // 隠し=氷の橋で近道
    if(s.dist > 1500){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    for(let i=0;i<8;i++){ ctx.fillStyle= i%2? '#FFB870':'#FFD9A8'; ctx.fillRect(i*70 - (s.dist%140), H-90, 60,30); }
    drawPizza(ctx, W-90, H-120, 80);
    drawPineapple(ctx, s.x, H-90);
    ctx.fillStyle= s.heat>70?'#FF3B3B':'#7A4A26'; ctx.font='bold 13px Nunito';
    ctx.fillText('HEAT '+Math.round(s.heat), 12, 22);
    const pct = clamp(s.dist/1500,0,1)*100;
    ctx.fillText(Math.round(pct)+'%', 12, 40);
  }
};

/* ---- 19. Freezing ---- */
STAGE_LOGIC.freeze = {
  par: 6,
  init(){
    return { x:40, v:0, taps:0, goal:{x:W-140,w:80}, cliff:W-20, grip:0.985 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.v += 130; s.taps++; s.grip -= s.secretMode?0:0.02; }
    s.x += s.v*dt;
    s.v *= s.secretMode ? 0.9 : Math.max(0.90, s.grip);
    if(s.x > s.cliff) return 'fail';
    if(Math.abs(s.v) < 4 && s.taps>0){
      const ok = s.x>s.goal.x && s.x<s.goal.x+s.goal.w;
      if(ok){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
      return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='rgba(154,209,255,.5)'; ctx.fillRect(s.goal.x,H-90,s.goal.w,40);
    ctx.strokeStyle='#9ad1ff'; ctx.lineWidth=3; ctx.strokeRect(s.goal.x,H-90,s.goal.w,40);
    drawPizza(ctx, s.goal.x+s.goal.w/2-40, H-90, 80);
    ctx.fillStyle='#4A2C14'; ctx.fillRect(s.cliff,H-70,4,40);
    drawPineapple(ctx, s.x, H-70);
  }
};

/* ---- 20. Melting ---- */
STAGE_LOGIC.melt = {
  par: 9,
  init(){
    const n=7;
    const plats=[]; for(let i=0;i<n;i++){ plats.push({x:50+i*60, life:2.6, stepped:false}); }
    return { cur:0, n, plats, x:50, y:H-70 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(!s.secretMode){
      s.plats.forEach((p,i)=>{ if(p.stepped || i<s.cur) p.life -= dt; });
    }
    if(inp.justDown && s.cur < s.n-1){
      s.plats[s.cur].stepped = true;
      s.cur++;
      s.x = s.plats[s.cur].x;
    }
    if(!s.secretMode && s.plats[s.cur] && s.plats[s.cur].life <= 0) return 'fail';
    if(s.cur >= s.n-1 && s.plats[s.cur].life>0){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.plats.forEach((p,i)=>{
      const alive = s.secretMode || p.life>0;
      ctx.fillStyle = i===s.cur ? '#FFC93C' : (alive?'#FFEFC9':'rgba(255,255,255,.1)');
      if(alive) ctx.fillRect(p.x-24,H-56,48,14);
    });
    drawPizza(ctx, s.plats[s.n-1].x-30, H-96, 60);
    drawPineapple(ctx, s.x, H-70);
  }
};

/* ---------- SHARED DRAW HELPERS ---------- */
function drawGround(ctx){
  ctx.fillStyle='#EAF6FF'; ctx.fillRect(0,0,W,H*0.75);
  ctx.fillStyle='#f2e3c6'; ctx.fillRect(0,H*0.75,W,H*0.25);
}
function drawPineapple(ctx,x,y){
  ctx.save(); ctx.translate(x,y);
  ctx.font = '38px serif';
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText('🍍', 0, 2);
  ctx.restore();
}
function drawPizza(ctx,x,y,w){
  ctx.save();
  ctx.font = (w*0.6)+'px serif';
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText('🍕', x+w/2, y+w*0.35);
  ctx.restore();
}
function drawStick(ctx,x,y,active,angle){
  ctx.save();
  ctx.strokeStyle='#7A4A26'; ctx.lineWidth=8; ctx.lineCap='round';
  const a = (typeof angle==='number') ? angle : -0.5;
  ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+Math.cos(a)*46, y+Math.sin(a)*46); ctx.stroke();
  ctx.restore();
}

/* =========================================================
   UI WIRING
   ========================================================= */
document.getElementById('btnStart').addEventListener('click', ()=>{ renderStageSelect(); showScreen('screen-select'); });
document.getElementById('btnBackToTitle').addEventListener('click', ()=> showScreen('screen-title'));
document.getElementById('btnRestart').addEventListener('click', restartStage);
document.getElementById('btnClearRestart').addEventListener('click', ()=>{ document.getElementById('clearOverlay').classList.remove('show'); restartStage(); });
document.getElementById('btnClearTitle').addEventListener('click', ()=>{ document.getElementById('clearOverlay').classList.remove('show'); renderStageSelect(); showScreen('screen-select'); });
document.getElementById('btnClearNext').addEventListener('click', ()=>{ document.getElementById('clearOverlay').classList.remove('show'); startStage(curIdx+1); });
document.getElementById('btnSettings').addEventListener('click', ()=>{ running=false; document.getElementById('settingsOverlay').classList.add('show'); });
document.getElementById('btnResume').addEventListener('click', ()=>{ document.getElementById('settingsOverlay').classList.remove('show'); running=true; });
document.getElementById('btnSettingsRestart').addEventListener('click', ()=>{ document.getElementById('settingsOverlay').classList.remove('show'); restartStage(); });
document.getElementById('btnSettingsTitle').addEventListener('click', ()=>{ document.getElementById('settingsOverlay').classList.remove('show'); renderStageSelect(); showScreen('screen-select'); });

(async function init(){
  await loadSave();
})();
