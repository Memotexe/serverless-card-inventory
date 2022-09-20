<template>
  <div class="common-layout">
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-main style="align-self: center; padding-left:0% ;">
            <el-form  :model="form">
                <el-form-item label="Card">
                    <el-autocomplete 
                        v-model="form.card"
                        clearable
                        class="inline-input w-50"
                        placeholder="Select a Card"
                        :fetch-suggestions="searchCards"
                    />
                    <!-- Make hte input of the card's name the same length as the grade -->
                </el-form-item>
                <el-form-item label="Grade">
                    <el-select v-model="form.grade" placeholder="please select your grade">
                        <el-option label="ungraded" value="0"/>
                        <el-option label="1" value="1"/>
                        <el-option label="2" value="2"/>
                        <el-option label="3" value="3"/>
                        <el-option label="4" value="4"/>
                        <el-option label="5" value="5"/>
                        <el-option label="6" value="6"/>
                        <el-option label="7" value="7"/>
                        <el-option label="8" value="8"/>
                        <el-option label="9" value="9"/>
                        <el-option label="10" value="10"/>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" plain>Submit</el-button>
                    <el-button type="danger" @click="onCancel" plain>Cancel</el-button>
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

    name: 'AddCard',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            form: {
                card: null,
                grade: null
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
        onSubmit()
        {
            console.log('do stuff');
        },
        onCancel()
        {
            this.form = {
                card: null,
                grade: null,
            };
        }
    }
};
</script>
