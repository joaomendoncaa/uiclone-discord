import React from 'react'

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string
    isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>

            {isBot && <span>BOT</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Online - 1</Role>
            <UserRow nickname="insanity" />

            <Role>Bots - 5</Role>
            <UserRow nickname="Bot1[PH]" isBot />
            <UserRow nickname="Bot2[PH]" isBot />
            <UserRow nickname="Bot3[PH]" isBot />
            <UserRow nickname="Bot4[PH]" isBot />
            <UserRow nickname="Bot5[PH]" isBot />
            
            <Role>Offline - 18</Role>
            <UserRow nickname="longusername12345678" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername12345678" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername12345678" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername12345678" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername" />
            <UserRow nickname="longusername" />
        </Container>
    )
}

export default UserList