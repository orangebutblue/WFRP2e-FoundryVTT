
// Import Modules
import ActorSheetWfrp2e from "./modules/actor/sheet/actor-sheet.js"
import ActorSheetWfrp2eCharacter from "./modules/actor/sheet/character-sheet.js";
import ActorSheetWfrp2eNPC from "./modules/actor/sheet/npc-sheet.js";
import ActorSheetWfrp2eCreature from "./modules/actor/sheet/creature-sheet.js";
import ActorSheetWfrp2eVehicle from "./modules/actor/sheet/vehicle-sheet.js";
import ItemSheetWfrp2e from "./modules/item/item-sheet.js";
import ActorWfrp2e from "./modules/actor/actor-wfrp2e.js";
import ItemWfrp2e from "./modules/item/item-wfrp2e.js";
import registerHooks from "./modules/system/hooks.js"
import GeneratorWfrp2e from "./modules/apps/char-gen.js";
import MarketWfrp2e from "./modules/apps/market-wfrp2e.js";
import NameGenWfrp from "./modules/apps/name-gen.js";
import StatBlockParser from "./modules/apps/stat-parser.js";
import BrowserWfrp2e from "./modules/apps/wfrp-browser.js";
import WFRP_Audio from "./modules/system/audio-wfrp2e.js";
import WFRP2E from "./modules/system/config-wfrp2e.js"
import ChatWFRP from "./modules/system/chat-wfrp2e.js";
import OpposedWFRP from "./modules/system/opposed-wfrp2e.js";
import WFRP_Tables from "./modules/system/tables-wfrp2e.js";
import WFRP_Utility from "./modules/system/utility-wfrp2e.js";
import AOETemplate from "./modules/system/aoe.js"
import ActorSettings from "./modules/apps/actor-settings.js";
import WFRPActiveEffectConfig from "./modules/apps/active-effect.js";
import Migration from "./modules/system/migrations.js";
import Wfrp2eTableSheet from "./modules/apps/table-sheet.js";
import HomebrewSettings from "./modules/apps/homebrew-settings.js"
import CareerSelector from "./modules/apps/career-selector.js"
import CombatHelpers from "./modules/system/combat.js"
import ActiveEffectWfrp2e from "./modules/system/effect-wfrp2e.js"
import TagManager from "./modules/system/tag-manager.js";
import ItemProperties from "./modules/apps/item-properties.js"
import TestWFRP from "./modules/system/rolls/test-wfrp2e.js";
import CharacteristicTest from "./modules/system/rolls/characteristic-test.js";
import SkillTest from "./modules/system/rolls/skill-test.js";
import WeaponTest from "./modules/system/rolls/weapon-test.js";
import CastTest from "./modules/system/rolls/cast-test.js";
import ChannelTest from "./modules/system/rolls/channel-test.js";
import PrayerTest from "./modules/system/rolls/prayer-test.js";
import TraitTest from "./modules/system/rolls/trait-test.js";
import ModuleUpdater from "./modules/apps/module-updater.js"
import ModuleInitializer from "./modules/apps/module-initialization.js";
import WFRPTableConfig from "./modules/apps/table-config.js";
import ItemDialog from "./modules/apps/item-dialog.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function () {

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("wfrp2e", ActorSheetWfrp2eCharacter, { types: ["character"], makeDefault: true });
  Actors.registerSheet("wfrp2e", ActorSheetWfrp2eNPC, { types: ["npc"], makeDefault: true });
  Actors.registerSheet("wfrp2e", ActorSheetWfrp2eCreature, { types: ["creature"], makeDefault: true });
  Actors.registerSheet("wfrp2e", ActorSheetWfrp2eVehicle, { types: ["vehicle"], makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("wfrp2e", ItemSheetWfrp2e, { makeDefault: true });
  DocumentSheetConfig.registerSheet(RollTable, "wfrp2e", WFRPTableConfig, {makeDefault: true})
  DocumentSheetConfig.registerSheet(ActiveEffect, "wfrp2e", WFRPActiveEffectConfig, {makeDefault :true})

  game.wfrp2e = {
    apps: {
      ActorSheetWfrp2e,
      ActorSheetWfrp2eCharacter,
      ActorSheetWfrp2eCreature,
      ActorSheetWfrp2eNPC,
      ActorSheetWfrp2eVehicle,
      ItemSheetWfrp2e,
      GeneratorWfrp2e,
      StatBlockParser,
      BrowserWfrp2e,
      ActorSettings,
      WFRPActiveEffectConfig,
      Wfrp2eTableSheet,
      HomebrewSettings,
      CareerSelector,
      ItemProperties,
      ModuleUpdater,
      ModuleInitializer,
      ItemDialog
    },
    entities: {
      ActorWfrp2e,
      ItemWfrp2e
    },
    rolls : {
      TestWFRP,
      CharacteristicTest,
      SkillTest,
      WeaponTest,
      CastTest,
      ChannelTest,
      PrayerTest,
      TraitTest
    },
    utility: WFRP_Utility,
    tables: WFRP_Tables,
    config: WFRP2E,
    chat: ChatWFRP,
    market: MarketWfrp2e,
    audio: WFRP_Audio,
    opposed: OpposedWFRP,
    names: NameGenWfrp,
    config: WFRP2E,
    combat: CombatHelpers,
    aoe: AOETemplate,
    migration: Migration,
    tags : new TagManager()
  }

  // Assign the actor class to the CONFIG
  CONFIG.Actor.documentClass = ActorWfrp2e;
  CONFIG.Item.documentClass = ItemWfrp2e;
  CONFIG.ActiveEffect.documentClass = ActiveEffectWfrp2e
});

registerHooks()
