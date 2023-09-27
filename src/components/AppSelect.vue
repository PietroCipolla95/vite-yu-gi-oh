<script>
import { state } from "../components/state.js"

export default {
    name: 'AppSelect',

    data() {
        return {
            state
        }
    },
    mounted() {
        state.findArchetype()
    }
}
</script>

<template>
    <div class="my-3">
        <label for="archetype" class="form-label">Archetypes</label>
        <select class="form-select form-select-lg" name="archetype" id="archetype">
            <option>Select one</option>
            <option v-for="archetype in state.archetypes" :value="archetype.archetype_name">
                {{ archetype.archetype_name }}
            </option>
        </select>
    </div>
</template>


<style lang="scss" scoped></style>