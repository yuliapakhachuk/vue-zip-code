<script setup>
    import { ref } from "vue";

    const text = ref("");

    function onInput(e) {
        text.value = e.target.value;
    }

    const emit = defineEmits(['submit'])

    function handleSubmit() {
        const code = text.value;
        if (!code) { return };
        
        emit('submit', code);
    }

</script>

<template>
    <form @submit.prevent ="handleSubmit">
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
            id="button-addon2">
            Render
        </button>
        </div>
    </form>
</template>

