import React from 'react'
import {Modal} from "react-native";
import {RoundButton} from "../RoundButton";

interface HamburgerProps{
    visible: boolean;
    closeModel: ()=>void;
}

export const Hamburger = ({visible, closeModel}: HamburgerProps) => {
    return (
        <Modal onRequestClose={closeModel} visible={visible} animationType='fade'>
            <RoundButton icon='arrow-back-outline' onPress={closeModel}></RoundButton>
        </Modal>
    )
}