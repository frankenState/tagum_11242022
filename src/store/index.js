import { createStore } from "vuex";
import postsModule from './posts';

const store = createStore({
    modules: {
        posts: postsModule
    }
});

export default store;