import { createStore } from "vuex";
import postsModule from './posts';
import usersModule from './users';

const store = createStore({
    modules: {
        posts: postsModule,
        users: usersModule
    }
});

export default store;