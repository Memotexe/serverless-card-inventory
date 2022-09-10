<template lang="">
    <div>
        <SearchFilter />
        <TypeDropdown />
        <RarityDropdown />
        <SortFilter />
    </div>
</template>
<script>
import SearchFilter from "./SearchFilter.vue"
import TypeDropdown from "./TypeDropdown.vue";
import RarityDropdown from "./RarityDropdown.vue"
import SortFilter from "./SortFilter.vue"

export default {
    name: 'Filters',
    components: {
    SearchFilter,
    TypeDropdown,
    RarityDropdown,
    SortFilter
}
}

</script>
<style >
    
</style>