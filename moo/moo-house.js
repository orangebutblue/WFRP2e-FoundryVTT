
export default function () {

  let config = game.wfrp2e.config


  if (game.settings.get("wfrp2e", "mooDifficulty")) {

    config.difficultyModifiers["veasy"] = 40
    config.difficultyModifiers["easy"] = 30
    config.difficultyModifiers["average"] = 20
    config.difficultyModifiers["challenging"] = 0
    config.difficultyModifiers["difficult"] = -20
    config.difficultyModifiers["hard"] = -30
    config.difficultyModifiers["vhard"] = -40

    config.difficultyLabels["veasy"] = game.i18n.localize ("DIFFICULTY.MooVEasy")
    config.difficultyLabels["easy"] = game.i18n.localize ("DIFFICULTY.MooEasy")
    config.difficultyLabels["average"] = game.i18n.localize ("DIFFICULTY.Average")
    config.difficultyLabels["challenging"] = game.i18n.localize ("DIFFICULTY.Challenging")
    config.difficultyLabels["difficult"] = game.i18n.localize ("DIFFICULTY.MooDifficult")
    config.difficultyLabels["hard"] = game.i18n.localize ("DIFFICULTY.MooHard")
    config.difficultyLabels["vhard"] = game.i18n.localize ("DIFFICULTY.MooVHard")

    if (config.difficultyModifiers["futile"]) {
      config.difficultyLabels["futile"] = game.i18n.localize ("DIFFICULTY.MooFutile")
      config.difficultyModifiers["futile"] = -50

      config.difficultyLabels["impossible"] = game.i18n.localize ("DIFFICULTY.MooImpossible")
      config.difficultyModifiers["impossible"] = -60
    }
  }

  if (game.settings.get("wfrp2e", "mooConditions"))
  {
    config.conditionDescriptions["prone"] += game.i18n.localize ("MOO.Prone")
    config.conditionDescriptions["broken"] = game.i18n.localize ("MOO.Broken")
    config.conditionDescriptions["bleeding"] = game.i18n.localize ("MOO.Bleeding")
  }

  if (game.settings.get("wfrp2e", "mooConditionTriggers"))
  {
    config.statusEffects.forEach(e => {
      if (e.flags.wfrp2e.trigger == "endRound")
        e.flags.wfrp2e.trigger = "endTurn"
    })

    config.conditionDescriptions.bleeding = config.conditionDescriptions.bleeding.replace("Round", "Turn")
    config.conditionDescriptions.bleeding = config.conditionDescriptions.bleeding.replace("Round", "Turn")
    config.conditionDescriptions.poisoned = config.conditionDescriptions.poisoned.replace("Round", "Turn")
    config.conditionDescriptions.ablaze = config.conditionDescriptions.ablaze.replace("Round", "Turn")

  }

  if (game.settings.get("wfrp2e", "mooPenetrating"))
  {
    config.propertyHasValue.penetrating = true
    config.qualityDescriptions.penetrating = game.i18n.localize ("MOO.Penetrating")
  }

  if (game.settings.get("wfrp2e", "mooQualities"))
  {
    config.weaponQualities.simple = game.i18n.localize ("Simple")
    config.qualityDescriptions.simple = game.i18n.localize ("MOO.Simple")
    config.propertyHasValue.simple = false

    config.weaponQualities.momentum = game.i18n.localize ("Momentum")
    config.qualityDescriptions.momentum = game.i18n.localize ("MOO.Momentum")
    config.propertyHasValue.momentum = true
  }

  if (game.settings.get("wfrp2e", "mooHomebrewItemChanges"))
  {
    fetch("systems/wfrp2e/moo/items.json").then(r => r.json()).then(async records => {
      for (let id in records)
      {
        let data = records[id]
        try {
          let item = await fromUuid(id)
          if (item)
          {
            item.data.update(data)
            game.wfrp2e.utility.logHomebrew("mooHomebrewItemChanges: " + id + ` (${item.name})`)
          }
        }
        catch {
          game.wfrp2e.utility.log("Could not find item " + id)
        }
      }
      game.wfrp2e.utility.log("Compendium changes will revert if homebrew items is deactivated and the game is refreshed")
    })
    if (game.user.isGM)
    {
      ui.notifications.notify(game.i18n.localize ("MOO.Items"))
    }
  }

}
