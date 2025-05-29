import { useState, useEffect } from 'react'
import { Typography, Button, Row, Col, Card, Space } from 'antd'
import { ArrowRightOutlined, SecurityScanOutlined, BulbOutlined, ExclamationCircleOutlined, UserOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

const { Title, Paragraph, Text } = Typography

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: <SecurityScanOutlined className="text-3xl text-red-600" />,
      title: 'AI-Powered Scam Detection',
      description: 'Advanced machine learning algorithms using NLP and anomaly detection to identify fraudulent activities, phishing attempts, and fake investment schemes in real-time.',
    },
    {
      icon: <BulbOutlined className="text-3xl text-red-600" />,
      title: 'Interactive Education Platform',
      description: 'Engaging simulations and educational resources to raise awareness about digital scams, targeting youth, entrepreneurs, and the general public.',
    },
    {
      icon: <ExclamationCircleOutlined className="text-3xl text-red-600" />,
      title: 'Centralized Reporting System',
      description: 'Secure channel for reporting scam incidents with WhatsApp API integration, enabling better collaboration between citizens and authorities.',
    },
  ]

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
  <div className="min-h-screen bg-gray-100 p-2">
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

  {/* Hero Section */}
  <section className="bg-white text-dark py-20">
  <div className="container mx-auto px-0">
    <Row gutter={[32, 32]} align="middle">
      <Col xs={24} lg={12}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title level={1} className="mb-6" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2980B9' }}>
            <span style={{ color: '#1A5276' }}>Ndimboni</span>{' '}
            - Combat Digital Scams
          </Title>
          <Paragraph className="text-base mb-8 leading-relaxed" style={{ color: '#1A5276' }}>
            An AI-powered interactive web and mobile platform designed to detect, report,
            and educate users about digital scams in Rwanda. Protecting citizens from
            phishing, identity theft, and fraudulent activities.
          </Paragraph>
          <Space size="large" className="flex flex-col sm:flex-row">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              className="font-semibold px-8 py-3 h-auto"
              style={{ 
                background: 'linear-gradient(135deg, #2980B9, #1A5276)',
              }}
            >
              Try Scam Detection
            </Button>
            <Button
              type="default"
              size="large"
              className="font-semibold px-8 py-3 h-auto"
            
            >
              Learn About Scams
            </Button>
          </Space>
        </motion.div>
      </Col>
      <Col xs={24} lg={12}>
         <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center max-w-6xl mx-auto"
    >
      <div 
        className="rounded-2xl p-12"
        style={{
          backgroundColor: '#EBF5FB',
          boxShadow: '0 4px 10px rgba(26, 82, 118, 0.2)'
        }}
      >
        <h2 className="mb-8 text-3xl font-bold" style={{ color: '#1A5276' }}>
          Project Impact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mr-10">
          {/* AI Detection Engine */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.6 }
              }}
              className="inline-block mb-4 cursor-pointer"
            >
              <div 
                className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center p-4"
                style={{
                  background: 'linear-gradient(135deg, #2980B9, #1A5276)',
                  boxShadow: '0 8px 32px rgba(26, 82, 118, 0.4)'
                }}
              >
                <div className="text-white font-bold text-3xl mb-2">AI</div>
                <div className="text-white text-sm font-medium opacity-90">Engine</div>
              </div>
            </motion.div>
            <div className="text-base font-semibold mt-2 ml-3" style={{ color: '#1A5276' }}>
              AI Detection Engine
            </div>
          
          </div>

          {/* Core Features */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 5, -5, 5, 0],
                transition: { duration: 0.6 }
              }}
              className="inline-block mb-4 cursor-pointer"
            >
              <div 
                className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center p-4"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '4px solid #2980B9',
                  boxShadow: '0 8px 32px rgba(26, 82, 118, 0.3)'
                }}
              >
                <div className="font-bold text-5xl mb-1" style={{ color: '#2980B9' }}>3</div>
                <div className="text-sm font-medium" style={{ color: '#2980B9' }}>Features</div>
              </div>
            </motion.div>
            <div className="text-base font-semibold mt-2 ml-3" style={{ color: '#1A5276' }}>
              Core Features
            </div>
           
          </div>

          {/* 24/7 Protection */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.6 }
              }}
              className="inline-block mb-4 cursor-pointer"
            >
              <div 
                className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center p-4"
                style={{
                  background: 'linear-gradient(135deg, #AED6F1, #2980B9)',
                  boxShadow: '0 8px 32px rgba(26, 82, 118, 0.4)'
                }}
              >
                <div className="text-white font-bold text-2xl mb-1">24/7</div>
                <div className="text-white text-sm font-medium opacity-90">Active</div>
              </div>
            </motion.div>
            <div className="text-base font-semibold mt-2 ml-3" style={{ color: '#1A5276' }}>
              24/7 Protection
            </div>
            
          </div>

          {/* Rwanda Localized */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 5, -5, 5, 0],
                transition: { duration: 0.6 }
              }}
              className="inline-block mb-4 cursor-pointer"
            >
              <div 
                className="w-32 h-32 rounded-2xl flex flex-col items-center justify-center p-4"
                style={{
                  backgroundColor: '#AED6F1',
                  border: '4px solid #1A5276',
                  boxShadow: '0 8px 32px rgba(26, 82, 118, 0.3)'
                }}
              >
                <div className="font-bold text-3xl mb-1" style={{ color: '#1A5276' }}>RW</div>
                <div className="text-sm font-medium" style={{ color: '#1A5276' }}>Local</div>
              </div>
            </motion.div>
            <div className="text-base font-semibold mt-2 ml-3" style={{ color: '#1A5276' }}>
              Rwanda Localized
            </div>
           
          </div>
        </div>
      </div>
    </motion.div>
      </Col>
    </Row>
  </div>
