export const state = () => ({
    list: [],
    projectByPermaLink: {},
    currentProject: null
});

export const mutations = {
    add(state, project) {
        state.list.push(project);
        state.projectByPermaLink[project.permalink] = project;
    },
    emptyList(state) {
        state.list = [];
        state.projectByPermaLink = {};
        state.currentProject = null;
    }, 
    setCurrentProject(state, permalink) {
        state.currentProject = state.projectByPermaLink[permalink];
    },
    unsetCurrentProject(state, permalink) {
        state.currentProject = null;  
    }
};

export const getters = {
    list: state => {
        return state.list
    },
    currentProject: state => {
        return state.currentProject
    }
}

