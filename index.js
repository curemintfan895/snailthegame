import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Screenshot2023040511 from "./Screenshot2023040511/Screenshot2023040511.js";
import Screenshot202304052 from "./Screenshot202304052/Screenshot202304052.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Screenshot2023040511: new Screenshot2023040511({
    x: 136,
    y: -50,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 2
  }),
  Screenshot202304052: new Screenshot202304052({
    x: -76,
    y: -150,
    direction: 90,
    costumeNumber: 1,
    size: 39,
    visible: true,
    layerOrder: 1
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
