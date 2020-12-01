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
} from '@chakra-ui/react'

import { Props } from './TopNav.types'
import styles from './_TopNav.module.scss'

export function TopNav(props: Props) {
    const { className, attempt } = props

    let [isPopeverOpen, setIsPopoverOpen] = useState<boolean>(false)

    return (
        <div className={`${styles.TopNav} ${className || ''}`}>
            <Box p={4}>
                <Flex>
                    <Center>
                        <Text>
                            <b>Suerte {attempt.username}!</b>
                        </Text>
                    </Center>
                    <Text flex={1} textAlign="right">
                        <Popover
                            placement="bottom-start"
                            closeOnBlur={false}
                            isOpen={isPopeverOpen}
                            onClose={() => setIsPopoverOpen(false)}
                            closeOnEsc={true}
                        >
                            <PopoverTrigger>
                                <Button onClick={() => setIsPopoverOpen(true)}>
                                    👋
                                </Button>
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
                                                localStorage.removeItem('user')
                                                window.location.reload()
                                            }}
                                        >
                                            Ariós!
                                        </Button>
                                    </ButtonGroup>
                                </PopoverFooter>
                            </PopoverContent>
                        </Popover>
                    </Text>
                </Flex>
            </Box>
            <Divider />
        </div>
    )
}

export default TopNav
