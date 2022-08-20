import { Popover } from '@material-ui/core'
import { CheckCircle, DeleteForever } from '@material-ui/icons'
import React from 'react'
import { AddTransitionStyle, DeleteTransitionStyle } from '../Styles/Home_styles'

const PopoverApp = ({ open, onClose, Deletar  }) => {
  return (
    <Popover
        open={open}
        onClose={onClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
      }}>
      {
        !Deletar ? (
          <AddTransitionStyle>
            <CheckCircle />
            <p>Transição adicionada</p>
          </AddTransitionStyle>
        ) : (
          <DeleteTransitionStyle>
            <DeleteForever />
            <p>Transição deletada</p>
          </DeleteTransitionStyle>
        )
      }
      </Popover>
  )
}

export default PopoverApp