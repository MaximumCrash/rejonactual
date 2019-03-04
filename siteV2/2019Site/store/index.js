import Vuex from 'vuex';

const createStore = () => {
     return new Vuex.Store({
          state: {
               page: 'index',
               headerAnime: null
          },
          mutations: {
               updatePage(state, pageName) {
                    state.page = pageName
               },
               setAnime(state, anime) {
                    state.headerAnime = anime;

                    if (state.page !== 'index') {
                         anime.direction = 'normal';
                         anime.play();
                    } 
               }
          }
     })
}

export default createStore;