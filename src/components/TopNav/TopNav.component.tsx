import React, { useState } from 'react'

import {
    Center,
    Button,
    ButtonGroup,
    Box,
    Text,
    Flex,
    Divider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Icon,
    IconButton,
    HStack,
} from '@chakra-ui/react'

import { FiLogOut, FiPlay, FiMail } from 'react-icons/fi'

import { Props } from './TopNav.types'
import styles from './_TopNav.module.scss'

export function TopNav(props: Props) {
    const {
        className,
        attempt,
        onRunCode,
        onSubmitCode,
        isRunningCode,
        isSubmittingCode,
    } = props

    let [isLogoutPopoverOpen, setIsLogoutPopoverOpen] = useState<boolean>(false)
    let [isSubmitPopoverOpen, setIsSubmitPopoverOpen] = useState<boolean>(false)

    function renderLogoutPopover() {
        return (
            <Popover
                placement="bottom-start"
                closeOnBlur={false}
                isOpen={isLogoutPopoverOpen}
                onClose={() => setIsLogoutPopoverOpen(false)}
                closeOnEsc={true}
            >
                <PopoverTrigger>
                    <IconButton
                        aria-label="Log out"
                        icon={<Icon as={FiLogOut} />}
                        onClick={() => {
                            setIsLogoutPopoverOpen(true)
                            setIsSubmitPopoverOpen(false)
                        }}
                    />
                </PopoverTrigger>
                <PopoverContent textAlign="left">
                    <PopoverHeader pt={4} fontWeight="bold" border="0">
                        No te vayas!
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Si cierras sesión, perderás tu progreso!
                    </PopoverBody>
                    <PopoverFooter
                        border="0"
                        d="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                    >
                        <ButtonGroup size="sm">
                            <Button
                                colorScheme="red"
                                variant="outline"
                                onClick={() => {
                                    setIsLogoutPopoverOpen(false)
                                }}
                            >
                                Ta'bien, aquí me quedo
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={() => {
                                    setIsLogoutPopoverOpen(false)
                                    localStorage.removeItem('attempt')
                                    window.location.reload()
                                }}
                            >
                                Ariós!
                            </Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        )
    }
    function renderSubmitPopover() {
        return (
            <Popover
                placement="bottom-start"
                closeOnBlur={false}
                isOpen={isSubmitPopoverOpen}
                onClose={() => setIsSubmitPopoverOpen(false)}
                closeOnEsc={true}
            >
                <PopoverTrigger>
                    <Button
                        colorScheme="green"
                        leftIcon={<Icon as={FiMail} />}
                        onClick={() => {
                            setIsSubmitPopoverOpen(true)
                            setIsLogoutPopoverOpen(false)
                        }}
                        isLoading={isSubmittingCode}
                        loadingText={'Saving...'}
                    >
                        Submit
                    </Button>
                </PopoverTrigger>
                <PopoverContent textAlign="left">
                    <PopoverHeader pt={4} fontWeight="bold" border="0">
                        Apoco sí?
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Después de hacer submit, no podras cambiar tus
                        respuestas!
                    </PopoverBody>
                    <PopoverFooter
                        border="0"
                        d="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                    >
                        <ButtonGroup size="sm">
                            <Button
                                colorScheme="green"
                                variant="outline"
                                onClick={() => {
                                    setIsSubmitPopoverOpen(false)
                                }}
                            >
                                Okay, todavía no acabo
                            </Button>
                            <Button
                                colorScheme="green"
                                onClick={() => {
                                    setIsSubmitPopoverOpen(false)
                                    onSubmitCode()
                                }}
                            >
                                Submit!
                            </Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        )
    }

    return (
        <div className={`${styles.TopNav} ${className || ''}`}>
            <Box p={4}>
                <Flex justifyContent="space-between">
                    <Center>
                        <Text>
                            <b>Suerte {attempt.username}!</b>
                        </Text>
                    </Center>
                    <Box textAlign="right">
                        <HStack spacing={4}>
                            <Button
                                colorScheme="green"
                                variant="outline"
                                leftIcon={<Icon as={FiPlay} />}
                                onClick={onRunCode}
                                isLoading={isRunningCode}
                                loadingText="Running..."
                            >
                                Run code
                            </Button>
                            {renderSubmitPopover()}
                            {renderLogoutPopover()}
                        </HStack>
                    </Box>
                </Flex>
            </Box>
            <Divider />
        </div>
    )
}

export default TopNav
