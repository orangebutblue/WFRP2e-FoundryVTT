const WFRP2E = {}
CONFIG.ChatMessage.template = "systems/wfrp2e/templates/chat/chat-message.html"

WFRP2E.creditOptions = {
    SPLIT: "split",
    EACH: "each",
}

WFRP2E.toTranslate = [
"statusTiers",
"characteristics",
"characteristicsAbbrev",
"skillTypes",
"skillGroup",
"talentMax",
"weaponGroups",
"weaponTypes",
"weaponReaches",
"ammunitionGroups",
"itemQualities",
"itemFlaws",
"weaponQualities",
"weaponFlaws",
"armorQualities",
"armorFlaws",
"armorTypes",
"rangeModifiers",
"rangeBands",
"difficultyLabels",
"locations",
"availability",
"trappingTypes",
"trappingCategories",
"actorSizes",
"magicLores",
"magicWind",
"prayerTypes",
"mutationTypes",
"conditions",
"availabilityTable",
"moneyNames",
"hitLocationTables",
"extendedTestCompletion"
]

CONFIG.controlIcons.defeated = "systems/wfrp2e/icons/defeated.png";

CONFIG.JournalEntry.noteIcons = {
    "Marker": "systems/wfrp2e/icons/buildings/point_of_interest.png",
    "Apothecary": "systems/wfrp2e/icons/buildings/apothecary.png",
    "Beastmen Herd 1": "systems/wfrp2e/icons/buildings/beastmen_camp1.png",
    "Beastmen Herd 2": "systems/wfrp2e/icons/buildings/beastmen_camp2.png",
    "Blacksmith": "systems/wfrp2e/icons/buildings/blacksmith.png",
    "Bretonnian City 1": "systems/wfrp2e/icons/buildings/bret_city1.png",
    "Bretonnian City 2": "systems/wfrp2e/icons/buildings/bret_city2.png",
    "Bretonnian City 3": "systems/wfrp2e/icons/buildings/bret_city3.png",
    "Bretonnian Worship": "systems/wfrp2e/icons/buildings/bretonnia_worship.png",
    "Caste Hill 1": "systems/wfrp2e/icons/buildings/castle_hill1.png",
    "Caste Hill 2": "systems/wfrp2e/icons/buildings/castle_hill2.png",
    "Caste Hill 3": "systems/wfrp2e/icons/buildings/castle_hill3.png",
    "Castle Wall": "systems/wfrp2e/icons/buildings/castle_wall.png",
    "Cave 1": "systems/wfrp2e/icons/buildings/cave1.png",
    "Cave 2": "systems/wfrp2e/icons/buildings/cave2.png",
    "Cave 3": "systems/wfrp2e/icons/buildings/cave3.png",
    "Cemetery": "systems/wfrp2e/icons/buildings/cemetery.png",
    "Chaos Portal": "systems/wfrp2e/icons/buildings/chaos_portal.png",
    "Chaos Worship": "systems/wfrp2e/icons/buildings/chaos_worship.png",
    "Court": "systems/wfrp2e/icons/buildings/court.png",
    "Dwarf Beer": "systems/wfrp2e/icons/buildings/dwarf_beer.png",
    "Dwarf Hold 1": "systems/wfrp2e/icons/buildings/dwarf_hold1.png",
    "Dwarf Hold 2": "systems/wfrp2e/icons/buildings/dwarf_hold2.png",
    "Dwarf Hold 3": "systems/wfrp2e/icons/buildings/dwarf_hold3.png",
    "Empire Barracks": "systems/wfrp2e/icons/buildings/empire_barracks.png",
    "Empire City 1": "systems/wfrp2e/icons/buildings/empire_city1.png",
    "Empire City 2": "systems/wfrp2e/icons/buildings/empire_city2.png",
    "Empire City 3": "systems/wfrp2e/icons/buildings/empire_city3.png",
    "Farm": "systems/wfrp2e/icons/buildings/farms.png",
    "Food 1": "systems/wfrp2e/icons/buildings/food.png",
    "Food 2": "systems/wfrp2e/icons/buildings/food2.png",
    "Guard Post": "systems/wfrp2e/icons/buildings/guards.png",
    "Haunted Hill": "systems/wfrp2e/icons/buildings/haunted_hill.png",
    "Haunted Wood": "systems/wfrp2e/icons/buildings/haunted_wood.png",
    "Inn 1": "systems/wfrp2e/icons/buildings/inn1.png",
    "Inn 2": "systems/wfrp2e/icons/buildings/inn2.png",
    "Kislev City 1": "systems/wfrp2e/icons/buildings/kislev_city1.png",
    "Kislev City 2": "systems/wfrp2e/icons/buildings/kislev_city2.png",
    "Kislev City 3": "systems/wfrp2e/icons/buildings/kislev_city3.png",
    "Lumber": "systems/wfrp2e/icons/buildings/lumber.png",
    "Magic": "systems/wfrp2e/icons/buildings/magic.png",
    "Metal": "systems/wfrp2e/icons/buildings/metal.png",
    "Mountain 1": "systems/wfrp2e/icons/buildings/mountains1.png",
    "Mountain 2": "systems/wfrp2e/icons/buildings/mountains2.png",
    "Orcs": "systems/wfrp2e/icons/buildings/orcs.png",
    "Orc Camp": "systems/wfrp2e/icons/buildings/orc_city.png",
    "Port": "systems/wfrp2e/icons/buildings/port.png",
    "Road": "systems/wfrp2e/icons/buildings/roads.png",
    "Ruins": "systems/wfrp2e/icons/buildings/ruins.png",
    "Scroll": "systems/wfrp2e/icons/buildings/scroll.png",
    "Sigmar": "systems/wfrp2e/icons/buildings/sigmar_worship.png",
    "Stables": "systems/wfrp2e/icons/buildings/stables.png",
    "Standing Stones": "systems/wfrp2e/icons/buildings/standing_stones.png",
    "Swamp": "systems/wfrp2e/icons/buildings/swamp.png",
    "Temple": "systems/wfrp2e/icons/buildings/temple.png",
    "Textile": "systems/wfrp2e/icons/buildings/textile.png",
    "Tower 1": "systems/wfrp2e/icons/buildings/tower1.png",
    "Tower 2": "systems/wfrp2e/icons/buildings/tower2.png",
    "Tower Hill": "systems/wfrp2e/icons/buildings/tower_hill.png",
    "Wizard Tower": "systems/wfrp2e/icons/buildings/wizard_tower.png",
    "Ulric": "systems/wfrp2e/icons/buildings/ulric_worship.png",
    "Village 1": "systems/wfrp2e/icons/buildings/village1.png",
    "Village 2": "systems/wfrp2e/icons/buildings/village2.png",
    "Village 3": "systems/wfrp2e/icons/buildings/village3.png",
    "Wood Elves 1": "systems/wfrp2e/icons/buildings/welves1.png",
    "Wood Elves 2": "systems/wfrp2e/icons/buildings/welves2.png",
    "Wood Elves 3": "systems/wfrp2e/icons/buildings/welves3.png"
}

// Status Tiers
WFRP2E.statusTiers = {
    "g": "TIER.Gold",
    "s": "TIER.Silver",
    "b": "TIER.Brass"
};

