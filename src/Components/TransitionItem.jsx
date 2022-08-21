import React, { memo } from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'

const TransitionItem = ({ Transition, DeleteTransition }) => {

    console.log('Chegou!')

    return (
        <li>
            <div className={Transition.valor > 0 ? 'receita' : 'despesa'}>
                <span>{Transition.nome}</span>
                {Transition.valor > 0 ? <span>+ KZ {Transition.valor}</span> : <span>- KZ {Math.abs(Transition.valor)}</span>}
            </div>
            <Tooltip title={<p style={{ fontSize: '1.5em' }}>Eliminar Transição</p>} arrow>
                <IconButton onClick={() => DeleteTransition(Transition.id)}>
                    <DeleteForever />
                </IconButton>
            </Tooltip>
        </li>
    )
}

export default memo(TransitionItem)