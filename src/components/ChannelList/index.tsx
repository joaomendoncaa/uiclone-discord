import React from 'react'

import ChannelButton from '../ChannelButton'

import { Container } from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <ChannelButton channelName="chat-geral" selected />
            <ChannelButton channelName="workspace" />
            <ChannelButton channelName="warframe" />
            <ChannelButton channelName="valorant" />
        </Container>
    )
}

export default ChannelList