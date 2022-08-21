import React from 'react'
import { useSelector } from 'react-redux'
import TransitionItem from './TransitionItem'

const TransitionList = ({ DeleteTransition }) => {

    const Transitions = useSelector(state => state.calculo.transitions)

    return (
        <ul>
            {
                Transitions.length ? Transitions.map(transition => <TransitionItem key={transition.id} Transition={transition} DeleteTransition={DeleteTransition}/>) 
                : <p>Nenhuma transição foi adicionanda ainda!</p>
            }
        </ul>
    )
}

export default TransitionList