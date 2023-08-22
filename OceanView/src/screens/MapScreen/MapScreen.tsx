import React from 'react'
import { Container, StyledMapView } from './MapScreen.styles'
import { useMapScreen } from './useMapScreen'
import { RoundButton } from '../../components/RoundButton'
import { MapSearchBar } from '../../components/MapSearchBar'
import { DestinationModel } from '../../components/DestinationModel'

export const MapScreen = () => {
    const { models, operations } = useMapScreen()

    return (
        <Container>
            <StyledMapView
                ref={models.mapRef}
                showsUserLocation
                onUserLocationChange={operations.handleUserLocationChange}
                showsMyLocationButton={false}
            />
            <RoundButton icon="ios-menu-outline" />
            <MapSearchBar onPress={operations.handleMapSearchBarPress} />
            <DestinationModel visible={models.modelVisible} closeModel={operations.closeDestinationModel} />
        </Container>
    )
}
