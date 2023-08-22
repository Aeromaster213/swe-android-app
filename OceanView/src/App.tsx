import React from 'react'
import { MapScreen } from './screens/MapScreen'
import { LocationPermissionsService } from './storage/LocationPermissionsService'
import { ThemeProvider } from './theme/ThemeProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MapScreen />
        <LocationPermissionsService />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
