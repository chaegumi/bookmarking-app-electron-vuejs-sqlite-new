import { createStore } from 'vuex'

import bookmark from '@/store/modules/bookmark'

const store = createStore({
    modules: {
        bookmark
    },
    state() {
        return {
            count: 0
        }

    },
    mutations: {}
})

export default store