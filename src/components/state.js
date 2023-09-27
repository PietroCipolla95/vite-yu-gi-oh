import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    base_url: '',
    name: null,
    archetype: null,
    card_images: null,

    findData() {

        this.base_url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0';

        axios.get(this.base_url)
            .then(response => {

                this.cards = response.data.data

            })

    },

    findArchetype() {

        this.base_url = 'https://db.ygoprodeck.com/api/v7/archetypes.php';

        axios.get(this.base_url)
            .then(response => {

                this.archetypes = response.data
                console.log(this.archetypes);

            })

    },

    filterCards() {

        this.base_url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

        axios.get(this.base_url, {
            params: {
                archetype: 'Alien',
                num: 30,
                offset: 0,
            }
        })
            .then(response => {

                this.filteredLink = response;
                console.log(this.filteredLink);

            })
    }

})