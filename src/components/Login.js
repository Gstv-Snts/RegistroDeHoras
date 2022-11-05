import react from 'react'
import styled from 'styled-components'
import tituloIcone from '.././images/FormTituloIcone.svg'
import senhaInputIcone from '.././images/SenhaInputIcone.svg'
import artEsquerdaSvg from '.././images/LoginEsquerda.svg'
import logo from '.././images/Logo.png'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const LoginContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 150px;
    flex-wrap: wrap;
    z-index: -1;
`

const ArtEsquerda = styled.div`
    background: url(${artEsquerdaSvg}) no-repeat;
    background-size: cover;
    width: 652px;
    height: 737px;
    @media (max-width: 1187px) {
        display: none;
    }
`

const Form = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    @media (max-width: 1187px) {
        margin-top: 30vh;
    }
`

const Titulo = styled.div`
    font-size: 50px;
    line-height: 32px;
    font-weight: 400;
    color: #3E4756;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    letter-spacing: 0;
    justify-content: center;

`

const TituloPonto = styled.div`
    font-weight: 600;
    width: fit-content;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0;
`

const TituloIcone = styled.div`
    background: url(${tituloIcone}) no-repeat;
    width: 20px;
    height: 20px;
`

const LoginInput = styled.input`
    width: 90%;
    max-width: 350px;
    height: 51px;
    border: 1px solid #666666;
    border-radius: 5px;
    padding: 16px;
    ::placeholder{
        color: #757575;
        font-size: 19px;
        line-height: 16px;
    }
    :focus{
        outline: none;
    }
`

const SenhaContainer = styled.div`
    width: 90%;
    max-width: 350px;
    height: 51px;
    border: 1px solid #666666;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
`

const SenhaInput = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    ::placeholder{
        color: #757575;
        font-size: 19px;
        line-height: 16px;
    }
    :focus{
        outline: none;
    }
`

const SenhaInputIcone = styled.div`
    background: url(${senhaInputIcone}) no-repeat;
    width: 23px;
    height: 15px;
    border: none;
    cursor: pointer;
    :focus{
        outline: none;
    }
`

const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const CheckBox = styled.input`
    width: 18px;
    height: 18px;
    border: 2px solid #707070;
    border-radius: 2px;
    cursor: pointer;
    :hover{
        border: none;
    }
`

const CheckBoxTexto = styled.div`
    font-size: 19px;
    font-weight: 400;
    line-height: 16px;
    color: #666666;
`

const EntrarButton = styled.div`
    width: 90%;
    max-width: 350px;
    height: 42px;
    background-color: #0FF2E7;
    border: 1px solid #0FF2E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
`

const Logo = styled.div`
    background: url(${logo}) no-repeat;
    width: 126px;
    height: 40px;
    position: absolute;
    bottom: 10%;
    right: 10%;
    @media (max-width: 1187px) {
        right: auto;
    }
`

const mostrarSenha = (event) => {
    if (event.currentTarget.parentElement.childNodes[0].type === 'password') {
        event.currentTarget.parentElement.childNodes[0].type = 'text'
    } else {
        event.currentTarget.parentElement.childNodes[0].type = 'password'
    }
}

const Login = () => {
    return (
        <LoginContainer>
            <ArtEsquerda />
            <Form>
                <Titulo>
                    <Titulo>
                        Meu web
                    </Titulo>
                    <TituloPonto>
                        P<TituloIcone />nto
                    </TituloPonto>
                </Titulo>
                <LoginInput placeholder='Login' />
                <SenhaContainer>
                    <SenhaInput placeholder='Senha' type={'password'} />
                    <SenhaInputIcone onClick={(event) => mostrarSenha(event)} />
                </SenhaContainer>
                <CheckBoxContainer>
                    <CheckBox type={'checkbox'} />
                    <CheckBoxTexto>Mantenha-me conectado</CheckBoxTexto>
                </CheckBoxContainer>
                <Route path='/'>
                    <EntrarButton>ENTRAR</EntrarButton>
                </Route>
            </Form>
            <Logo />
        </LoginContainer>
    )
}



export default Login