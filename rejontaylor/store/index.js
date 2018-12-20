export const state = () => ({
    about: {},
    footer: {},
    hero: {}
});

export const mutations = {
    setSite(state, {about, footer, hero}) {
        state.about = about; 
        state.footer = footer;
        state.hero = hero; 
    }
}

export const getters = {
    about: state => {
        return state.about
    }, 
    footer: state => {
        return state.footer
    },
    hero: state => {
        return state.hero
    }
}