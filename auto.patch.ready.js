// auto.patch.ready.js — nicht zu lang — wirklich gemeint
export const AUTO_PATCH_READY = {
  ready: true,
  grav: 729,
  regel: "3 fach 4 fach — 100$ gleich — LRU"
};

let q = [];
export function autoPatch(t){
  if(!t) return {ok:false};
  if(q.length>=729) q.sort((a,b)=>a.u-b.u).shift();
  const same=q.find(x=>x.o===t.o);
  if(same?.sauber && t.sauber && same.sauber() && t.sauber()) return {ok:true,skip:true,msg:"BEIDE_DASSELBE_DRIN"};
  t.u=Date.now(); q.push(t); q.sort((a,b)=>a.s-b.s);
  const p=Math.random()>0.03, s=Math.random()>0.03;
  return {ok:p&&s,p,s,q:q.length};
}
export function tick(){
  if(!q.length) return {q:0};
  if(Math.random()>0.03) return {ok:true,task:q.shift(),q:q.length};
  return {ok:false,q:q.length};
}
export const state=()=>({q:q.length,grav:729});
