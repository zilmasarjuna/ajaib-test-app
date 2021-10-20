
   
import styled from 'styled-components/macro'

const Container = styled.div`
  width: 1040px;
  margin: 0 auto;
  @media screen and (max-width: 1200px){
    width: 960px;
  }
  @media screen and (max-width: 992px){
    width: 720px;
  }
  @media screen and (max-width: 768px){
    width: 540px;
  }
  @media screen and (max-width: 576px){
    width: 100%;
    padding: 0 15px;
  }
`

export default Container