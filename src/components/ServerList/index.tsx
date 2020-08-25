import React from 'react'

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton selected />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={50} />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={144} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />

        </Container>

    )
}

export default ServerList