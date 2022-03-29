import React, { createRef, useEffect, useState } from "react";
import lottie from 'lottie-web';
import animationData from 'animation/teddy.json';
import "./splash-screen.css";
import { Button, Flex, Text, Stack, Checkbox } from '@chakra-ui/react'
import { navigate } from "gatsby"

const SplashScreen = () => {
    let animationContainer = createRef();
    let anim = null;
    useEffect(() => {
        anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData
        });

        return () => anim.destroy(); // optional clean up for unmounting
    }, []);

    const [isSplashScreenRememberChecked, setIsSplashScreenRememberChecked] = useState(true);

    const handleRememberSplashScreen = () => {
        setIsSplashScreenRememberChecked(!isSplashScreenRememberChecked)
    }

    const handleActionButton = (action) => {
        // if (isSplashScreenRememberChecked) {
        //     localStorage.setItem("showSplashScreen", true);
        // }

        navigate(`/${action}`);
    }

    return (
        <div className="splash-screen">
            <div className="splash-container">
                <div className="splash-image" ref={animationContainer}></div>
                <div className="splash-actions fade-in-image">
                    <Stack spacing={5}>
                        <Text fontSize='4xl'>WELL HELLO THERE</Text>

                        <Flex justifyContent="space-around">
                            <Button colorScheme='yellow' size='lg' onClick={() => handleActionButton('blog')}>
                                View Blog
                            </Button>
                            <Button colorScheme='teal' size='lg' onClick={() => handleActionButton('profile')}>
                                View Profile
                            </Button>
                        </Flex>

                        <Flex flexWrap={true} justify="center" iconColor='blue'>
                            <Checkbox defaultChecked onChange={handleRememberSplashScreen}>I don't want to see Koala ever again</Checkbox>
                        </Flex>
                    </Stack>
                </div>
            </div>
        </div>
    )

}

export default SplashScreen;