import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    base_url: '',
    name: null,
    archetype: null,
    card_images: null,

    findData(archetype) {

        this.base_url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

        axios.get(this.base_url, {
            params: {
                archetype: archetype,
                num: 50,
                offset: 0,
            }
        })
            .then(response => {

                this.cards = response.data.data
                console.log(this.cards);

            })

    },

    findArchetype() {

        this.base_url = 'https://db.ygoprodeck.com/api/v7/archetypes.php';

        axios.get(this.base_url)
            .then(response => {

                this.archetypes = response.data

            })

    },

})