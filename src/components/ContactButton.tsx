import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, Text, ModalOverlay, Stack, useDisclosure, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { mailToText } from "./types";
import { SOCIALS } from "./layout/types";

export default function ContactButton({ children }: { children: React.ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale" size="xl">
                <ModalOverlay bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)' />
                <ModalContent bgColor="primary.dark"
                    border={1} borderStyle="solid" borderColor="#b355fd" h="70vh" borderRadius="16px">
                    <ModalCloseButton color="#f5f5f5" />
                    <ModalBody as={Stack} align="center" color="#8f8f8f" justify="center" gap="50px"
                        fontFamily="primary" fontWeight={400}
                    >
                        <Box>
                            <Text align="center" mb="12px" fontSize="1.25rem">Drop me an email at</Text>
                            <Link as={NextLink} href={mailToText} color="#BB86FF" fontSize="1.5rem" textDecoration="underline">shenoy.shailesh21@gmail.com</Link>
                        </Box>
                        <Text>or</Text>
                        <Box>
                            <Link as={NextLink} href={SOCIALS["Github"].link} textDecoration="none" mr="24px"
                                _hover={{ textDecoration: "none" }} target="_blank">
                                <Box as="i" className="devicon-github-original" fontSize="4xl" color="#f5f5f5" />
                            </Link>
                            <Link as={NextLink} href={SOCIALS["Linkedin"].link} textDecoration="none"
                                _hover={{ textDecoration: "none" }} target="_blank">
                                <Box as="i" className="devicon-linkedin-plain" fontSize="4xl" color="#f5f5f5" />
                            </Link>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Button variant="none" onClick={onOpen} fontFamily={"primary"}
                fontSize="1.5rem"
                fontWeight={400} px="2.5rem" py="1.5rem" borderRadius="8px" bgColor="#f5f5f5" color="#141414"
                _hover={{ bgColor: "#b355fd", color: "#f5f5f5" }}>
                {children}
            </Button>
        </>
    );
}