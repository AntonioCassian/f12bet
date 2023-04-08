/* eslint-disable vue/no-deprecated-events-api */
import Vue from 'vue';

export default new Vue({
    methods:{
        setSelect(botao) {
            this.$emit('botaoSelecionado', botao)
        },
        onSelect(callback) {
            this.$on('botaoSelecionado', callback)
        }
    }
})