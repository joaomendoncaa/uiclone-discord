import React from 'react'

import { Container, Avatar, Message, MessageHeader, MessageContent } from './styles'
export { Mention } from './styles'

export interface Props {
    author: string
    date: string
    content: string | React.ReactElement | React.ReactNode
    isMention?: boolean
    isBot?: boolean
}

const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    isMention,
    isBot
}) => {
    return (
        <Container className={isMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}/>

            <Message>
                <MessageHeader>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </MessageHeader>
                <MessageContent>
                    {content}
                </MessageContent>
            </Message>
        </Container>
    )
}

export default ChannelMessage