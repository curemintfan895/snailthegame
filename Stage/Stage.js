/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.direction = "left";
    this.vars.score = 38;
    this.vars.length = 3.800000000000002;
    this.vars.showSorce = 162;
    this.vars.highSorce = 883;

    this.watchers.score = new Watcher({
      label: "score",
      style: "normal",
      visible: false,
      value: () => this.vars.score,
      x: 245,
      y: 172
    });
    this.watchers.showSorce = new Watcher({
      label: "show sorce",
      style: "normal",
      visible: false,
      value: () => this.vars.showSorce,
      x: 241,
      y: 164
    });
    this.watchers.highSorce = new Watcher({
      label: "high sorce",
      style: "normal",
      visible: false,
      value: () => this.vars.highSorce,
      x: 248,
      y: 111
    });
  }
}
