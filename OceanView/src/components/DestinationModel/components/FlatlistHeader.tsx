import React from 'react'
import { Circle, Container, DecoratorCircle, HorizontalContainer, InputsContainer } from './FlatlistHeader.styles'
import { DestinationInput } from '../../DestinationInput/DestinationInput'
import { Spacer } from '../../common/Spacer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { scale } from 'react-native-size-matters'

export const FlatlistHeader = () => {
    const insets = useSafeAreaInsets();

    return (
        <Container>
            <Spacer height={insets.top + scale(80)} />
            <HorizontalContainer>
                <DecoratorCircle>
                    <Circle />
                </DecoratorCircle>
                <Spacer width={scale(10)} />
                <InputsContainer>
                    <DestinationInput
                        placeholder='Enter Location'
                    />
                </InputsContainer>
            </HorizontalContainer>
        </Container>
    )
}
