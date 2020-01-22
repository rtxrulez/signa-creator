import { updateOneSinga } from "../actions/oneSingaActions";

let defaultData = {
  selectTextData: {},
  selectKey: 0,
  typeImg: "jpg",
  loadedImage: true,
  download: false,
  url:
    // "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkcZ-AjJJrTOR0iQewSbnrHqaKTM5SRkZCeTgDn6uOyic",
    "",
  textList: [
    {
      name: "Текст 1",
      pos: { x: 170, y: -140 },
      rotate: 5,
      fontSize: 20,
      color: "#00ffff",
      shadow: "#ff0000"
    },
    {
      name: "Текст 2",
      pos: { x: 170, y: -100 },
      rotate: 0,
      fontSize: 20,
      color: "#0000ff",
      shadow: "#ff0000"
    }
  ]
};

export default function oneSingaReducer(state = defaultData, action) {
  switch (action.type) {
    case updateOneSinga().type:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
