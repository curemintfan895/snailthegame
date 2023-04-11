/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Screenshot202304052 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screenshot 2023-04-05 11",
        "./Screenshot202304052/costumes/Screenshot 2023-04-05 11.png",
        { x: 231, y: 181 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.stage.vars.length = 0;
    this.goto(this.random(-206, 237), this.random(-178, 147));
    while (true) {
      if (this.touching(this.sprites["Screenshot2023040511"].andClones())) {
        this.stage.vars.score++;
        this.stage.vars.length += 0.1;
        this.goto(this.random(-206, 237), this.random(-178, 147));
      }
      yield;
    }
  }
}
