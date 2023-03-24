<script setup>
    import { ref } from "vue";

    const text = ref("");
    const region = ref({city: "fu", state: "fu"});
    // const BASE_API = ""

    const  emit = defineEmits("submit", region.value)

    function onInput(e) {
        text.value = e.target.value;
    }

    async function search() {
    const code = text.value;
    if (!code) { return };

    const res = await fetch(
        `https://app.zipcodebase.com/api/v1/search?apikey=8e133fd0-c905-11ed-ab11-e7c81d1912fb&codes=${code}&country=us`
    );
    region.value = await res.json().then((data) => data.results[text.value][0]);
    }
</script>

<template>
    <form>
        <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            :value="text"
            @input="onInput"
            placeholder="Enter zip-code"
            required
        />
        <button
            class="btn btn-outline-primary"
            type="submit"
            id="button-addon2"
            v-on:click="search"
        >
            Render
        </button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