// Characteristic Names
WFRP2E.characteristics = {
    "ws": "CHAR.WS",
    "bs": "CHAR.BS",
    "s": "CHAR.S",
    "t": "CHAR.T",
    "i": "CHAR.I",
    "ag": "CHAR.Ag",
    "dex": "CHAR.Dex",
    "int": "CHAR.Int",
    "wp": "CHAR.WP",
    "fel": "CHAR.Fel"
};

// Characteristic Abbreviations
WFRP2E.characteristicsAbbrev = {
    "ws": "CHARAbbrev.WS",
    "bs": "CHARAbbrev.BS",
    "s": "CHARAbbrev.S",
    "t": "CHARAbbrev.T",
    "i": "CHARAbbrev.I",
    "ag": "CHARAbbrev.Ag",
    "dex": "CHARAbbrev.Dex",
    "int": "CHARAbbrev.Int",
    "wp": "CHARAbbrev.WP",
    "fel": "CHARAbbrev.Fel"
};

WFRP2E.skillTypes = {
    "bsc": "Basic",
    "adv": "Advanced"
};

WFRP2E.xpCost = {
    "characteristic": [25, 30, 40, 50, 70, 90, 120, 150, 190, 230, 280, 330, 390, 450, 520],
    "skill": [10, 15, 20, 30, 40, 60, 80, 110, 140, 180, 220, 270, 320, 380, 440]
}

WFRP2E.skillGroup = {
    "isSpec": "ITEM.IsSpec",
    "noSpec": "ITEM.NoSpec"
};

WFRP2E.talentMax = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "none": "None",
    "ws": "CHARBonus.WS",
    "bs": "CHARBonus.BS",
    "s": "CHARBonus.S",
    "t": "CHARBonus.T",
    "i": "CHARBonus.I",
    "ag": "CHARBonus.Ag",
    "dex": "CHARBonus.Dex",
    "int": "CHARBonus.Int",
    "wp": "CHARBonus.WP",
    "fel": "CHARBonus.Fel"
}


// Weapon Groups
WFRP2E.weaponGroups = {
    "basic": "SPEC.Basic",
    "cavalry": "SPEC.Cavalry",
    "fencing": "SPEC.Fencing",
    "brawling": "SPEC.Brawling",
    "flail": "SPEC.Flail",
    "parry": "SPEC.Parry",
    "polearm": "SPEC.Polearm",
    "twohanded": "SPEC.TwoHanded",
    "blackpowder": "SPEC.Blackpowder",
    "bow": "SPEC.Bow",
    "crossbow": "SPEC.Crossbow",
    "entangling": "SPEC.Entangling",
    "engineering": "SPEC.Engineering",
    "explosives": "SPEC.Explosives",
    "sling": "SPEC.Sling",
    "throwing": "SPEC.Throwing",
    "vehicle": "SPEC.Vehicle",
};

// Given a group, what's the primary type, melee or ranged
WFRP2E.groupToType = {
    "basic": "melee",
    "cavalry": "melee",
    "fencing": "melee",
    "brawling": "melee",
    "flail": "melee",
    "parry": "melee",
    "polearm": "melee",
    "twohanded": "melee",
    "blackpowder": "ranged",
    "bow": "ranged",
    "crossbow": "ranged",
    "entangling": "ranged",
    "engineering": "ranged",
    "explosives": "ranged",
    "sling": "ranged",
    "throwing": "ranged",
    "vehicle" : "ranged"
};

WFRP2E.weaponTypes = {
    "melee": "Melee",
    "ranged": "Ranged"
}

// Weapon Reach
WFRP2E.weaponReaches = {
    "personal": "WFRP2E.Reach.Personal",
    "vshort": "WFRP2E.Reach.VShort",
    "short": "WFRP2E.Reach.Short",
    "average": "WFRP2E.Reach.Average",
    "long": "WFRP2E.Reach.Long",
    "vLong": "WFRP2E.Reach.VLong",
    "massive": "WFRP2E.Reach.Massive",
}

// Ammo Groups
WFRP2E.ammunitionGroups = {
    "BPandEng": "WFRP2E.BPandEng",
    "bow": "WFRP2E.Bow",
    "crossbow": "WFRP2E.Crossbow",
    "sling": "WFRP2E.Sling",
    "vehicle": "WFRP2E.Vehicle",
};

// Item Qualities
WFRP2E.itemQualities = {
    "durable": "PROPERTY.Durable",
    "fine": "PROPERTY.Fine",
    "lightweight": "PROPERTY.Lightweight",
    "practical": "PROPERTY.Practical",
};

// Item Flaws
WFRP2E.itemFlaws = {
    "ugly": "PROPERTY.Ugly",
    "shoddy": "PROPERTY.Shoddy",
    "unreliable": "PROPERTY.Unreliable",
    "bulky": "PROPERTY.Bulky",
}


// Weapon Qualities
WFRP2E.weaponQualities = {
    "accurate": "PROPERTY.Accurate",
    "blackpowder": "PROPERTY.Blackpowder",
    "blast": "PROPERTY.Blast",
    "damaging": "PROPERTY.Damaging",
    "defensive": "PROPERTY.Defensive",
    "distract": "PROPERTY.Distract",
    "entangle": "PROPERTY.Entangle",
    "fast": "PROPERTY.Fast",
    "hack": "PROPERTY.Hack",
    "impact": "PROPERTY.Impact",
    "impale": "PROPERTY.Impale",
    "penetrating": "PROPERTY.Penetrating",
    "pistol": "PROPERTY.Pistol",
    "precise": "PROPERTY.Precise",
    "pummel": "PROPERTY.Pummel",
    "repeater": "PROPERTY.Repeater",
    "shield": "PROPERTY.Shield",
    "trapblade": "PROPERTY.TrapBlade",
    "unbreakable": "PROPERTY.Unbreakable",
    "wrap": "PROPERTY.Wrap"
};

// Weapon Flaws
WFRP2E.weaponFlaws = {
    "dangerous": "PROPERTY.Dangerous",
    "imprecise": "PROPERTY.Imprecise",
    "reload": "PROPERTY.Reload",
    "slow": "PROPERTY.Slow",
    "tiring": "PROPERTY.Tiring",
    "undamaging": "PROPERTY.Undamaging"
};

// Armor Qualities
WFRP2E.armorQualities = {
    "flexible": "PROPERTY.Flexible",
    "impenetrable": "PROPERTY.Impenetrable",
};

// Armor Flaws
WFRP2E.armorFlaws = {
    "partial": "PROPERTY.Partial",
    "weakpoints": "PROPERTY.Weakpoints",
};

WFRP2E.propertyHasValue = {
    "durable": true,
    "fine": true,
    "lightweight": false,
    "practical": false,
    "ugly": false,
    "shoddy": false,
    "unreliable": false,
    "bulky": false,
    "accurate": false,
    "blackpowder": false,
    "blast": true,
    "damaging": false,
    "defensive": false,
    "distract": false,
    "entangle": false,
    "fast": false,
    "hack": false,
    "impact": false,
    "impale": false,
    "penetrating": false,
    "pistol": false,
    "precise": false,
    "pummel": false,
    "repeater": true,
    "shield": true,
    "trapblade": false,
    "unbreakable": false,
    "wrap": false,
    "dangerous": false,
    "imprecise": false,
    "reload": true,
    "slow": false,
    "tiring": false,
    "undamaging": false,
    "flexible": false,
    "impenetrable": false,
    "partial": false,
    "weakpoints": false
}

