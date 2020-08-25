import styled from "styled-components"

import Profile from '../../assets/profile.jpg'

import { Props } from '.'

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    margin-bottom: 8px;

    background: ${(props) =>
        props.isHome ? `url(${Profile})` : 'var(--primary)'};
    background-size: cover;
    background-repeat: no-repeat;

    position: relative;
    cursor: pointer;


    &::before {
        content: '';

        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;
        top: calc(50% -4.5px);

        background-color: var(--white);
        border-radius: 50%;

        display: ${props => props.hasNotifications ? 'inline' : 'none'};

    }

    &::after {
        content: '${props => props.mentions && props.mentions}';

        display: ${props => props.mentions && props.mentions > 0 ? 'inherit' : 'none'};

        background-color: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

    }

    transition: .2s;

    &.active, 
    &:hover {
        border-radius: 16px;
        background: ${props => props.isHome ? `url(${Profile})` : 'var(--discord)'};
        background-size: cover;
        background-repeat: no-repeat;

        &::before {
            content: '';

            width: 8px;
            height: 36px;

            position: absolute;
            left: -17px;
            top: calc(50% -4.5px);

            background-color: var(--white);
            border-radius: 25%;

            display: inherit;
        }

        &:hover {
            border-radius: 16px;
        background: ${props => props.isHome ? `url(${Profile})` : 'var(--discord)'};
        background-size: cover;
        background-repeat: no-repeat;

        &::before {
            content: '';

            width: 8px;
            height: 36px;

            position: absolute;
            left: -17px;
            top: calc(50% -4.5px);

            background-color: var(--white);
            border-radius: 25%;

            display: inherit;
        }
        }
    }

    &:active {
        border-radius: 16px;

        &::before {
            content: '';

            width: 8px;
            height: 36px;

            position: absolute;
            left: -17px;
            top: calc(50% -4.5px);

            background-color: var(--white);
            border-radius: 25%;

            display: inherit;
        }
    }

    &:hover {
        &::before {
            content: '';

            width: 8px;
            height: 20px;

            position: absolute;
            left: -17px;
            top: calc(50% -4.5px);

            background-color: var(--white);
            border-radius: 25%;

            display: inherit;

            transition: .2s;
        }
    }
`