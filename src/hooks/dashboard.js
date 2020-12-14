import {ref} from 'vue'

const cards = ref(
    [
        {
            title: 'test1',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nesciunt!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nesciunt!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nesciunt!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nesciunt!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nesciunt!'
        },
        {
            title: 'test2',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nesciunt!'
        }
    ]
)

if (localStorage.getItem('dashboard')) {
    cards.value = JSON.parse(localStorage.getItem('dashboard'))
    // console.log(JSON.parse(localStorage.getItem('dashboard')))
}

export default function useDashboard() {
    const addCard = (card) => {
        cards.value.push(card)
    }

    window.addEventListener('unload', () => {
        localStorage.setItem('dashboard', JSON.stringify(cards.value))
    })

    return {cards, addCard}
}