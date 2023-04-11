/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 274.5,
        y: 160.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "You Fail!" },
        this.whenIReceiveYouFail
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.watchers.showSorce.visible = false;
    this.stage.watchers.highSorce.visible = false;
  }

  *whenIReceiveYouFail() {
    this.visible = true;
    this.stage.vars.showSorce = this.stage.vars.score;
    this.stage.watchers.showSorce.visible = true;
    if (this.compare(this.stage.vars.score, this.stage.vars.highSorce) > 0) {
      this.stage.vars.highSorce = this.stage.vars.score;
    }
    this.stage.watchers.highSorce.visible = true;
    this.stage.watchers.score.visible = false;
  }
}
