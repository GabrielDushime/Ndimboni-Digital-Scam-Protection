import { useState, useEffect } from 'react'
import { Layout, Menu, Button, Drawer } from 'antd'
import { MenuOutlined, HomeOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
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
      label: <Link href="/">About</Link>,
    },
    {
      key: 'contact',
      icon: <MailOutlined />,
      label: <Link href="/">Contact</Link>,
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

        {/* Desktop Navigation - Float Right */}
        <div className="hidden lg:flex flex-shrink-0 mr-10" style={{ minWidth: '400px' }}>
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
              justifyContent: 'flex-end'
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
        bodyStyle={{
          background: 'linear-gradient(135deg, #2980B9, #1A5276)',
          padding: 0,
          
         
         
        }}
        headerStyle={{
          background: 'linear-gradient(135deg, #2980B9, #1A5276)',
          color: 'white',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
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

      <style jsx>{`
        .mobile-menu .ant-menu-item {
          color: white !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        
        .mobile-menu .ant-menu-item:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: #AED6F1 !important;
        }
        
        .mobile-menu .ant-menu-item-selected {
          background-color: rgba(255, 255, 255, 0.15) !important;
          color: #AED6F1 !important;
        }

        .ant-menu-horizontal {
          border-bottom: none !important;
        }



        .desktop-menu.ant-menu-horizontal {
          display: flex !important;
          flex-wrap: nowrap !important;
          width: 100% !important;
        }

        .desktop-menu .ant-menu-item {
          color: white !important;
          border-bottom: 2px solid transparent !important;
          flex-shrink: 0 !important;
          white-space: nowrap !important;
          display: flex !important;
        }

        .desktop-menu .ant-menu-item:hover {
          color: #AED6F1 !important;
          border-bottom: 2px solid #AED6F1 !important;
        }

        .desktop-menu .ant-menu-item-selected {
          color: #AED6F1 !important;
          border-bottom: 2px solid #AED6F1 !important;
        }

        .ant-menu-horizontal > .ant-menu-item {
          color: white !important;
          border-bottom: 2px solid transparent !important;
        }

        .ant-menu-horizontal > .ant-menu-item:hover {
          color: #AED6F1 !important;
          border-bottom: 2px solid #AED6F1 !important;
        }

        .ant-menu-horizontal > .ant-menu-item-selected {
          color: #AED6F1 !important;
          border-bottom: 2px solid #AED6F1 !important;
        }

        /* Completely disable overflow behavior */
        .desktop-menu .ant-menu-overflow {
          display: none !important;
        }

        .desktop-menu .ant-menu-overflow-item {
          display: none !important;
        }

        .desktop-menu .ant-menu-overflow-item-rest {
          display: none !important;
        }

        .desktop-menu .ant-menu-overflow-item-suffix {
          display: none !important;
        }

        .desktop-menu .ant-menu-submenu-arrow {
          display: none !important;
        }

        /* Force all items to be visible */
        .desktop-menu .ant-menu-item-hidden {
          display: flex !important;
          visibility: visible !important;
        }

        .desktop-menu li {
          display: flex !important;
        }

        /* Logo styling */
        .ndimboni-logo {
          border-radius: 50%;
          border: 2px solid #AED6F1;
          box-shadow: 0 0 10px rgba(41, 128, 185, 0.3);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </AntHeader>
  )
}

export default Header