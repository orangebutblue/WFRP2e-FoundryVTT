

export default function () {
    Hooks.on("setup", () => {
        // Localize strings in the  game.wfrp2e.config.object
        for (let obj of game.wfrp2e.config.toTranslate) {
                for (let el in game.wfrp2e.config[obj]) {
                    if (typeof game.wfrp2e.config[obj][el] === "string") {
                        game.wfrp2e.config[obj][el] = game.i18n.localize(game.wfrp2e.config[obj][el])
                    }
                }
        }
    })
}
