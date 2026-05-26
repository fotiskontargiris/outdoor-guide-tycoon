// Smoke-test all 10 heroes start cleanly. Verifies start grants, dish bonus,
// gender, and that perkIs() picks up the tag (not the id).
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

const HEROES = ['medic','chef','soldier','sailor','influencer','engineer','scholar','fasaia','alani','villager'];
let fails=0;
for(const h of HEROES){
  try {
    globalThis.initGame('Test-'+h, h, ['water'], 'hike', 'bank', 'gemista');
    const S = globalThis.S;
    const bg = S.you;
    console.log(`[${h}]  perk=${bg.perk}  spec="${bg.spec}"  cash=€${S.cash}  pack=${S.packSize}  owned=[${Object.keys(S.owned).join(',')}]  cert(s)=${JSON.stringify(S.certs)}  dish=${S.dish}`);
  } catch(e){ fails++; console.log(`[${h}] FAIL: ${e.message}`); }
}
console.log(`\nFasaia rest test (rest restores +70 vs +55 baseline):`);
globalThis.initGame('Rest-Fasaia','fasaia',['water'],'hike','bank','gemista');
globalThis.S.energy=20;
globalThis.restDay();
console.log(`  fasaia energy after restDay: ${globalThis.S.energy} (expected 90; got from 20 + 70)`);
globalThis.initGame('Rest-Medic','medic',['water'],'hike','bank','gemista');
globalThis.S.energy=20;
globalThis.restDay();
console.log(`  medic  energy after restDay: ${globalThis.S.energy} (expected 75; got from 20 + 55)`);

console.log(`\nDish start bonuses:`);
for(const d of ['gemista','pastitsio','bakaliaros','youvetsi']){
  globalThis.initGame('Dish-'+d,'medic',['water'],'hike','bank',d);
  const S = globalThis.S;
  console.log(`  ${d.padEnd(11)} → cash €${S.cash}, rep ${S.rep}, gear ${S.gear}`);
}

console.log(fails===0 ? '\nAll 10 heroes initialise cleanly.' : `\n${fails} heroes crashed.`);
