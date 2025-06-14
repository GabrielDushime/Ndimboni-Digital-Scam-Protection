import { useState, useEffect } from 'react'
import { Layout, Menu, Button, Drawer } from 'antd'
import { MenuOutlined, HomeOutlined, UserOutlined, MailOutlined, LogoutOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

const { Header: AntHeader } = Layout

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: 'about',
      icon: <UserOutlined />,
      label: <Link href="/about">About</Link>,
    },
    {
      key: 'contact',
      icon: <MailOutlined />,
      label: <Link href="/contact">Contact</Link>,
    },
    {
      key: 'auth',
      icon: <LogoutOutlined />,
      label: <Link href="/auth">Login</Link>,
    },
  ]

  const showMobileMenu = () => {
    setMobileMenuVisible(true)
  }

  const closeMobileMenu = () => {
    setMobileMenuVisible(false)
  }

  return (
    <AntHeader 
      className={`header ${scrolled ? 'shadow-lg' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        padding: '0 20px',
        height: 'auto',
        minHeight: '70px',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <div className="logo">
            <Image
              src="/images/ndimboni_logo.svg" 
              alt="Project Logo"
              width={60}
              height={60}
              className="ndimboni-logo"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          
          {/* Moving Text Container */}
          <div className="movingTextContainer hidden md:block ml-4">
            <div className="movingText">
              <h1 className="animate-moving-text text-white text-lg font-bold">
                🛡️ Ndimboni - Digital Scam Protection Platform
              </h1>
            </div>
          </div>

          {/* Static Title for Mobile screens only */}
          <div className="block md:hidden ml-14">
            <h1 className="text-white text-lg font-bold">
              Ndimboni Platform
            </h1>
          </div>
        </div>

        {/* Desktop Navigation - Fixed overflow issue */}
        <div className="hidden lg:flex flex-shrink-0" style={{ minWidth: '500px' }}>
          <Menu
            mode="horizontal"
            items={menuItems}
            overflowedIndicator={null}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              lineHeight: '70px',
              overflow: 'visible',
              marginRight:'65px'
            }}
            className="bg-transparent border-none desktop-menu"
          />
        </div>

        {/* Header Actions */}
        <div className="headerActions flex-shrink-0">
          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showMobileMenu}
            className="lg:hidden headerIcon text-white hover:text-blue-300"
            size="large"
            style={{marginRight:'25px'}}
          />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Navigation"
        placement="right"
        closable={true}
        onClose={closeMobileMenu}
        open={mobileMenuVisible}
        styles={{
          body: {
            background: 'linear-gradient(135deg, #2980B9, #1A5276)',
            padding: 0,
          },
          header: {
            background: 'linear-gradient(135deg, #2980B9, #1A5276)',
            color: 'white',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          }
        }}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={closeMobileMenu}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
          }}
          className="mobile-menu"
        />
      </Drawer>

    </AntHeader>
  )
}

export default Header