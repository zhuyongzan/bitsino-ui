import {
    setStore,
    getStore
} from '@/util/store'

const daping = {
    state: {
        menuId: getStore({
            name: 'menuId'
        }) || 1

    },
    mutations: {
        SET_DAPING_MENU: (state, id) => {
            state.menuId = id;
            setStore({
                name: 'menuId',
                content: state.menuId,
                type: 'session'
            })
        }
    }
}
export default daping
