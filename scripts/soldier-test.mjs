// Soldier — premium pay on hard/stormy days; family/tourist rep dip + tip cut.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

function runTrip(heroId, opts){
  const {tags=[], diff=1, ctype='family', weather={}, tip=30} = opts;
  globalThis.initGame('X','medic',['water'],'hike','bank','gemista');
  globalThis.S.you.heroId = heroId;
  globalThis.S.weather = Object.assign({name:'Clear',short:'Clear',col:'#fff',note:'',risk:0,drain:0}, weather);
  const b={route:'r', activity:'hike', region:'local', diff, base:100, client:`a ${ctype}`, ctype, group:4, pay:100, tags, cancelled:false};
  globalThis.S.bookings=[b]; globalThis.S.loadout=['water'];
  globalThis.S.trip={b, payMul:1, tips:tip, done:0, total:1, logs:[], prepRisk:0, repDelta:0};
  const startRep = globalThis.S.rep, startCash = globalThis.S.cash;
  globalThis.finishPlayerTrip();
  return {
    cash: globalThis.S.cash - startCash,
    rep: globalThis.S.rep - startRep,
  };
}

console.log('=== Easy day, fair weather, family ===');
let m = runTrip('medic',   {tags:['river','forest'], diff:1, ctype:'family', weather:{}});
let s = runTrip('soldier', {tags:['river','forest'], diff:1, ctype:'family', weather:{}});
console.log(`Medic   easy/family — cash €${m.cash}, rep ${m.rep}`);
console.log(`Soldier easy/family — cash €${s.cash}, rep ${s.rep}  (expect rep -2 family penalty, tips 30→21 halved-ish)`);

console.log('\n=== Storm day, thrill clients, exposed route ===');
m = runTrip('medic',   {tags:['exposed','alpine'], diff:3, ctype:'thrill', weather:{storm:true,short:'Storm'}});
s = runTrip('soldier', {tags:['exposed','alpine'], diff:3, ctype:'thrill', weather:{storm:true,short:'Storm'}});
console.log(`Medic   storm/thrill — cash €${m.cash}, rep ${m.rep}`);
console.log(`Soldier storm/thrill — cash €${s.cash}, rep ${s.rep}  (expect +20 soldier bonus on €100 base, no rep penalty since thrill)`);

console.log('\n=== Wind day, family, exposed ===');
m = runTrip('medic',   {tags:['exposed'], diff:2, ctype:'family', weather:{wind:true,short:'Windy'}});
s = runTrip('soldier', {tags:['exposed'], diff:2, ctype:'family', weather:{wind:true,short:'Windy'}});
console.log(`Medic   wind/family/exposed — cash €${m.cash}, rep ${m.rep}`);
console.log(`Soldier wind/family/exposed — cash €${s.cash}, rep ${s.rep}  (expect +20 storm bonus, -2 rep family penalty, tip cut)`);

console.log('\n=== Easy day, fair weather, thrill ===');
m = runTrip('medic',   {tags:['river','forest'], diff:1, ctype:'thrill', weather:{}});
s = runTrip('soldier', {tags:['river','forest'], diff:1, ctype:'thrill', weather:{}});
console.log(`Medic   easy/thrill — cash €${m.cash}, rep ${m.rep}`);
console.log(`Soldier easy/thrill — cash €${s.cash}, rep ${s.rep}  (expect baseline — no bonus on easy days, no penalty for thrill)`);

console.log('\nDone.');