// Equipment Types
WFRP2E.armorTypes = {
    "softLeather": "WFRP2E.ArmourType.SLeather",
    "boiledLeather": "WFRP2E.ArmourType.BLeather",
    "mail": "WFRP2E.ArmourType.Mail",
    "plate": "WFRP2E.ArmourType.Plate",
    "other": "WFRP2E.ArmourType.Other"
};

// Range Test Modifiers
WFRP2E.rangeModifiers = {
    "Point Blank": "easy",
    "Short Range": "average",
    "Normal": "challenging",
    "Long Range": "difficult",
    "Extreme": "vhard",
}

// Ranges
WFRP2E.rangeBands = {
    "pb": "Point Blank",
    "short": "Short Range",
    "normal": "Normal",
    "long": "Long Range",
    "extreme": "Extreme",
}

// Difficulty Modifiers
WFRP2E.difficultyModifiers = {
    "veasy": 60,
    "easy": 40,
    "average": 20,
    "challenging": 0,
    "difficult": -10,
    "hard": -20,
    "vhard": -30
}

// Difficulty Labels
WFRP2E.difficultyLabels = {

    "veasy": "DIFFICULTY.VEasy",
    "easy": "DIFFICULTY.Easy",
    "average": "DIFFICULTY.Average",
    "challenging": "DIFFICULTY.Challenging",
    "difficult": "DIFFICULTY.Difficult",
    "hard": "DIFFICULTY.Hard",
    "vhard": "DIFFICULTY.VHard"
}

WFRP2E.locations = {
    "head": "Head",
    "body": "Body",
    "rArm": "Right Arm",
    "lArm": "Left Arm",
    "rLeg": "Right Leg",
    "lLeg": "Left Leg",
}

// Trapping Availability
WFRP2E.availability = {
    "None": "-",
    "common": "WFRP2E.Availability.Common",
    "scarce": "WFRP2E.Availability.Scarce",
    "rare": "WFRP2E.Availability.Rare",
    "exotic": "WFRP2E.Availability.Exotic",
}


// Trapping Types
WFRP2E.trappingTypes = {
    "clothingAccessories": "WFRP2E.TrappingType.ClothingAccessories",
    "foodAndDrink": "WFRP2E.TrappingType.FoodDrink",
    "toolsAndKits": "WFRP2E.TrappingType.ToolsKits",
    "booksAndDocuments": "WFRP2E.TrappingType.BooksDocuments",
    "tradeTools": "WFRP2E.TrappingType.TradeTools", // Unused - combined with tools and kits
    "drugsPoisonsHerbsDraughts": "WFRP2E.TrappingType.DrugsPoisonsHerbsDraughts",
    "ingredient": "WFRP2E.TrappingType.Ingredient",
    "misc": "WFRP2E.TrappingType.Misc",
};

// These categories are used to label items in containers (Trapping tab)
WFRP2E.trappingCategories = {
    "weapon": "WFRP2E.TrappingType.Weapon",
    "armour": "WFRP2E.TrappingType.Armour",
    "money": "WFRP2E.TrappingType.Money",
    "ammunition": "WFRP2E.TrappingType.Ammunition",
    "container": "WFRP2E.TrappingType.Container",
    "clothingAccessories": "WFRP2E.TrappingType.ClothingAccessories",
    "foodAndDrink": "WFRP2E.TrappingType.FoodDrink",
    "toolsAndKits": "WFRP2E.TrappingType.ToolsKits",
    "booksAndDocuments": "WFRP2E.TrappingType.BooksDocuments",
    "tradeTools": "WFRP2E.TrappingType.TradeTools",
    "drugsPoisonsHerbsDraughts": "WFRP2E.TrappingType.DrugsPoisonsHerbsDraughts",
    "ingredient": "WFRP2E.TrappingType.Ingredient",
    "misc": "WFRP2E.TrappingType.Misc",
};

// Creature Sizes
WFRP2E.actorSizes = {
    "tiny": "SPEC.Tiny",
    "ltl": "SPEC.Little",
    "sml": "SPEC.Small",
    "avg": "SPEC.Average",
    "lrg": "SPEC.Large",
    "enor": "SPEC.Enormous",
    "mnst": "SPEC.Monstrous"
};
WFRP2E.actorSizeNums = {
    "tiny": 0,
    "ltl": 1,
    "sml": 2,
    "avg": 3,
    "lrg": 4,
    "enor": 5,
    "mnst": 6
};

WFRP2E.tokenSizes = {
    "tiny": 0.3,
    "ltl": 0.5,
    "sml": 0.8,
    "avg": 1,
    "lrg": 2,
    "enor": 3,
    "mnst": 4
};

// Condition Types
WFRP2E.magicLores = {
    "petty": "Petty",
    "beasts": "Beasts",
    "death": "Death",
    "fire": "Fire",
    "heavens": "Heavens",
    "metal": "Metal",
    "life": "Life",
    "light": "Light",
    "shadow": "Shadow",
    "hedgecraft": "Hedgecraft",
    "witchcraft": "Witchcraft",
    "daemonology": "Daemonology",
    "necromancy": "Necromancy",
    "undivided" : "Undivided",
    "nurgle": "Nurgle",
    "slaanesh": "Slaanesh",
    "tzeentch": "Tzeentch",
};

// Given a Lore, what is the Wind
WFRP2E.magicWind = {
    "petty": "None",
    "beasts": "Ghur",
    "death": "Shyish",
    "fire": "Aqshy",
    "heavens": "Azyr",
    "metal": "Chamon",
    "life": "Ghyran",
    "light": "Hysh",
    "shadow": "Ulgu",
    "hedgecraft": "None",
    "witchcraft": "None",
    "daemonology": "Dhar",
    "necromancy": "Dhar",
    "undivided": "Dhar",
    "nurgle": "Dhar",
    "slaanesh": "Dhar",
    "tzeentch": "Dhar",
};



// Types of prayers
WFRP2E.prayerTypes = {
    "blessing": "Blessing",
    "miracle": "Miracle"
}

WFRP2E.mutationTypes = {
    "physical": "Physical",
    "mental": "Mental"
}


WFRP2E.conditions = {
    "ablaze": "WFRP2E.ConditionName.Ablaze",
    "bleeding": "WFRP2E.ConditionName.Bleeding",
    "blinded": "WFRP2E.ConditionName.Blinded",
    "broken": "WFRP2E.ConditionName.Broken",
    "deafened": "WFRP2E.ConditionName.Deafened",
    "entangled": "WFRP2E.ConditionName.Entangled",
    "fatigued": "WFRP2E.ConditionName.Fatigued",
    "poisoned": "WFRP2E.ConditionName.Poisoned",
    "prone": "WFRP2E.ConditionName.Prone",
    "stunned": "WFRP2E.ConditionName.Stunned",
    "surprised": "WFRP2E.ConditionName.Surprised",
    "unconscious": "WFRP2E.ConditionName.Unconscious",
    "grappling": "WFRP2E.ConditionName.Grappling",
    "fear": "WFRP2E.ConditionName.Fear",
    "defeated": "WFRP2E.ConditionName.Defeated"
}


WFRP2E.earningValues = {
    "b": "2d10",
    "s": "1d10",
    "g": "1",
}

WFRP2E.randomExp = {
    speciesRand: 20,
    careerRand: 50,
    careerReroll: 25,
    statsRand: 50,
    statsReorder: 25
}

