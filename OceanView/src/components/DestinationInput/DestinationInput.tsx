import React from 'react'
import { DisabledInput, Input } from './DestinationInput.styles'
import { theme } from '../../theme/theme'

interface DestinationInputProps {
    disabled?: boolean,
    placeholder?: string,
    autofocus?: string,
}

export const DestinationInput = ({
    disabled,
    placeholder,
    autofocus
}: DestinationInputProps) => {

    const sharedProps = { placeholder, autofocus }

    return disabled ? (<DisabledInput {...sharedProps} placeholderTextColor={theme.colors.typography.textDisabled} />) : (<Input {...sharedProps} placeholderTextColor={theme.colors.typography.common} />)

}
