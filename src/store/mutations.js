export default {
    addCart(state, payload) {
        // payload新添加的商品（传参）
        let listcart = null;
        for (let item of state.cart) {
            if (item.id === payload.id) {
                listcart = item
            }
        }
        if (listcart) {
            listcart.count += 1
        } else {
            payload.count = 1
            payload.ckecked = true
            state.cart.push(payload)
        }
    },
    add(state, payload) {
        // 变更状态加数量
        let index = state.cart.findIndex(item => item.id == payload.id)
        state.cart[index].count--
    },
    app(state, payload) {
        // 变更状态减数量
        let index = state.cart.findIndex(item => item.id == payload.id)
        state.cart[index].count++
    },
    deleteCar(state, payload) {
        // 删除商品
        let len = state.cart.length;
        for (var i = 0; i < len; i++) {
            if (state.cart[i].id == payload) {
                state.cart.splice(i, 1);
                break;
            }
        }
    },

}