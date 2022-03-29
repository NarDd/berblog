import React from 'react';
import { Button } from '@chakra-ui/react'
import { navigate } from "gatsby"


const Profile = () => {
    const seeKoalaAgain = () => {
        navigate(`/`);
    }

    return (
        <>
            {/* <Button colorScheme='teal' size='lg' onClick={seeKoalaAgain}>
                See Koala Again!
            </Button> */}
            <div className="profile-section-me">
                <div className="profile-section-me-text">
                    <span>Software Developer</span>
                    <br />
                    <span>Based in Singapore</span>
                </div>
            </div>


            {/* <br />
            <span className="subtitle">Located in Singapore</span> */}
        </>

    )
}

export default Profile;