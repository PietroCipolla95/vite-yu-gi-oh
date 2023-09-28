<script>
import { state } from "../components/state.js"

export default {
    name: 'AppSelect',

    emits: ['shownFiltered'],

    data() {
        return {
            state,
            filter: '',
        }
    },
    mounted() {
        state.findArchetype();
    },

    methods: {

        shownFiltered(filter) {

            filter = archetype.archetype_name;
            state.findData(this.filter);
            console.log('stai filtrando...', this.filter);

        },
    }

}
</script>

<template>
    <div class="my-3 w-25 my_m">
        <label for="archetype" class="form-label bg-white p-3 px-5 rounded fw-bolder">Archetypes</label>
        <select class="form-select form-select-lg" name="archetype" id="archetype" v-model="filter" @change="shownFiltered">
            <option value="">Select archetype</option>
            <option v-for="archetype in state.archetypes" :value="archetype.archetype_name">
                {{ archetype.archetype_name }}
            </option>
        </select>
    </div>
</template>


<style lang="scss" scoped>
.my_m {
    margin-left: - .8rem;
}
</style>