WFRP2E.reachNum = {
    "personal": 1,
    "vshort": 2,
    "short": 3,
    "average": 4,
    "long": 5,
    "vLong": 6,
    "massive": 7,
}

WFRP2E.traitBonuses = {
    "big": {
        "s": 10,
        "t": 10,
        "ag": -5
    },
    "brute": {
        "m": -1,
        "t": 10,
        "s": 10,
        "ag": -10
    },
    "clever": {
        "int": 20,
        "i": 10
    },
    "cunning": {
        "int": 10,
        "fel": 10,
        "i": 10
    },
    "elite": {
        "ws": 20,
        "bs": 20,
        "wp": 20
    },
    "fast": {
        "ag": 10,
        "m": 1
    },
    "leader": {
        "fel": 10,
        "wp": 10
    },
    "tough": {
        "t": 10,
        "wp": 10
    },
    "swarm": {
        "ws": 10
    }
}

WFRP2E.talentBonuses = {
    "savvy": "int",
    "suave": "fel",
    "marksman": "bs",
    "very strong": "s",
    "sharp": "i",
    "lightning reflexes": "ag",
    "coolheaded": "wp",
    "very resilient": "t",
    "nimble fingered": "dex",
    "warrior born": "ws"
}

WFRP2E.corruptionTables = ["mutatephys", "mutatemental"]

WFRP2E.DAMAGE_TYPE = {
    NORMAL: 0,
    IGNORE_AP: 1,
    IGNORE_TB: 2,
    IGNORE_ALL: 3
}

WFRP2E.PSEUDO_ENTITIES = [
    "Table",
    "Condition",
    "Symptom",
    "Roll",
    "Pay",
    "Credit",
    "Corruption",
    "Fear",
    "Terror",
    "Exp"
]

WFRP2E.availabilityTable = {
    "MARKET.Village": {
        "WFRP2E.Availability.Common": {
            test: 100,
            stock: '2'
        },
        "WFRP2E.Availability.Scarce": {
            test: 30,
            stock: '1'
        },
        "WFRP2E.Availability.Rare": {
            test: 15,
            stock: '1'
        },
        "WFRP2E.Availability.Exotic": {
            test: 0,
            stock: '0'
        }
    },
    "MARKET.Town": {
        "WFRP2E.Availability.Common": {
            test: 100,
            stock: '2d10'
        },
        "WFRP2E.Availability.Scarce": {
            test: 60,
            stock: '1d10'
        },
        "WFRP2E.Availability.Rare": {
            test: 30,
            stock: '1d5'
        },
        "WFRP2E.Availability.Exotic": {
            test: 0,
            stock: '0'
        }
    },
    "MARKET.City": {
        "WFRP2E.Availability.Common": {
            test: 100,
            stock: '∞'
        },
        "WFRP2E.Availability.Scarce": {
            test: 90,
            stock: '∞'
        },
        "WFRP2E.Availability.Rare": {
            test: 45,
            stock: '∞'
        },
        "WFRP2E.Availability.Exotic": {
            test: 0,
            stock: '0'
        }
    }
}


WFRP2E.species = {};
WFRP2E.subspecies = {};
WFRP2E.speciesCharacteristics = {}
WFRP2E.speciesSkills = {}
WFRP2E.speciesTalents = {}
WFRP2E.speciesMovement = {}
WFRP2E.speciesFate = {}
WFRP2E.speciesRes = {}
WFRP2E.speciesExtra = {}
WFRP2E.speciesAge = {}
WFRP2E.speciesHeight = {}
WFRP2E.classTrappings = {}
WFRP2E.weaponGroupDescriptions = {};
WFRP2E.reachDescription = {}
WFRP2E.qualityDescriptions = {};
WFRP2E.flawDescriptions = {};
WFRP2E.loreEffectDescriptions = {};
WFRP2E.loreEffects = {};
WFRP2E.conditionDescriptions = {}
WFRP2E.symptoms = {}
WFRP2E.symptomDescriptions = {}
WFRP2E.symptomTreatment = {}
WFRP2E.conditionDescriptions = {}
WFRP2E.modTypes = {}
WFRP2E.symptomEffects = {}
WFRP2E.trade = {}

// This defines the standard money used.
// "moneyNames" is what currency name to look for when creating a character
// The money keys are used for parsing input (like commands)
// Override these values if you wish to have a campaign in a different setting
WFRP2E.moneyNames = {
    "gc" : "NAME.GC",
    "ss" : "NAME.SS",
    "bp" : "NAME.BP"
}

WFRP2E.moneyValues = {
    "gc" : 240,
    "ss" : 20,
    "bp" : 1
}

WFRP2E.hitLocationTables = {
    "hitloc": "Standard",
    "snake": "Snake-Like",
    "spider": "Spider-Like"
}

WFRP2E.extendedTestCompletion = {
    none: "ExtendedTest.None",
    reset: "ExtendedTest.Reset",
    remove: "ExtendedTest.Remove"
}

WFRP2E.actorSizeEncumbrance = {
    "tiny": 0,
    "ltl": 2,
    "sml": 5,
    "avg": 10,
    "lrg": 20,
    "enor": 40,
    "mnst": 100
}



WFRP2E.systemItems = {
    reload : {
        type: "extendedTest",
        name: "",
        data: {
            SL: {
            },
            test: {
                value: ""
            },
            completion: {
                value: "remove"
            }
        },
        flags: {
            wfrp2e: {
                reloading: ""
            }
        }
    },
    improv : {
          name: "Improvised Weapon",
          type: "weapon",
          effects : [],
          data: {
            damage: { value: "SB + 1" },
            reach: { value: "personal" },
            weaponGroup: { value: "basic" },
            twohanded: { value: false },
            qualities: { value: [] },
            flaws: { value: [{name : "undamaging"}] },
            special: { value: "" },
            range: { value: "" },
            ammunitionGroup: { value: "" },
            offhand: { value: false },
          }
    },
    stomp : {
        name: "Stomp",
        type: "trait",
          effects : [],
          data: {
            specification: { value: "4" },
            rollable: { value: true, rollCharacteristic: "ws", bonusCharacteristic: "s", defaultDifficulty: "challenging", damage : true, skill : "Melee (Brawling)" },
        }
    },
    unarmed : {
          name: "Unarmed",
          type: "weapon",
          effects : [],
          data: {
            damage: { value: "SB + 0" },
            reach: { value: "personal" },
            weaponGroup: { value: "brawling" },
            twohanded: { value: false },
            qualities: { value: [] },
            flaws: { value: [{name : "undamaging"}] },
            special: { value: "" },
            range: { value: "" },
            ammunitionGroup: { value: "" },
            offhand: { value: false },
          }
      },

    fear : {
        name : "Fear",
        type : "extendedTest",
        data : {
            completion:{value: 'remove'},
            description:{type: 'String', label: 'Description', value: ''},
            failingDecreases:{value: true},
            gmdescription:{type: 'String', label: 'Description', value: ''},
            hide: { test: false, progress: false },
            negativePossible: { value: false },
            SL: { current: 0, target: 1 },
            test: { value: 'Cool' }
        },
        effects:
            [{
                label: "Fear",
                icon: "systems/wfrp2e/icons/conditions/fear.png",
                transfer: true,
                flags: {
                    core : {
                        statusId : "fear"
                    },
                    wfrp2e: {
                        "effectTrigger": "dialogChoice",
                        "effectData": {
                            "description": "Tests to affect",
                            "slBonus": "-1"
                        },
                        "script": `
                            if (this.flags.wfrp2e.fearName)
                                this.flags.wfrp2e.effectData.description += " " + this.flags.wfrp2e.fearName
                            else
                                this.flags.wfrp2e.effectData.description += " the source of fear"
                        `}
                }
            }
            ]

    },

    terror: {

        label: "Terror",
        icon: "systems/wfrp2e/icons/conditions/terror.png",
        transfer: true,
        flags: {
            wfrp2e: {
                "effectTrigger": "oneTime",
                "effectApplication": "actor",
                "terrorValue": 1,
                "script": `
                    args.actor.setupSkill("Cool").then(setupData =>{
                    args.actor.basicTest(setupData).then(test => {
                        let terror = this.effect.flags.wfrp2e.terrorValue;
                        args.actor.applyFear(terror, name)
                        if (test.result.outcome == "failure")
                        {
                            if (test.result.SL < 0)
                                terror += Math.abs(test.result.SL)

                            args.actor.addCondition("broken", terror)
                        }
                        })
                    })`
            }
        }
    }
}


