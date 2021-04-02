import api from '@/api/bookmark'

const state = () => ({

})

const getters = {

}

const actions = {
    getBookmarks({ commit, state }, payload) {
        window.db.each('select id, category_id, title, url from bookmarks', (err, row) => {
            console.log(err)
            console.log(row)
        }, (err, rowCount) => {
            console.log(err)
            console.log(rowCount)
        })
    }
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}