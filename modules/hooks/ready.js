import WFRP_Utility from "../system/utility-wfrp2e.js";
import WFRP_Tables from "../system/tables-wfrp2e.js";
import FoundryOverrides from "../system/overrides.js";
import Migration from "../system/migrations.js";
import SocketHandlers from "../system/socket-handlers.js";
import MooHouseRules from "../../moo/moo-house.js"
import OpposedWFRP from "../system/opposed-wfrp2e.js";
import OpposedTest from "../system/opposed-test.js";

export default function () {
  /**
   * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
   */
  Hooks.on("ready", async () => {


    Object.defineProperty(game.user, "isUniqueGM", {
      get: function () { return game.user.id == game.users.find(u => u.active && u.isGM)?.id }
    })

    CONFIG.ChatMessage.documentClass.prototype.getTest = function () {
      if (hasProperty(this, "data.flags.testData"))
        return game.wfrp2e.rolls.TestWFRP.recreate(this.data.flags.testData)
    }
    CONFIG.ChatMessage.documentClass.prototype.getOppose = function () {
      if (hasProperty(this, "data.flags.wfrp2e.opposeData"))
        return new OpposedWFRP(getProperty(this, "data.flags.wfrp2e.opposeData"))
    }

    CONFIG.ChatMessage.documentClass.prototype.getOpposedTest = function () {
      if (hasProperty(this, "data.flags.wfrp2e.opposeTestData"))
        return OpposedTest.recreate(getProperty(this, "data.flags.wfrp2e.opposeTestData"))
    }


    let activeModules = game.settings.get("core", "moduleConfiguration");

    // // Load module tables if the module is active and if the module has tables

      for (let m in activeModules) {
        if (activeModules[m]) {
          try {
            await WFRP_Utility.loadTablesPath(`modules/${m}/tables`)
          }
          catch { // Skip module that throws an error
          }
        }
      }
      try {
        // Load tables from world if it has a tables folder
        await WFRP_Utility.loadTablesPath(`worlds/${game.world.name}/tables`)
      }
      catch
      {
        // Do nothing
      }

    //   //@HOUSE
    //     await WFRP_Utility.loadTablesPath(`systems/wfrp2e/moo/tables`)
    //   //@/HOUSE

    // //   resolve()
    // // })

    //   await game.settings.set("wfrp2e", "tables", WFRP_Utility._packageTables())


    // game.wfrp2e.utility.addTablesToSidebar(ui.sidebar._element.find("#tables"))

    //***** Change cursor styles if the setting is enabled *****

    if (game.settings.get('wfrp2e', 'customCursor')) {
      console.log('wfrp2e | Using custom cursor')
      if (await srcExists("systems/wfrp2e/ui/cursors/pointer.png")) {
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet')
        link.type = 'text/css'
        link.href = '/systems/wfrp2e/css/cursor.css'

        document.head.appendChild(link);
      }
      else {
        console.warn("wfrp2e | No custom cursor found")
      }
    }

    game.socket.on("system.wfrp2e", data => {
      SocketHandlers[data.type](data)
    })


    const body = $("body");
    body.on("dragstart", "a.condition-chat", WFRP_Utility._onDragConditionLink)

    // if (game.modules.get("about-time") && game.modules.get("about-time").active && game.user.isUniqueGM)
    //   game.Gametime.doEvery(GM{hours:24}, () => {
    //     game.actors.contents.filter(a => a.hasPlayerOwner).forEach(a => {
    //       a.decrementDiseases()
    //       a.decrementInjuries()
    //     })
    //   })



    if (!game.settings.get("wfrp2e", "systemMigrationVersion"))
      game.settings.set("wfrp2e", "systemMigrationVersion", game.system.data.version)
    else {
      const NEEDS_MIGRATION_VERSION = "3.6.2";
      let needMigration
      try {
        needMigration = game.settings.get("wfrp2e", "systemMigrationVersion") && !isNewerVersion(game.settings.get("wfrp2e", "systemMigrationVersion"), NEEDS_MIGRATION_VERSION)
      }
      catch
      {
        needMigration = false;
      }
      if (needMigration && game.user.isGM) {
        new game.wfrp2e.migration().migrateWorld()
      }
    }




    // Some entities require other entities to be loaded to prepare correctly (vehicles and mounts)
    for (let e of game.wfrp2e.postReadyPrepare)
      e.prepareData();


    FoundryOverrides();
    MooHouseRules();
    canvas.tokens.placeables.forEach(t => t.drawEffects())

    game.wfrp2e.tags.createTags()

    let coreVersion = game.modules.get("wfrp2e-core")?.data?.version

    if (coreVersion == "1.11") {
      new Dialog({
        title: "WFRP2E Core Module Update",
        content: `<p><b>Please Read:</b> Your WFRP2E Core Module is out of date. Due to an error on my part, Foundry doesn't recognize the update. This means you'll need to uninstall and reinstall the module from the Foundry Main Menu. This should have no effect on your imported Core Content, however it is recommended you reinitialize to get the fixes. After reinstalling it, you should have version 1.2.0<br><br>To read more about the update, see <a href="https://github.com/moo-man/WFRP2E-FoundryVTT/releases/tag/3.3.0">Release Notes</a><br><br>Apologies for the inconvenience,<br>Moo Man</p>`,
        buttons: {
          ok: {
            label: "Ok",
          }
        }
      }).render(true)
    }


    if(game.version == "0.8.9")
    {
      new Dialog({
        title: "Please Read",
        content: `<p><b>I can't remove [Item/Effect/Condition], I get an error "The key ------------- does not exist in the EmbeddedCollection Collection"</b><br><br>This is an unfortunate state of Foundry 0.8 that, to fix, would require a lot of changes to the Effect system, both in the handling of effects and specific effect scripts.<br><br>I'm electing to <b>not</b> do this, and instead wait for the database changes in Foundry V9 which will fix this problem.<br><br>V9 seems like a fairly far way away though, which sucks, so this may change, but that's how it is right now.<br><br>The document that you can't remove will be removed upon refresh. This dialog will continue to show on start-up for the time being to ensure visibility.<br><br>Apologies for the inconvenience,<br>Moo Man</p>`,
        buttons: {
          ok: {
            label: "Ok",
          }
        }
      }).render(true)
    }
  })

}