WFRP2E.systemEffects = {
    "enc1" : {
        label: "Encumbrance 1",
        icon: "systems/wfrp2e/icons/effects/enc1.png",
        flags: {
            wfrp2e: {
                "effectTrigger": "prePrepareData",
                "effectApplication": "actor",
                "script": `
                    args.actor.characteristics.ag.modifier -= 10;

                    if (args.actor.details.move.value > 3)
                    {
                        args.actor.details.move.value -= 1;
                        if (args.actor.details.move.value < 3)
                            args.actor.details.move.value = 3
                    }
                    `
            }
        }
    },
    "enc2" : {
        label: "Encumbrance 2",
        icon: "systems/wfrp2e/icons/effects/enc2.png",
        flags: {
            wfrp2e: {
                "effectTrigger": "prePrepareData",
                "effectApplication": "actor",
                "script": `
                    args.actor.characteristics.ag.modifier -= 20;
                    if (args.actor.details.move.value > 2)
                    {
                        args.actor.details.move.value -= 2;
                        if (args.actor.details.move.value < 2)
                            args.actor.details.move.value = 2
                    }
                    `
            }
        }
    },
    "enc3" : {
        label: "Encumbrance 3",
        icon: "systems/wfrp2e/icons/effects/enc3.png",
        flags: {
            wfrp2e: {
                "effectTrigger": "prePrepareData",
                "effectApplication": "actor",
                "script": `
                    args.actor.details.move.value = 0;`
            }
        }
    },
    "cold1" : {
        label: "Cold Exposure 1",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
        ],
        flags: {
            wfrp2e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "cold2" : {
        label: "Cold Exposure 2",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.i.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp2e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "cold3" : {
        label: "Cold Exposure 3",
        icon: "",
        flags: {
            wfrp2e: {
                "effectTrigger": "invoke",
                "effectApplication": "actor",
                "script": `
                    let tb = this.actor.characteristics.t.bonus
                    let damage = (await new Roll("1d10").roll()).total
                    damage -= tb
                    if (damage <= 0) damage = 1
                    if (this.actor.status.wounds.value <= damage)
                    {
                        this.actor.addCondition("unconscious")
                    }
                    this.actor.modifyWounds(-damage)
                ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
                `
            }
        }
    },
    "heat1" : {
        label: "Heat Exposure 1",
        icon: "",
        changes : [
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp2e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "heat2" : {
        label: "Heat Exposure 2",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.i.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp2e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "heat3" : {
        label: "Heat Exposure 3",
        icon: "",
        flags: {
            wfrp2e: {
                "effectTrigger": "invoke",
                "effectApplication": "actor",
                "script": `
                    let tb = this.actor.characteristics.t.bonus
                    let damage = (await new Roll("1d10").roll()).total
                    damage -= tb
                    if (damage <= 0) damage = 1
                    this.actor.modifyWounds(-damage)
                ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
                `
            }
        }
    },
    "thirst1" : {
        label: "Thirst 1",
        icon: "",
        changes : [
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp2e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "thirst2" : {
        label: "Thirst 2+",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.i.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp2e: {
                "effectTrigger": "invoke",
                "effectApplication": "actor",
                "script": `
                let tb = this.actor.characteristics.t.bonus
                let damage = (await new Roll("1d10").roll()).total
                damage -= tb
                if (damage <= 0) damage = 1
                this.actor.modifyWounds(-damage)
                ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
            `
            }
        }
    },
    "starvation1" : {
        label: "Starvation 1",
        icon: "",
        changes : [
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp2e: {
                "effectTrigger": "",
                "effectApplication": "actor",
                "script": ``
            }
        }
    },
    "starvation2" : {
        label: "Starvation 2",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.s.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.modifier", mode: 2, value: -10},
            {key : "data.characteristics.i.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
            {key : "data.characteristics.wp.modifier", mode: 2, value: -10},
            {key : "data.characteristics.fel.modifier", mode: 2, value: -10},
            {key : "data.characteristics.t.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.s.calculationBonusModifier", mode: 2, value: 1},
            {key : "data.characteristics.wp.calculationBonusModifier", mode: 2, value: 1},
        ],
        flags: {
            wfrp2e: {
                "effectTrigger": "invoke",
                "effectApplication": "actor",
                "script": `
                let tb = this.actor.characteristics.t.bonus
                let damage = (await new Roll("1d10").roll()).total
                damage -= tb
                if (damage <= 0) damage = 1
                this.actor.modifyWounds(-damage)
                ui.notifications.notify(game.i18n.format("TookDamage", { damage: damage }))
            `
            }
        }
    },
    "infighting": {
        label: "Infighting",
        icon: "modules/wfrp2e-core/icons/talents/in-fighter.png",
        flags: {
            wfrp2e: {
                "effectTrigger": "prePrepareItem",
                "effectApplication": "actor",
                "script": `
                    if (args.item.type == "weapon" && args.item.isEquipped)
                    {
                        let weaponLength = args.item.reachNum
                        if (weaponLength > 3)
                        {
                            let improv = duplicate(game.wfrp2e.config.systemItems.improv)
                            improv.data.twohanded.value = args.item.twohanded.value
                            improv.data.offhand.value = args.item.offhand.value
                            improv.name = args.item.name + " (Infighting)"
                            mergeObject(args.item.data.data, improv.data, {overwrite : true})
                            args.item.data.data.qualities = improv.data.qualities
                            args.item.data.data.flaws = improv.data.flaws
                            args.item.data.name = improv.name
                            args.item.data.infighting = true;
                        }
                    }
                `
            }
        }
    },
    "defensive": {
        label: "On the Defensive [Skill Name]",
        icon: "",
        flags: {
            wfrp2e: {
                "effectTrigger": "prefillDialog",
                "effectApplication": "actor",
                "script": `
                    let skillName = this.effect.label.substring(this.effect.label.indexOf("[") + 1, this.effect.label.indexOf("]"))
                    if (!this.actor.isOpposing)
                      return
                    if ((args.type == "skill" && args.item.name == skillName) ||
                        (args.type == "weapon" && args.item.skillToUse.name == skillName) ||
                        (args.type == "cast" && skillName == "Language (Magick)") ||
                        (args.type == "prayer" && skillName == "Prayer") ||
                        (args.type == "trait" && args.item.rollable.skill == skillName))
                        args.prefillModifiers.modifier += 20`
            }
        }
    },
    "dualwielder" : {
        label: "Dual Wielder",
        icon: "modules/wfrp2e-core/icons/talents/dual-wielder.png",
        flags: {
            wfrp2e: {
                "effectTrigger": "prefillDialog",
                "effectApplication": "actor",
                "script": `
                    if (this.actor.isOpposing)
                        args.prefillModifiers.modifier -= 10`
            }
        }
    },
    "consumealcohol1" : {
        label: "Consume Alcohol 1",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -10},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -10},
            {key : "data.characteristics.int.modifier", mode: 2, value: -10},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -10},
        ]
    },
    "consumealcohol2" : {
        label: "Consume Alcohol 2",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -20},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -20},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -20},
            {key : "data.characteristics.int.modifier", mode: 2, value: -20},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -20},
        ]
    },
    "consumealcohol3" : {
        label: "Consume Alcohol 3",
        icon: "",
        changes : [
            {key : "data.characteristics.bs.modifier", mode: 2, value: -30},
            {key : "data.characteristics.ag.modifier", mode: 2, value: -30},
            {key : "data.characteristics.ws.modifier", mode: 2, value: -30},
            {key : "data.characteristics.int.modifier", mode: 2, value: -30},
            {key : "data.characteristics.dex.modifier", mode: 2, value: -30},
        ]
    },
    "stinkingdrunk1" : {
        label: "Marienburgher's Courage",
        icon: "",
        flags: {
            wfrp2e: {
                "effectTrigger": "prefillDialog",
                "effectApplication": "actor",
                "script": `
                    if (args.type=="skill" && args.item.name=="Cool")
                        args.prefillModifiers.modifier += 20`
            }
        }
    }
}


