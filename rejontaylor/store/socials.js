export const state = () => ({
    list: []
});

export const mutations = {
    add(state, socialLink) {
        state.list.push(socialLink);
    },
    emptyList(state) {
        state.list = [];
    }
};

export const getters = {
    list: state => {
        return state.list
    }
}


