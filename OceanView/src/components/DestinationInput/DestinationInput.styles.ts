import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const DisabledInput = styled.TextInput(({theme}) => {
    return {
        minHeight: scale(30),
        width: "100%",
        paddingHorizontal: scale(5),
    }
})
export const Input = styled.TextInput({})