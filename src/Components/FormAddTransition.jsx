import React from 'react'
import AddCircle from '@material-ui/icons/AddCircle';
import { ButtonForm } from '../Styles/Home_styles'

const FormAddTransition = ({ AddNewTransition, Fields, handleChanges }) => (
    <form onSubmit={AddNewTransition}>
        <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name='nome' value={Fields.nome} id='nome' onChange={handleChanges} />
        </div>
        <div>
            <label htmlFor="valor">Valor</label>
            <p>(negativo - despesas, postivo - receitas)</p>
            <input type="number" name='valor' value={Fields.valor} id='valor' onChange={handleChanges} />
        </div>
        <div>
            <ButtonForm type='submit' startIcon={<AddCircle />} variant='contained' disableElevation>Adicionar</ButtonForm>
        </div>
    </form>
)

export default FormAddTransition