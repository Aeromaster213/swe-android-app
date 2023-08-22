import React from 'react'
import { Container, HorizontalContainer } from './FlatlistHeader.styles'
import { DestinationInput } from '../../DestinationInput/DestinationInput'
import { Spacer } from '../../common/Spacer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { scale } from 'react-native-size-matters'

export const FlatlistHeader = () => {
    const insets = useSafeAreaInsets();

    return (
        <Container>
            <Spacer height={insets.top + scale(60)} />
            <HorizontalContainer>
                <Container>
                    <DestinationInput 
                    disabled 
                    placeholder='Enter Location' />
                    <DestinationInput />
                </Container>
            </HorizontalContainer>
        </Container>
    )
}
