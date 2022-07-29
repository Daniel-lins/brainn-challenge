import React from 'react'

import trevo from '../../assets/svg/trevo.svg'
import { Container, Loterias, Numeros } from './styles'
export const Home = () => {
  return (
    <Container>
      <Loterias>
        <div className='container-SelectBox'>
          <select>
            <option value='megasena'>MEGA-SENA</option>
            <option value='Quina'>Quina</option>
            <option value='Lotofácil'>Lotofácil</option>
            <option value='Lotomania'>Lotomania</option>
            <option value='Timemania'>Timemania</option>
            <option value='Dia de sorte'>Dia de sorte</option>
          </select>
        </div>

        <div className='container-lotery-name'>
          <img src={trevo} alt='trevo de 4 folhas' />
          <h2>MEGA-SENA</h2>
        </div>

        <div className='container-Information-concurso'>
          <p>CONCURSO</p>
          <p className='date'>4531-07/04/2020</p>
        </div>
      </Loterias>
      <Numeros></Numeros>
    </Container>
  )
}
