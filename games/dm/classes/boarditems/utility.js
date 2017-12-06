var Purchasable = require('../containers/purchasable.js').Purchasable;
class Utility extends Purchasable {
  constructor(name, purchaseValue) {
    super(name, purchaseValue)
  }
  onStep(player, roll) {
    if (this.owner != null) {
      var utilityCount = 0;
      var owner = this.owner
      player.Game.Board.Fields.forEach(function(elem) {
        if (elem instanceof Utility) {
          if (elem.owner && elem.owner == owner) {
            utilityCount++;
          }
        }
      })
      if (utilityCount == 1) {
        player.modifyCash(-(roll*4));
        this.owner.modifyCash(roll*4)
      } else if (utilityCount == 2) {
        player.modifyCash(-(roll*10));
        this.owner.modifyCash(roll*10)
      }
    }
  }
}
exports.Utility = Utility;
