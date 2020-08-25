import React from 'react'

import { Container, HashTagIcon, Title, Separator, Description } from './styles'

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashTagIcon />

            <Title>chat-geral</Title>

            <Separator />

            <Description>chat geral description</Description>
        </Container>
    )
}

export default ChannelInfo