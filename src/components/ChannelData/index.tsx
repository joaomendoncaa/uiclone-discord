import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, MessageList, MessageInputWrapper, MessageInput, MessageInputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if (div) {
            div.scrollTop = div.scrollHeight
        }
    }, [messagesRef])

    return (
        <Container>

            <MessageList ref={messagesRef}>
                {Array.from(Array(70).keys()).map((n) => (
                    <ChannelMessage 
                        key={n}                  
                        author="insanity"
                        date="2020/08/24"
                        content="have you seen all the UI clones I made?"
                    />
                ))}
                    
                <ChannelMessage                   
                    author="Bot1[PH]"
                    date="2020/08/25"
                    content={
                        <>
                            <Mention>@insanity</Mention> did you check all my work regarding back-end? Remember to check it out! 😀
                        </>
                    }
                    isMention
                    isBot
                />
            </MessageList>

            <MessageInputWrapper>
                <MessageInput type="text" placeholder="Message #chat-geral" />
                <MessageInputIcon />
            </MessageInputWrapper>

        </Container>
    )
}

export default ChannelData