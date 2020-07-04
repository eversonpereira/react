export const configs = {
    apis: {
        economia: process.env.REACT_APP_ECONOMIA_URL,
        starWars: process.env.REACT_APP_STAR_WARS_BASE_URL
    },
    sentry: process.env.REACT_APP_SENTRY_DSN,
    onesignal: process.env.REACT_APP_ONE_SIGNAL!
    // Colocar exclamação significa que ele sempre vai receber um parametro, forçando a tipagem a aceitar string nesse caso.
}