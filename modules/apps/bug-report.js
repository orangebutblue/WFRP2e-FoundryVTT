export default class BugReportFormWfrp2e extends Application {

    constructor(app) {
        super(app)

        this.endpoint = "https://aa5qja71ih.execute-api.us-east-2.amazonaws.com/Prod/grievance"

        this.domains = [
            "WFRP2e System",
            "WFRP2e Core",
            "Starter Set",
            "Rough Nights & Hard Days",
            "Enemy In Shadows",
            "Ubersreik Adventures I",
            "Death on the Reik",
            "Middenheim: City of the White Wolf",
            "Archives of the Empire: Vol 1.",
            "Power Behind the Throne",
            "Altdorf: Crown of the Empire",
            "Ubersreik Adventures II",
            "Old World Bundle I",
        ]

        this.domainKeys = [
            "wfrp2e",
            "wfrp2e-core",
            "wfrp2e-starter-set",
            "wfrp2e-rnhd",
            "wfrp2e-eis",
            "wfrp2e-ua1",
            "wfrp2e-dotr",
            "wfrp2e-middenheim",
            "wfrp2e-archives1",
            "wfrp2e-pbtt",
            "wfrp2e-altdorf",
            "wfrp2e-ua2",
            "wfrp2e-owb1"
        ]

        this.domainKeysToLabel = {
            "wfrp2e" : "system",
            "wfrp2e-core" : "core",
            "wfrp2e-starter-set" : "starter-set",
            "wfrp2e-rnhd" : "rnhd",
            "wfrp2e-eis" : "eis",
            "wfrp2e-ua1" : "ua1",
            "wfrp2e-dotr" : "dotr",
            "wfrp2e-middenheim" : "middenheim",
            "wfrp2e-archives1" : "archives",
            "wfrp2e-pbtt" : "pbtt",
            "wfrp2e-altdorf" : "altdorf",
            "wfrp2e-ua2" : "ua2",
            "wfrp2e-owb1" : "owb1"
        }
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.id = "bug-report";
        options.template = "systems/wfrp2e/templates/apps/bug-report.html"
        options.classes.push("wfrp2e", "wfrp-bug-report");
        options.resizable = true;
        options.height = 650;
        options.width = 600;
        options.minimizable = true;
        options.title = "Post Your Grievance"
        return options;
    }


    getData() {
        let data = super.getData();
        data.domains = this.domains;
        data.name = game.settings.get("wfrp2e", "bugReportName")
        return data;
    }

    submit(data) {
        fetch(this.endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: data.title,
                body: data.description,
                assignees: ["moo-man"],
                labels : data.labels
            })
        })
        .then(res => {
            if (res.status == 201)
            {
                ui.notifications.notify(game.i18n.localize("ImperialPost"))
                res.json().then(json => {
                    console.log("%c%s%c%s", 'color: gold', `IMPERIAL POST:`, 'color: unset', ` Thank you for your grievance submission. If you wish to monitor or follow up with additional details like screenshots, you can find your issue here: ${json.html_url}`)
                })
            }
            else
            {
               ui.notifications.error(game.i18n.localize("ImperialPostError"))
               console.error(res)
            }

        })
        .catch(err => {
            ui.notifications.error(game.i18n.localize("Something went wrong"))
            console.error(err)
        })
    }

    activateListeners(html) {
        html.find(".bug-submit").click(ev => {
            let data = {};
            let form = $(ev.currentTarget).parents(".bug-report")[0];
            data.domain = $(form).find(".domain")[0].value
            data.title = $(form).find(".bug-title")[0].value
            data.description = $(form).find(".bug-description")[0].value
            data.issuer = $(form).find(".issuer")[0].value
            let label = $(form).find(".issue-label")[0].value;


            if (!data.domain || !data.title || !data.description)
                return ui.notifications.error(game.i18n.localize("BugReport.ErrorForm"))
            if (!data.issuer)
                return ui.notifications.error(game.i18n.localize("BugReport.ErrorName1"))

            if (!data.issuer.includes("@") && !data.issuer.includes("#"))
                return ui.notifications.notify(game.i18n.localize("BugReport.ErrorName2"))

            data.title = `[${this.domains[Number(data.domain)]}] ${data.title}`
            data.description = data.description + `<br/>**From**: ${data.issuer}`

            data.labels = [this.domainKeysToLabel[this.domainKeys[Number(data.domain)]]]

            if (label)
                data.labels.push(label);

            game.settings.set("wfrp2e", "bugReportName", data.issuer);

            let wfrp2eModules = Array.from(game.modules).filter(m => this.domainKeys.includes(m[0]))

            let versions = `<br/>foundry: ${game.version}<br/>wfrp2e: ${game.system.data.version}`

            for (let mod of wfrp2eModules)
            {
                let modData = game.modules.get(mod[0]);
                if (modData.active)
                    versions = versions.concat(`<br/>${mod[0]}: ${modData.data.version}`)
            }

            data.description = data.description.concat(versions);

            this.submit(data)
            this.close()
        })
    }
}
