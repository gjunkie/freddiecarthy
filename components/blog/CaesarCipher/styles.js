import styled from 'styled-components'

export const CaesarBox = styled.div`
  background-color: #1d1d1d;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  height: 495px;
  margin-top: 50px;
  padding: 30px;
  position: relative;

  a {
    font-size: 1rem;
  }
`

export const Icon = styled.div`
  align-items: center;
  background: #ff3864;
  border-radius: 20px;
  display: flex;
  color: #ffffff;
  font-weight: 600;
  height: 35px;
  justify-content: center;
  position: absolute;
  right: -15px;
  top: -20px;
  width: 165px;
  font-size: 1rem;
`

export const Slider = styled.input`
  width: 100%;
`

export const Text = styled.p`
  flex-grow: 1;
  font-size: 1.05em;
  line-height: 1.5;
  margin-bottom: 0;
`

export const LinkWrapper = styled.div`
  text-align: right;
`