WFRP2E.conditionScripts = {
    "ablaze" : async function (actor) {
        let effect = actor.hasCondition("ablaze")
        let value = effect.conditionValue;

        let leastProtectedLoc;
        let leastProtectedValue = 999;
        for (let loc in actor.status.armour)
        {
            if (actor.status.armour[loc].value != undefined && actor.status.armour[loc].value < leastProtectedValue)
            {
                leastProtectedLoc = loc;
                leastProtectedValue = actor.status.armour[loc].value;
            }
        }
        let rollString = `1d10 + ${value - 1}`

        let roll = await new Roll(`${rollString} - ${leastProtectedValue || 0}`).roll();

        let msg = `<h2>${game.i18n.localize("WFRP2E.ConditionName.Ablaze")}</h2><b>${game.i18n.localize("Formula")}</b>: ${rollString}<br><b>${game.i18n.localize("Roll")}</b>: ${roll.terms.map(i => i.total).splice(0, 3).join(" ")}` // Don't show AP in the roll formula

        actor.runEffects("preApplyCondition", {effect, data : {msg, roll, rollString}})
        value = effect.conditionValue;
        let damageMsg = (`<br>` + await actor.applyBasicDamage(roll.total, {damageType : game.wfrp2e.config.DAMAGE_TYPE.IGNORE_AP, suppressMsg : true})).split("")
        damageMsg.splice(damageMsg.length-1, 1) // Removes the parentheses and adds + AP amount.
        msg += damageMsg.join("").concat(` + ${leastProtectedValue} ${game.i18n.localize("AP")})`)
        let messageData = game.wfrp2e.utility.chatDataSetup(msg);
        messageData.speaker = {alias: actor.data.token.name}
        actor.runEffects("applyCondition", {effect, data : {messageData}})
        return messageData
    },
    "poisoned" : async function (actor) {
        let effect = actor.hasCondition("poisoned")
        let msg = `<h2>${game.i18n.localize("WFRP2E.ConditionName.Poisoned")}</h2>`

        actor.runEffects("preApplyCondition", {effect, data : {msg}})
        let value = effect.conditionValue;
        msg += await actor.applyBasicDamage(value, {damageType : game.wfrp2e.config.DAMAGE_TYPE.IGNORE_ALL, suppressMsg : true})
        let messageData = game.wfrp2e.utility.chatDataSetup(msg);
        messageData.speaker = {alias: actor.data.token.name}
        actor.runEffects("applyCondition", {effect, data : {messageData}})
        return messageData
    },
    "bleeding" : async function(actor) {
        let effect = actor.hasCondition("bleeding")
        let bleedingAmt;
        let bleedingRoll;
        let msg = `<h2>${game.i18n.localize("WFRP2E.ConditionName.Bleeding")}</h2>`

        actor.runEffects("preApplyCondition", {effect, data : {msg}})
        let value = effect.conditionValue;
        msg += await actor.applyBasicDamage(value, {damageType : game.wfrp2e.config.DAMAGE_TYPE.IGNORE_ALL, minimumOne : false, suppressMsg : true})

        if (actor.status.wounds.value == 0 && !actor.hasCondition("unconscious"))
        {
            await actor.addCondition("unconscious")
            msg += `<br>${game.i18n.format("BleedUnc", {name: actor.data.token.name })}`
        }

        if (actor.hasCondition("unconscious"))
        {
            bleedingAmt = value;
            bleedingRoll = (await new Roll("1d100").roll()).total;
            if (bleedingRoll <= bleedingAmt * 10)
            {
                msg += `<br>${game.i18n.format("BleedFail", {name: actor.data.token.name} )} (${game.i18n.localize("Rolled")} ${bleedingRoll})`
                actor.addCondition("dead")
            }
            else if (bleedingRoll % 11 == 0)
            {
                msg += `<br>${game.i18n.format("BleedCrit", { name: actor.data.token.name } )} (${game.i18n.localize("Rolled")} ${bleedingRoll})`
                actor.removeCondition("bleeding")
            }
            else
            {
                msg += `<br>${game.i18n.localize("BleedRoll")}: ${bleedingRoll}`
            }
        }

        let messageData = game.wfrp2e.utility.chatDataSetup(msg);
        messageData.speaker = {alias: actor.data.token.name}
        actor.runEffects("applyCondition", {effect, data : {messageData, bleedingRoll}})
        return messageData
    }
}

WFRP2E.effectTextStyle = CONFIG.canvasTextStyle.clone();
WFRP2E.effectTextStyle.fontSize = "30";
WFRP2E.effectTextStyle.fontFamily="CaslonAntique"

