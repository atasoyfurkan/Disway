import { combineReducers } from "redux";
import { ADD_NODE, REMOVE_NODE, RESET_NODES, POP_NODE } from "./actions";

const node_reducer = (state = [], action) => {
  state = [...state];
  switch (action.type) {
    case ADD_NODE:
      state.push(action.payload);
      return state;
    case POP_NODE:
      state.pop();
      return state;
    case RESET_NODES:
      return [];
    case REMOVE_NODE:
      state = state.filter(node => node.index !== action.payload);
      return state;
    default:
      return state;
  }
};
const place_reducer = (state, action) => [
  {
    name: "TopkapıSarayı",
    renderName: "Topkapi Palace",
    latitude: 41.013,
    longitude: 28.984,
    index: 0
  },
  {
    name: "SultanahmetCamii",
    renderName: "Sultan Ahmed Mosque",
    latitude: 41.005441,
    longitude: 28.976795,
    index: 1
  },
  {
    name: "AyaSofya",
    renderName: "Hagia Sophia",
    latitude: 41.008609,
    longitude: 28.980184,
    index: 2
  },
  {
    name: "YerebatanSarnıcı",
    renderName: "Basilica Cistern",
    latitude: 41.008384,
    longitude: 28.977878,
    index: 3
  },
  {
    name: "KapalıÇarşı",
    renderName: "Grand Bazaar",
    latitude: 41.010685,
    longitude: 28.968057,
    index: 4
  },
  {
    name: "MısırÇarşısı",
    renderName: "Spice Bazaar",
    latitude: 41.016532,
    longitude: 28.970519,
    index: 5
  },
  {
    name: "GalataKulesi",
    renderName: "Galata Tower",
    latitude: 41.025667,
    longitude: 28.974166,
    index: 6
  },
  {
    name: "İstiklalCaddesi",
    renderName: "Istiklal Avenue",
    latitude: 41.036172,
    longitude: 28.984362,
    index: 7
  },
  {
    name: "TaksimMeydanı",
    renderName: "Taksim Square",
    latitude: 41.037013,
    longitude: 28.985127,
    index: 8
  },
  {
    name: "DolmabahçeSarayı",
    renderName: "Dolmabahce Palace",
    latitude: 41.039172,
    longitude: 29.000459,
    index: 9
  },
  {
    name: "ArkeolojiMüzesi",
    renderName: "Istanbul Archaeological Museums",
    latitude: 41.0116986,
    longitude: 28.9813227,
    index: 10
  },
  {
    name: "GülhaneParkı",
    renderName: "Gulhane Park",
    latitude: 41.013231,
    longitude: 28.981277,
    index: 11
  },
  {
    name: "SirkeciTrenGarı",
    renderName: "Sirkeci Railway Station",
    latitude: 41.01535,
    longitude: 28.976854,
    index: 12
  },
  {
    name: "HaydarpaşaTrenGarı",
    renderName: "Haydarpasa Railway Station",
    latitude: 40.996833,
    longitude: 29.019315,
    index: 13
  },
  {
    name: "KızKulesi",
    renderName: "Maidens's Tower",
    latitude: 41.021122,
    longitude: 29.004153,
    index: 14
  },
  {
    name: "SüleymaniyeCamii",
    renderName: "Süleymaniye Mosque",
    latitude: 41.016285,
    longitude: 28.964132,
    index: 15
  },
  {
    name: "SaltGalata",
    renderName: "SALT Galata",
    latitude: 41.024101,
    longitude: 28.973897,
    index: 16
  },
  {
    name: "YıldızSarayı",
    renderName: "Yildiz Palace",
    latitude: 41.049225,
    longitude: 29.011122,
    index: 17
  },
  {
    name: "ÇırağanSarayı",
    renderName: "Ciragan Palace",
    latitude: 41.043522,
    longitude: 29.01565,
    index: 18
  },
  {
    name: "RumeliHisarı",
    renderName: "Rumeli Fortress",
    latitude: 41.084855,
    longitude: 29.056687,
    index: 19
  },
  {
    name: "PeraMüzesi",
    renderName: "Pera Museum",
    latitude: 41.031832,
    longitude: 28.975179,
    index: 20
  },
  {
    name: "İstanbulModern",
    renderName: "Istanbul Modern Art Museum",
    latitude: 41.029996,
    longitude: 28.973464,
    index: 21
  },
  {
    name: "DenizMüzesi",
    renderName: "Naval Museum",
    latitude: 41.041653,
    longitude: 29.005432,
    index: 22
  },
  {
    name: "FenerRumOrtodoksPatrikhanesi",
    renderName: "Patriarchal Church of St. George",
    latitude: 41.02901,
    longitude: 28.951761,
    index: 23
  },
  {
    name: "İstanbulAdaları",
    renderName: "Princes' Islands ",
    latitude: 40.872531079557255,
    longitude: 29.08918082325249,
    index: 24
  },
  {
    name: "KariyeMüzesi",
    renderName: "Chore Church",
    latitude: 41.032232,
    longitude: 28.939352,
    index: 25
  },
  {
    name: "GalataMevleviHanesi",
    renderName: "Galata Mevlevi Museum",
    latitude: 41.028036,
    longitude: 28.9751,
    index: 26
  },
  {
    name: "EyüpSultanCamii",
    renderName: "Eyup Sultan Mosque",
    latitude: 41.047979,
    longitude: 28.933766,
    index: 27
  },
  {
    name: "FethiyeMüzesi",
    renderName: "Fethiye Museum",
    latitude: 41.02909,
    longitude: 28.946394,
    index: 28
  },
  {
    name: "SadberkHanımMüzesi",
    renderName: "Sadberk Hanim Museum",
    latitude: 41.163059,
    longitude: 29.048158,
    index: 29
  },
  {
    name: "SabancıMüzesi",
    renderName: "Sabanci Museum",
    latitude: 41.1060207,
    longitude: 29.0555191,
    index: 30
  },
  {
    name: "RahmiKoçMüzesi",
    renderName: "Rahmi Koc Museum",
    latitude: 41.0419735,
    longitude: 28.9485631,
    index: 31
  },
  {
    name: "RezanHasMüzesi",
    renderName: "Rezan Has Museum",
    latitude: 41.02523632207417,
    longitude: 28.95874857902527,
    index: 32
  },
  {
    name: "NuruosmaniyeCamii",
    renderName: "Nuruosmaniye Mosque",
    latitude: 41.0104,
    longitude: 28.97040000000004,
    index: 33
  },
  {
    name: "KadiköyBoğaHeykeli",
    renderName: "Kadikoy Bull Statue",
    latitude: 40.9904629,
    longitude: 29.0291571,
    index: 34
  },
  {
    name: "SarayKoleksiyonlarıMüzesi",
    renderName: "Palace Collections Museum",
    latitude: 41.04126464548327,
    longitude: 29.004077911376953,
    index: 35
  },
  {
    name: "Çemberlitaş",
    renderName: "Cemberlitas",
    latitude: 41.0085,
    longitude: 28.971599999999967,
    index: 36
  },
  {
    name: "FatihCamii",
    renderName: "Fatih Mosque",
    latitude: 41.0197,
    longitude: 28.949799999999982,
    index: 37
  },
  {
    name: "VefaKiliseCamii",
    renderName: "Vefa Kilise Mosque",
    latitude: 41.016329,
    longitude: 28.960421,
    index: 38
  },
  {
    name: "StAntoineKilisesi",
    renderName: "St. Antoine Church",
    latitude: 41.03230812226611,
    longitude: 28.977132439613342,
    index: 39
  },
  {
    name: "BüyükMecidiyeCamii",
    renderName: "Grand Imperial Mosque",
    latitude: 41.0472944,
    longitude: 29.0268268,
    index: 40
  },
  {
    name: "BeylerbeyiSarayı",
    renderName: "Beylerbeyi Palace",
    latitude: 41.0428,
    longitude: 29.040899999999965,
    index: 41
  },
  {
    name: "Miniatürk",
    renderName: "Miniatürk",
    latitude: 41.05985762724478,
    longitude: 28.94869565963745,
    index: 42
  },
  {
    name: "BesYuzYılVakfıTürkMusevileriMüzesi",
    renderName: "Quincentennial Foundation Museum of Turkish",
    latitude: 41.0267866,
    longitude: 28.9727283,
    index: 43
  },
  {
    name: "KırımKilisesi",
    renderName: "Christ Church",
    latitude: 41.0276536,
    longitude: 28.9771216,
    index: 44
  },
  {
    name: "AirbnbEv",
    renderName: "Airbnb Home",
    latitude: 41.027789362007375,
    longitude: 28.977703679682463,
    index: 45
  }
];
export default combineReducers({
  nodes: node_reducer,
  places: place_reducer
});
