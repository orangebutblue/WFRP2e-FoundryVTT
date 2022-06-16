import WFRP_Utility from "./utility-wfrp2e.js";


export default class EffectWfrp2e extends ActiveEffect {

  constructor(data, context)
  {
    if (data.id)
    {
      setProperty(data, "flags.core.statusId", data.id)
      delete data.id
    }
    super(data, context)
  }



  // Some dialog choice effects need to run a script to modify their bonus amounts or description
  prepareDialogChoice() {
    let effect = this.toObject()
    return this._handleDialogChoiceScript.bind(effect)()
  }

  _handleDialogChoiceScript()
  {
    for (let mod in this.flags.wfrp2e.effectData) {
      try {
        if (mod != "description")
          this.flags.wfrp2e.effectData[mod] = eval(this.flags.wfrp2e.effectData[mod])
      }
      catch (e) {
        console.error("Error parsing dialogChoice effect")
        this.flags.wfrp2e.effectData[mod] = ""
      }
    }
    if (this.flags.wfrp2e.script)
      eval(this.flags.wfrp2e.script)
    return this.flags.wfrp2e.effectData
  }


  // _preCreate(data, options, user)
  // {
  //   console.log(data, options, user)
  //   super._preCreate(data, options, user)
  // }

  get item() {
    if (this.data.origin) // If effect comes from an item
    {
      let origin = this.data.origin.split(".")
      let id = origin[origin.length - 1]
      return this.parent.items.get(id)
    }
    else if (this.parent.documentName == "Item")
      return this.parent
  }

  /** @override */
  get sourceName()
  {
    let sourceName = super.sourceName
    if (sourceName == "Unknown")
    {
      let sourceItem = this.item
      if (sourceItem)
        sourceName = sourceItem.name;
      if (sourceItem && sourceItem.data.type == "disease" && !game.user.isGM)
        sourceName = "???";
    }
  }

  get isCondition()
  {
    return CONFIG.statusEffects.map(i => i.id).includes(this.getFlag("core", "statusId"))
  }

  get conditionId(){
    return this.getFlag("core", "statusId")
  }

  get isNumberedCondition() {
    return Number.isNumeric(this.conditionValue)
  }

  get show() {
    if (game.user.isGM || !this.getFlag("wfrp2e", "hide"))
      return true
    else
      return false
  }

  get isDisabled() {
    return this.data.disabled
  }

  // If an effect requires target -> apply, but doesn't have an item associated with it
  get isTargeted() {
    return (this.application == "apply" || this.trigger == "invoke") && !this.data.origin
  }


  get application() {
    return getProperty(this.data, "flags.wfrp2e.effectApplication")
  }

  get trigger() {
    return getProperty(this.data, "flags.wfrp2e.effectTrigger")
  }

  get conditionTrigger() {
    return getProperty(this.data, "flags.wfrp2e.trigger")
  }

  get script() {
    return getProperty(this.data, "flags.wfrp2e.script")
  }


  get statusId() {
    return getProperty(this.data, "flags.core.statusId")
  }

  get conditionValue() {
    return getProperty(this.data, "flags.wfrp2e.value")
  }

  get reduceQuantity() {
    return this.parent?.type == "trapping" && getProperty(this.data, "flags.wfrp2e.reduceQuantity")
  }

  reduceItemQuantity() {
    if (this.item && this.reduceQuantity)
    {
      if (this.item.quantity.value > 0)
        this.item.update({"data.quantity.value" : this.item.quantity.value - 1})
      else
        throw ui.notifications.error(game.i18n.localize("EFFECT.QuantityError"))
    }
  }

  get flags() {
    return this.data.flags
  }

  get label() {
    return this.data.label
  }

  get flags () {
    return this.data.flags
  }

  get origin() {
    return this.data.origin
  }

  get displayLabel() {
    if (this.data.count > 1)
      return this.data.label + ` (${this.data.count})`
    else return this.data.label
  }

  get specifier() {
    return this.label.substring(this.label.indexOf("(") + 1, this.label.indexOf(")"))
  }

}
