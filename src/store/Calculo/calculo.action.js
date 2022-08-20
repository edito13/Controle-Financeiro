export const saldoCalculator = (receita, despesa) => ({
    type: 'SALDO_CALCULATOR',
    payload: { receita, despesa }
})

export const addTransition = ({ id, nome, valor }) => ({
    type: 'ADD_TRANSITION',
    payload: { id, nome, valor }
})

export const deleteTransition = id => ({
    type: 'DELETE_TRANSITION',
    payload: { id }
})

