import React, { useState } from "react"
import { Link } from "gatsby"
import { HStack, Tooltip, IconButton, Spacer } from '@chakra-ui/react'
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin"
import { FiBookOpen } from "@react-icons/all-files/fi/FiBookOpen"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    console.log("here")

    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <HStack justifyContent="center">
      <Link to="/blog">
        <Tooltip label="View all posts" aria-label='View all posts'>
          <IconButton aria-label='Blog' icon={<FiBookOpen />} />
        </Tooltip>
      </Link>
      <Link href='https://www.linkedin.com/in/bernard-ng-b079ab158/' itemProp="url">
        <Tooltip label="View my Linkedin" aria-label='View my Linkedin'>
          <IconButton aria-label='Linkedin' icon={<FiLinkedin />} />
        </Tooltip>
      </Link>
    </HStack>
  )
}

export default Navbar
