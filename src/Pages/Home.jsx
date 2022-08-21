/* eslint-disable no-throw-literal */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saldoCalculator, addTransition, deleteTransition } from '../store/Calculo/calculo.action';
import { selectDespesas, selectReceitas } from '../store/Calculo/calculo.selector';

import { ContainerBig, ContainerApp, Painel, 
  Saldo, Title, AddTransition, TransitionsSection, 
} from '../Styles/Home_styles';
import FormAddTransition from '../Components/FormAddTransition';
import PopoverApp from '../Components/PopoverApp';
import ThemeContext from '../assets/ThemeContext';
import { Brightness2, Brightness7 } from '@material-ui/icons';
import TransitionList from '../Components/TransitionList';

const Home = () => {

  const { Theme, ToggleTheme } = useContext(ThemeContext)

  const dispatch = useDispatch()
  const estado = useSelector(state => state.calculo)
  const saldoBruto = useSelector(state => state.calculo.saldoAtual)
  const Transitions = useSelector(state => state.calculo.transitions)
  const Receitas = useSelector(selectReceitas)
  const Despesas = useSelector(selectDespesas)
  const AllReceitas = Receitas.length ? Receitas.reduce((previousValue, Value) => previousValue + Value.valor,0) : 0
  const AllDespesas = Despesas.length ? Despesas.reduce((previousValue, Value) => previousValue + Value.valor,0) : 0
  const saldoAtual = saldoBruto.toFixed(2)
  
  const [Fields, setFields] = useState({
    nome: '',
    valor: ''
  });

  const [Deletar, setDeletar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  
  useEffect(() => {
    dispatch(saldoCalculator(AllReceitas, AllDespesas))
  }, [Transitions]);

  useEffect(() => {
    localStorage.setItem('estado', JSON.stringify(estado))
  }, [Transitions]);

  // Activar Popover
  const handleClick = () => {
    setAnchorEl(true)
    setTimeout(() => handleClosePop(), 1700)
};

// Desactivar Popover
const handleClosePop = () => setAnchorEl(false)

  const AddNewTransition = event => {
    event.preventDefault()
    const { nome, valor } = Fields

    try {
      if(nome === '' || valor === '') throw 'Há campos vazios, preencha-os'

      const data = {
        id: Transitions.length + 1,
        nome,
        valor
      }
  
      dispatch(addTransition(data))
      setFields({ nome: '', valor: '' })
      setDeletar(false)
      handleClick()

    } catch (error) {
      alert('Erro: '+error)
    }
  }

  const DeleteTransition = useCallback(id => {
    dispatch(deleteTransition(id))
    setDeletar(true)
    handleClick()
  }, [])

  const handleChanges = e => {
    const { name, value } = e.target
    setFields({...Fields, [name]: value})
  }

  return (
    <ContainerBig className={Theme}>
      <ContainerApp>
        <h1>Controle de despesas</h1>
        <div className={`ThemeConfigContainer ${Theme === 'Dark' ? 'DarkMood' : 'LightMood'}`}>
          <p>Modo { Theme === 'Light' ? 'Claro' : 'Noturno'}:</p>
          <div>
            <Brightness7 />
            <div onClick={ToggleTheme}>
              <span></span>
            </div>
            <Brightness2 />
          </div>
        </div>
        <Saldo Theme={Theme}>
          <h3>SALDO ATUAL</h3>
          <p>KZ {saldoAtual}</p>
        </Saldo>
        <Painel>
          <div>
            <h4>RECEITAS</h4>
            <p>KZ {AllReceitas.toFixed(2)}</p>
          </div>
          <div>
            <h4>DESPESAS</h4>
            <p>KZ {Math.abs(AllDespesas).toFixed(2)}</p>
          </div>
        </Painel>
        <TransitionsSection Theme={Theme}>
          <Title>Transações</Title>
          <TransitionList DeleteTransition={DeleteTransition}/>
        </TransitionsSection>
        <AddTransition>
          <Title>Adicionar transação</Title>
          <FormAddTransition AddNewTransition={AddNewTransition} Fields={Fields} handleChanges={handleChanges}/>
        </AddTransition>
      </ContainerApp>
      <PopoverApp open={anchorEl} onClose={handleClosePop} Deletar={Deletar}/>
    </ContainerBig> 
  )
}

export default Home