import styled from '@emotion/styled'
import React from 'react'


const InputStyled = styled.div`
position: relative;
height: 50px;
overflow: hidden;
margin-bottom: 20px;
input{
    width: 100%;
    height: 100%;
    padding-top: 20px;
    border: none;
    outline: none;
&:focus + label span
{
    transform: translateY(-150%);
    font-size: 14px;
    color: #C9C9C9
}
&:focus + label:after{
   transform: translateX(0%);
}
&:valid + label span{
    transform: translateY(-150%);
    font-size: 14px;
    color: #C9C9C9
}
}
label{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid #C9C9C9;
    &::after{
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-bottom: 2px solid #0E402D;
        left: 0;
        bottom: 0;
        transform: translateX(-100%);
        transition: transform 0.3s ease;

    }
    span{
        position: absolute;
        bottom: 5px;
        left: 0;
        transition: all 0.3s ease;
    }
}
label.invalid-input{
    border-bottom: 1px solid #ec2828; 
    &::after{
        border-bottom: 2px solid #e73819;
    }
  span{
        color:#ec2828;
    }
}
`
interface InputProps {
    validation: boolean
    type: string
    name: string
    required?: boolean
    label: string
    role: string
    autocomplete?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ onChange, type, name, required, label, role, validation }) => {
    return (
        <InputStyled>
            <input
                role={role}
                type={type}
                name={name}
                required={required}
                onChange={onChange}
            />
            <label
                htmlFor={name}
                className={`${validation && `invalid-input`}`}>
                <span>{label}</span>
            </label>

        </InputStyled>
    )
}

export default Input
