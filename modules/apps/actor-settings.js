

export default class ActorSettings extends FormApplication {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.id = "actor-settings";
        options.template = "systems/wfrp2e/templates/apps/actor-settings.html";
        options.height = "auto";
        options.width = 400;
        options.minimizable = true;
        options.title = "Actor Settings"
        return options;
    }

    getData() {
        let data = super.getData()
        data.tables =  game.wfrp2e.config.hitLocationTables

        data.displays = {}

        if (this.object.data.type == "character")
        {
            data.displays.size = true;
            data.displays.movement = true;
            data.displays.wounds = true;
            data.displays.critwounds = true;
            data.displays.corruption = true;
            data.displays.encumbrance = true;
            data.displays.hitloc = true;
            data.displays.equipPoints = true;
        }
        if (this.object.data.type == "npc")
        {
            data.displays.size = true;
            data.displays.movement = true;
            data.displays.wounds = true;
            data.displays.critwounds = true;
            data.displays.encumbrance = true;
            data.displays.hitloc = true;
            data.displays.equipPoints = true;
        }
        if (this.object.data.type == "creature")
        {
            data.displays.size = true;
            data.displays.movement = true;
            data.displays.wounds = true;
            data.displays.critwounds = true;
            data.displays.encumbrance = true;
            data.displays.hitloc = true;
            data.displays.equipPoints = true;
        }
        if (this.object.data.type == "vehicle")
        {
            data.displays.vehicle = true;
            data.displays.critwounds = true;
            data.displays.hitloc = true;
        }

        return data
    }


    async _updateObject(event, formData) {
        this.object.update(formData)
    }



}
