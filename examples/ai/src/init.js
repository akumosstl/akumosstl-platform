((app) => {
    if (app.params.get('type') === 'site') {
        app.run('config.chatGPT?prd_site_init.json')

    }
})(app)