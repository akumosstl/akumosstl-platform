((app) => {
    if (app.params.get('name') === 'index-carousel') {
        app.run('config?index-config.json')

    }
})(app)