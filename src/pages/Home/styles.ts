import styled from 'styled-components'
import { colors } from '../../styles/Colors'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const Loterias = styled.div<{ selectValue: string }>`
  background-color: ${colors.megaSena};
  background-size: cover;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.white};

  .container-SelectBox {
    select {
      cursor: pointer;
      padding: 10px;
      border-radius: 10px;
      width: 150px;
      border: none;
      font-size: 14px;
    }
  }
  .container-SelectBox {
    margin-top: 30px;
  }

  .container-lotery-name {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .container-Information-concurso {
    p {
      margin-bottom: 5px;
    }
    .date {
      font-weight: 600;
    }
  }

  div {
    margin: 60px;
  }
`
export const Numeros = styled.div`
  background-color: ${colors.white};
  width: 70%;
`
