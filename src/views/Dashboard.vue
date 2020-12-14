<template>
    <div class="container"> 
        <router-link to="/addition" class="btn">Добавить</router-link>
        <label class="toggler">
            <input type="checkbox" class="toggler__checkbox" v-model="dragEnabled">
            <span>Drag'N'Drop</span>
        </label>
        <draggable
            v-model="cards"
            :disabled="!dragEnabled"
            item-key="name"
            class="dashboard-list"
            @start="dragging = true"
            @end="dragging = false"
        >
            <template #item="{ element }">
                <card 
                    :title="element.title"
                    :desc="element.desc"
                />
            </template>
        </draggable>
    </div>
</template>

<script>
import Card from '@/components/Card'
import useDashboard from '@/hooks/dashboard'
import draggable from 'vuedraggable'
import { ref } from 'vue'

export default {
    components: {Card, draggable},
    setup() {
        const {cards} = useDashboard()

        const dragEnabled = ref(true)
        const dragging = ref(false)

        return {
            cards,
            dragEnabled,
            dragging
        }
    }
}
</script>

<style scoped>
.dashboard-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-top: 3rem;
}

.toggler {
    display: block;
    margin-top: 1rem;
}

.toggler__checkbox {
    margin-right: 0.5rem;
}
</style>
