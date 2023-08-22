import React from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'
import { RoundButton } from '../RoundButton'
import { StyledFlatlist } from './DestinationModel.styles'
import { FlatlistHeader } from './components/FlatlistHeader'

interface DestinationModelProps {
    visible: boolean;
    closeModel: () => void
}

export const DestinationModel = ({ visible, closeModel }: DestinationModelProps) => {

    const renderFlatlistItem = () => {
        return null
    }

    const handleOnPress = () => {
        console.log("onPress");
        closeModel();
    }

    return (
        <Modal onRequestClose={handleOnPress} visible={visible} animationType='fade'>
            <StyledFlatlist
                data={[]}
                renderItem={renderFlatlistItem}
                ListHeaderComponent={FlatlistHeader}
            />
            <RoundButton icon="arrow-back-outline" onPress={handleOnPress} />

        </Modal >
    )
}
