import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);
//创建对象
let store = new Vuex.Store({
    state, //存储状态
    mutations, //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    getters, // 获取数据并渲染
    actions //异步操作
});
//导出对象
export default store;