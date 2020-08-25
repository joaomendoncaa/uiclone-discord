import styled from "styled-components"
import { AlternateEmail } from 'styled-icons/material'

export const Container = styled.div`
    grid-area: CD;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--primary);

`

export const MessageList = styled.div`
    padding: 20px 0;

    display: flex;
    flex-direction: column; 

    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;

    /* Custom Scrollbar */

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        scrollbar-width: 4.5px;
        scrollbar-color: var(--tertiary) transparent;

        ::-webkit-scrollbar {
            width: 4.5px;
            display: initial;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--tertiary);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-track {
            background-color: var(--secondary);
            border-radius: 4px;            
        }
    }
`

export const MessageInputWrapper = styled.div`
    width: 100%;

    padding: 0 16px;
`

export const MessageInput = styled.input`
    width: 100%;
    height: 44px;

    padding: 0 10px 0 57px;
    border-radius: 7px;

    color: var(--white);
    background-color: var(--chat-input);

    position: relative;

    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: relative;
        top: calc(-33px);
        left: 14px;
        z-index: 2;
        transition: 180ms ease-in-out;
    }
`

export const MessageInputIcon = styled(AlternateEmail)`
    color: var(--gray);

    width: 24px;
    height: 24px;
`