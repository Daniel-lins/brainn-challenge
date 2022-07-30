import React, { useEffect, useState } from 'react'

import trevo from '../../assets/svg/trevo.svg'
import api from '../../services/api'

import { Container, Loterias, Numeros } from './styles'

import colors from '../../constants/color'

type loteriaNumberType = {
  id: string
  nome: string
}

type loteriaConCursoType = {
  loteriaId: string
  concursoId: string
}

type concursoType = {
  id: string
  loteria: string
  numeros: [string]
  data: string
}

export const Home = () => {
  const [loteriasNumber, setLoteriasNumber] = useState<loteriaNumberType[]>([])
  const [loteriasConcurso, setLoteriasConcurso] = useState<loteriaConCursoType[]>([])
  const [concurso, setconcurso] = useState<concursoType[]>([])
  const [selectValue, setSelectValue] = useState('0')
  console.log(selectValue)
  useEffect(() => {
    api
      .get('/loterias')
      .then((response) => {
        setLoteriasNumber(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    api.get('/loterias-concursos').then((response) => {
      setLoteriasConcurso(response.data)
    })
  }, [])

  const concursoId = loteriasConcurso
    .filter((res) => res.loteriaId == selectValue)
    .map((res) => res.concursoId)

  const color = colors.filter((res) => res.id == selectValue).map((res) => res.color)

  useEffect(() => {
    api
      .get(`/concursos/${concursoId[0]}`)
      .then((response) => {
        setconcurso([response.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [selectValue])
  console.log(concurso)
  return (
    <Container>
      <Loterias selectValue={selectValue}>
        <div className='container-SelectBox'>
          <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            {loteriasNumber.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nome.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className='container-lotery-name'>
          <img src={trevo} alt='trevo de 4 folhas' />
          {colors
            .filter((res) => res.id == selectValue)
            .map((res) => (
              <h2 key={res.id}>{res.name.toLocaleUpperCase()}</h2>
            ))}
        </div>

        <div className='container-Information-concurso'>
          <p>CONCURSO</p>
          <p className='date'> -07/04/2020</p>
        </div>
      </Loterias>
      <Numeros></Numeros>
    </Container>
  )
}