</section>

{/*  Features Section */}
<section className="py-5 bg-gradient-to-br from-[#EBF5FB] to-[#AED6F1] relative overflow-hidden">
 
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-[#2980B9] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
    <div className="absolute top-40 right-10 w-96 h-96 bg-[#1A5276] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#AED6F1] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-5"
    >
      <div className="inline-flex items-center px-4 py-2 bg-[#AED6F1] rounded-full text-[#1A5276] font-semibold text-sm mb-6">
        <span className="w-2 h-2 bg-[#2980B9] rounded-full mr-2 animate-pulse"></span>
        Platform Features
      </div>
      <Title level={3} className="text-4xl font-bold bg-gradient-to-r from-[#1A5276] to-[#2980B9] bg-clip-text text-transparent mb-6">
        Revolutionizing Digital Safety
      </Title>
      <Paragraph className="text-lg text-[#1A5276] max-w-4xl mx-auto leading-relaxed opacity-90">
        Ndimboni combines cutting-edge artificial intelligence, comprehensive education, and 
        community-driven reporting to create Rwanda's most advanced defense against digital scams.
      </Paragraph>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.7, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -8, 
            transition: { duration: 0.3 } 
          }}
          className="group cursor-pointer"
        >
          <Card
            className="h-full relative overflow-hidden border-0 transition-all duration-500 transform group-hover:scale-105"
            style={{ 
              borderRadius: '20px',
              background: '#EBF5FB',
              border: '1px solid rgba(174, 214, 241, 0.3)',
              boxShadow: '0 4px 10px rgba(26, 82, 118, 0.2)'
            }}
          >
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2980B9]/5 to-[#1A5276]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-3 right-3 w-2 h-2 bg-[#2980B9] rounded-full opacity-60 group-hover:animate-bounce"></div>
            <div className="absolute top-6 right-6 w-1 h-1 bg-[#AED6F1] rounded-full opacity-60 group-hover:animate-bounce delay-100"></div>
            
            <div className="relative z-10 p-0 text-center">
              {/* Icon container with enhanced styling */}
              <motion.div 
                className="relative mb-0 mx-auto w-10 h-10 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-[#FFFFFF] rounded-xl transition-all duration-300" 
                     style={{ boxShadow: '0 3px 10px rgba(26, 82, 118, 0.3)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#AED6F1] to-[#EBF5FB] rounded-xl opacity-30"></div>
                <div className="relative z-10 text-2xl">
                  {feature.icon}
                </div>
              </motion.div>

              {/* Title with gradient text */}
              <Title 
                level={4} 
                className="text-lg font-bold mb-3 bg-gradient-to-r from-[#1A5276] to-[#2980B9] bg-clip-text text-transparent group-hover:from-[#2980B9] group-hover:to-[#1A5276] transition-all duration-300"
              >
                {feature.title}
              </Title>

              {/* Description with enhanced typography */}
              <Paragraph className="text-[#1A5276] leading-relaxed text-sm group-hover:opacity-90 transition-all duration-300 opacity-80 mb-0">
                {feature.description}
              </Paragraph>

              {/* Subtle call-to-action indicator */}
              <motion.div 
                className="mt-4 flex items-center justify-center text-[#2980B9] font-medium text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                <span>Learn More</span>
                <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#2980B9] via-[#AED6F1] to-[#2980B9] opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
          </Card>
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="text-center mt-5"
    >
      <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#FFFFFF] rounded-full hover:bg-[#AED6F1] transition-all duration-300 cursor-pointer group"
           style={{ boxShadow: '0 4px 10px rgba(26, 82, 118, 0.2)' }}>
        <span className="text-[#1A5276] font-medium group-hover:text-[#FFFFFF] transition-colors duration-200">Ready to get started?</span>
        <motion.div
          whileHover={{ x: 5 }}
          className="w-6 h-6 bg-[#2980B9] rounded-full flex items-center justify-center group-hover:bg-[#1A5276] transition-colors duration-200"
        >
          <svg className="w-3 h-3 text-[#FFFFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
{/* Research Team Section */}
<section className="py-10" style={{ backgroundColor: '#f8f9fa' }}>
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card 
        className="shadow-lg" 
        style={{ 
          borderRadius: '24px',
          backgroundColor: '#EBF5FB',
          border: '1px solid rgba(52, 152, 219, 0.1)',
          padding: '0.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: 'linear-gradient(180deg, #3498db, #2980b9)'
          }}
        />
        
        <div className="text-center mb-12">
          <Title level={3} className="text-lg font-bold mb-4" style={{ color: '#2c3e50' }}>
            Development Team
          </Title>
          <Paragraph className="text-base max-w-3xl mx-auto mb-12" style={{ color: '#5d6d7e' }}>
            Ndimboni developed by Computer and Software Engineers 
            under expert supervision.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} md={10}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div 
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  borderLeft: '3px solid #3498db',
                  transition: 'all 0.3s ease'
                }}
                className="hover:shadow-md"
              >
                <UserOutlined className="text-2xl mb-4" style={{ color: '#3498db' }} />
                <Title level={4} className="mb-2" style={{ color: '#2c3e50', fontSize: '1.2rem', fontWeight: 700 }}>
                  MUNEZERO B.Sostene
                </Title>
                <Text className="block mb-2" style={{ color: '#2c3e50', fontSize: '1rem', fontWeight: 600 }}>
                  Backend Engineer
                </Text>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
                  <Text style={{ fontSize: '0.9rem', color: '#7f8c8d', fontWeight: 500 }}>Registration:</Text>
                  <Text 
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontWeight: 700,
                      color: '#2980b9',
                      backgroundColor: 'rgba(52, 152, 219, 0.1)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '6px'
                    }}
                  >
                    221000677
                  </Text>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col xs={24} md={10}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  borderLeft: '3px solid #3498db',
                  transition: 'all 0.3s ease'
                }}
                className="hover:shadow-md"
              >
                <UserOutlined className="text-2xl mb-4" style={{ color: '#3498db' }} />
                <Title level={4} className="mb-2" style={{ color: '#2c3e50', fontSize: '1.2rem', fontWeight: 700 }}>
                  DUSHIME Gabriel
                </Title>
                <Text className="block mb-2" style={{ color: '#2c3e50', fontSize: '1rem', fontWeight: 600 }}>
                  Frontend Engineer
                </Text>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.75rem' }}>
                  <Text style={{ fontSize: '0.9rem', color: '#7f8c8d', fontWeight: 500 }}>Registration:</Text>
                  <Text 
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontWeight: 700,
                      color: '#2980b9',
                      backgroundColor: 'rgba(52, 152, 219, 0.1)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '6px'
                    }}
                  >
                    221016855
                  </Text>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Card>
    </motion.div>
  </div>