WFRP2E.statusEffects = [
    {
        icon: "systems/wfrp2e/icons/conditions/bleeding.png",
        id: "bleeding",
        label: "WFRP2E.ConditionName.Bleeding",
        flags: {
            wfrp2e: {
                "trigger": "endRound",
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/poisoned.png",
        id: "poisoned",
        label: "WFRP2E.ConditionName.Poisoned",
        flags: {
            wfrp2e: {
                "trigger": "endRound",
                "effectTrigger": "prefillDialog",
                "script": "args.prefillModifiers.modifier -= 10 * this.effect.conditionValue",
                "value": 1
            }
        }

    },
    {
        icon: "systems/wfrp2e/icons/conditions/ablaze.png",
        id: "ablaze",
        label: "WFRP2E.ConditionName.Ablaze",
        flags: {
            wfrp2e: {
                "trigger": "endRound",
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/deafened.png",
        id: "deafened",
        label: "WFRP2E.ConditionName.Deafened",
        flags: {
            wfrp2e: {
                "trigger": "endRound",
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Tests related to hearing",
                    "modifier" : "-10 * this.flags.wfrp2e.value"
                },
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/stunned.png",
        id: "stunned",
        label: "WFRP2E.ConditionName.Stunned",
        flags: {
            wfrp2e: {
                "trigger": "endRound",
                "effectTrigger": "prefillDialog",
                "script": "args.prefillModifiers.modifier -= 10 * this.effect.conditionValue",
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/entangled.png",
        id: "entangled",
        label: "WFRP2E.ConditionName.Entangled",
        flags: {
            wfrp2e: {
                "trigger": "endRound",
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Tests related to movement of any kind",
                    "modifier" : "-10 * this.flags.wfrp2e.value"
                },
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/fatigued.png",
        id: "fatigued",
        label: "WFRP2E.ConditionName.Fatigued",
        flags: {
            wfrp2e: {
                "effectTrigger": "prefillDialog",
                "script": "args.prefillModifiers.modifier -= 10 * this.effect.conditionValue",
                "value" : 1
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/blinded.png",
        id: "blinded",
        label: "WFRP2E.ConditionName.Blinded",
        flags: {
            wfrp2e: {
                "trigger": "endRound",
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Tests related to sight",
                    "modifier" : "-10 * this.flags.wfrp2e.value"
                },
                "value": 1,
                "secondaryEffect" :{
                    "effectTrigger": "targetPrefillDialog",
                    "script": "if (args.item && args.item.attackType=='melee') args.prefillModifiers.modifier += 10 * this.effect.conditionValue",
                }
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/broken.png",
        id: "broken",
        label: "WFRP2E.ConditionName.Broken",
        flags: {
            wfrp2e: {
                "effectTrigger": "prefillDialog",
                "script": "args.prefillModifiers.modifier -= 10 * this.effect.conditionValue",
                "value": 1
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/prone.png",
        id: "prone",
        label: "WFRP2E.ConditionName.Prone",
        flags: {
            wfrp2e: {
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Tests related to movement of any kind",
                    "modifier" : "-20"
                },
                "value": null,
                "secondaryEffect" :{
                    "effectTrigger": "targetPrefillDialog",
                    "script": "if (args.type == 'weapon' && args.item.attackType=='melee') args.prefillModifiers.modifier += 20",
                }
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/fear.png",
        id: "fear",
        label: "WFRP2E.ConditionName.Fear",
        flags: {
            wfrp2e: {
                "effectTrigger": "dialogChoice",
                "effectData" : {
                    "description" : "Tests to affect",
                    "slBonus" : "-1"
                },
                "script" : `
                    if (this.flags.wfrp2e.fearName)
                        this.flags.wfrp2e.effectData.description += " " + this.flags.wfrp2e.fearName
                    else
                        this.flags.wfrp2e.effectData.description += " the source of fear"
                `,
                "value": null
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/surprised.png",
        id: "surprised",
        label: "WFRP2E.ConditionName.Surprised",
        flags: {
            wfrp2e: {
                "value": null,
                "secondaryEffect" :{
                    "effectTrigger": "targetPrefillDialog",
                    "script": "if (args.type == 'weapon' && args.item.attackType=='melee') args.prefillModifiers.modifier += 20",
                }
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/unconscious.png",
        id: "unconscious",
        label: "WFRP2E.ConditionName.Unconscious",
        flags: {
            wfrp2e: {
                "value": null
            }
        }
    },
    {
        icon: "systems/wfrp2e/icons/conditions/grappling.png",
        id: "grappling",
        label: "WFRP2E.ConditionName.Grappling",
        flags: {
            wfrp2e: {
                "value": null
            }
        }

    },
    {
        icon: "systems/wfrp2e/icons/defeated.png",
        id: "dead",
        label: "WFRP2E.ConditionName.Dead",
        flags: {
            wfrp2e: {
                "value": null
            }
        }

    }
]



WFRP2E.effectApplication = {
    "actor" : "Actor",
    "equipped" : "When Item equipped",
    "apply" : "Apply with targeting",
    "damage" : "Apply when Item applies damage",
}

WFRP2E.applyScope = {
    "actor" : "Actor",
    "item" : "Item"
}

WFRP2E.effectTriggers = {
    "invoke" : "Manually Invoked",
    "oneTime" : "Immediate",
    "dialogChoice" : "Dialog Choice",
    "prefillDialog" : "Prefill Dialog",
    "prePrepareData" : "Pre-Prepare Data",
    "prePrepareItems" : "Pre-Prepare Actor Items",
    "prepareData" : "Prepare Data",
    "preWoundCalc" : "Pre-Wound Calculation",
    "woundCalc" : "Wound Calculation",
    "preApplyDamage" : "Pre-Apply Damage",
    "applyDamage" : "Apply Damage",
    "preTakeDamage" : "Pre-Take Damage",
    "takeDamage" : "Take Damage",
    "preApplyCondition" : "Pre-Apply Condition",
    "applyCondition" : "Apply Condition",
    "prePrepareItem" : "Pre-Prepare Item",
    "prepareItem" : "Prepare Item",
    "preRollTest" : "Pre-Roll Test",
    "preRollWeaponTest" : "Pre-Roll Weapon Test",
    "preRollCastTest" : "Pre-Roll Casting Test",
    "preChannellingTest" : "Pre-Roll Channelling Test",
    "preRollPrayerTest" : "Pre-Roll Prayer Test",
    "preRollTraitTest" : "Pre-Roll Trait Test",
    "rollTest" : "Roll Test",
    "rollIncomeTest" : "Roll Income Test",
    "rollWeaponTest" : "Roll Weapon Test",
    "rollCastTest" : "Roll Casting Test",
    "rollChannellingTest" : "Roll Channelling Test",
    "rollPrayerTest" : "Roll Prayer Test",
    "rollTraitTest" : "Roll Trait Test",
    "preOpposedAttacker" : "Pre-Opposed Attacker",
    "preOpposedDefender" : "Pre-Opposed Defender",
    "opposedAttacker" : "Opposed Attacker",
    "opposedDefender" : "Opposed Defender",
    "calculateOpposedDamage" : "Calculate Opposed Damage",
    "targetPrefillDialog" : "Prefill Targeter's Dialog",
    "getInitiativeFormula" : "Get Initiative",
    "endTurn" : "End Turn",
    "endRound" : "End Round",
    "endCombat" : "End Combat"
}

WFRP2E.effectPlaceholder = {

    "invoke" :
    `This effect is only applied when the Invoke button is pressed.
    args:

    none`,
    "oneTime" :
    `This effect happens once, immediately when applied.
    args:

    actor : actor who owns the effect
    `,
    "prefillDialog" :
    `This effect is applied before rendering the roll dialog, and is meant to change the values prefilled in the bonus section
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: the item used of the aforementioned type
    options: other details about the test (options.rest or options.mutate for example)

    Example:
    if (args.type == "skill" && args.item.name == "Athletics") args.prefillModifiers.modifier += 10`,

    "prePrepareData" :
    `This effect is applied before any actor data is calculated.
    args:

    actor : actor who owns the effect
    `,

    "prePrepareItems" :
    `This effect is applied before items are sorted and calculated

    actor : actor who owns the effect
    `,

    "prepareData" :
    `This effect is applied after actor data is calculated and processed.

    args:

    actor : actor who owns the effect
    `,

    "preWoundCalc" :
    `This effect is applied right before wound calculation, ideal for swapping out characteristics or adding multipiliers

    actor : actor who owns the effect
    sb : Strength Bonus
    tb : Toughness Bonus
    wpb : Willpower Bonus
    multiplier : {
        sb : SB Multiplier
        tb : TB Multiplier
        wpb : WPB Modifier
    }

    e.g. for Hardy: "args.multiplier.tb += 1"
    `,

    "woundCalc" :
    `This effect happens after wound calculation, ideal for multiplying the result.

    args:

    actor : actor who owns the effect
    wounds : wounds calculated

    e.g. for Swarm: "wounds *= 5"
    `,

    "preApplyDamage" :
    `This effect happens before applying damage in an opposed test

    args:

    actor : actor who is taking damage
    attacker : actor who is attacking
    opposedTest : object containing opposed test data
    damageType : damage type selected (ignore TB, AP, etc.)
    `,
    "applyDamage" :
    `This effect happens after damage in an opposed test is calculated, but before actor data is updated.

    args:

    actor : actor who is taking damage
    attacker : actor who is attacking
    opposedTest : object containing opposed test data
    damageType : damage type selected (ignore TB, AP, etc.)
    totalWoundLoss : Wound loss after mitigations
    AP : data about the AP used
    updateMsg : starting string for damage update message
    messageElements : arary of strings used to show how damage mitigation was calculated
    `,

    "preTakeDamage" :
    `This effect happens before taking damage in an opposed test

    args:

    actor : actor who is taking damage
    attacker : actor who is attacking
    opposedTest : object containing opposed test data
    damageType : damage type selected (ignore TB, AP, etc.)
    `,

    "takeDamage" :
    `This effect happens after damage in an opposed test is calculated, but before actor data is updated.

    args:

    actor : actor who is taking damage
    attacker : actor who is attacking
    opposedTest : object containing opposed test data
    damageType : damage type selected (ignore TB, AP, etc.)
    totalWoundLoss : Wound loss after mitigations
    AP : data about the AP used
    updateMsg : starting string for damage update message
    messageElements : arary of strings used to show how damage mitigation was calculated
    `,

    "preApplyCondition" :
    `This effect happens before effects of a condition are applied.

    args:

    effect : condition being applied
    data : {
        msg : Chat message about the application of the condition
        <other data, possibly condition specific>
    }
    `,

    "applyCondition" :
    `This effect happens after effects of a condition are applied.

    args:

    effect : condition being applied
    data : {
        messageData : Chat message about the application of the condition
        <other data, possibly condition specific>
    }
    `,
    "prePrepareItem" :
    `This effect is applied before an item is processed with actor data.

    args:

    item : item being processed
    `,
    "prepareItem" :
    `This effect is applied after an item is processed with actor data.

    args:

    item : item processed
    `,
    "preRollTest":
    `This effect is applied before a test is calculated.

    args:

    testData: All the data needed to evaluate test results
    cardOptions: Data for the card display, title, template, etc
    `,
    "preRollWeaponTest" :
    `This effect is applied before a weapon test is calculated.

    args:

    testData: All the data needed to evaluate test results
    cardOptions: Data for the card display, title, template, etc
    `,

    "preRollCastTest" :
    `This effect is applied before a casting test is calculated.

    args:

    testData: All the data needed to evaluate test results
    cardOptions: Data for the card display, title, template, etc
    `,

    "preChannellingTest" :
    `This effect is applied before a channelling test is calculated.

    args:

    testData: All the data needed to evaluate test results
    cardOptions: Data for the card display, title, template, etc
    `,

    "preRollPrayerTest" :
    `This effect is applied before a prayer test is calculated.

    args:

    testData: All the data needed to evaluate test results
    cardOptions: Data for the card display, title, template, etc
    `,

    "preRollTraitTest" :
    `This effect is applied before a trait test is calculated.

    args:

    testData: All the data needed to evaluate test results
    cardOptions: Data for the card display, title, template, etc
    `,

    "rollTest" :
    `This effect is applied after a test is calculated.

    args:

    test: object containing test and result information
    cardOptions: Data for the card display, title, template, etc
    `,
    "rollIncomeTest" :
    `This effect is applied after an income test is calculated.

    args:

    test: object containing test and result information
    cardOptions: Data for the card display, title, template, etc
    `,

    "rollWeaponTest" :
    `This effect is applied after a weapon test is calculated.

    args:

    test: object containing test and result information
    cardOptions: Data for the card display, title, template, etc
    `,

    "rollCastTest" :
    `This effect is applied after a casting test is calculated.

    args:

    test: object containing test and result information
    cardOptions: Data for the card display, title, template, etc
    `,

    "rollChannellingTest" :
    `This effect is applied after a channelling test is calculated.

    args:

    test: object containing test and result information
    cardOptions: Data for the card display, title, template, etc
    `,

    "rollPrayerTest" :
    `This effect is applied after a prayer test is calculated.

    args:

    test: object containing test and result information
    cardOptions: Data for the card display, title, template, etc
    `,

    "rollTraitTest" :
    `This effect is applied after a trait test is calculated.

    args:

    test: object containing test and result information
    cardOptions: Data for the card display, title, template, etc
    `,

    "preOpposedAttacker" :
    `This effect is applied before an opposed test result begins calculation, as the attacker.

    args:

    attackerTest: test object of the attacker
    defenderTest: test object of the defender
    opposedTest: opposedTest object, before calculation
    `,
    "preOpposedDefender" :
    `This effect is applied before an opposed test result begins calculation, as the defender.

    args:

    attackerTest: test object of the attacker
    defenderTest: test object of the defender
    opposedTest: opposedTest object, before calculation
    `,

    "opposedAttacker" :
    `This effect is applied after an opposed test result begins calculation, as the attacker.

    args:

    attackerTest: test object of the attacker
    defenderTest: test object of the defender
    opposedTest: opposedTest object, after calculation
    `,

    "opposedDefender" :
    `This effect is applied before an opposed test result begins calculation, as the defender.

    args:

    attackerTest: test object of the attacker
    defenderTest: test object of the defender
    opposedTest: opposedTest object, after calculation
    `,

    "calculateOpposedDamage" :
    `This effect is applied during an opposed test damage calculation. This effect runs on the attacking actor

    args:

    damage : initial damage calculation before multipliers
    damageMultiplier : multiplier calculated based on size difference
    sizeDiff : numeric difference in sized, will then be used to add damaging/impact
    opposedTest : opposedTest object
    `,

    "getInitiativeFormula" :
    `This effect runs when determining actor's initiative

    args:

    initiative: Calculated initiative value
    `,

    "targetPrefillDialog" :
    `This effect is applied to another actor whenever they target this actor, and is meant to change the values prefilled in the bonus section
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: the item used of the aforementioned type
    options: other details about the test (options.rest or options.mutate for example)

    Example:
    if (args.type == "skill" && args.item.name == "Athletics") args.prefillModifiers.modifier += 10`,

    "endTurn" :
    `This effect runs at the end of an actor's turn

    args:

    combat: current combat
    `,

    "endRound" :
    `This effect runs at the end of a round

    args:

    combat: current combat
    `,
    "endCombat" :
    `This effect runs when combat has ended

    args:

    combat: current combat
    `,

    "this" :
    `

    All effects have access to:
        this.actor : actor running the effect
        this.effect : effect being executed
        this.item : item that has the effect, if effect comes from an item`




}

CONFIG.statusEffects = WFRP2E.statusEffects;

export default WFRP2E
