import React from 'react'
import { Modal } from 'react-native'
import { RoundButton } from '../RoundButton'
import { StyledFlatlist } from './DestinationModel.styles'
import { FlatlistHeader } from './components/FlatlistHeader'

interface DestinationModelProps {
    visible: boolean,
    closeModel: () => void,
}

export const DestinationModel = ({ visible, closeModel }: DestinationModelProps) => {
    const renderFlatlistItem = () => {
        return null
    }
    const handleButtonPress = () => {
        console.log('Button Pressed');
        closeModel();
    }
    return (
        <Modal onRequestClose={handleButtonPress} visible={visible} animationType='fade'>
            <RoundButton icon="arrow-back-outline" onPress={handleButtonPress} />
            <StyledFlatlist
                data={[]}
                renderItem={renderFlatlistItem} 
                ListHeaderComponent={FlatlistHeader}
            />
        </Modal >
    )
}
