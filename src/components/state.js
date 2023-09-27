import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    name: null,
    archetype: null,
    card_images: null,

    findData() {

        axios.get(this.base_url)
            .then(response => {

                console.log(response);

            })

    }

})