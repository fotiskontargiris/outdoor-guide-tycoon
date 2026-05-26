// M5 test: three loan sources, each with their own terms and default
// consequences. Verify interest accrues, repayment works, and default
// fires source-specific fallout.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

function adv1Year(captureBeforeSpring){ globalThis.S.seasonDay=214; globalThis.advanceDay(); /* now winter; yearStats reflects loan repayment + interest */ if(captureBeforeSpring) captureBeforeSpring(globalThis.S.yearStats); globalThis.enterSpring(); }

for(const src of ['bank','friend','dark']){
  console.log(`\n=== Source: ${src} ===`);
  globalThis.initGame('Loan-Test','medic',['water'],'seakayak', src);
  const startCash = globalThis.S.cash;
  console.log(`start cash €${startCash} (200 base + 1500 loan), loan: ${JSON.stringify(globalThis.S.loan)}`);
  // Year 1 — pay the instalment cleanly
  globalThis.S.cash = 2000; // ensure repayment is affordable
  globalThis.S.rep = 60;
  let winterStats=null;
  adv1Year(ys => { winterStats = {loan:ys.loan, loanInterest:ys.loanInterest}; });
  console.log(`after Y1: cash €${globalThis.S.cash}, balance €${globalThis.S.loan?.balance ?? 'paid off'}, season-end yearStats: paid €${winterStats.loan} + €${winterStats.loanInterest||0} interest`);
}

console.log('\n=== Default scenarios ===');
for(const src of ['bank','friend','dark']){
  globalThis.initGame('Default-Test','medic',['water'],'seakayak', src);
  globalThis.S.cash = 0;           // can't pay
  globalThis.S.rep = 60;
  const before = { rep: globalThis.S.rep, morale: globalThis.S.you.morale, creditBlack: globalThis.S.creditBlack||0, menace: globalThis.S.menace||0 };
  adv1Year();
  const after = { rep: globalThis.S.rep, morale: globalThis.S.you.morale, creditBlack: globalThis.S.creditBlack||0, menace: globalThis.S.menace||0 };
  const recent = globalThis.S.history.slice(-3).map(h=>h.t).join(' | ');
  console.log(`\n[${src}] default → rep ${before.rep}→${after.rep}, morale ${before.morale}→${after.morale}, creditBlack ${before.creditBlack}→${after.creditBlack}, menace ${before.menace}→${after.menace}`);
  console.log(`  last 3 logbook lines: ${recent}`);
}
