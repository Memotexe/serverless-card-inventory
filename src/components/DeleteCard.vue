<template>
  <div class="common-layout">
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-main style="align-self: center; padding-left:0% ;">
            <el-form :model="form">
                <el-form-item
                    v-for="(card, index) in form.DeleteList"
                    :key="index"
                    :label="'Card ' + index"
                >
                    <el-autocomplete 
                        v-model="form.DeleteList[index]"
                        clearable
                        class="inline-input w-50"
                        placeholder="Select a Card"
                        :fetch-suggestions="searchCards"
                    />
                    <el-button class="mt-2" @click.prevent="removeCardFromDeleteList(index)">Remove</el-button>
                    <!-- Make hte input of the card's name the same length as the grade -->
                </el-form-item> 
                <el-form-item>
                    <el-button type="danger" @click="onSubmit" plain>Submit</el-button>
                    <el-button type="warning" @click="addCardToDelete" plin>Another Card</el-button>
                    <el-button type="primary" @click="onCancel" plain>Cancel</el-button>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <Footer/>
        </el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {

    name: 'DeleteCard',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            form: {
                DeleteList: ['']
            },
            CardList: [
                {value: "card 1", other: "another field"},
                {value: "card 2", other: "yet another field"},
                {value: "card 3", other: "final extra field"},
                {value: "test", other: "test data"},
                {value: "test2", other: "test data"},
                {value: "test 3", other: "test data"},
                {value: "carl", other: "carl Jones"},
            ]
        }
    },
    methods: {
        searchCards(queryString, cb)
        {
            let cards = this.CardList;
            if (queryString == "null")
            {
                queryString = null;
            }
            const results = queryString ? cards.filter(this.cardFilter(queryString)) : cards;
            cb(results);
        },
        cardFilter(queryString)
        {
            return (card) => {
                return (card.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            }
        },
        removeCardFromDeleteList(index)
        {
            this.form.DeleteList.splice(index, 1);
        },
        addCardToDelete()
        {
            this.form.DeleteList.push('');
        },
        onSubmit()
        {
            console.log('do stuff');
            console.log(this.form.DeleteList);
        },
        onCancel()
        {
            this.form = {
                DeleteList: [''],
            };
        }
    }
};
</script>
