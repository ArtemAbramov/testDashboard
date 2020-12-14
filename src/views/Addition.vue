<template>
    <form class="addition-form">
        <span @click="error = false" v-if="error" class="validation-message">Пожалуйста заполните все поля</span>
        <input v-model="title" type="text" class="addition-form__input" placeholder="Название">
        <textarea v-model="desc" class="addition-form__input" rows="10" placeholder="Описание"></textarea>
        <button type="submit" class="btn" @click.prevent="cardAddition">Добавить</button>
        <router-link class="btn" to="/">Отмена</router-link>
    </form>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import useDashboard from '@/hooks/dashboard'

export default {
    setup() {
        const router = useRouter()

        const {addCard} = useDashboard()

        const title = ref('')
        const desc = ref('')
        const error = ref(false)

        const cardAddition = () => {
            if (title.value === '' || desc.value === '') {
                error.value = true
            } else {
                addCard({ title, desc })
                router.push('/')
            }
        }

        return {title, desc, cardAddition, error}
    }
}
</script>

<style scoped>
.addition-form {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
    width: 25rem;
}

.addition-form__input {
    margin-bottom: 1rem;
    font-size: .8rem;
    padding: 0.5rem;
}

.btn {
    margin-bottom: 1rem;
}

.validation-message {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 1rem;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 600;
    text-align: center;
    background-color: brown;
    cursor: pointer;
}
</style>
