/* =========================================================
   Pineapple on the ◉  —  Core Engine + Stage 1-10
   ========================================================= */

/* ---------- STAGE DATA ---------- */
const STAGES = [
  {id:1, name:"Starting", type:"hit", hint:"タップ長押しでチャージ、離して発射!", hiddenName:"魔法の一撃"},
  {id:2, name:"Walking", type:"walk", hint:"タップで上下レーンを切り替えて避けよう", hiddenName:"ゴーストウォーク"},
  {id:3, name:"Running", type:"run3", hint:"スワイプで3レーンを切り替えろ", hiddenName:"タイムストップ"},
  {id:4, name:"Jumping", type:"jump", hint:"タップでジャンプ!スコア100を目指せ", hiddenName:"オートパイロット"},
  {id:5, name:"Turning", type:"orbit", hint:"ドラッグで円を回って弾を避けろ", hiddenName:"根性一切動かず"},
  {id:6, name:"Balancing", type:"balance", hint:"傾けて綱の上でバランスをとろう", hiddenName:"無風の達人"},
  {id:7, name:"Stepping", type:"step", hint:"リングが石に重なった瞬間にタップ!", hiddenName:"パーフェクトコンボ"},
  {id:8, name:"Moving", type:"belt", hint:"タップでベルトのレーンを切り替えろ", hiddenName:"ベルト無効化"},
  {id:9, name:"Standing", type:"shrink", hint:"ドラッグして中心に留まり続けろ", hiddenName:"足場固定"},
  {id:10, name:"Stopping", type:"brake", hint:"タップでブレーキ!ジャストで止めろ", hiddenName:"ジャストブレーキ"},
  {id:11, name:"Slipping", type:"slip", hint:"氷の上をわずかな操作だけで誘導しろ", hiddenName:"スプリングブースト"},
  {id:12, name:"Sliding", type:"slide", hint:"ドラッグでスライダーを操縦しろ", hiddenName:"無敵チューブ"},
  {id:13, name:"Rolling", type:"maze", hint:"傾けて迷路を転がりゴールへ", hiddenName:"壁抜け"},
  {id:14, name:"Falling", type:"drop", hint:"タップで左右に弾きながら落とせ", hiddenName:"優しい釘"},
  {id:15, name:"Floating", type:"flap", hint:"タップで羽ばたいて隙間を抜けろ", hiddenName:"無敵飛行"},
  {id:16, name:"Sinking", type:"sink", hint:"タップで沈む速さを調整して魚を避けろ", hiddenName:"セーフダイブ"},
  {id:17, name:"Heating", type:"heat", hint:"焦げる前にタップして裏返せ", hiddenName:"あちちっ!火渡りモード"},
  {id:18, name:"Cooling", type:"cool", hint:"長押しで扇いで熱いタイルを渡れ", hiddenName:"氷の近道"},
  {id:19, name:"Freezing", type:"freeze", hint:"滑る距離を予測して着地しろ", hiddenName:"完全グリップ"},
  {id:20, name:"Melting", type:"melt", hint:"消える前に足場を渡り切れ", hiddenName:"溶けない足場"},
  {id:21, name:"Climbing", type:"climb", hint:"左右交互にタップして壁を登れ", hiddenName:"どこでも掴める"},
  {id:22, name:"Approaching", type:"approach", hint:"見張りの目が閉じたら進め", hiddenName:"見張りの盲点"},
  {id:23, name:"Searching", type:"search", hint:"隠れたパイナップルをタップで発見", hiddenName:"街の狙撃モード"},
  {id:24, name:"Tracking", type:"track", hint:"ドラッグで的に照準を合わせ続けろ", hiddenName:"ニセモノ無効化"},
  {id:25, name:"Reaching", type:"crane", hint:"タイミングよくタップしてアームを下ろせ", hiddenName:"ロングアーム"},
  {id:26, name:"Touching", type:"touch", hint:"本物のパイナップルだけをタップ", hiddenName:"光る本物"},
  {id:27, name:"Landing", type:"skydive", hint:"ドラッグで的をめがけて降下しろ", hiddenName:"オート照準"},
  {id:28, name:"Holding", type:"tray", hint:"傾けてトレイの上でバランスを保て", hiddenName:"吸着トレイ"},
  {id:29, name:"Carrying", type:"relay", hint:"タイミングよくタップして飛び移れ", hiddenName:"2段跳び"},
  {id:30, name:"Entering", type:"door", hint:"ドアが開いた瞬間にタップして進め", hiddenName:"扉全開放"},
  {id:31, name:"Thinking", type:"think", hint:"正しいピースをタップして選べ", hiddenName:"ひらめきヒント"},
  {id:32, name:"Choosing", type:"choose", hint:"一瞬光る正しい道を選んでタップ", hiddenName:"全部正解"},
  {id:33, name:"Deciding", type:"qte", hint:"出た合図の方向を素早くタップ", hiddenName:"スローモーション"},
  {id:34, name:"Knowing", type:"quiz", hint:"○か×かタップで答えろ", hiddenName:"カンニングモード"},
  {id:35, name:"Forgetting", type:"recall", hint:"光った順番を覚えてタップで再現", hiddenName:"完全記憶"},
  {id:36, name:"Remembering", type:"simon", hint:"増えていくパターンをタップで再現", hiddenName:"無限記憶"},
  {id:37, name:"Meaning", type:"match", hint:"落ちてくる記号を同じ形とタップで揃えろ", hiddenName:"レア記号ボーナス"},
  {id:38, name:"Being", type:"stillness", hint:"タップも操作もせず、じっと静止しろ", hiddenName:"無限静止"},
  {id:39, name:"Becoming", type:"morph", hint:"タップで形を変えて隙間を通れ", hiddenName:"万能フォルム"},
  {id:40, name:"Existing", type:"blink", hint:"タップで明滅しビームを避けろ", hiddenName:"完全透明"},
  {id:41, name:"Loading", type:"mash", hint:"連打してゲージを満タンにしろ", hiddenName:"一瞬満タン"},
  {id:42, name:"Updating", type:"shift", hint:"切り替わる安全地帯を見極めて進め", hiddenName:"パターン読破"},
  {id:43, name:"Processing", type:"sort", hint:"正しいシュートにタップで振り分けろ", hiddenName:"全部正解仕分け"},
  {id:44, name:"Rendering", type:"peek", hint:"先読みしてタップで避けろ", hiddenName:"未来視"},
  {id:45, name:"Selecting", type:"preset", hint:"正しいプリセットをタップで選べ", hiddenName:"パーフェクトプリセット"},
  {id:46, name:"Switching", type:"zone", hint:"タップでゾーンを切り替えて避けろ", hiddenName:"三重ゾーン"},
  {id:47, name:"Opening", type:"dial", hint:"タップでダイヤルを正しい数で止めろ", hiddenName:"一発解錠"},
  {id:48, name:"Closing", type:"gate", hint:"閉まるゲートの隙間をくぐれ", hiddenName:"無傷通過"},
  {id:49, name:"Confirming", type:"justtap", hint:"バーが中央に来た瞬間にタップ", hiddenName:"ドンピシャ"},
  {id:50, name:"Canceling", type:"cancel", hint:"暴走を寸前でタップしてキャンセルしろ", hiddenName:"ギリギリキャンセル"},
  {id:51, name:"Traveling", type:"travel", hint:"タップで隙間をジャンプして進め", hiddenName:"隠しジャンプ台"},
  {id:52, name:"Crossing", type:"cross", hint:"タップで1マスずつ進んで道路を渡れ", hiddenName:"信号無視ゾーン"},
  {id:53, name:"Exploring", type:"explore", hint:"ドラッグで動いてピザを探せ", hiddenName:"隠し部屋発見"},
  {id:54, name:"Wandering", type:"wander", hint:"暗闇の中、光の輪を頼りに進め", hiddenName:"暗視の力"},
  {id:55, name:"Navigating", type:"navigate", hint:"矢印を頼りに見えない障害物を避けろ", hiddenName:"完全レーダー"},
  {id:56, name:"Mapping", type:"mapmini", hint:"ドラッグで霧を晴らして道を探せ", hiddenName:"全体マップ"},
  {id:57, name:"Returning", type:"boomerang", hint:"タップで投げてリングをくぐらせろ", hiddenName:"二重リング成功"},
  {id:58, name:"Leaving", type:"escape", hint:"タップで駆け上がって津波から逃げろ", hiddenName:"避難シェルター"},
  {id:59, name:"Arriving", type:"bounceland", hint:"タップでバウンドの高さを調整しろ", hiddenName:"ジャストバウンド"},
  {id:60, name:"Staying", type:"drift", hint:"ドラッグして流れる足場に乗り続けろ", hiddenName:"足場安定化"},
  {id:61, name:"Growing", type:"grow", hint:"大きくなる前にゲートを通り抜けろ", hiddenName:"サイズ調整アイテム"},
  {id:62, name:"Shrinking", type:"shrink2", hint:"縮みすぎる前にゲートを通れ", hiddenName:"縮小限界突破"},
  {id:63, name:"Strengthening", type:"strong", hint:"オーブを集めて壁を破壊しろ", hiddenName:"全壊オーブ"},
  {id:64, name:"Weakening", type:"weak", hint:"操作が重くなる前にゴールへ", hiddenName:"回復ポイント"},
  {id:65, name:"Freshening", type:"fresh", hint:"鮮度が切れる前にゴールへ急げ", hiddenName:"タイマー延長"},
  {id:66, name:"Ripening", type:"ripen", hint:"色が合った瞬間にゲートを通れ", hiddenName:"虹色の実"},
  {id:67, name:"Softening", type:"soft", hint:"長押しでぺったんこになって低い障害物をくぐれ", hiddenName:"極限ぺったんこ"},
  {id:68, name:"Hardening", type:"harden", hint:"長押しで硬化して壁を破壊しろ", hiddenName:"瞬間ターン"},
  {id:69, name:"Stabilizing", type:"stabilize", hint:"ドラッグして揺れる中心に留まれ", hiddenName:"完全静止装置"},
  {id:70, name:"Shifting", type:"shiftplat", hint:"タップで動く足場に飛び移れ", hiddenName:"周期読破"},
  {id:71, name:"Timing", type:"timing2", hint:"インジケーターが中央に来た瞬間タップ×3", hiddenName:"完璧なリズム感"},
  {id:72, name:"Targeting", type:"bullseye", hint:"回転する的の中心にタップで投げ込め", hiddenName:"百発百中"},
  {id:73, name:"Dodging", type:"bullethell", hint:"ドラッグでソースの雨を避け続けろ", hiddenName:"死角の達人"},
  {id:74, name:"Aiming", type:"slingshot", hint:"引っ張って離すと飛んでいく、ピザを狙え", hiddenName:"風読みの達人"},
  {id:75, name:"Controlling", type:"tunnel", hint:"ドラッグでトンネルの壁を避けて飛べ", hiddenName:"隠しトンネル発見"},
  {id:76, name:"Rebalancing", type:"seesaw", hint:"ドラッグでシーソーを傾けて飛ばせ", hiddenName:"一発傾斜"},
  {id:77, name:"Mastering", type:"combo3", hint:"出た合図の通りに素早く3連続でタップ", hiddenName:"パーフェクトチェイン"},
  {id:78, name:"Challenging", type:"bosslite", hint:"ドラッグで巨大な麺棒を避け続けろ", hiddenName:"弱点看破"},
  {id:79, name:"Clearing", type:"brick", hint:"ドラッグでパドルを操りブロックを崩せ", hiddenName:"レアブロック全壊"},
  {id:80, name:"Perfecting", type:"nomiss", hint:"ドラッグで壁に触れずゴールへ", hiddenName:"ノーミス証明"},
  {id:81, name:"Understanding", type:"riddle", hint:"パターンの続きをタップで選べ", hiddenName:"ひらめきの光"},
  {id:82, name:"Accepting", type:"catch", hint:"ドラッグでカゴを動かして具材をキャッチ", hiddenName:"レア具材"},
  {id:83, name:"Connecting", type:"pipeconnect", hint:"タップでパイプを回して繋げろ", hiddenName:"最短ルート発見"},
  {id:84, name:"Completing", type:"jigsaw", hint:"正しい順番でピースをタップ", hiddenName:"裏柄ピース"},
  {id:85, name:"Returning", type:"loopcoaster", hint:"ループする前にタップで脱出しろ", hiddenName:"二重ループ制覇"},
  {id:86, name:"Ending", type:"finale", hint:"前半はジャンプ、後半はチャージ発射", hiddenName:"真の総集編"},
  {id:87, name:"Restarting", type:"loopsurvive", hint:"同じコースを3周生き延びろ", hiddenName:"5周生存"},
  {id:88, name:"Looping", type:"wraparound", hint:"画面端はワープする、うまく使って避けろ", hiddenName:"ワープマスター"},
  {id:89, name:"Everything", type:"chaos", hint:"操作方式が数秒ごとに変わる、対応しろ", hiddenName:"カオス完全読破"},
  {id:90, name:"the ◉", type:"finalorbit", hint:"タップで手を離し、中心にジャストで落とせ", hiddenName:"真の中心"},
  {id:91, name:"Jumpstarting", type:"jumpstart", hint:"カウントダウン前に連打で始動しろ", hiddenName:"瞬間始動"},
  {id:92, name:"Overcoming", type:"breakwall", hint:"タップでチャージして壁に体当たりしろ", hiddenName:"一撃必殺"},
  {id:93, name:"Escaping", type:"jailbreak", hint:"ダイヤルを解錠してからサーチライトを避けろ", hiddenName:"完全無傷脱出"},
  {id:94, name:"Transforming", type:"silhouette", hint:"タップで形を変えてシルエットに合わせろ", hiddenName:"全形態制覇"},
  {id:95, name:"Resonating", type:"rhythm", hint:"降ってくる矢印の方向にタイミングよくタップ", hiddenName:"シンコペーション"},
  {id:96, name:"Guiding", type:"escort", hint:"ドラッグで子パイナップルを危険から守れ", hiddenName:"ノーダメージ護衛"},
  {id:97, name:"Balancing+", type:"stormbalance", hint:"嵐の中の綱渡り、STAGE6の強化版だ", hiddenName:"嵐が止んだ"},
  {id:98, name:"Surviving", type:"survive", hint:"ドラッグで四方からの危険を避け続けろ", hiddenName:"安全地帯を見抜く"},
  {id:99, name:"Ascending", type:"ascend", hint:"タップでブーストして空高く昇れ", hiddenName:"一気に頂上へ"},
  {id:100, name:"Transcending", type:"transcend", hint:"最後の総仕上げ、落ち着いてゴールしろ", hiddenName:"真のエンディング"},
];

/* ---------- ADS (自作ゲームの宣伝) ---------- */
const ADS = [
  { url:"https://utoutoneko.github.io/CosmoGenesis/", title:"CosmoGenesis", icon:"🪐", tagline:"指先ひとつで太陽系を創造する放置系クリッカー", color:"#3B2A6B" },
  { url:"https://utoutoneko.github.io/cybersyndrome/", title:"Cyber Syndrome", icon:"🔎", tagline:"電脳都市に仕掛けられた謎を解き明かせ", color:"#0E5C63" },
  { url:"https://utoutoneko.github.io/mathbarrethell/", title:"Math Barrel Hell", icon:"➗", tagline:"自分の軌道を関数で書き換える、数式が武器の弾幕アクション", color:"#7A1E5C" },
  { url:"https://piyoadventure.base44.app/", title:"Piyo Adventure", icon:"🐣", tagline:"母鶏に会うため、ひよこは走る。切なく可愛い横スクロールアクション", color:"#C97B1E" },
];
let adRotateIdx = 0;
function renderTitleAd(){
  const ad = ADS[adRotateIdx % ADS.length];
  const banner = document.getElementById('titleAdBanner');
  const text = document.getElementById('titleAdText');
  const icon = document.getElementById('titleAdIcon');
  banner.href = ad.url;
  banner.style.background = `linear-gradient(100deg, ${ad.color} 0%, ${ad.color}cc 55%, #fff4e0 200%)`;
  text.classList.remove('ad-text'); void text.offsetWidth; text.classList.add('ad-text');
  icon.textContent = ad.icon;
  text.innerHTML = `<strong>${ad.title}</strong><span class="ad-sep">―</span>${ad.tagline}`;
  adRotateIdx++;
}
function startTitleAdRotation(){
  renderTitleAd();
  setInterval(renderTitleAd, 4200);
}
let adInterstitialQueue = null; // 広告を閉じた後に実行するアクション
function showAdInterstitial(nextAction){
  const ad = ADS[saveData.adIndex % ADS.length];
  saveData.adIndex = (saveData.adIndex + 1) % ADS.length;
  const card = document.querySelector('.ad-interstitial-card');
  card.style.background = `linear-gradient(160deg, ${ad.color} 0%, #2a1f14 100%)`;
  document.getElementById('adIntIcon').textContent = ad.icon;
  document.getElementById('adIntTitle').textContent = ad.title;
  document.getElementById('adIntTagline').textContent = ad.tagline;
  document.getElementById('btnAdVisit').onclick = ()=> window.open(ad.url, '_blank', 'noopener');
  adInterstitialQueue = nextAction;
  showScreen('screen-ad');
  writeSave();
}

