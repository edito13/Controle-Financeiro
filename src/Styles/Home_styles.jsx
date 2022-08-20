import styled from "styled-components";

import { Button } from "@material-ui/core";

export const ContainerBig = styled.div`
  padding: 50px;

  &.Light{
    background: #eee;
  }

  &.Dark{
    background: #1d1e20;
    color: #eee;
  }
`;

export const ContainerApp = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;

  h1 {
    font-size: 1.8em;
    text-align: center;
    font-weight: 500;
  }

  .ThemeConfigContainer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .8em;
    margin-top: 20px;

    & > p{
      font-size: 1.3em;
    }

    & > div{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: .8em;

      svg{
        font-size: 2em;
      }

      div{
        border-radius: 20px;
        background: #ccc;
        padding: 5px 6px;
        width: 80px;
        cursor: pointer;
        transition: .4s ease-in-out;
    
        span{
          background: #1d1e20;
          display: block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          transition: .4s ease-in-out;
        }
    
        &:hover{
          background: #aeaeae;
    
          span{
            box-shadow: 0px 0px 3px 3px #3e0089;
          }
        }
      }
    }

    &.DarkMood{
      div svg:nth-child(3){
        color: #ccc;
        animation: appears .4s ease-in-out alternate;
      }

      div svg:nth-child(1){
        visibility: hidden;
      }

      div div{
        span{
          background: #3e0089;
          box-shadow: 0px 0px 4px 4px #3e0089;
          transform: translateX(38px)
        }
      }
    }
    &.LightMood{
      svg:nth-child(1){
        color: #1d1e20;
        animation: appears .4s ease-in-out;
      }

      svg:nth-child(3){
        visibility: hidden;
      }
    }

    @keyframes appears{
      from{
        opacity: 0;
        transform: scale(.8);
        visibility: hidden;
      }
      50%{
        opacity: .5;
      }
      to{
        opacity: 1;
        transform: scale(1);
        visibility: visible;
      }
    }
  }
`;

export const Saldo = styled.div`
  margin: 30px 0 15px;

  h2 {
    margin-bottom: 5px;
  }

  p {
    font-size: 2em;
    color: ${({ Theme }) => Theme === 'Dark' ? '#00b6f8' : '#0078a3'};
  }
`;

export const Painel = styled.div`
  display: flex;
  padding: 25px 20px;
  background: #fff;
  justify-content: center;
  gap: 2em;
  box-shadow: 0px 0px 1px 1px #00000020;
  border-radius: 4px;
  margin-bottom: 20px;

  h4{
    color: black;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;

    p {
      font-size: 1.6em;
      font-weight: 500;
    }
  }

  div:nth-child(1) {
    border-right: 2px solid #dedede;
    padding-right: 2em;

    p {
      color: #00b200;
    }
  }

  div:nth-child(2) p {
    color: #e10000;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto Light';
  font-weight: bolder;
  padding-bottom: 4px;
  border-bottom: 1px solid #909090;
`;

export const TransitionsSection = styled.div`
    margin-bottom: 20px;
    h3{
        margin-bottom: 15px;
    }

    ul li{
        width: 100%;
        display: flex;
        justify-content: space-between;

        span{
          color: black;
        }

        .tooltip{
          font-size: 2em;
        }
        
        div{
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 1;
            background: #fff;
            box-shadow: 0px 0px 1px 1px #00000020;

            &.receita{
                border-right: 5px solid #00b200;
            }
            &.despesa{
                border-right: 5px solid #e10000;
            }
        }
        svg{
            color: ${({ Theme }) => Theme === 'Dark' ? '#7300ff' : '#3e0089'};
            font-size: 1.2em;
        }
    }

    ul li + li{
        margin-top: 10px;
    }
  
`;

export const AddTransition = styled.div`
    h3{
        margin-bottom: 10px;
    }

    form{

        div{
            label{
                display: block;
                margin-bottom: 3px;
                font-size: 1.2em;
            }

            input{
                border: none;
                border: 1px solid #dbdbdb;
                border-radius: 4px;
                padding: 8px 10px;
                width: 100%;
                font-size: 1.2em;
            }

            p{
                font-size: .9em;
                margin-bottom: 3px;
            }

            &:nth-child(2) label{
                margin-bottom: 0;
            }
        }

        div + div{
            margin-top: 15px;
        }

        div:nth-child(3){
            display: flex;
            justify-content: center;
        }
    }
`;

export const ButtonForm = styled(Button)`
    &&{
        background: #3e0089;
        color: #fff;
        width: 80%;
        margin: 10px auto 0;
        font-size: 1.2em;
        padding: 12px 0;
        transition: .4s ease-in-out;

        svg{
            font-size: 1.3em;
        }
    }

    &&:hover{
        width: 100%;
        background: #250051;
        letter-spacing: 5px;
    }
`;

export const AddTransitionStyle = styled.div`
  display: flex;
  align-items: center;
  gap: .3em;
  font-size: 1.1em;
  padding: 15px 22px;
  background: #00b200;
  color: white;
`;

export const DeleteTransitionStyle = styled.div`
  display: flex;
  align-items: center;
  gap: .3em;
  font-size: 1.1em;
  padding: 15px 22px;
  background: #3e0089;
  color: white;
`;