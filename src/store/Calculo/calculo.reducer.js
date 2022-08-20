/* eslint-disable import/no-anonymous-default-export */
const InitialState = localStorage.estado ? JSON.parse(localStorage.estado) : ({
    transitions: [],
    saldoAtual: 0
})

export default (state = InitialState, { type, payload }) => {
    switch(type){
        case 'SALDO_CALCULATOR' :
            return {...state, saldoAtual: payload.receita - Math.abs(payload.despesa)}
        case 'ADD_TRANSITION' :
            return { ...state, transitions: [...state.transitions, { 
                id: payload.id, 
                nome: payload.nome, 
                valor: +payload.valor 
            }]
        }

        case 'DELETE_TRANSITION' :
            return { ...state, transitions: state.transitions.filter(transition => transition.id !== payload.id)}
            default : 
                return state
    }
}