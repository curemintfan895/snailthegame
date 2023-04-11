/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Screenshot2023040511 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screenshot 2023-04-05 11",
        "./Screenshot2023040511/costumes/Screenshot 2023-04-05 11.png",
        { x: 266, y: 149 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(11, -30);
    this.direction = 90;
    while (!this.keyPressed("any")) {
      yield;
    }
    while (true) {
      if (this.compare(this.stage.vars.score, 50) < 0) {
        if (this.toString(this.stage.vars.direction) === "up") {
          this.y += 5;
        }
        if (this.toString(this.stage.vars.direction) === "down") {
          this.y -= 5;
        }
        if (this.toString(this.stage.vars.direction) === "right") {
          this.x += 5;
        }
        if (this.toString(this.stage.vars.direction) === "left") {
          this.x -= 5;
        }
        this.createClone();
      } else {
        if (this.toString(this.stage.vars.direction) === "up") {
          this.y += 5;
        }
        if (this.toString(this.stage.vars.direction) === "down") {
          this.y -= 5;
        }
        if (this.toString(this.stage.vars.direction) === "right") {
          this.x += 5;
        }
        if (this.toString(this.stage.vars.direction) === "left") {
          this.x -= 5;
        }
      }
      this.createClone();
      yield;
    }
  }

  *whenKeyUpArrowPressed() {
    this.stage.vars.direction = "up";
  }

  *whenKeyDownArrowPressed() {
    this.stage.vars.direction = "down";
  }

  *whenKeyLeftArrowPressed() {
    this.stage.vars.direction = "left";
  }

  *whenKeyRightArrowPressed() {
    this.stage.vars.direction = "right";
  }

  *startAsClone() {
    yield* this.wait(this.toNumber(this.stage.vars.length));
    this.deleteThisClone();
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("edge")) {
        this.broadcast("You Fail!");
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
