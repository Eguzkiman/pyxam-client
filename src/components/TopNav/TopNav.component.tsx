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

import { FiLogOut, FiPlay, FiSave } from 'react-icons/fi'

import { Props } from './TopNav.types'
import styles from './_TopNav.module.scss'

export function TopNav(props: Props) {
    const { className, attempt, onRunCode, onSubmitCode } = props

    let [isPopeverOpen, setIsPopoverOpen] = useState<boolean>(false)

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
                            >
                                Run code
                            </Button>
                            <Button
                                colorScheme="green"
                                leftIcon={<Icon as={FiSave} />}
                                onClick={onSubmitCode}
                            >
                                Save
                            </Button>
                            <Popover
                                placement="bottom-start"
                                closeOnBlur={false}
                                isOpen={isPopeverOpen}
                                onClose={() => setIsPopoverOpen(false)}
                                closeOnEsc={true}
                            >
                                <PopoverTrigger>
                                    <IconButton
                                        aria-label="Log out"
                                        icon={<Icon as={FiLogOut} />}
                                        onClick={() => setIsPopoverOpen(true)}
                                    />
                                </PopoverTrigger>
                                <PopoverContent textAlign="left">
                                    <PopoverHeader
                                        pt={4}
                                        fontWeight="bold"
                                        border="0"
                                    >
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
                                                    setIsPopoverOpen(false)
                                                }}
                                            >
                                                Ta'bien, aquí me quedo
                                            </Button>
                                            <Button
                                                colorScheme="red"
                                                onClick={() => {
                                                    setIsPopoverOpen(false)
                                                    localStorage.removeItem(
                                                        'attempt'
                                                    )
                                                    window.location.reload()
                                                }}
                                            >
                                                Ariós!
                                            </Button>
                                        </ButtonGroup>
                                    </PopoverFooter>
                                </PopoverContent>
                            </Popover>
                        </HStack>
                    </Box>
                </Flex>
            </Box>
            <Divider />
        </div>
    )
}

export default TopNav