/* ---------- SAVE SYSTEM ---------- */
const SAVE_KEY = "pineapple_save_v1";
let saveData = { unlocked: 1, stars: {}, hiddenFound: {}, totalClears: 0, adIndex: 0 };

async function loadSave(){
  try{
    const res = await window.storage.get(SAVE_KEY, false);
    if(res && res.value){ saveData = Object.assign({ unlocked:1, stars:{}, hiddenFound:{}, totalClears:0, adIndex:0 }, JSON.parse(res.value)); }
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

const SECRET_HINT = "ヒント: はじまりの合図には、実はアンコールがある。";
function renderAchievements(){
  const list = document.getElementById('achList');
  list.innerHTML = "";
  let foundCount = 0;
  STAGES.forEach((st,i)=>{
    const unlocked = (i+1) <= saveData.unlocked;
    const found = !!saveData.hiddenFound[i];
    if(found) foundCount++;
    const item = document.createElement('div');
    item.className = 'ach-item' + (found ? ' found' : '');
    if(!unlocked){
      item.innerHTML = `<div class="ach-icon">🔒</div><div class="ach-body">
        <div class="ach-name">？？？</div><div class="ach-desc">まだ挑戦できません</div></div>`;
    } else if(found){
      item.innerHTML = `<div class="ach-icon">🔍</div><div class="ach-body">
        <div class="ach-name">STAGE${st.id} ${st.name} — ${st.hiddenName}</div>
        <div class="ach-desc">発見済み!</div></div>`;
    } else {
      item.innerHTML = `<div class="ach-icon">❔</div><div class="ach-body">
        <div class="ach-name">STAGE${st.id} ${st.name} — 未発見</div>
        <div class="ach-desc">${SECRET_HINT}</div></div>`;
    }
    list.appendChild(item);
  });
  document.getElementById('achProgress').textContent = foundCount + ' / ' + STAGES.length + ' 発見';
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
/* 押した位置からのオフセットで-1〜1の傾き量を返す。指を止めたままでも
   効き続けるので、ドラッグ系ステージの操作性はこれで統一する。 */
function steerX(inp, maxOffset){
  maxOffset = maxOffset || 50;
  let v = 0;
  if(inp.down && typeof inp.startX==='number'){ v = clamp((inp.x-inp.startX)/maxOffset, -1, 1); }
  if(inp.key==='left') v = -1;
  if(inp.key==='right') v = 1;
  return v;
}
function steerY(inp, maxOffset){
  maxOffset = maxOffset || 50;
  let v = 0;
  if(inp.down && typeof inp.startY==='number'){ v = clamp((inp.y-inp.startY)/maxOffset, -1, 1); }
  return v;
}

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
  const wrap = document.querySelector('.canvas-wrap');
  wrap.classList.remove('shake'); void wrap.offsetWidth; wrap.classList.add('shake');
  setTimeout(()=>{ startStage(curIdx); }, 550);
}

function spawnConfetti(){
  const overlay = document.getElementById('clearOverlay');
  const emojis = ['🍍','🍕','⭐','✨','🎉'];
  for(let i=0;i<22;i++){
    const el = document.createElement('div');
    el.className='confetti';
    el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left = Math.random()*100+'%';
    el.style.animationDuration = (1.4+Math.random()*1.2)+'s';
    el.style.animationDelay = (Math.random()*0.4)+'s';
    el.style.fontSize = (14+Math.random()*14)+'px';
    overlay.appendChild(el);
    setTimeout(()=> el.remove(), 3200);
  }
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
  saveData.totalClears = (saveData.totalClears||0) + 1;
  const showAdNext = (saveData.totalClears % 5 === 0);
  writeSave();

  document.getElementById('clearTitle').textContent = hiddenTriggered ? 'HIDDEN CLEAR!' : 'CLEAR!';
  document.getElementById('clearStars').textContent = '★'.repeat(stars) + '☆'.repeat(3-stars);
  document.getElementById('clearTime').textContent = `TIME ${elapsed.toFixed(1)}s`;
  document.getElementById('hiddenBadge').style.display = hiddenTriggered ? 'block' : 'none';
  document.getElementById('btnClearNext').style.display = (curIdx+1 < STAGES.length) ? 'inline-block' : 'none';
  document.getElementById('clearOverlay').classList.add('show');
  document.getElementById('clearOverlay').dataset.showAd = showAdNext ? '1' : '0';
  spawnConfetti();
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
    return { dist:0, lane:0, laneIdx:0, target:0, px:80, laneY:[H-70,H-160], obstacles:[], timer:0, speed:155,
             pizza:{x:W-90,y:0,w:80,h:0} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.laneIdx = s.laneIdx===0?1:0; s.target = s.laneIdx; }
    s.lane += (s.target - s.lane) * Math.min(1, dt*10);
    s.timer -= dt;
    if(s.timer<=0){ s.timer = rand(0.65,1.0); s.obstacles.push({x:W+20, lane: Math.random()<0.5?0:1}); }
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
    return { lane:1, dist:0, obstacles:[], timer:0, speed:3.2, laneX:[W*0.25,W*0.5,W*0.75] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.down){
      if(s.swipeBaseX==null) s.swipeBaseX = inp.x;
      const off = inp.x - s.swipeBaseX;
      if(off > 34){ s.lane = clamp(s.lane+1,0,2); s.swipeBaseX = inp.x; }
      else if(off < -34){ s.lane = clamp(s.lane-1,0,2); s.swipeBaseX = inp.x; }
    } else { s.swipeBaseX = null; }
    if(inp.key==='right'){ s.lane = clamp(s.lane+ (s._lastKey!=='right'?1:0),0,2); s._lastKey='right'; }
    else if(inp.key==='left'){ s.lane = clamp(s.lane- (s._lastKey!=='left'?1:0),0,2); s._lastKey='left'; }
    else s._lastKey=null;

    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.95; s.obstacles.push({z:0, lane:Math.floor(rand(0,3))}); }
    s.obstacles.forEach(o=> o.z += s.speed*dt);
    s.obstacles = s.obstacles.filter(o=>o.z<1.15);
    if(!s.secretMode){
      for(const o of s.obstacles){
        if(o.z>0.86 && o.z<1.02 && o.lane===s.lane) return 'fail';
      }
    }
    s.dist += dt;
    if(s.dist > 9){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
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
    return { px:90, py:H-70, vy:0, onGround:true, obstacles:[], timer:0, score:0, speed:270 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.secretMode && s.onGround){
      const near = s.obstacles.find(o=> o.x>60 && o.x<130);
      if(near) s.vy=-460, s.onGround=false;
    }
    if(inp.justDown && s.onGround){ s.vy=-460; s.onGround=false; }
    s.vy += 1300*dt; s.py += s.vy*dt;
    if(s.py>=H-70){ s.py=H-70; s.vy=0; s.onGround=true; }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=rand(0.55,0.85); s.obstacles.push({x:W+20, passed:false}); }
    s.obstacles.forEach(o=> o.x -= s.speed*dt);
    s.obstacles = s.obstacles.filter(o=>o.x>-30);
    for(const o of s.obstacles){
      if(!o.passed && o.x < 90){ o.passed=true; s.score+=10; }
      if(!s.secretMode && Math.abs(o.x-90)<20 && s.py>H-100) return 'fail';
    }
    if(s.score>=100){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
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
    if(s.timer<=0){ s.timer=0.4; s.bullets.push({a:rand(0,Math.PI*2), r:0}); }
    s.bullets.forEach(b=> b.r += 240*dt);
    s.bullets = s.bullets.filter(b=>b.r < s.r+40);
    const px = s.cx + Math.cos(s.ang)*s.r, py = s.cy + Math.sin(s.ang)*s.r;
    for(const b of s.bullets){
      const bx = s.cx+Math.cos(b.a)*b.r, by = s.cy+Math.sin(b.a)*b.r;
      if(Math.hypot(px-bx,py-by) < 22) return 'fail';
    }
    s.survive += dt;
    if(s.survive > 8){
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
    ctx.fillText((8-s.survive).toFixed(1)+'s', 12, 22);
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
    if(s.windTimer<=0){ s.windTimer=rand(0.7,1.5); s.wind = rand(-1,1)*2.3; }
    let tilt = 0;
    if(inp.key==='left') tilt=-1;
    if(inp.key==='right') tilt=1;
    if(inp.down){ tilt = clamp((inp.x - W/2)/ (W/2), -1, 1); }
    s.av += (tilt*2.4 - s.angle*3 + s.wind) * dt;
    s.av *= 0.98;
    s.angle += s.av*dt;
    s.angle = clamp(s.angle, -1.3, 1.3);
    s.avgAbsAngle += Math.abs(s.angle); s.samples++;
    if(Math.abs(s.angle) > 0.85) return 'fail';
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
    s.ringR -= 74*dt;
    if(s.ringR < 6) s.ringR = 90;
    if(inp.justDown){
      if(Math.abs(s.ringR - s.target) < 7){
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
    return { lane:0, x:60, laneY:[H*0.35,H*0.65], dirs:[1,-1], walls:[], timer:0, speed:190, perfect:true };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.lane = s.lane===0?1:0; }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=rand(0.7,1.05); s.walls.push({x:W+20, lane:Math.round(Math.random())}); }
    s.walls.forEach(w=> w.x -= s.speed*dt);
    s.walls = s.walls.filter(w=>w.x>-30);
    s.x += (s.dirs[s.lane]*40 + 90)*dt;
    if(!s.secretMode){
      for(const w of s.walls){
        if(Math.abs(w.x - s.x) < 22 && w.lane===s.lane) return 'fail';
      }
    }
    if(s.x > W-70){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
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
    return { cx:W/2, cy:H/2, r:170, px:W/2, py:H/2, t:0, dur:9, innerTime:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.r -= (s.secretMode?0:16)*dt;
    s.px += steerX(inp,60) * 190*dt;
    s.py += steerY(inp,60) * 190*dt;
    const d = Math.hypot(s.px-s.cx, s.py-s.cy);
    if(d > s.r) return 'fail';
    if(d < s.r*0.2) s.innerTime += dt;
    s.t += dt;
    if(s.t > s.dur){
      if(s.secretMode || s.innerTime > s.dur*0.7) hiddenTriggered = true;
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
    return { x:40, v:480, braking:false, goal:{x:W-140,w:70}, cliff:W-20, done:false };
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
    return { y:H-40, x:W/2, vx:0, width:95, timer:0, gates:[] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    const accel = s.secretMode ? 900 : 340; // 隠し=バネで弾いた反応の良い滑走
    s.vx += steerX(inp,55) * accel*dt;
    s.vx *= s.secretMode ? 0.995 : 0.985; // 氷であまり減速しない
    s.x += s.vx*dt;
    s.y -= 170*dt;
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.7; s.gates.push({y:s.y-260, cx: W/2+rand(-95,95), w: s.width}); }
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
    return { t:0, x:W/2, dur:7.5, tunnel:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    const targetX = W/2 + Math.sin(s.t*2.0)*150;
    if(inp.down){ s.x += steerX(inp,55) * 260*dt; }
    else { s.x += (targetX - s.x) * 0.02; }
    const dist = Math.abs(s.x - targetX);
    if(!s.secretMode && dist > 55) return 'fail';
    if(s.t > s.dur){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#9ad1ff'; ctx.lineWidth=60; ctx.lineCap='round';
    ctx.beginPath();
    for(let i=0;i<=20;i++){
      const tt = s.t + i*0.35;
      const xx = W/2 + Math.sin(tt*2.0)*150;
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
      walls:[ {x:140,y:200,w:20,h:220}, {x:260,y:60,w:20,h:240}, {x:W-140,y:220,w:20,h:220}, {x:W-260,y:340,w:20,h:120} ],
      goal:{x:W-90,y:60,w:60,h:60} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    const ax = steerX(inp,55) * 260, ay = steerY(inp,55) * 260;
    s.vx = clamp(s.vx + ax*dt, -190,190); s.vy = clamp(s.vy + ay*dt, -190,190);
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
    return { x:W/2, y:40, vx:0, vy:0, pegs, goal:{x:W/2-55,w:110} };
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
    if(s.timer<=0){ s.timer=0.85; const gy=rand(90,H-160); s.pipes.push({x:W+30, gy, gap:105, passed:false}); }
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
    if(s.timer<=0){ s.timer=0.6; s.fish.push({x: Math.random()<0.5?-20:W+20, y: rand(80,H-120), dir: Math.random()<0.5?1:-1}); }
    s.fish.forEach(f=> f.x += f.dir*90*dt);
    s.fish = s.fish.filter(f=>f.x>-40 && f.x<W+40);
    if(!s.secretMode){
      for(const f of s.fish){ if(Math.abs(f.x-s.x)<22 && Math.abs(f.y-s.y)<18) return 'fail'; }
    }
    if(s.y > H-70){
      const soft = s.vy < 130;
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
    return { mode:'pan', heat:0, flips:0, needFlips:5, x:W/2, y:H/2,
             hopIdx:0, hopTiles:5, airborne:false, ouchHeat:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.secretMode && s.mode==='pan'){ s.mode='hop'; } // 発見した瞬間マリオ64風の火渡りモードへ切り替え
    if(s.mode==='pan'){
      s.heat += 33*dt;
      if(inp.justDown){ s.flips++; s.heat = Math.max(0,s.heat-36); }
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
    s.heat += (inp.down ? -70 : 55) * dt;
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
    return { x:40, v:0, taps:0, goal:{x:W-130,w:60}, cliff:W-20, grip:0.985 };
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
    const plats=[]; for(let i=0;i<n;i++){ plats.push({x:50+i*60, life:1.9, stepped:false}); }
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

/* ---- 21. Climbing ---- */
STAGE_LOGIC.climb = {
  par: 7,
  init(){
    return { y:H-40, lastSide:null, grip:0, top: 40 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.grip -= 18*dt; // 掴んでないとじわじわ滑り落ちる
    if(inp.justDown){
      const side = inp.x < W/2 ? 'L':'R';
      if(s.secretMode || side !== s.lastSide){
        s.y -= 26; s.grip = 14; s.lastSide = side;
      }
    }
    if(s.grip < -30){ s.y += 40*dt; }
    s.y = clamp(s.y, s.top, H-40);
    if(s.y <= s.top){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#e7dcc0'; ctx.fillRect(W/2-70,0,140,H);
    for(let i=0;i<10;i++){ ctx.font='16px serif'; ctx.fillText('🧀', W/2-60+ (i%2)*90, 40+i*44); }
    drawPizza(ctx, W/2-30, s.top-30, 60);
    drawPineapple(ctx, W/2, s.y);
  }
};

/* ---- 22. Approaching (stealth) ---- */
STAGE_LOGIC.approach = {
  par: 7,
  init(){
    return { x:60, eyeT:0, eyeOpen:false, dist:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.eyeT += dt;
    if(s.eyeT > 1.1){ s.eyeT=0; s.eyeOpen = !s.eyeOpen; }
    const moving = inp.down;
    if(moving){ s.x += 130*dt; }
    if(!s.secretMode && s.eyeOpen && moving) return 'fail';
    if(s.x > W-90){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.font='36px serif'; ctx.fillText(s.eyeOpen && !s.secretMode ? '👀' : '😴', W-70, 60);
    drawPizza(ctx, W-90, H-70, 70);
    drawPineapple(ctx, s.x, H-70);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito';
    ctx.fillText(s.eyeOpen?'目が開いてる!止まれ':'今のうちに進め', 12, 22);
  }
};

/* ---- 23. Searching ----
   隠しモード発動時は「街の写真の中に隠れたピザを弾で撃つ」全く別ゲームへ丸ごと切り替わる
   (ユーザー提案そのまま実装)。それ以外は普通に紛れたパイナップルを見つけて連れ戻すゲーム。 */
STAGE_LOGIC.search = {
  par: 8,
  init(){
    const decoys=[];
    for(let i=0;i<9;i++){ decoys.push({x:50+(i%3)*160, y:80+Math.floor(i/3)*130}); }
    const real = decoys[Math.floor(rand(0,9))];
    // 街シーン用の隠しピザ座標(見つけにくい場所にランダム配置)
    const cityPizza = { x: rand(40,W-40), y: rand(60,H-60) };
    return { decoys, real, found:false, mode:'find', cityPizza, shotCount:0, timer:11 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.secretMode && s.mode==='find'){ s.mode='city'; }
    if(s.mode==='find'){
      if(inp.justDown){
        for(const d of s.decoys){
          if(Math.hypot(inp.x-d.x, inp.y-d.y) < 26){
            if(d === s.real) return 'clear';
          }
        }
      }
    } else { // city: 写真の中のピザを弾で撃つ
      s.timer -= dt;
      if(inp.justDown){
        s.shotCount++;
        if(Math.hypot(inp.x-s.cityPizza.x, inp.y-s.cityPizza.y) < 20){
          hiddenTriggered = true;
          return 'clear';
        }
      }
      if(s.timer<=0) return 'fail';
    }
  },
  render(ctx,s){
    if(s.mode==='find'){
      drawGround(ctx);
      ctx.fillStyle='#f2e3c6'; ctx.fillRect(0,0,W,H);
      s.decoys.forEach(d=>{ ctx.font='30px serif'; ctx.fillText('🍍', d.x-15, d.y+10); });
      ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('本物はどれ?', 12, 22);
    } else {
      // 適当な街並みを描いてピザを紛れさせる
      ctx.fillStyle='#cfd8e3'; ctx.fillRect(0,0,W,H);
      for(let i=0;i<10;i++){
        ctx.fillStyle = i%2? '#9aa7b5':'#8492a1';
        const bw=40, bh=100+((i*37)%160);
        ctx.fillRect(i*50, H-bh, bw, bh);
      }
      ctx.font='18px serif'; ctx.fillText('🍕', s.cityPizza.x-9, s.cityPizza.y+6);
      ctx.fillStyle='#fff'; ctx.font='bold 12px Nunito';
      ctx.fillText('街のどこかにピザがある… タップで狙撃 残り'+s.timer.toFixed(1)+'s', 10, 20);
    }
  }
};

/* ---- 24. Tracking ---- */
STAGE_LOGIC.track = {
  par: 7,
  init(){
    return { tx:W/2, ty:H/2, t:0, rx:W/2, ry:H/2, lock:0, timeLeft:8, decoys:[{x:120,y:150},{x:W-120,y:340}] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.tx = W/2 + Math.sin(s.t*1.3)*150;
    s.ty = H/2 + Math.cos(s.t*1.7)*110;
    if(inp.down){ s.rx = inp.x; s.ry = inp.y; }
    const onReal = Math.hypot(s.rx-s.tx, s.ry-s.ty) < 26;
    const onFake = !s.secretMode && s.decoys.some(d=>Math.hypot(s.rx-d.x,s.ry-d.y)<26);
    if(onReal && !onFake){ s.lock += dt; } else { s.lock = Math.max(0,s.lock-dt*1.5); }
    if(s.lock > 1.8){ if(s.secretMode) hiddenTriggered = true; return 'clear'; }
    s.timeLeft -= dt;
    if(s.timeLeft<=0) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    if(!s.secretMode) s.decoys.forEach(d=>{ ctx.font='26px serif'; ctx.fillText('🍕', d.x-13, d.y+8); });
    drawPizza(ctx, s.tx-30, s.ty-30, 60);
    ctx.strokeStyle='#FF7A3D'; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(s.rx,s.ry,20,0,7); ctx.stroke();
    ctx.fillStyle='#7A4A26'; ctx.fillRect(12,H-24, 120*(s.lock/1.8), 10);
    drawPineapple(ctx, 40, H-40);
  }
};

/* ---- 25. Reaching (crane) ---- */
STAGE_LOGIC.crane = {
  par: 6,
  init(){
    return { armX:60, dir:1, dropped:false, cy:60, targetX: W-100, caught:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(!s.dropped){
      s.armX += s.dir*170*dt;
      if(s.armX>W-40||s.armX<40) s.dir*=-1;
      if(inp.justDown){ s.dropped=true; }
    } else {
      s.cy += 260*dt;
      const grabR = s.secretMode ? 46 : 22;
      if(!s.caught && s.cy>H-90 && Math.abs(s.armX-s.targetX)<grabR){ s.caught=true; }
      if(s.cy > H-40){
        if(s.caught){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
        return 'fail';
      }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=4;
    ctx.beginPath(); ctx.moveTo(s.armX,0); ctx.lineTo(s.armX, s.cy); ctx.stroke();
    ctx.font='24px serif'; ctx.fillText('🦾', s.armX-12, s.cy+8);
    drawPizza(ctx, W-100-40, H-70, 80);
    drawPineapple(ctx, s.targetX, H-60);
  }
};

/* ---- 26. Touching (reverse whack-a-mole) ---- */
STAGE_LOGIC.touch = {
  par: 5,
  init(){
    const holes=[]; for(let i=0;i<6;i++){ holes.push({x:70+(i%3)*160, y:120+Math.floor(i/3)*180}); }
    return { holes, real:Math.floor(rand(0,6)), timer:1.0, resolved:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.timer -= dt;
    if(inp.justDown){
      for(let i=0;i<s.holes.length;i++){
        const h=s.holes[i];
        if(Math.hypot(inp.x-h.x,inp.y-h.y)<28){
          if(i===s.real){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
          return 'fail';
        }
      }
    }
    if(s.timer<=0) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    s.holes.forEach((h,i)=>{
      ctx.fillStyle='#4A2C14'; ctx.beginPath(); ctx.ellipse(h.x,h.y+18,26,10,0,0,7); ctx.fill();
      const isReal = i===s.real;
      ctx.font='28px serif'; ctx.fillText('🍍', h.x-14, h.y);
      if(s.secretMode && isReal){ ctx.font='16px serif'; ctx.fillText('✨', h.x+14, h.y-10); }
    });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('本物は一瞬で消える!', 12, 20);
  }
};

/* ---- 27. Landing (skydive) ---- */
STAGE_LOGIC.skydive = {
  par: 7,
  init(){
    return { x:W/2, y:20, t:0, dur:5 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    const targetX = W/2 + Math.sin(s.t*1.4)*140;
    if(s.secretMode){ s.x += (targetX-s.x)*0.08; }
    else if(inp.down){ s.x += steerX(inp,55) * 300*dt; }
    s.y += (H-40)/s.dur*dt;
    if(s.y >= H-50){
      const ok = Math.abs(s.x-targetX) < 30;
      if(ok){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
      return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    const targetX = W/2 + Math.sin(s.t*1.4)*140;
    drawPizza(ctx, targetX-35, H-70, 70);
    drawPineapple(ctx, s.x, s.y);
    ctx.font='20px serif'; ctx.fillText('🪂', s.x-14, s.y-26);
  }
};

/* ---- 28. Holding (tray balance) ---- */
STAGE_LOGIC.tray = {
  par: 8,
  init(){
    return { trayAngle:0, ballOff:0, ballV:0, dist:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    let tilt=0;
    if(inp.down){ tilt = clamp((inp.x-W/2)/(W/2),-1,1); }
    s.trayAngle += (tilt*0.6 - s.trayAngle)*0.1;
    s.ballV += s.trayAngle*220*dt;
    s.ballV *= 0.98;
    s.ballOff += s.ballV*dt;
    const limit = s.secretMode ? 200 : 45;
    if(Math.abs(s.ballOff) > limit) return 'fail';
    s.dist += 110*dt;
    if(s.dist > 1400){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    drawPizza(ctx, W-90, H-90, 80);
    ctx.save();
    ctx.translate(W/2, H/2);
    ctx.rotate(s.trayAngle);
    ctx.fillStyle='#e7dcc0'; ctx.fillRect(-70,-6,140,12);
    ctx.restore();
    drawPineapple(ctx, W/2+s.ballOff, H/2-16);
    const pct = clamp(s.dist/1400,0,1)*100;
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(Math.round(pct)+'%',12,22);
  }
};

/* ---- 29. Carrying (relay) ---- */
STAGE_LOGIC.relay = {
  par: 8,
  init(){
    return { cur:0, n:6, ringR:80, target:24, x0:50, gap:(W-100)/5, y:H/2 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.ringR -= 78*dt;
    if(s.ringR<6) s.ringR=80;
    if(inp.justDown){
      const hit = Math.abs(s.ringR-s.target) < (s.secretMode?60:7);
      if(hit){
        s.cur += (s.secretMode? 2 : 1);
        s.ringR = 80;
        if(s.cur >= s.n-1){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
      } else { s.ringR = 80; }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    for(let i=0;i<s.n;i++){
      const x = s.x0+i*s.gap;
      ctx.fillStyle = i<=s.cur? '#FFC93C':'#e7dcc0';
      ctx.beginPath(); ctx.arc(x,s.y,16,0,7); ctx.fill();
    }
    drawPizza(ctx, s.x0+(s.n-1)*s.gap-30, s.y-70, 60);
    const cx = s.x0+Math.min(s.cur,s.n-1)*s.gap;
    ctx.strokeStyle='#FF7A3D'; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(cx,s.y,s.ringR,0,7); ctx.stroke();
    drawPineapple(ctx, cx, s.y-30);
  }
};

/* ---- 30. Entering (timed door) ---- */
STAGE_LOGIC.door = {
  par: 6,
  init(){
    return { x:60, doorT:0, open:false, arrived:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.doorT += dt;
    if(s.doorT>0.8){ s.doorT=0; s.open=!s.open; }
    if(inp.down){ s.x += 120*dt; }
    if(s.x > W-100){
      if(s.open || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
      s.x = W-140; // 閉まってたら弾かれる
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle = (s.open||s.secretMode) ? 'rgba(255,201,60,.25)' : '#7A4A26';
    ctx.fillRect(W-90,40,20,H-80);
    drawPizza(ctx, W-90, H-90, 70);
    drawPineapple(ctx, s.x, H-70);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito';
    ctx.fillText(s.open?'今なら通れる!':'閉まってる…', 12, 22);
  }
};

/* ---- 31. Thinking ---- */
STAGE_LOGIC.think = {
  par: 5,
  init(){
    const shapes=['🍍','🍕','🍩','🍔'];
    const target = shapes[Math.floor(rand(0,4))];
    const opts = [...shapes].sort(()=>Math.random()-0.5);
    return { target, opts, pos:[ {x:W*0.25,y:H*0.65},{x:W*0.42,y:H*0.65},{x:W*0.58,y:H*0.65},{x:W*0.75,y:H*0.65} ] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){
      for(let i=0;i<s.opts.length;i++){
        const p=s.pos[i];
        if(Math.hypot(inp.x-p.x,inp.y-p.y)<34){
          if(s.opts[i]===s.target || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
          return 'fail';
        }
      }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.font='bold 14px Nunito'; ctx.fillStyle='#7A4A26'; ctx.fillText('これと同じのはどれ?', 12,26);
    ctx.font='40px serif'; ctx.fillText(s.target, W/2-20, H*0.32);
    s.opts.forEach((o,i)=>{
      const p=s.pos[i];
      ctx.fillStyle = s.secretMode ? 'rgba(255,201,60,.35)':'#fff';
      ctx.beginPath(); ctx.arc(p.x,p.y,32,0,7); ctx.fill();
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=2; ctx.stroke();
      ctx.font='26px serif'; ctx.fillText(o, p.x-13, p.y+9);
    });
  }
};

/* ---- 32. Choosing ---- */
STAGE_LOGIC.choose = {
  par: 5,
  init(){
    return { correct:Math.floor(rand(0,3)), phase:'show', t:0, doors:[{x:W*0.25},{x:W*0.5},{x:W*0.75}] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    if(s.phase==='show' && s.t>1.0){ s.phase='hide'; s.t=0; }
    if(s.phase==='hide'){
      if(inp.justDown){
        for(let i=0;i<3;i++){
          if(Math.abs(inp.x-s.doors[i].x)<40){
            if(i===s.correct || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
            return 'fail';
          }
        }
      }
      if(s.t>4) return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    s.doors.forEach((d,i)=>{
      const lit = (s.phase==='show' && i===s.correct) || (s.secretMode && i===s.correct);
      ctx.fillStyle = lit ? '#FFC93C' : '#e7dcc0';
      ctx.fillRect(d.x-30, H*0.4, 60, H*0.4);
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=3; ctx.strokeRect(d.x-30, H*0.4, 60, H*0.4);
    });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 13px Nunito';
    ctx.fillText(s.phase==='show'?'覚えろ!':'どのドアだった?', 12, 24);
  }
};

/* ---- 33. Deciding (QTE) ---- */
STAGE_LOGIC.qte = {
  par: 6,
  init(){
    return { round:0, need:4, prompt:null, t:0, window:0.9, waiting:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    const win = s.secretMode ? s.window*2.2 : s.window;
    if(!s.waiting){ s.prompt = ['L','R','U'][Math.floor(rand(0,3))]; s.t=0; s.waiting=true; }
    s.t += dt;
    if(inp.justDown){
      const side = inp.y < H*0.3 ? 'U' : (inp.x < W/2 ? 'L':'R');
      if(side===s.prompt){ s.round++; s.waiting=false; if(s.round>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; } }
      else return 'fail';
    }
    if(s.t > win) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.font='bold 40px "Baloo 2"'; ctx.fillStyle='#FF7A3D';
    const label = s.prompt==='L'?'◀ 左をタップ':(s.prompt==='R'?'右をタップ ▶':'▲ 上をタップ');
    ctx.font='bold 16px "Baloo 2"'; ctx.fillText(label, W/2-70, H/2);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(s.round+'/'+s.need, 12, 22);
  }
};

/* ---- 34. Knowing (quiz) ---- */
STAGE_LOGIC.quiz = {
  par: 4,
  init(){
    const qs=[
      {q:'パイナップルは元は南米原産?', a:true},
      {q:'ピザ生地には必ず砂糖が入る?', a:false},
      {q:'◉はこのゲームのピザの記号?', a:true},
    ];
    const pick = qs[Math.floor(rand(0,qs.length))];
    return { q:pick };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){
      const ans = inp.x < W/2;
      if(ans===s.q.a || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
      return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 15px Nunito';
    wrapText(ctx, s.q.q, W/2, H*0.3, W-60, 20);
    ctx.font='bold 30px "Baloo 2"';
    ctx.fillStyle = s.secretMode ? '#4C9A2A' : '#7A4A26';
    ctx.fillText('○', W*0.25-15, H*0.65);
    ctx.fillText('×', W*0.75-15, H*0.65);
  }
};
function wrapText(ctx,text,cx,y,maxW,lh){
  ctx.textAlign='center';
  ctx.fillText(text, cx, y);
  ctx.textAlign='left';
}

/* ---- 35. Forgetting (recall) ---- */
STAGE_LOGIC.recall = {
  par: 8,
  init(){
    const seq=[]; for(let i=0;i<4;i++) seq.push(Math.floor(rand(0,4)));
    return { seq, showIdx:0, showT:0, phase:'show', input:[], pos:[{x:W*0.25,y:H/2},{x:W*0.42,y:H/2},{x:W*0.58,y:H/2},{x:W*0.75,y:H/2}] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.phase==='show'){
      s.showT += dt;
      if(s.showT>0.55){ s.showT=0; s.showIdx++; if(s.showIdx>=s.seq.length + (s.secretMode?s.seq.length:0)){ s.phase='input'; } }
    } else {
      if(inp.justDown){
        for(let i=0;i<4;i++){
          if(Math.hypot(inp.x-s.pos[i].x, inp.y-s.pos[i].y)<30){
            s.input.push(i);
            const idx = s.input.length-1;
            if(s.input[idx] !== s.seq[idx] && !s.secretMode) return 'fail';
            if(s.input.length>=s.seq.length){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
          }
        }
      }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    const activeIdx = s.phase==='show' ? s.seq[s.showIdx % s.seq.length] : -1;
    s.pos.forEach((p,i)=>{
      ctx.fillStyle = (i===activeIdx) ? '#FFC93C' : '#e7dcc0';
      ctx.beginPath(); ctx.arc(p.x,p.y,26,0,7); ctx.fill();
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=2; ctx.stroke();
    });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito';
    ctx.fillText(s.phase==='show'?'覚えろ!':'同じ順番でタップ', 12, 22);
  }
};

/* ---- 36. Remembering (simon) ---- */
STAGE_LOGIC.simon = {
  par: 10,
  init(){
    return { seq:[Math.floor(rand(0,4))], showIdx:0, showT:0, phase:'show', input:0, round:0, need:5,
             pos:[{x:W*0.3,y:H*0.35},{x:W*0.7,y:H*0.35},{x:W*0.3,y:H*0.65},{x:W*0.7,y:H*0.65}] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    const spd = s.secretMode ? 0.9 : 0.45;
    if(s.phase==='show'){
      s.showT += dt;
      if(s.showT>spd){ s.showT=0; s.showIdx++; if(s.showIdx>=s.seq.length) s.phase='input'; }
    } else {
      if(inp.justDown){
        for(let i=0;i<4;i++){
          if(Math.hypot(inp.x-s.pos[i].x, inp.y-s.pos[i].y)<34){
            if(i!==s.seq[s.input] && !s.secretMode) return 'fail';
            s.input++;
            if(s.input>=s.seq.length){
              s.round++;
              if(s.round>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
              s.seq.push(Math.floor(rand(0,4))); s.input=0; s.showIdx=0; s.showT=0; s.phase='show';
            }
          }
        }
      }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    const activeIdx = s.phase==='show' ? s.seq[s.showIdx] : -1;
    const cols=['#FF7A3D','#FFC93C','#4C9A2A','#7A4A26'];
    s.pos.forEach((p,i)=>{
      ctx.fillStyle = (i===activeIdx) ? '#fff' : cols[i];
      ctx.beginPath(); ctx.arc(p.x,p.y,34,0,7); ctx.fill();
      ctx.strokeStyle='#4A2C14'; ctx.lineWidth=3; ctx.stroke();
    });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('ROUND '+s.round+'/'+s.need, 12, 22);
  }
};

/* ---- 37. Meaning (match) ---- */
STAGE_LOGIC.match = {
  par: 8,
  init(){
    const symbols=['🍍','🍕','⭐','🔥'];
    return { symbols, target: symbols[Math.floor(rand(0,4))], drops:[], timer:0, need:5, got:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.7; s.drops.push({x:rand(40,W-40), y:-20, sym: s.secretMode ? s.target : s.symbols[Math.floor(rand(0,4))]}); }
    s.drops.forEach(d=> d.y += 150*dt);
    if(inp.justDown){
      for(const d of s.drops){
        if(Math.hypot(inp.x-d.x, inp.y-d.y)<26){
          d.hit=true;
          if(d.sym===s.target){ s.got++; if(s.got>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; } }
          else if(!s.secretMode) return 'fail';
        }
      }
    }
    s.drops = s.drops.filter(d=>d.y<H+30 && !d.hit);
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.font='bold 13px Nunito'; ctx.fillStyle='#7A4A26'; ctx.fillText('狙う記号:', 12, 22);
    ctx.font='22px serif'; ctx.fillText(s.target, 90, 26);
    s.drops.forEach(d=>{ ctx.font='24px serif'; ctx.fillText(d.sym, d.x-12, d.y); });
    ctx.font='bold 12px Nunito'; ctx.fillText(s.got+'/'+s.need, 12, 44);
  }
};

/* ---- 38. Being (stillness) ---- */
STAGE_LOGIC.stillness = {
  par: 6,
  init(){
    return { t:0, dur:5, movers:[] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(!s.secretMode && inp.down) return 'fail';
    s.t += dt;
    if(s.t > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    drawPizza(ctx, W/2-40, 20, 80);
    drawPineapple(ctx, W/2, H/2);
    for(let i=0;i<5;i++){
      const x = ((s.t*160)+i*130) % (W+60) - 30;
      ctx.font='20px serif'; ctx.fillText('💨', x, 80+i*60);
    }
    ctx.fillStyle='#7A4A26'; ctx.font='bold 14px Nunito'; ctx.fillText('動くな… '+(s.dur-s.t).toFixed(1)+'s', 12, 22);
  }
};

/* ---- 39. Becoming (morph) ---- */
STAGE_LOGIC.morph = {
  par: 7,
  init(){
    return { form:0, gates:[], timer:0, x:70, dist:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.form = (s.form+1)%3; }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=1.0; s.gates.push({x:W+20, form:Math.floor(rand(0,3))}); }
    s.gates.forEach(g=> g.x -= 150*dt);
    s.gates = s.gates.filter(g=>g.x>-30);
    if(!s.secretMode){
      for(const g of s.gates){
        if(Math.abs(g.x-90)<20 && g.form!==s.form) return 'fail';
      }
    }
    s.dist += dt;
    if(s.dist > 8){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    const shapes=['🍍','🥞','🌭'];
    s.gates.forEach(g=>{ ctx.font='26px serif'; ctx.fillText(shapes[g.form], g.x-13, H-70); });
    ctx.font='30px serif'; ctx.fillText(shapes[s.form], 70-15, H-70);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('タップで変身', 12, 22);
  }
};

/* ---- 40. Existing (blink) ---- */
STAGE_LOGIC.blink = {
  par: 7,
  init(){
    return { visible:true, beams:[], timer:0, t:0, dur:8 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.visible = !s.visible; }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=1.1; s.beams.push({x:rand(60,W-60), t:0}); }
    s.beams.forEach(b=> b.t += dt);
    s.beams = s.beams.filter(b=>b.t<1.2);
    if(!s.secretMode){
      for(const b of s.beams){
        if(b.t>0.4 && b.t<0.7 && Math.abs(b.x-W/2)<24 && s.visible) return 'fail';
      }
    }
    s.t += dt;
    if(s.t > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.beams.forEach(b=>{
      if(b.t>0.4 && b.t<0.7){ ctx.fillStyle='rgba(255,59,59,.5)'; ctx.fillRect(b.x-24,0,48,H); }
    });
    if(s.visible) drawPineapple(ctx, W/2, H/2);
    else { ctx.globalAlpha=0.3; drawPineapple(ctx, W/2, H/2); ctx.globalAlpha=1; }
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText((s.dur-s.t).toFixed(1)+'s', 12, 22);
  }
};

/* ---- 41. Loading (mash) ---- */
STAGE_LOGIC.mash = {
  par: 4,
  init(){
    return { gauge:0, timeLeft:5 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.gauge += s.secretMode ? 24 : 8; }
    s.gauge *= 0.995;
    s.timeLeft -= dt;
    if(s.gauge>=100){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    if(s.timeLeft<=0) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#e7dcc0'; ctx.fillRect(40,H/2-16,W-80,32);
    ctx.fillStyle='#FFC93C'; ctx.fillRect(40,H/2-16,(W-80)*clamp(s.gauge/100,0,1),32);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=3; ctx.strokeRect(40,H/2-16,W-80,32);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 13px Nunito'; ctx.fillText('連打!残り'+s.timeLeft.toFixed(1)+'s', 12, 22);
  }
};

/* ---- 42. Updating (shift) ---- */
STAGE_LOGIC.shift = {
  par: 8,
  init(){
    return { safe:1, t:0, cycle:1.3, round:0, need:5 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    if(inp.down){ s.pos = clamp(Math.floor((inp.x/W)*3),0,2); }
    if(s.t > s.cycle){
      s.t = 0;
      if(s.pos !== s.safe && !s.secretMode) return 'fail';
      s.round++;
      if(s.round>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
      s.safe = Math.floor(rand(0,3));
    }
  },
  render(ctx,s){
    drawGround(ctx);
    const timeLeftFrac = clamp(1 - s.t/s.cycle, 0, 1);
    for(let i=0;i<3;i++){
      const isSafe = i===s.safe;
      ctx.fillStyle = isSafe ? 'rgba(76,154,42,.35)' : 'rgba(255,59,59,.12)';
      ctx.fillRect(i*(W/3)+6, H*0.4, W/3-12, H*0.3);
      ctx.strokeStyle = isSafe ? '#4C9A2A' : '#c9a876';
      ctx.lineWidth = isSafe ? 4 : 2;
      ctx.strokeRect(i*(W/3)+6, H*0.4, W/3-12, H*0.3);
      if(isSafe){
        ctx.font='bold 13px "Baloo 2"'; ctx.fillStyle='#4C9A2A';
        ctx.fillText('安全', i*(W/3)+W/6-16, H*0.4-8);
        // 切り替わりまでの残り時間バー
        ctx.fillStyle='#4C9A2A';
        ctx.fillRect(i*(W/3)+6, H*0.4+H*0.3+4, (W/3-12)*timeLeftFrac, 6);
      }
    }
    if(typeof s.pos==='number'){ drawPineapple(ctx, s.pos*(W/3)+W/6, H*0.55); }
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('緑のゾーンへ移動 ROUND '+s.round+'/'+s.need, 12, 22);
  }
};

/* ---- 43. Processing (sort) ---- */
STAGE_LOGIC.sort = {
  par: 8,
  init(){
    return { items:[], timer:0, need:6, got:0, chutes:[{x:W*0.2,c:'#FF7A3D'},{x:W*0.5,c:'#4C9A2A'},{x:W*0.8,c:'#3D8BFF'}] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.8; s.items.push({x:rand(40,W-40), y:-10, c: Math.floor(rand(0,3))}); }
    s.items.forEach(it=> it.y += 130*dt);
    if(inp.justDown){
      for(const it of s.items){
        for(let i=0;i<3;i++){
          if(Math.abs(inp.x-s.chutes[i].x)<50 && it.y>H-100){
            it.hit=true;
            if(i===it.c || s.secretMode){ s.got++; if(s.got>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; } }
            else if(!s.secretMode) return 'fail';
          }
        }
      }
    }
    if(!s.secretMode){ for(const it of s.items){ if(it.y>H+10) return 'fail'; } }
    s.items = s.items.filter(it=>!it.hit && it.y<H+20);
  },
  render(ctx,s){
    drawGround(ctx);
    s.chutes.forEach(c=>{ ctx.fillStyle=c.c; ctx.fillRect(c.x-40,H-40,80,30); });
    s.items.forEach(it=>{ ctx.fillStyle=s.chutes[it.c].c; ctx.beginPath(); ctx.arc(it.x,it.y,14,0,7); ctx.fill(); });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(s.got+'/'+s.need, 12, 22);
  }
};

/* ---- 44. Rendering (peek) ---- */
STAGE_LOGIC.peek = {
  par: 8,
  init(){
    const obs=[]; for(let i=0;i<5;i++) obs.push({x:100+i*60, y:rand(80,H-140)});
    return { obs, x:60, y:H/2, t:0, peekDur:1.3 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.x += 90*dt;
    s.y += steerY(inp,50) * 200*dt;
    if(!s.secretMode){
      for(const o of s.obs){ if(Math.hypot(s.x-o.x, s.y-o.y)<26) return 'fail'; }
    }
    if(s.x > W-40){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    const dim = s.t > s.peekDur;
    ctx.globalAlpha = dim ? (s.secretMode?0.35:0.06) : 1;
    s.obs.forEach(o=>{ ctx.font='26px serif'; ctx.fillText('🧱', o.x-13, o.y+10); });
    ctx.globalAlpha=1;
    drawPizza(ctx, W-70, s.y-60, 60);
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(dim?'覚えて進め!':'覚えろ!', 12, 22);
  }
};

/* ---- 45. Selecting (preset) ---- */
STAGE_LOGIC.preset = {
  par: 5,
  init(){
    const correct = Math.floor(rand(0,3));
    return { correct, x:70, launched:false, py:H-70, dist:[220,340,460][correct===0?0:correct===1?1:2] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(!s.launched && inp.justDown){
      let pick=-1;
      [0,1,2].forEach(i=>{ if(Math.abs(inp.x-(90+i*150))<50) pick=i; });
      if(pick>=0){
        s.launched=true;
        if(pick===s.correct || s.secretMode){ if(s.secretMode) hiddenTriggered=true; s.result='clear'; }
        else s.result='fail';
      }
    }
    if(s.launched) return s.result;
  },
  render(ctx,s){
    drawGround(ctx);
    drawPizza(ctx, W-90, H-70, 80);
    [0,1,2].forEach(i=>{
      const hint = s.secretMode && i===s.correct;
      ctx.fillStyle = hint ? '#FFC93C' : '#fff';
      ctx.fillRect(90+i*150-40, H-140, 80, 40);
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=2; ctx.strokeRect(90+i*150-40, H-140, 80, 40);
      ctx.font='12px Nunito'; ctx.fillStyle='#7A4A26'; ctx.fillText(['近い','中間','遠い'][i], 90+i*150-18, H-116);
    });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('ピザまでの距離に合うのはどれ?', 12, 22);
  }
};

/* ---- 46. Switching (zone) ---- */
STAGE_LOGIC.zone = {
  par: 8,
  init(){
    return { zone:0, hazards:[], timer:0, dist:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.zone = s.zone===0?1:0; }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.6; s.hazards.push({x:W+20, zone: s.secretMode ? (s.zone===0?1:0) : Math.round(Math.random())}); }
    s.hazards.forEach(h=> h.x -= 200*dt);
    s.hazards = s.hazards.filter(h=>h.x>-30);
    if(!s.secretMode){
      for(const h of s.hazards){ if(Math.abs(h.x-90)<22 && h.zone===s.zone) return 'fail'; }
    }
    s.dist += dt;
    if(s.dist>8){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle = s.zone===0?'rgba(255,201,60,.25)':'rgba(61,139,255,.2)';
    ctx.fillRect(0,H*0.55,W,H*0.35);
    s.hazards.forEach(h=>{ ctx.font='24px serif'; ctx.fillText('⚡', h.x-12, H*0.7+ h.zone*10); });
    drawPineapple(ctx, 90, H*0.7);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('タップでゾーン切替', 12, 22);
  }
};

/* ---- 47. Opening (dial) ---- */
STAGE_LOGIC.dial = {
  par: 4,
  init(){
    return { val:0, target: Math.floor(rand(30,70)), spinning:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.down){ s.val = (s.val + 90*dt) % 100; }
    if(inp.justUp){
      const tol = s.secretMode ? 30 : 6;
      if(Math.abs(s.val - s.target) < tol){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
      return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.save(); ctx.translate(W/2,H/2); ctx.rotate(s.val/100*Math.PI*2);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=6; ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-60); ctx.stroke();
    ctx.restore();
    ctx.strokeStyle='#FFC93C'; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(W/2,H/2,90,0,7); ctx.stroke();
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('離すタイミングで解錠', 12, 22);
  }
};

/* ---- 48. Closing (gate) ---- */
STAGE_LOGIC.gate = {
  par: 8,
  init(){
    return { x:60, gates:[{x:220,t:0},{x:380,t:0.6}], dist:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.x += 130*dt;
    s.gates.forEach(g=> g.t += dt);
    if(!s.secretMode){
      for(const g of s.gates){
        const cyc = g.t % 1.3;
        const closed = cyc < 0.55;
        if(closed && Math.abs(s.x-g.x)<16) return 'fail';
      }
    }
    if(s.x > W-40){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.gates.forEach(g=>{
      const cyc = g.t % 1.3;
      const closed = cyc < 0.55;
      ctx.fillStyle = closed ? '#7A4A26' : 'rgba(255,201,60,.25)';
      ctx.fillRect(g.x-8,40,16,H-80);
    });
    drawPizza(ctx, W-70, H-70, 60);
    drawPineapple(ctx, s.x, H-70);
  }
};

/* ---- 49. Confirming (justtap) ---- */
STAGE_LOGIC.justtap = {
  par: 6,
  init(){
    return { t:0, need:3, got:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt*2.2;
    const v = Math.sin(s.t);
    if(inp.justDown){
      const tol = s.secretMode ? 0.5 : 0.12;
      if(Math.abs(v) < tol){ s.got++; if(s.got>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; } }
      else return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    const v = Math.sin(s.t);
    ctx.fillStyle='#e7dcc0'; ctx.fillRect(40,H/2-4,W-80,8);
    ctx.fillStyle='#FF7A3D'; ctx.beginPath(); ctx.arc(W/2 + v*(W/2-60), H/2, 14,0,7); ctx.fill();
    ctx.strokeStyle='#4A2C14'; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(W/2,H/2-20); ctx.lineTo(W/2,H/2+20); ctx.stroke();
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('中央でタップ '+s.got+'/'+s.need, 12, 22);
  }
};

/* ---- 50. Canceling (cancel) ---- */
STAGE_LOGIC.cancel = {
  par: 5,
  init(){
    return { gauge:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.gauge += 45*dt;
    const lo = s.secretMode ? 30 : 58, hi = s.secretMode ? 99 : 88;
    if(inp.justDown){
      if(s.gauge>=lo && s.gauge<hi){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
      if(s.gauge>=hi) return 'fail'; // 手遅れ
      // 早すぎるタップはノーペナルティ、そのまま待てる
    }
    if(s.gauge>=100) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#e7dcc0'; ctx.fillRect(40,H/2-16,W-80,32);
    const inWindow = s.gauge>=58 && s.gauge<88;
    ctx.fillStyle = inWindow ? '#4C9A2A' : (s.gauge>=88 ? '#FF3B3B':'#FFC93C');
    ctx.fillRect(40,H/2-16,(W-80)*clamp(s.gauge/100,0,1),32);
    // 成功ゾーンをうっすら常時表示
    ctx.fillStyle='rgba(76,154,42,.25)';
    ctx.fillRect(40+(W-80)*0.58, H/2-16, (W-80)*0.30, 32);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=3; ctx.strokeRect(40,H/2-16,W-80,32);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 13px Nunito';
    ctx.fillText(inWindow ? '今だ!タップ!' : '暴走寸前でタップしてキャンセル!', 12, 22);
  }
};

/* ---- 51. Traveling ---- */
STAGE_LOGIC.travel = {
  par: 8,
  init(){
    return { x:70, y:H-70, vy:0, onGround:true, gaps:[], timer:0, dist:0, speed:180 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown && s.onGround){ s.vy=-360; s.onGround=false; }
    s.vy += 1100*dt; 
    let ny = s.y + s.vy*dt;
    s.timer -= dt;
    if(s.timer<=0){ s.timer=rand(0.9,1.3); s.gaps.push({x:W+20, w: s.secretMode?20:60}); }
    s.gaps.forEach(g=> g.x -= s.speed*dt);
    s.gaps = s.gaps.filter(g=>g.x>-80);
    const overGap = s.gaps.some(g=> Math.abs(g.x-70) < g.w/2);
    if(ny>=H-70){
      if(overGap && !s.secretMode) return 'fail';
      ny=H-70; s.vy=0; s.onGround=true;
    }
    s.y = ny;
    s.dist += s.speed*dt;
    if(s.dist > 1700){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#f2e3c6'; ctx.fillRect(0,H-56,W,56);
    s.gaps.forEach(g=>{ ctx.fillStyle='#EAF6FF'; ctx.fillRect(g.x-g.w/2,H-56,g.w,56); });
    drawPizza(ctx, W-70, H-70, 70);
    ctx.font='26px serif'; ctx.fillText('🛹', s.x-13, s.y);
    drawPineapple(ctx, s.x, s.y-24);
  }
};

/* ---- 52. Crossing ---- */
STAGE_LOGIC.cross = {
  par: 8,
  init(){
    const lanes=[]; for(let i=0;i<6;i++){ lanes.push({y:60+i*60, dir:i%2?1:-1, speed:rand(60,110), cars:[rand(0,W)]}); }
    return { row:0, x:W/2, lanes, y:H-40 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.row++; s.y -= 60; }
    s.lanes.forEach(l=>{ l.cars.forEach(c=>{}); l.cars = l.cars.map(c=> (c + l.dir*l.speed*dt + W) % W); });
    if(!s.secretMode){
      for(const l of s.lanes){
        if(Math.abs(l.y - s.y) < 20){
          for(const c of l.cars){ if(Math.abs(c-s.x)<28) return 'fail'; }
        }
      }
    }
    if(s.row >= s.lanes.length){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.lanes.forEach(l=>{
      ctx.fillStyle='#d8c9a3'; ctx.fillRect(0,l.y-20,W,40);
      l.cars.forEach(c=>{ ctx.font='22px serif'; ctx.fillText(l.dir>0?'🚗':'🚙', c-11, l.y+8); });
    });
    drawPizza(ctx, W/2-35, 10, 70);
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 53. Exploring ---- */
STAGE_LOGIC.explore = {
  par: 9,
  init(){
    const pizza = {x:rand(60,W-60), y:rand(60,H-60)};
    return { x:W/2, y:H/2, walls:[{x:120,y:100,w:200,h:16},{x:W-260,y:260,w:200,h:16},{x:120,y:H-140,w:220,h:16}], pizza };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.x += steerX(inp,55)*180*dt;
    s.y += steerY(inp,55)*180*dt;
    s.x = clamp(s.x,20,W-20); s.y = clamp(s.y,20,H-20);
    if(!s.secretMode){
      for(const w of s.walls){
        if(s.x>w.x-14 && s.x<w.x+w.w+14 && s.y>w.y-14 && s.y<w.y+w.h+14){
          s.x -= steerX(inp,55)*180*dt; s.y -= steerY(inp,55)*180*dt;
        }
      }
    }
    if(Math.hypot(s.x-s.pizza.x, s.y-s.pizza.y) < 30){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#7A4A26';
    s.walls.forEach(w=> ctx.fillRect(w.x,w.y,w.w,w.h));
    if(s.secretMode){ ctx.font='24px serif'; ctx.fillText('🍕', s.pizza.x-12, s.pizza.y+8); }
    else { ctx.globalAlpha=0.5; ctx.font='24px serif'; ctx.fillText('🍕', s.pizza.x-12, s.pizza.y+8); ctx.globalAlpha=1; }
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 54. Wandering ---- */
STAGE_LOGIC.wander = {
  par: 9,
  init(){
    return { x:60, y:H/2, obs:[{x:180,y:120},{x:260,y:340},{x:W-180,y:200},{x:W-260,y:H-140}], goal:{x:W-50,y:H/2} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.x += steerX(inp,55)*170*dt;
    s.y += steerY(inp,55)*170*dt;
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    if(!s.secretMode){
      for(const o of s.obs){ if(Math.hypot(s.x-o.x,s.y-o.y)<28) return 'fail'; }
    }
    if(Math.hypot(s.x-s.goal.x,s.y-s.goal.y)<30){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    ctx.fillStyle='#2b2118'; ctx.fillRect(0,0,W,H);
    const radius = s.secretMode ? 220 : 100;
    ctx.save();
    ctx.beginPath(); ctx.arc(s.x,s.y,radius,0,7); ctx.clip();
    ctx.fillStyle='#EAF6FF'; ctx.fillRect(0,0,W,H);
    s.obs.forEach(o=>{ ctx.font='26px serif'; ctx.fillText('🪨', o.x-13,o.y+10); });
    ctx.font='30px serif'; ctx.fillText('🍕', s.goal.x-15, s.goal.y+10);
    ctx.restore();
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 55. Navigating ---- */
STAGE_LOGIC.navigate = {
  par: 9,
  init(){
    return { x:60, y:H/2, goal:{x:W-60,y:H/2}, obs:[{x:200,y:150},{x:300,y:330},{x:W-200,y:220}], warn:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.x += steerX(inp,55)*170*dt;
    s.y += steerY(inp,55)*170*dt;
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    s.warn=0;
    for(const o of s.obs){
      const d = Math.hypot(s.x-o.x,s.y-o.y);
      if(d<70) s.warn = Math.max(s.warn, 1-(d/70));
      if(!s.secretMode && d<26) return 'fail';
    }
    if(Math.hypot(s.x-s.goal.x,s.y-s.goal.y)<30){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    if(s.secretMode){ s.obs.forEach(o=>{ ctx.font='22px serif'; ctx.fillText('🪨', o.x-11,o.y+8); }); }
    const ang = Math.atan2(s.goal.y-s.y, s.goal.x-s.x);
    ctx.save(); ctx.translate(s.x,s.y); ctx.rotate(ang);
    ctx.fillStyle='#FF7A3D'; ctx.beginPath(); ctx.moveTo(20,0); ctx.lineTo(6,-7); ctx.lineTo(6,7); ctx.closePath(); ctx.fill();
    ctx.restore();
    if(s.warn>0){ ctx.fillStyle=`rgba(255,59,59,${s.warn*0.5})`; ctx.beginPath(); ctx.arc(s.x,s.y,40,0,7); ctx.fill(); }
    drawPineapple(ctx, s.x, s.y);
    drawPizza(ctx, s.goal.x-30, s.goal.y-60, 60);
  }
};

/* ---- 56. Mapping ---- */
STAGE_LOGIC.mapmini = {
  par: 9,
  init(){
    return { x:60, y:H/2, goal:{x:W-60,y:H/2}, obs:[{x:200,y:150},{x:300,y:330},{x:W-200,y:220}], t:0, dur:12 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.x += steerX(inp,55)*170*dt;
    s.y += steerY(inp,55)*170*dt;
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    if(!s.secretMode){
      for(const o of s.obs){ if(Math.hypot(s.x-o.x,s.y-o.y)<28) return 'fail'; }
    }
    if(Math.hypot(s.x-s.goal.x,s.y-s.goal.y)<30){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    if(s.t>s.dur) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    const revealAll = s.secretMode && s.t<1.5;
    ctx.save();
    if(!revealAll){ ctx.beginPath(); ctx.arc(s.x,s.y,90,0,7); ctx.clip(); }
    s.obs.forEach(o=>{ ctx.font='24px serif'; ctx.fillText('🪨', o.x-12,o.y+9); });
    drawPizza(ctx, s.goal.x-30, s.goal.y-30, 60);
    ctx.restore();
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText((s.dur-s.t).toFixed(1)+'s',12,22);
  }
};

/* ---- 57. Returning (boomerang) ---- */
STAGE_LOGIC.boomerang = {
  par: 6,
  init(){
    return { phase:'aim', t:0, x:70, y:H/2, hoop:{x:W/2,y:H*0.3}, thrown:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.phase==='aim' && inp.justDown){ s.phase='out'; s.t=0; }
    if(s.phase==='out'){
      s.t += dt;
      s.x = 70 + s.t*260;
      s.y = H/2 - Math.sin(s.t*2)*120;
      if(s.t>1.2){ s.phase='back'; }
    } else if(s.phase==='back'){
      s.t += dt;
      const bt = s.t-1.2;
      s.x = 70 + (260*1.2) - bt*260;
      s.y = H/2 - Math.sin((1.2+bt)*2)*120;
      const throughHoop = Math.hypot(s.x-s.hoop.x, s.y-s.hoop.y) < (s.secretMode?70:32);
      if(throughHoop) s.gotHoop = true;
      if(s.x < 70){
        if(s.gotHoop || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
        return 'fail';
      }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#FFC93C'; ctx.lineWidth=6; ctx.beginPath(); ctx.arc(s.hoop.x,s.hoop.y,26,0,7); ctx.stroke();
    ctx.font='24px serif'; ctx.fillText('🪃', s.x-12, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(s.phase==='aim'?'タップで投げろ':'', 12, 22);
  }
};

/* ---- 58. Leaving (escape) ---- */
STAGE_LOGIC.escape = {
  par: 8,
  init(){
    return { x:60, y:H-70, waterY:H+20, dist:0, vy:0, onGround:true };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown && s.onGround){ s.vy=-380; s.onGround=false; }
    s.vy += 1200*dt; s.y += s.vy*dt;
    if(s.y>=H-70){ s.y=H-70; s.vy=0; s.onGround=true; }
    s.x += 140*dt;
    s.waterY -= (s.secretMode?60:100)*dt;
    if(!s.secretMode && s.y > s.waterY) return 'fail';
    if(s.x > W-40){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='rgba(61,139,255,.55)'; ctx.fillRect(0,s.waterY,W,H-s.waterY);
    drawPizza(ctx, W-70, H-70, 60);
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 59. Arriving (bounce landing) ---- */
STAGE_LOGIC.bounceland = {
  par: 6,
  init(){
    return { y:60, vy:0, x:W/2, bounces:0, need:3, goal:{x:W/2,w:90} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.vy += 700*dt; s.y += s.vy*dt;
    if(s.y > H-60){
      s.y = H-60;
      const power = s.secretMode ? 480 : clamp(Math.abs(s.vy)*0.72, 260, 520);
      s.vy = -power;
      s.bounces++;
      if(s.bounces>=s.need){
        const ok = Math.abs(s.x-s.goal.x) < s.goal.w/2;
        if(ok || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
        return 'fail';
      }
    }
    if(inp.down){ s.x += steerX(inp,50)*160*dt; s.x=clamp(s.x,30,W-30); }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='rgba(255,201,60,.4)'; ctx.fillRect(s.goal.x-s.goal.w/2,H-70,s.goal.w,20);
    drawPizza(ctx, s.goal.x-35, H-100, 70);
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('BOUNCE '+s.bounces+'/'+s.need, 12, 22);
  }
};

/* ---- 60. Staying (drifting platform) ---- */
STAGE_LOGIC.drift = {
  par: 9,
  init(){
    return { px:W/2, py:H/2, plat:{x:W/2,y:H/2,r:70}, t:0, dur:9, vx:60, vy:40 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.plat.x += s.vx*dt; s.plat.y += s.vy*dt;
    if(s.plat.x<70||s.plat.x>W-70) s.vx*=-1;
    if(s.plat.y<70||s.plat.y>H-70) s.vy*=-1;
    s.px += steerX(inp,50)*160*dt;
    s.py += steerY(inp,50)*160*dt;
    const d = Math.hypot(s.px-s.plat.x, s.py-s.plat.y);
    if(!s.secretMode && d > s.plat.r) return 'fail';
    if(s.secretMode){ s.px += (s.plat.x-s.px)*0.02; s.py += (s.plat.y-s.py)*0.02; }
    s.t += dt;
    if(s.t > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#f2e3c6'; ctx.beginPath(); ctx.arc(s.plat.x,s.plat.y,s.plat.r,0,7); ctx.fill();
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=3; ctx.stroke();
    drawPineapple(ctx, s.px, s.py);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText((s.dur-s.t).toFixed(1)+'s',12,22);
  }
};

/* ---- 61. Growing ---- */
STAGE_LOGIC.grow = {
  par: 8,
  init(){
    return { size:14, x:70, gates:[{x:220,hole:34},{x:340,hole:26},{x:460,hole:40}], speed:130, t:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.size = s.secretMode ? 14 : 14 + s.t*7;
    s.x += s.speed*dt;
    if(!s.secretMode){
      for(const g of s.gates){ if(Math.abs(g.x-s.x)<10 && s.size > g.hole) return 'fail'; }
    }
    if(s.x > (s.gates[s.gates.length-1].x + 120)){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.gates.forEach(g=>{
      ctx.fillStyle='#7A4A26';
      ctx.fillRect(g.x-8, 0, 16, H/2-g.hole);
      ctx.fillRect(g.x-8, H/2+g.hole, 16, H/2-g.hole);
    });
    drawPizza(ctx, s.gates[s.gates.length-1].x+70, H/2-35, 70);
    ctx.font=(16+s.size)+'px serif'; ctx.fillText('🍍', s.x-s.size/2, H/2+s.size/3);
  }
};

/* ---- 62. Shrinking ---- */
STAGE_LOGIC.shrink2 = {
  par: 8,
  init(){
    return { size:44, x:70, gates:[{x:220,minHole:18},{x:340,minHole:26},{x:460,minHole:14}], speed:130, t:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.size = s.secretMode ? 44 : Math.max(6, 44 - s.t*6);
    s.x += s.speed*dt;
    if(!s.secretMode){
      for(const g of s.gates){ if(Math.abs(g.x-s.x)<10 && s.size < g.minHole) return 'fail'; }
    }
    if(s.x > (s.gates[s.gates.length-1].x + 120)){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.gates.forEach(g=>{ ctx.strokeStyle='#7A4A26'; ctx.lineWidth=3; ctx.strokeRect(g.x-20,H/2-g.minHole/2-6,40,g.minHole+12); });
    drawPizza(ctx, s.gates[s.gates.length-1].x+70, H/2-35, 70);
    ctx.font=(10+s.size)+'px serif'; ctx.fillText('🍍', s.x-s.size/2, H/2+s.size/3);
  }
};

/* ---- 63. Strengthening ---- */
STAGE_LOGIC.strong = {
  par: 8,
  init(){
    const orbs=[]; for(let i=0;i<5;i++) orbs.push({x:80+i*70, y:rand(80,H-80)});
    return { x:60, y:H/2, charge:0, need:4, orbs, wallX:W-90, broken:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.x += steerX(inp,50)*160*dt;
    s.y += steerY(inp,50)*160*dt;
    s.x=clamp(s.x,20,s.wallX-10); s.y=clamp(s.y,20,H-20);
    s.orbs = s.orbs.filter(o=>{
      if(Math.hypot(s.x-o.x,s.y-o.y)<26){ s.charge++; return false; }
      return true;
    });
    if(!s.broken && s.x > s.wallX-30 && inp.justDown){
      if(s.charge>=s.need || s.secretMode){ s.broken=true; if(s.secretMode) hiddenTriggered=true; }
    }
    if(s.broken && s.x > s.wallX+40) return 'clear';
    if(s.broken) s.x += 160*dt;
  },
  render(ctx,s){
    drawGround(ctx);
    s.orbs.forEach(o=>{ ctx.font='22px serif'; ctx.fillText('🔶', o.x-11,o.y+8); });
    if(!s.broken){ ctx.fillStyle='#7A4A26'; ctx.fillRect(s.wallX,20,16,H-40); }
    drawPizza(ctx, s.wallX+40, H/2-35, 70);
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('CHARGE '+s.charge+'/'+s.need, 12, 22);
  }
};

/* ---- 64. Weakening ---- */
STAGE_LOGIC.weak = {
  par: 8,
  init(){
    return { x:60, y:H/2, lagX:60, lagY:H/2, obs:[{x:220,y:150},{x:340,y:330},{x:460,y:200}], t:0, dur:9 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    const lag = s.secretMode ? 0.02 : clamp(0.02 + s.t*0.012, 0.02, 0.2);
    s.x += steerX(inp,50)*180*dt;
    s.y += steerY(inp,50)*180*dt;
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    s.lagX += (s.x-s.lagX)*(1-lag);
    s.lagY += (s.y-s.lagY)*(1-lag);
    if(!s.secretMode){
      for(const o of s.obs){ if(Math.hypot(s.lagX-o.x,s.lagY-o.y)<28) return 'fail'; }
    }
    if(s.lagX > W-40){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    if(s.t>s.dur) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    s.obs.forEach(o=>{ ctx.font='24px serif'; ctx.fillText('🪨', o.x-12,o.y+9); });
    drawPizza(ctx, W-70, H/2-30, 60);
    drawPineapple(ctx, s.lagX, s.lagY);
  }
};

/* ---- 65. Freshening ---- */
STAGE_LOGIC.fresh = {
  par: 6,
  init(){
    return { x:60, y:H/2, obs:[{x:200,y:130},{x:320,y:330},{x:440,y:200}], timeLeft:7 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.timeLeft -= dt;
    s.x += steerX(inp,50)*220*dt;
    s.y += steerY(inp,50)*220*dt;
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    if(!s.secretMode){
      for(const o of s.obs){ if(Math.hypot(s.x-o.x,s.y-o.y)<26) return 'fail'; }
      if(s.timeLeft<=0) return 'fail';
    } else { s.timeLeft = Math.max(s.timeLeft, 6); }
    if(s.x > W-40){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.obs.forEach(o=>{ ctx.font='24px serif'; ctx.fillText('🪨', o.x-12,o.y+9); });
    drawPizza(ctx, W-70, H/2-30, 60);
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle= s.timeLeft<2?'#FF3B3B':'#7A4A26'; ctx.font='bold 13px Nunito'; ctx.fillText('鮮度 '+Math.max(0,s.timeLeft).toFixed(1)+'s',12,22);
  }
};

/* ---- 66. Ripening ---- */
STAGE_LOGIC.ripen = {
  par: 8,
  init(){
    return { x:70, colorT:0, gates:[{x:220,c:0},{x:340,c:1},{x:460,c:2}], speed:130 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.colorT += dt*1.6;
    s.x += s.speed*dt;
    const curColor = Math.floor(s.colorT)%3;
    if(!s.secretMode){
      for(const g of s.gates){ if(Math.abs(g.x-s.x)<10 && g.c!==curColor) return 'fail'; }
    }
    if(s.x > s.gates[s.gates.length-1].x+120){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    const cols=['#7A9A2A','#FFC93C','#FF7A3D'];
    const curColor = Math.floor(s.colorT)%3;
    s.gates.forEach(g=>{ ctx.strokeStyle=cols[g.c]; ctx.lineWidth=6; ctx.strokeRect(g.x-18,H/2-40,36,80); });
    drawPizza(ctx, s.gates[s.gates.length-1].x+70, H/2-35, 70);
    ctx.font='30px serif'; ctx.fillStyle = s.secretMode ? '#B050FF' : cols[curColor];
    ctx.fillText('🍍', s.x-15, H/2+10);
  }
};

/* ---- 67. Softening ---- */
STAGE_LOGIC.soft = {
  par: 8,
  init(){
    return { x:70, y:H-70, squish:false, obs:[{x:220,low:true},{x:340,low:false},{x:460,low:true}], speed:150 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.squish = inp.down;
    s.x += s.speed*dt;
    if(!s.secretMode){
      for(const o of s.obs){
        if(Math.abs(o.x-s.x)<14){
          if(o.low && !s.squish) return 'fail';
          if(!o.low && s.squish) return 'fail';
        }
      }
    }
    if(s.x > s.obs[s.obs.length-1].x+120){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.obs.forEach(o=>{
      ctx.fillStyle='#7A4A26';
      if(o.low) ctx.fillRect(o.x-10,H-100,20,26); else ctx.fillRect(o.x-10,H-140,20,40);
    });
    const h = s.squish ? 14 : 30;
    ctx.font=h+'px serif'; ctx.fillText('🍍', s.x-h/2, H-70);
  }
};

/* ---- 68. Hardening ---- */
STAGE_LOGIC.harden = {
  par: 8,
  init(){
    return { x:60, y:H/2, hard:false, walls:[{x:250,broken:false},{x:420,broken:false}], gapX:340 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.hard = inp.down;
    s.x += 130*dt;
    if(!s.secretMode){
      for(const w of s.walls){
        if(!w.broken && Math.abs(w.x-s.x)<14){
          if(s.hard){ w.broken=true; } else { return 'fail'; }
        }
      }
      if(Math.abs(s.gapX-s.x)<14 && s.hard) return 'fail'; // 硬化中は曲がれず隙間に落ちる
    }
    if(s.x > W-40){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.walls.forEach(w=>{ if(!w.broken){ ctx.fillStyle='#7A4A26'; ctx.fillRect(w.x-8,H/2-60,16,120); } });
    ctx.strokeStyle='#4A2C14'; ctx.lineWidth=2; ctx.strokeRect(s.gapX-14,H/2-60,28,120);
    drawPizza(ctx, W-70, H/2-30, 60);
    ctx.font= s.hard?'34px serif':'26px serif'; ctx.fillText('🍍', s.x-15, H/2+8);
  }
};

/* ---- 69. Stabilizing ---- */
STAGE_LOGIC.stabilize = {
  par: 8,
  init(){
    return { x:W/2, y:H/2, t:0, dur:8, shakeAmp:6 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    const amp = s.secretMode ? 0 : s.shakeAmp + s.t*1.2;
    const push = { x: Math.sin(s.t*3)*amp, y: Math.cos(s.t*2.4)*amp };
    s.x += push.x*dt*8 + steerX(inp,50)*170*dt;
    s.y += push.y*dt*8 + steerY(inp,50)*170*dt;
    if(Math.hypot(s.x-W/2, s.y-H/2) > 110) return 'fail';
    if(s.t > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(W/2,H/2,110,0,7); ctx.stroke();
    drawPizza(ctx, W/2-35, H/2-90, 70);
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText((s.dur-s.t).toFixed(1)+'s',12,22);
  }
};

/* ---- 70. Shifting (moving platforms) ---- */
STAGE_LOGIC.shiftplat = {
  par: 8,
  init(){
    const plats=[]; for(let i=0;i<5;i++) plats.push({x:100+i*90, y:H-70, baseX:100+i*90, amp:rand(20,50), speed:rand(1,2), phase:rand(0,6)});
    return { cur:0, x:plats[0].x, plats };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.plats.forEach(p=>{ p.x = p.baseX + Math.sin(performance.now()/1000*p.speed+p.phase)*p.amp; });
    if(inp.justDown && s.cur < s.plats.length-1){
      const tol = s.secretMode ? 200 : 46;
      if(Math.abs(s.plats[s.cur+1].x - s.x) < tol || s.secretMode){
        s.cur++; s.x = s.plats[s.cur].x;
      }
    } else if(inp.down){
      s.x = s.plats[s.cur].x;
    }
    if(s.cur >= s.plats.length-1){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.plats.forEach((p,i)=>{ ctx.fillStyle= i===s.cur?'#FFC93C':'#e7dcc0'; ctx.fillRect(p.x-24,H-56,48,14); });
    drawPizza(ctx, s.plats[s.plats.length-1].baseX-30, H-96, 60);
    drawPineapple(ctx, s.x, H-70);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('タップで次の足場へジャンプ', 12, 22);
  }
};

/* ---- 71. Timing ---- */
STAGE_LOGIC.timing2 = {
  par: 6,
  init(){
    return { t:0, need:3, got:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt*2.0;
    const v = Math.sin(s.t);
    if(inp.justDown){
      const tol = s.secretMode ? 0.55 : 0.14;
      if(Math.abs(v) < tol){ s.got++; if(s.got>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; } }
      else return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    const v = Math.sin(s.t);
    for(let i=0;i<3;i++){
      const cx = 120+i*140;
      ctx.strokeStyle= i<s.got?'#4C9A2A':'#e7dcc0'; ctx.lineWidth=4;
      ctx.beginPath(); ctx.arc(cx,H/2,26,0,7); ctx.stroke();
    }
    ctx.fillStyle='#FF7A3D'; ctx.beginPath(); ctx.arc(120+s.got*140 + v*40, H/2, 10,0,7); ctx.fill();
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('中央でタップ '+s.got+'/'+s.need,12,22);
  }
};

/* ---- 72. Targeting (bullseye) ---- */
STAGE_LOGIC.bullseye = {
  par: 5,
  init(){
    return { ang:0, throws:0, maxThrows:4 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.ang += dt*2.6;
    if(inp.justDown){
      s.throws++;
      const d = Math.abs(((s.ang % (Math.PI*2))+Math.PI*2)%(Math.PI*2) - Math.PI);
      const hitCenter = d < (s.secretMode?2.6:0.35);
      if(hitCenter){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
      if(s.throws>=s.maxThrows) return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.save(); ctx.translate(W/2,H/2); ctx.rotate(s.ang);
    ['#FF7A3D','#FFC93C','#4C9A2A'].forEach((c,i)=>{ ctx.fillStyle=c; ctx.beginPath(); ctx.arc(0,0,90-i*28,0,7); ctx.fill(); });
    ctx.restore();
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('タイミングよくタップ 残り'+(s.maxThrows-s.throws),12,22);
  }
};

/* ---- 73. Dodging (bullet hell) ---- */
STAGE_LOGIC.bullethell = {
  par: 8,
  init(){
    return { x:W/2, y:H/2, drops:[], timer:0, t:0, dur:8 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.x += steerX(inp,50)*180*dt; s.y += steerY(inp,50)*180*dt;
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.22; s.drops.push({x:rand(0,W), y:-10}); }
    s.drops.forEach(d=> d.y += 220*dt);
    s.drops = s.drops.filter(d=>d.y<H+20);
    if(!s.secretMode){
      for(const d of s.drops){ if(Math.hypot(d.x-s.x,d.y-s.y)<18) return 'fail'; }
    }
    if(s.t > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.drops.forEach(d=>{ ctx.font='16px serif'; ctx.fillText('🍅', d.x-8,d.y); });
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText((s.dur-s.t).toFixed(1)+'s',12,22);
  }
};

/* ---- 74. Aiming (slingshot) ---- */
STAGE_LOGIC.slingshot = {
  par: 5,
  init(){
    return { anchorX:80, anchorY:H-70, x:80, y:H-70, vx:0, vy:0, flying:false, pizza:{x:W-100,y:H-70,w:80,h:24} };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(!s.flying){
      if(inp.down){ s.x = clamp(inp.x, s.anchorX-70, s.anchorX+10); s.y = clamp(inp.y, s.anchorY-50, s.anchorY+50); }
      if(inp.justUp){
        s.vx = (s.anchorX - s.x)*6; s.vy = (s.anchorY - s.y)*6;
        if(s.secretMode){ s.vx = 300; s.vy=-260; }
        s.flying = true;
      }
    } else {
      s.vy += 700*dt;
      s.x += s.vx*dt; s.y += s.vy*dt;
      if(s.vy>0 && s.y >= s.pizza.y){
        const ok = s.x > s.pizza.x-20 && s.x < s.pizza.x+s.pizza.w+20;
        if(ok){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
        return 'fail';
      }
      if(s.y>H+60 || s.x>W+60 || s.x<-60) return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    drawPizza(ctx, s.pizza.x, s.pizza.y, s.pizza.w);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=4;
    ctx.beginPath(); ctx.moveTo(s.anchorX-20,s.anchorY-40); ctx.lineTo(s.x,s.y); ctx.lineTo(s.anchorX+20,s.anchorY-40); ctx.stroke();
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 75. Controlling (tunnel) ---- */
STAGE_LOGIC.tunnel = {
  par: 8,
  init(){
    return { x:60, y:H/2, dist:0, dur:9 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.dist += dt;
    s.y += steerY(inp,50)*200*dt;
    const wallTop = H*0.5 - 90 + Math.sin(s.dist*1.4)*70;
    const wallBot = H*0.5 + 90 + Math.sin(s.dist*1.4)*70;
    s.y = clamp(s.y, 20, H-20);
    if(!s.secretMode && (s.y < wallTop+16 || s.y > wallBot-16)) return 'fail';
    if(s.dist > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    s._wallTop = wallTop; s._wallBot = wallBot;
  },
  render(ctx,s){
    ctx.fillStyle='#2b2118'; ctx.fillRect(0,0,W,H);
    const wallTop = s._wallTop!==undefined?s._wallTop:H*0.5-90;
    const wallBot = s._wallBot!==undefined?s._wallBot:H*0.5+90;
    ctx.fillStyle='#EAF6FF';
    ctx.fillRect(0,wallTop,W,wallBot-wallTop);
    ctx.font='24px serif'; ctx.fillText('🍕', W-60, (wallTop+wallBot)/2+8);
    ctx.font='24px serif'; ctx.fillText('🍍', s.x-12, s.y+8);
  }
};

/* ---- 76. Rebalancing (seesaw) ---- */
STAGE_LOGIC.seesaw = {
  par: 5,
  init(){
    return { angle:0, av:0, launched:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(!s.launched){
      const tilt = steerX(inp,50);
      s.av += tilt*3*dt;
      s.av *= 0.96;
      s.angle += s.av*dt;
      const lim = s.secretMode ? 0.25 : 0.55;
      if(Math.abs(s.angle) > lim){ s.launched=true; if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.save(); ctx.translate(W/2,H/2); ctx.rotate(s.angle);
    ctx.fillStyle='#e7dcc0'; ctx.fillRect(-110,-8,220,16);
    ctx.font='26px serif'; ctx.fillText('🍍', -100,-14);
    ctx.font='26px serif'; ctx.fillText('🍕', 80,-14);
    ctx.restore();
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('ドラッグで傾けろ',12,22);
  }
};

/* ---- 77. Mastering (combo3) ---- */
STAGE_LOGIC.combo3 = {
  par: 6,
  init(){
    return { round:0, need:3, prompt:null, t:0, window:0.8, waiting:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    const win = s.secretMode ? s.window*2.4 : s.window;
    if(!s.waiting){ s.prompt=['L','R','J'][Math.floor(rand(0,3))]; s.t=0; s.waiting=true; }
    s.t += dt;
    if(inp.justDown){
      const side = inp.y<H*0.3?'J':(inp.x<W/2?'L':'R');
      if(side===s.prompt){ s.round++; s.waiting=false; if(s.round>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; } }
      else return 'fail';
    }
    if(s.t>win) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    const label = s.prompt==='L'?'◀ 左':(s.prompt==='R'?'右 ▶':'▲ 上');
    ctx.font='bold 22px "Baloo 2"'; ctx.fillStyle='#FF7A3D'; ctx.fillText(label, W/2-40, H/2);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('COMBO '+s.round+'/'+s.need,12,22);
  }
};

/* ---- 78. Challenging (boss-lite) ---- */
STAGE_LOGIC.bosslite = {
  par: 8,
  init(){
    return { x:W/2, y:H/2, pinX:-60, t:0, dur:9, timer:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.x += steerX(inp,50)*180*dt; s.y += steerY(inp,50)*180*dt;
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    s.timer -= dt;
    if(s.timer<=0){ s.timer=1.4; s.pinX=-60; s.pinY=rand(60,H-60); }
    s.pinX += 260*dt;
    if(!s.secretMode && Math.abs(s.pinX-s.x)<50 && Math.abs((s.pinY||H/2)-s.y)<30) return 'fail';
    if(s.t>s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.font='40px serif'; ctx.fillText('🌭', s.pinX-20, (s.pinY||H/2)+12);
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText((s.dur-s.t).toFixed(1)+'s',12,22);
  }
};

/* ---- 79. Clearing (brick breaker) ---- */
STAGE_LOGIC.brick = {
  par: 8,
  init(){
    const bricks=[]; for(let r=0;r<3;r++) for(let c=0;c<6;c++) bricks.push({x:40+c*70,y:60+r*30,alive:true});
    return { bricks, px:W/2, bx:W/2, by:H-100, bvx:140, bvy:-220 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.px += steerX(inp,50)*260*dt; s.px=clamp(s.px,30,W-30);
    s.bx += s.bvx*dt; s.by += s.bvy*dt;
    if(s.bx<10||s.bx>W-10) s.bvx*=-1;
    if(s.by<10) s.bvy*=-1;
    if(s.by>H-40 && Math.abs(s.bx-s.px)<36){ s.bvy=-Math.abs(s.bvy); }
    else if(s.by>H+10) return 'fail';
    for(const b of s.bricks){
      if(b.alive && Math.abs(b.x-s.bx)<26 && Math.abs(b.y-s.by)<14){ b.alive=false; s.bvy*=-1; }
    }
    if(s.secretMode || s.bricks.every(b=>!b.alive)){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.bricks.forEach(b=>{ if(b.alive){ ctx.fillStyle='#FF7A3D'; ctx.fillRect(b.x-28,b.y-10,56,18); } });
    ctx.fillStyle='#7A4A26'; ctx.fillRect(s.px-36,H-40,72,12);
    ctx.font='16px serif'; ctx.fillText('🍍', s.bx-8, s.by+4);
  }
};

/* ---- 80. Perfecting (no miss) ---- */
STAGE_LOGIC.nomiss = {
  par: 9,
  init(){
    return { x:60, y:H/2, dist:0, dur:9 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.dist += dt;
    s.x = 60 + s.dist*45;
    s.y += steerY(inp,50)*200*dt;
    const centerY = H/2 + Math.sin(s.dist*1.1)*100;
    const tol = s.secretMode ? 200 : 30;
    if(Math.abs(s.y-centerY) > tol) return 'fail';
    if(s.dist > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    s._centerY = centerY;
  },
  render(ctx,s){
    drawGround(ctx);
    const cy = s._centerY!==undefined?s._centerY:H/2;
    ctx.strokeStyle='#c9a876'; ctx.lineWidth=60; ctx.lineCap='round';
    ctx.beginPath();
    for(let i=-3;i<=6;i++){
      const dd = s.dist+i*0.4;
      const yy = H/2+Math.sin(dd*1.1)*100;
      const xx = 60+dd*45 - s.dist*45 + s.x;
      if(i===-3) ctx.moveTo(xx,yy); else ctx.lineTo(xx,yy);
    }
    ctx.stroke();
    ctx.font='22px serif'; ctx.fillText('🍍', s.x-11, s.y+8);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(Math.round(clamp(s.dist/s.dur,0,1)*100)+'%',12,22);
  }
};

/* ---- 81. Understanding (riddle) ---- */
STAGE_LOGIC.riddle = {
  par: 5,
  init(){
    const seq=[1,2,3];
    const opts=[4,3,5].sort(()=>Math.random()-0.5);
    return { seq, correct:4, opts, pos:[{x:W*0.3,y:H*0.65},{x:W*0.5,y:H*0.65},{x:W*0.7,y:H*0.65}] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){
      for(let i=0;i<3;i++){
        const p=s.pos[i];
        if(Math.hypot(inp.x-p.x,inp.y-p.y)<32){
          if(s.opts[i]===s.correct || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
          return 'fail';
        }
      }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 20px "Baloo 2"'; ctx.fillText(s.seq.join('  →  ')+'  →  ?', 40, H*0.35);
    s.opts.forEach((o,i)=>{
      const p=s.pos[i];
      ctx.fillStyle = s.secretMode && o===s.correct ? 'rgba(255,201,60,.5)' : '#fff';
      ctx.beginPath(); ctx.arc(p.x,p.y,30,0,7); ctx.fill();
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=2; ctx.stroke();
      ctx.font='bold 20px "Baloo 2"'; ctx.fillStyle='#7A4A26'; ctx.fillText(o, p.x-8, p.y+7);
    });
  }
};

/* ---- 82. Accepting (catch) ---- */
STAGE_LOGIC.catch = {
  par: 8,
  init(){
    return { x:W/2, drops:[], timer:0, need:8, got:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.x += steerX(inp,50)*220*dt; s.x=clamp(s.x,30,W-30);
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.5; s.drops.push({x:rand(30,W-30), y:-10, bad: Math.random()<0.3}); }
    s.drops.forEach(d=> d.y += 170*dt);
    if(!s.secretMode){
      for(const d of s.drops){
        if(!d.hit && d.y>H-60 && Math.abs(d.x-s.x)<34){
          d.hit=true;
          if(d.bad) return 'fail'; else s.got++;
        }
      }
    } else {
      s.drops.forEach(d=>{ if(!d.hit && d.y>H-60 && Math.abs(d.x-s.x)<34 && !d.bad){ d.hit=true; s.got++; } });
    }
    s.drops = s.drops.filter(d=>!d.hit && d.y<H+20);
    if(s.got>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.drops.forEach(d=>{ ctx.font='20px serif'; ctx.fillText(d.bad?'🐟':'🧀', d.x-10,d.y); });
    ctx.fillStyle='#7A4A26'; ctx.fillRect(s.x-30,H-40,60,16);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(s.got+'/'+s.need,12,22);
  }
};

/* ---- 83. Connecting (pipe) ---- */
STAGE_LOGIC.pipeconnect = {
  par: 5,
  init(){
    return { pipes:[Math.floor(rand(0,4)),Math.floor(rand(0,4)),Math.floor(rand(0,4))], t:8 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t -= dt;
    if(inp.justDown){
      for(let i=0;i<3;i++){
        if(Math.abs(inp.x-(120+i*140))<50){ s.pipes[i]=(s.pipes[i]+1)%4; }
      }
    }
    if(s.secretMode || s.pipes.every(p=>p===0)){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    if(s.t<=0) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    s.pipes.forEach((p,i)=>{
      ctx.save(); ctx.translate(120+i*140,H/2); ctx.rotate(p*Math.PI/2);
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=10; ctx.beginPath(); ctx.moveTo(-30,0); ctx.lineTo(30,0); ctx.stroke();
      ctx.restore();
    });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('タップで回転、全部横向きに 残り'+s.t.toFixed(1)+'s',12,22);
  }
};

/* ---- 84. Completing (jigsaw) ---- */
STAGE_LOGIC.jigsaw = {
  par: 5,
  init(){
    const order=[0,1,2,3].sort(()=>Math.random()-0.5);
    return { order, cur:0, pos:[{x:W*0.25,y:H*0.6},{x:W*0.42,y:H*0.6},{x:W*0.58,y:H*0.6},{x:W*0.75,y:H*0.6}] };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){
      for(let i=0;i<4;i++){
        const p=s.pos[i];
        if(Math.hypot(inp.x-p.x,inp.y-p.y)<30){
          if(s.order[i]===s.cur || s.secretMode){ s.order[i]=-1; s.cur++; if(s.cur>=4 || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; } }
          else return 'fail';
        }
      }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    s.pos.forEach((p,i)=>{
      ctx.fillStyle = s.order[i]===-1 ? '#4C9A2A' : '#fff';
      ctx.fillRect(p.x-26,p.y-26,52,52);
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=2; ctx.strokeRect(p.x-26,p.y-26,52,52);
      if(s.order[i]!==-1){ ctx.font='bold 18px "Baloo 2"'; ctx.fillStyle='#7A4A26'; ctx.fillText(s.order[i]+1, p.x-6, p.y+6); }
    });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('小さい番号から順にタップ',12,22);
  }
};

/* ---- 85. Returning (loop coaster) ---- */
STAGE_LOGIC.loopcoaster = {
  par: 6,
  init(){
    return { t:0, loopStart:1.0, loopEnd:2.4, jumped:false };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    if(inp.justDown && !s.jumped){ s.jumped=true; }
    if(s.t > s.loopStart && s.t < s.loopEnd && !s.jumped && !s.secretMode) return 'fail';
    if(s.t > 3.4){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    const prog = clamp(s.t/3.4,0,1);
    const inLoop = s.t>s.loopStart && s.t<s.loopEnd;
    let x,y;
    if(inLoop && !s.jumped){
      const a = (s.t-s.loopStart)/(s.loopEnd-s.loopStart)*Math.PI*2;
      x = W*0.5 + Math.sin(a)*70; y = H*0.5 - 60 + Math.cos(a)*70;
    } else {
      x = 60+prog*(W-120); y = H*0.5;
    }
    ctx.strokeStyle='#c9a876'; ctx.lineWidth=6;
    ctx.beginPath(); ctx.arc(W*0.5,H*0.5-60,70,0,7); ctx.stroke();
    drawPizza(ctx, W-90, H*0.5-30, 70);
    ctx.font='26px serif'; ctx.fillText('🍍', x-13,y+8);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(inLoop?'今タップで脱出!':'', 12, 22);
  }
};

/* ---- 86. Ending (finale remix) ---- */
STAGE_LOGIC.finale = {
  par: 10,
  init(){
    return { phase:'jump', px:90, py:H-70, vy:0, onGround:true, obstacles:[], timer:0, score:0,
             power:0, dir:1, x2:70, y2:H-70, vx2:0, vy2:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.secretMode && s.phase!=='fly'){ s.phase = s.phase==='jump' ? 'jump' : s.phase; }
    if(s.phase==='jump'){
      if(inp.justDown && s.onGround){ s.vy=-420; s.onGround=false; }
      s.vy += 1200*dt; s.py += s.vy*dt;
      if(s.py>=H-70){ s.py=H-70; s.vy=0; s.onGround=true; }
      s.timer -= dt;
      if(s.timer<=0){ s.timer=rand(0.6,0.9); s.obstacles.push({x:W+20,passed:false}); }
      s.obstacles.forEach(o=> o.x -= 250*dt);
      for(const o of s.obstacles){
        if(!o.passed && o.x<90){ o.passed=true; s.score++; }
        if(!s.secretMode && Math.abs(o.x-90)<18 && s.py>H-100) return 'fail';
      }
      if(s.score>=3 || s.secretMode){ s.phase='charge'; }
    } else if(s.phase==='charge'){
      if(inp.down){ s.power += s.dir*140*dt; if(s.power>=100){s.power=100;s.dir=-1;} if(s.power<=0){s.power=0;s.dir=1;} setPowerbar(s.power); }
      if(inp.justUp){
        const shot = shotFromPower(clamp(s.power,5,100)/100);
        s.vx2 = shot.vx; s.vy2 = -shot.vy;
        s.phase='fly';
      }
    } else if(s.phase==='fly'){
      s.vy2 += 1020*dt; s.x2 += s.vx2*dt; s.y2 += s.vy2*dt;
      if(s.vy2>0 && s.y2>=H-70){
        const ok = s.x2>W-170 && s.x2<W-10;
        if(ok || s.secretMode){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
        return 'fail';
      }
      if(s.y2>H+60||s.x2>W+60) return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    if(s.phase==='jump'){
      s.obstacles.forEach(o=>{ ctx.fillStyle='#7A4A26'; ctx.fillRect(o.x-12,H-104,24,34); });
      drawPineapple(ctx, s.px, s.py);
      ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('第1幕: ジャンプ '+s.score+'/3',12,22);
    } else {
      drawPizza(ctx, W-90, H-70, 80);
      drawStick(ctx, 70, H-70, s.phase==='charge');
      drawPineapple(ctx, s.x2, s.y2);
      ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('第2幕: チャージ発射!',12,22);
    }
  }
};

/* ---- 87. Restarting (loop survive) ---- */
STAGE_LOGIC.loopsurvive = {
  par: 10,
  init(){
    return { lap:0, need:3, x:60, obstacles:[], timer:0, lapDist:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.x += steerX(inp,50)*180*dt; s.x=clamp(s.x,20,W-20);
    s.lapDist += dt;
    s.timer -= dt;
    const density = s.secretMode ? 1.3 : Math.max(0.35, 1.0 - s.lap*0.2);
    if(s.timer<=0){ s.timer=density; s.obstacles.push({y:-10, x:rand(30,W-30)}); }
    s.obstacles.forEach(o=> o.y += 150*dt);
    if(!s.secretMode){
      for(const o of s.obstacles){ if(Math.abs(o.x-s.x)<24 && Math.abs(o.y-(H-70))<20) return 'fail'; }
    }
    s.obstacles = s.obstacles.filter(o=>o.y<H+20);
    if(s.lapDist > 3.2){ s.lapDist=0; s.lap++; }
    const needLaps = s.secretMode ? 5 : s.need;
    if(s.lap>=needLaps){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.obstacles.forEach(o=>{ ctx.font='20px serif'; ctx.fillText('🍅', o.x-10,o.y); });
    drawPineapple(ctx, s.x, H-70);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('LAP '+s.lap+'/'+s.need,12,22);
  }
};

/* ---- 88. Looping (wraparound) ---- */
STAGE_LOGIC.wraparound = {
  par: 8,
  init(){
    return { x:60, y:H/2, obs:[{x:220,y:150},{x:340,y:330},{x:460,y:200}], goal:{x:W-60,y:H/2}, t:0, dur:9 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.x += steerX(inp,50)*180*dt;
    s.y += steerY(inp,50)*180*dt;
    if(s.x<0) s.x=W; if(s.x>W) s.x=0;
    if(s.y<0) s.y=H; if(s.y>H) s.y=0;
    if(!s.secretMode){
      for(const o of s.obs){ if(Math.hypot(s.x-o.x,s.y-o.y)<26) return 'fail'; }
    }
    if(Math.hypot(s.x-s.goal.x,s.y-s.goal.y)<28){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    if(s.t>s.dur) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    s.obs.forEach(o=>{ ctx.font='24px serif'; ctx.fillText('🪨', o.x-12,o.y+9); });
    drawPizza(ctx, s.goal.x-30, s.goal.y-30, 60);
    drawPineapple(ctx, s.x, s.y);
  }
};

/* ---- 89. Everything (chaos control swap) ---- */
STAGE_LOGIC.chaos = {
  par: 9,
  init(){
    return { x:60, y:H/2, mode:'drag', modeT:0, obs:[{x:220,y:150},{x:340,y:330}], t:0, dur:9 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt; s.modeT -= dt;
    if(s.modeT<=0){ s.modeT = s.secretMode ? 3.0 : 1.8; const modes=['drag','tapjump','none']; s.mode = modes[Math.floor(rand(0,3))]; }
    if(s.mode==='drag'){ s.x += steerX(inp,50)*180*dt; s.y += steerY(inp,50)*180*dt; }
    else if(s.mode==='tapjump'){ if(inp.justDown) s.y -= 50; s.y += 90*dt; }
    else { s.x += 60*dt; }
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    if(!s.secretMode){
      for(const o of s.obs){ if(Math.hypot(s.x-o.x,s.y-o.y)<26) return 'fail'; }
    }
    if(s.t>s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.obs.forEach(o=>{ ctx.font='24px serif'; ctx.fillText('🪨', o.x-12,o.y+9); });
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito';
    ctx.fillText('操作: '+(s.mode==='drag'?'ドラッグ':s.mode==='tapjump'?'タップで浮上':'自動移動'),12,22);
  }
};

/* ---- 90. the ◉ (final orbit) ---- */
STAGE_LOGIC.finalorbit = {
  par: 6,
  init(){
    return { cx:W/2, cy:H/2, r:150, ang:0, released:false, x:0, y:0, vx:0, vy:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(!s.released){
      s.ang += 2.2*dt;
      if(inp.justDown){
        s.released = true;
        s.x = s.cx+Math.cos(s.ang)*s.r; s.y = s.cy+Math.sin(s.ang)*s.r;
        const toCenter = Math.atan2(s.cy-s.y, s.cx-s.x);
        const spd = 260;
        s.vx = Math.cos(toCenter)*spd; s.vy = Math.sin(toCenter)*spd;
      }
    } else {
      s.x += s.vx*dt; s.y += s.vy*dt;
      if(Math.hypot(s.x-s.cx, s.y-s.cy) < 14){
        if(s.secretMode) hiddenTriggered=true;
        return 'clear';
      }
      if(Math.hypot(s.x-s.cx,s.y-s.cy) > s.r+40) return 'fail';
    }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#c9a876'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(s.cx,s.cy,s.r,0,7); ctx.stroke();
    drawPizza(ctx, s.cx-35, s.cy-35, 70);
    if(!s.released){
      const px=s.cx+Math.cos(s.ang)*s.r, py=s.cy+Math.sin(s.ang)*s.r;
      drawPineapple(ctx, px, py);
    } else {
      drawPineapple(ctx, s.x, s.y);
    }
  }
};

/* ---- 91. Jumpstarting ---- */
STAGE_LOGIC.jumpstart = {
  par: 4,
  init(){
    return { gauge:0, timeLeft:3.2 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.gauge += s.secretMode?30:11; }
    s.timeLeft -= dt;
    if(s.gauge>=100){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    if(s.timeLeft<=0) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#e7dcc0'; ctx.fillRect(40,H/2-16,W-80,32);
    ctx.fillStyle='#FFC93C'; ctx.fillRect(40,H/2-16,(W-80)*clamp(s.gauge/100,0,1),32);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=3; ctx.strokeRect(40,H/2-16,W-80,32);
    ctx.fillStyle= s.timeLeft<1?'#FF3B3B':'#7A4A26'; ctx.font='bold 13px Nunito';
    ctx.fillText('カウントダウン前に連打! '+s.timeLeft.toFixed(1)+'s',12,22);
  }
};

/* ---- 92. Overcoming (break wall) ---- */
STAGE_LOGIC.breakwall = {
  par: 6,
  init(){
    return { hp:3, charge:0, timeLeft:9 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.timeLeft -= dt;
    if(inp.down){ s.charge += 200*dt; }
    if(inp.justUp){
      if(s.charge>60 || s.secretMode){ s.hp -= s.secretMode? s.hp : 1; }
      s.charge=0;
    }
    if(s.hp<=0){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    if(s.timeLeft<=0) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.fillStyle='#7A4A26'; ctx.fillRect(W/2-16,60,32,H-120);
    ctx.fillStyle='#FF3B3B'; ctx.font='bold 16px Nunito'; ctx.fillText('壁HP '+s.hp, W/2-30, 40);
    ctx.fillStyle='#FFC93C'; ctx.fillRect(40,H-40,(W-80)*clamp(s.charge/100,0,1),14);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('長押しでチャージ、離して体当たり 残り'+s.timeLeft.toFixed(1)+'s',12,22);
  }
};

/* ---- 93. Escaping (jailbreak) ---- */
STAGE_LOGIC.jailbreak = {
  par: 8,
  init(){
    return { phase:'dial', val:0, target:Math.floor(rand(30,70)), x:60, y:H/2, lights:[{x:150,t:0},{x:350,t:1.5}], t:0, dur:6 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.secretMode && s.phase==='dial'){ s.phase='run'; }
    if(s.phase==='dial'){
      if(inp.down){ s.val = (s.val+90*dt)%100; }
      if(inp.justUp){
        if(Math.abs(s.val-s.target)<8){ s.phase='run'; } else { s.val=0; }
      }
    } else {
      s.t += dt;
      s.x += 100*dt;
      s.y += steerY(inp,50)*180*dt; s.y=clamp(s.y,20,H-20);
      s.lights.forEach(l=> l.t += dt);
      if(!s.secretMode){
        for(const l of s.lights){
          const sweepY = H/2 + Math.sin(l.t*1.6)*130;
          if(Math.abs(l.x-s.x)<40 && Math.abs(sweepY-s.y)<26) return 'fail';
        }
      }
      if(s.x > W-40){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    if(s.phase==='dial'){
      ctx.save(); ctx.translate(W/2,H/2); ctx.rotate(s.val/100*Math.PI*2);
      ctx.strokeStyle='#7A4A26'; ctx.lineWidth=6; ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-60); ctx.stroke();
      ctx.restore();
      ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('ダイヤルを合わせて離せ',12,22);
    } else {
      s.lights.forEach(l=>{
        const sweepY = H/2+Math.sin(l.t*1.6)*130;
        ctx.fillStyle='rgba(255,201,60,.3)'; ctx.fillRect(l.x-30,sweepY-14,60,28);
      });
      drawPizza(ctx, W-70, H/2-30, 60);
      drawPineapple(ctx, s.x, s.y);
    }
  }
};

/* ---- 94. Transforming (silhouette) ---- */
STAGE_LOGIC.silhouette = {
  par: 8,
  init(){
    return { form:0, gates:[], timer:0, dist:0, dur:8 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown){ s.form=(s.form+1)%4; }
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.9; s.gates.push({x:W+20, form:Math.floor(rand(0,4))}); }
    s.gates.forEach(g=> g.x -= 160*dt);
    s.gates = s.gates.filter(g=>g.x>-30);
    if(!s.secretMode){
      for(const g of s.gates){ if(Math.abs(g.x-90)<18 && g.form!==s.form) return 'fail'; }
    }
    s.dist += dt;
    if(s.dist > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    const shapes=['🍍','🥞','🌭','⚪'];
    s.gates.forEach(g=>{ ctx.font='26px serif'; ctx.fillText(shapes[g.form], g.x-13, H-70); });
    ctx.font='30px serif'; ctx.fillText(shapes[s.form], 90-15, H-70);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('タップで変身(4種)',12,22);
  }
};

/* ---- 95. Resonating (rhythm) ---- */
STAGE_LOGIC.rhythm = {
  par: 9,
  init(){
    return { arrows:[], timer:0, need:8, got:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.timer -= dt;
    if(s.timer<=0){ s.timer=0.7; s.arrows.push({y:-10, dir:['L','R','U'][Math.floor(rand(0,3))]}); }
    s.arrows.forEach(a=> a.y += 220*dt);
    if(inp.justDown){
      const side = inp.y<H*0.3?'U':(inp.x<W/2?'L':'R');
      for(const a of s.arrows){
        if(!a.hit && Math.abs(a.y-H*0.75)<40){
          a.hit=true;
          if(side===a.dir || s.secretMode){ s.got++; if(s.got>=s.need){ if(s.secretMode) hiddenTriggered=true; return 'clear'; } }
          else if(!s.secretMode) return 'fail';
        }
      }
    }
    if(!s.secretMode){ for(const a of s.arrows){ if(!a.hit && a.y>H*0.75+40) return 'fail'; } }
    s.arrows = s.arrows.filter(a=>!a.hit && a.y<H+20);
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#c9a876'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(0,H*0.75); ctx.lineTo(W,H*0.75); ctx.stroke();
    const arrow={L:'◀',R:'▶',U:'▲'};
    s.arrows.forEach(a=>{ ctx.font='24px "Baloo 2"'; ctx.fillStyle='#FF7A3D'; ctx.fillText(arrow[a.dir], W/2-10, a.y); });
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText(s.got+'/'+s.need,12,22);
  }
};

/* ---- 96. Guiding (escort) ---- */
STAGE_LOGIC.escort = {
  par: 8,
  init(){
    return { bx:70, by:H/2, hazards:[{x:220,y:150},{x:340,y:330},{x:460,y:200}], t:0, dur:8 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.bx += steerX(inp,50)*150*dt;
    s.by += steerY(inp,50)*150*dt;
    s.bx=clamp(s.bx,20,W-20); s.by=clamp(s.by,20,H-20);
    if(!s.secretMode){
      for(const h of s.hazards){ if(Math.hypot(s.bx-h.x,s.by-h.y)<30) return 'fail'; }
    }
    if(s.bx > W-40){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.hazards.forEach(h=>{ ctx.font='24px serif'; ctx.fillText('🔥', h.x-12,h.y+9); });
    drawPizza(ctx, W-70, H/2-30, 60);
    ctx.font='22px serif'; ctx.fillText('🍍', s.bx-11, s.by+8);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('子パイナップルを危険から守れ',12,22);
  }
};

/* ---- 97. Balancing+ (storm) ---- */
STAGE_LOGIC.stormbalance = {
  par: 8,
  init(){
    return { x:40, angle:0, av:0, wind:0, windTimer:0, platY:H*0.45 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.windTimer -= dt;
    if(s.windTimer<=0){ s.windTimer=rand(0.4,0.9); s.wind = rand(-1,1)*(s.secretMode?0.4:3.6); }
    s.platY = H*0.45 + Math.sin(performance.now()/1000*(s.secretMode?0.3:1.8))*(s.secretMode?4:18);
    let tilt=0;
    if(inp.key==='left') tilt=-1;
    if(inp.key==='right') tilt=1;
    if(inp.down){ tilt = clamp((inp.x-W/2)/(W/2),-1,1); }
    s.av += (tilt*2.6 - s.angle*3 + s.wind) * dt;
    s.av *= 0.98; s.angle += s.av*dt; s.angle=clamp(s.angle,-1.3,1.3);
    if(Math.abs(s.angle) > (s.secretMode?1.25:0.8)) return 'fail';
    s.x += 120*dt;
    if(s.x > W-60){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    ctx.strokeStyle='#7A4A26'; ctx.lineWidth=5;
    ctx.beginPath(); ctx.moveTo(20,s.platY); ctx.lineTo(W-20,s.platY); ctx.stroke();
    drawPizza(ctx, W-90, s.platY-40, 80);
    ctx.save(); ctx.translate(s.x, s.platY-16); ctx.rotate(s.angle); drawPineapple(ctx,0,0); ctx.restore();
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('嵐の綱渡り!',12,22);
  }
};

/* ---- 98. Surviving ---- */
STAGE_LOGIC.survive = {
  par: 10,
  init(){
    return { x:W/2, y:H/2, hazards:[], timer:0, t:0, dur:10 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    s.t += dt;
    s.x += steerX(inp,50)*190*dt; s.y += steerY(inp,50)*190*dt;
    s.x=clamp(s.x,20,W-20); s.y=clamp(s.y,20,H-20);
    s.timer -= dt;
    const rate = Math.max(0.28, 0.8 - s.t*0.05);
    if(s.timer<=0){
      s.timer=rate;
      const edge = Math.floor(rand(0,4));
      const pos = edge===0?{x:rand(0,W),y:-10}:edge===1?{x:rand(0,W),y:H+10}:edge===2?{x:-10,y:rand(0,H)}:{x:W+10,y:rand(0,H)};
      const ang = Math.atan2(H/2-pos.y, W/2-pos.x);
      s.hazards.push({x:pos.x,y:pos.y,vx:Math.cos(ang)*130,vy:Math.sin(ang)*130});
    }
    s.hazards.forEach(h=>{ h.x+=h.vx*dt; h.y+=h.vy*dt; });
    s.hazards = s.hazards.filter(h=> h.x>-30&&h.x<W+30&&h.y>-30&&h.y<H+30);
    if(!s.secretMode){
      for(const h of s.hazards){ if(Math.hypot(h.x-s.x,h.y-s.y)<20) return 'fail'; }
    }
    if(s.t > s.dur){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
  },
  render(ctx,s){
    drawGround(ctx);
    s.hazards.forEach(h=>{ ctx.font='18px serif'; ctx.fillText('🌶️', h.x-9,h.y+6); });
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText((s.dur-s.t).toFixed(1)+'s',12,22);
  }
};

/* ---- 99. Ascending ---- */
STAGE_LOGIC.ascend = {
  par: 8,
  init(){
    const plats=[]; for(let i=0;i<8;i++) plats.push({x:rand(50,W-50), y:H-60-i*70});
    return { x:W/2, y:H-40, vy:0, plats, boost:100 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(inp.justDown && (s.boost>10 || s.secretMode)){ s.vy=-320; s.boost -= s.secretMode?0:34; }
    s.vy += 620*dt;
    s.y += s.vy*dt;
    s.x += steerX(inp,50)*130*dt; s.x=clamp(s.x,20,W-20);
    s.boost = Math.min(100, s.boost + 16*dt);
    if(!s.secretMode){
      for(const p of s.plats){ if(Math.abs(p.y-s.y)<10 && Math.abs(p.x-s.x)>50) { /* miss allowed, just visual */ } }
    }
    if(s.y < s.plats[s.plats.length-1].y - 60){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    if(s.y > H+40) return 'fail';
  },
  render(ctx,s){
    drawGround(ctx);
    s.plats.forEach(p=>{ ctx.fillStyle='#e7dcc0'; ctx.fillRect(p.x-24,p.y,48,12); });
    drawPizza(ctx, s.plats[s.plats.length-1].x-30, s.plats[s.plats.length-1].y-60, 60);
    drawPineapple(ctx, s.x, s.y);
    ctx.fillStyle='#7A4A26'; ctx.fillRect(12,H-24,80*(s.boost/100),10);
    ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('タップでブースト',12,22);
  }
};

/* ---- 100. Transcending (grand finale) ---- */
STAGE_LOGIC.transcend = {
  par: 12,
  init(){
    return { phase:'walk', dist:0, py:H-70, obstacles:[], timer:0, power:0, dir:1, x2:70, y2:H-70, vx2:0, vy2:0, settle:0 };
  },
  update(s, dt, inp){
    checkSecretDoubleTap(s, dt, inp);
    if(s.phase==='walk'){
      s.dist += 140*dt;
      s.timer -= dt;
      if(s.timer<=0){ s.timer=rand(0.8,1.1); s.obstacles.push({x:W+20}); }
      s.obstacles.forEach(o=> o.x -= 200*dt);
      if(!s.secretMode){ for(const o of s.obstacles){ if(Math.abs(o.x-90)<20) return 'fail'; } }
      s.obstacles = s.obstacles.filter(o=>o.x>-30);
      if(s.dist > 900 || s.secretMode){ s.phase='charge'; }
    } else if(s.phase==='charge'){
      if(inp.down){ s.power += s.dir*140*dt; if(s.power>=100){s.power=100;s.dir=-1;} if(s.power<=0){s.power=0;s.dir=1;} setPowerbar(s.power); }
      if(inp.justUp){
        const shot = shotFromPower(clamp(s.power,5,100)/100);
        s.vx2=shot.vx; s.vy2=-shot.vy; s.phase='fly';
      }
    } else if(s.phase==='fly'){
      s.vy2 += 1020*dt; s.x2 += s.vx2*dt; s.y2 += s.vy2*dt;
      if(s.vy2>0 && s.y2>=H-70){
        const ok = s.x2>W-170 && s.x2<W-10;
        if(ok || s.secretMode){ s.phase='settle'; }
        else return 'fail';
      }
      if(s.y2>H+60||s.x2>W+60) return 'fail';
    } else if(s.phase==='settle'){
      s.settle += dt;
      if(s.settle>1.2){ if(s.secretMode) hiddenTriggered=true; return 'clear'; }
    }
  },
  render(ctx,s){
    drawGround(ctx);
    if(s.phase==='walk'){
      s.obstacles.forEach(o=>{ ctx.fillStyle='#7A4A26'; ctx.fillRect(o.x-10,H-100,20,30); });
      drawPineapple(ctx, 90, H-70);
      ctx.fillStyle='#7A4A26'; ctx.font='bold 12px Nunito'; ctx.fillText('最後の道のり…',12,22);
    } else {
      drawPizza(ctx, W-90, H-70, 80);
      if(s.phase!=='settle') drawStick(ctx, 70, H-70, s.phase==='charge');
      drawPineapple(ctx, s.phase==='settle'?W-50:s.x2, s.phase==='settle'?H-90:s.y2);
      if(s.phase==='settle'){ ctx.font='30px serif'; ctx.fillText('✨', W-90,H-120); ctx.fillStyle='#7A4A26'; ctx.font='bold 14px "Baloo 2"'; ctx.fillText('Pineapple on the pizza.', 60, 40); }
    }
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
document.getElementById('btnAchievements').addEventListener('click', ()=>{ renderAchievements(); showScreen('screen-achievements'); });
document.getElementById('btnAchBack').addEventListener('click', ()=> showScreen('screen-title'));
document.getElementById('btnRestart').addEventListener('click', restartStage);
document.getElementById('btnClearRestart').addEventListener('click', ()=>{
  const showAd = document.getElementById('clearOverlay').dataset.showAd === '1';
  document.getElementById('clearOverlay').classList.remove('show');
  if(showAd){ showAdInterstitial(()=> restartStage()); } else { restartStage(); }
});
document.getElementById('btnClearTitle').addEventListener('click', ()=>{
  const showAd = document.getElementById('clearOverlay').dataset.showAd === '1';
  document.getElementById('clearOverlay').classList.remove('show');
  const go = ()=>{ renderStageSelect(); showScreen('screen-select'); };
  if(showAd){ showAdInterstitial(go); } else { go(); }
});
document.getElementById('btnClearNext').addEventListener('click', ()=>{
  const showAd = document.getElementById('clearOverlay').dataset.showAd === '1';
  document.getElementById('clearOverlay').classList.remove('show');
  const go = ()=> startStage(curIdx+1);
  if(showAd){ showAdInterstitial(go); } else { go(); }
});
document.getElementById('btnAdClose').addEventListener('click', ()=>{
  const action = adInterstitialQueue; adInterstitialQueue = null;
  if(action) action();
});
document.getElementById('btnSettings').addEventListener('click', ()=>{ running=false; document.getElementById('settingsOverlay').classList.add('show'); });
document.getElementById('btnResume').addEventListener('click', ()=>{ document.getElementById('settingsOverlay').classList.remove('show'); running=true; });
document.getElementById('btnSettingsRestart').addEventListener('click', ()=>{ document.getElementById('settingsOverlay').classList.remove('show'); restartStage(); });
document.getElementById('btnSettingsTitle').addEventListener('click', ()=>{ document.getElementById('settingsOverlay').classList.remove('show'); renderStageSelect(); showScreen('screen-select'); });

(async function init(){
  await loadSave();
  startTitleAdRotation();
})();
