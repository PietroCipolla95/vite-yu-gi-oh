<script>
import AppCards from "./AppCards.vue";
import AppSelect from "./AppSelect.vue";
import { state } from "../components/state.js";


export default {
    name: 'AppMain',
    components: {
        AppCards,
        AppSelect,
    },

    data() {
        return {
            state
        }
    },

    mounted() {
        state.findData();
        state.findArchetype();
        state.filterCards();
    },

}
</script>


<template>
    <section class="cards_yugi">
        <div class="container">

            <AppSelect></AppSelect>


            <div class="row my_bg px-2 pt-4 rounded">
                <AppCards :card="card" v-for="card in state.cards"></AppCards>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.my_bg {
    background-color: white;
}
</style>