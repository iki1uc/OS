export const MXU = {

  init(){
    return {
      id: "MXU",
      mode: "LIVE",
      axis: "B°",
      channel: "NONE",
      state: "OK",
      score: 0,
      slide: 0
    };
  },

  channel(id){
    const el = document.getElementById(id);
    el.innerText = "MXU CHANNEL aktiv";
  }
};