</section>

{/* Call to Action Section */}
<section className="py-8" style={{ background: 'linear-gradient(135deg, #EBF5FB 0%, #3498DB 500%)'}}>
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center max-w-6xl mx-auto"
    >
      {/* Main CTA Content */}
      <div 
        className="rounded-3xl p-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #FFFFFF 100%)',
          border: '1px solid rgba(26, 82, 118, 0.1)',
          boxShadow: '0 20px 60px rgba(26, 82, 118, 0.15)'
        }}
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(26, 82, 118, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(41, 128, 185, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(26, 82, 118, 0.1) 0%, transparent 50%)`
          }}
        />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Title level={3} className="text-base md:text-5xl font-bold mt-0 leading-tight" style={{ color: '#1A5276' }}>
              Protect Yourself from 
              <span className=" ml-2">
                <span style={{ color: '#2980B9' }}>Digital Scams</span> Today
              </span>
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Paragraph className="text-base mt-10 max-w-3xl mx-auto leading-relaxed" style={{ color: '#1A5276' }}>
              Join thousands of Rwandans using <span className="font-semibold" style={{ color: '#2980B9' }}>Ndimboni</span> to stay safe online. 
              Report scams, learn protection strategies, and contribute to a safer digital Rwanda.
            </Paragraph>
          </motion.div>

          {/* Interactive Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#1A5276' }}>1000+</div>
              <div className="text-sm" style={{ color: '#2980B9' }}>Protected Users</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#1A5276' }}>500+</div>
              <div className="text-sm" style={{ color: '#2980B9' }}>Scams Detected</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: '#1A5276' }}>24/7</div>
              <div className="text-sm" style={{ color: '#2980B9' }}>AI Protection</div>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Space size="large" className="flex flex-col sm:flex-row justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  className="font-semibold px-10 py-4 h-auto text-lg rounded-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #2980B9, #1A5276)',
                    color: '#FFFFFF',
                    border: 'none',
                    boxShadow: '0 8px 25px rgba(26, 82, 118, 0.3)'
                  }}
                >
                  Start Protection Now
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="large"
                  className="font-semibold px-10 py-4 h-auto text-lg rounded-xl border-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: '#1A5276',
                    borderColor: '#2980B9',
                    boxShadow: '0 8px 25px rgba(26, 82, 118, 0.1)'
                  }}
                >
                  Report a Scam
                </Button>
              </motion.div>
            </Space>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8"
          >
            <div className="flex items-center text-sm" style={{ color: '#1A5276' }}>
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Rwanda Cyber Security Agency Approved
            </div>
            <div className="flex items-center text-sm" style={{ color: '#1A5276' }}>
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              100% Free to Use
            </div>
            <div className="flex items-center text-sm" style={{ color: '#1A5276' }}>
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Privacy Protected
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
</div>
</div>
)}
