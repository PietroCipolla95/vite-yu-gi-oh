<script>

import { state } from "../components/state.js"

export default {
    name: 'AppCards',
    props: {
        card: Object,
    },
    data() {
        return {
            state
        }
    },
    mounted() {
        state.findData()
    }

}
</script>

<template>
    <div class="col-3 pb-4">
        <div class="card my_card">
            <img :src="card.card_images[0].image_url" alt="" class="border-bottom border-black border-2">
            <div class="card-body card_body_bg">
                <h6 class="card_name">
                    {{ card.name }}
                </h6>
                <div class="meta">
                    {{ card.archetype }}
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.my_card {
    border: 2px solid black;
    height: 550px;

    .card_name {
        height: 25%;
    }

    .card_body_bg {
        background-color: grey;
    }

}
</style>