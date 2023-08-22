import { useEffect, useRef, useState } from 'react'
import type { UserLocationChangeEvent } from 'react-native-maps'
import type MapView from 'react-native-maps'

const LATITUDE_DELTA = 0.0022
const LONGITUDE_DELTA = 0.005

export const useMapScreen = () => {
    const mapRef = useRef<MapView>(null)
    const [userLocation, setUserLocation] = useState<UserLocationChangeEvent['nativeEvent']['coordinate']>()
    const [modelVisible, setModelVisible] = useState(false)
    const [hamVisible, setHamVisible] = useState(false)

    useEffect(() => {
        if (userLocation) {
            mapRef.current?.animateToRegion({
                longitude: userLocation.longitude,
                latitude: userLocation.latitude,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATITUDE_DELTA,
            })
        }
    }, [userLocation])

    const handleUserLocationChange = ({ nativeEvent: { coordinate } }: UserLocationChangeEvent) => {
        setUserLocation(coordinate)
        console.log(coordinate)
    }

    const handleMapSearchBarPress = () => {
        setModelVisible(true)
    }

    const closeDestinationModel = () => {
        setModelVisible(false)
    }

    const handleHamburgerMenuPress = () => {
        setHamVisible(true)
    }

    const closeHamMenu = () => {
        setHamVisible(false)
    }
    return {
        models: {
            mapRef,
            modelVisible,
            hamVisible,
        },
        operations: {
            handleUserLocationChange,
            handleMapSearchBarPress,
            closeDestinationModel,
            handleHamburgerMenuPress,
            closeHamMenu,
        }
    }
}
