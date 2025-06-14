import { useState } from 'react'
import { Typography, Button, Input, Card, Space, message, Form } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, ArrowRightOutlined, SecurityScanOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { motion } from 'framer-motion'

const { Title, Paragraph, Text } = Typography

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const handleSubmit = async (values) => {
    setLoading(true)
    
    try {
      const endpoint = isLogin 
        ? 'https://ndimboni-digital-scam-protection.onrender.com/auth/login'
        : 'https://ndimboni-digital-scam-protection.onrender.com/auth/register'
      
      const payload = isLogin 
        ? { email: values.email, password: values.password }
        : { email: values.email, password: values.password, name: values.name }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok) {
        message.success(isLogin ? 'Login successful!' : 'Registration successful!')
        
        // Store token if provided
        if (data.token) {
          localStorage.setItem('ndimboni_token', data.token)
        }
        
        // Reset form
        form.resetFields()
        
        // If registration successful, switch to login
        if (!isLogin) {
          setIsLogin(true)
          message.info('Please log in with your new account')
        }
      } else {
        message.error(data.message || `${isLogin ? 'Login' : 'Registration'} failed`)
      }
    } catch (error) {
      message.error('Network error. Please try again.')
      console.error('Auth error:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    form.resetFields()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EBF5FB] to-[#AED6F1] flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2980B9] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#1A5276] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#AED6F1] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Branding & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto lg:mx-0"
                style={{
                  background: 'linear-gradient(135deg, #2980B9, #1A5276)',
                  boxShadow: '0 8px 32px rgba(26, 82, 118, 0.4)'
                }}
              >
                <SecurityScanOutlined className="text-4xl text-white" />
              </motion.div>
              
              <Title level={1} className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1A5276' }}>
                Welcome to{' '}
                <span style={{ color: '#2980B9' }}>Ndimboni</span>
              </Title>
              
              <Paragraph className="text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0" style={{ color: '#1A5276' }}>
                {isLogin 
                  ? "Sign in to access your AI-powered scam protection dashboard and keep yourself safe from digital threats."
                  : "Join thousands of Rwandans protecting themselves from digital scams. Create your account and start your journey to digital safety."
                }
              </Paragraph>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4 mb-8">
              {[
                "AI-Powered Scam Detection",
                "Real-time Threat Alerts", 
                "Community-Driven Reporting"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center lg:justify-start"
                >
                  <div className="w-2 h-2 bg-[#2980B9] rounded-full mr-3"></div>
                  <Text className="text-[#1A5276] font-medium">{feature}</Text>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#1A5276' }}>1000+</div>
                <div className="text-xs" style={{ color: '#2980B9' }}>Protected Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#1A5276' }}>500+</div>
                <div className="text-xs" style={{ color: '#2980B9' }}>Scams Detected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#1A5276' }}>24/7</div>
                <div className="text-xs" style={{ color: '#2980B9' }}>AI Protection</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Auth Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card
              className="shadow-2xl border-0"
              style={{
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 20px 60px rgba(26, 82, 118, 0.15)'
              }}
            >
              <div className="p-8">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <Title level={2} className="text-2xl font-bold mb-2" style={{ color: '#1A5276' }}>
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </Title>
                  <Text className="text-[#2980B9]">
                    {isLogin ? 'Welcome back to Ndimboni' : 'Join the digital protection community'}
                  </Text>
                </div>

                {/* Auth Form */}
                <div className="space-y-6">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-4">
                        <Input
                          prefix={<UserOutlined style={{ color: '#2980B9' }} />}
                          placeholder="Full Name"
                          className="rounded-lg border-2 py-3"
                          style={{ borderColor: '#AED6F1' }}
                          size="large"
                          value={form.getFieldValue('name')}
                          onChange={(e) => form.setFieldsValue({ name: e.target.value })}
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className="mb-4">
                    <Input
                      prefix={<MailOutlined style={{ color: '#2980B9' }} />}
                      placeholder="Email Address"
                      className="rounded-lg border-2 py-3"
                      style={{ borderColor: '#AED6F1' }}
                      size="large"
                      type="email"
                      value={form.getFieldValue('email')}
                      onChange={(e) => form.setFieldsValue({ email: e.target.value })}
                    />
                  </div>

                  <div className="mb-4">
                    <Input.Password
                      prefix={<LockOutlined style={{ color: '#2980B9' }} />}
                      placeholder="Password"
                      className="rounded-lg border-2 py-3"
                      style={{ borderColor: '#AED6F1' }}
                      size="large"
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      value={form.getFieldValue('password')}
                      onChange={(e) => form.setFieldsValue({ password: e.target.value })}
                    />
                  </div>

                  {isLogin && (
                    <div className="flex justify-end mb-4">
                      <Button type="link" className="p-0 text-[#2980B9] hover:text-[#1A5276]">
                        Forgot Password?
                      </Button>
                    </div>
                  )}

                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="primary"
                        loading={loading}
                        icon={<ArrowRightOutlined />}
                        className="w-full font-semibold py-4 h-auto text-lg rounded-lg"
                        style={{
                          background: 'linear-gradient(135deg, #2980B9, #1A5276)',
                          border: 'none',
                          boxShadow: '0 8px 25px rgba(26, 82, 118, 0.3)'
                        }}
                        onClick={() => {
                          const values = form.getFieldsValue();
                          handleSubmit(values);
                        }}
                      >
                        {loading 
                          ? (isLogin ? 'Signing In...' : 'Creating Account...') 
                          : (isLogin ? 'Sign In' : 'Create Account')
                        }
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Toggle Between Login/Register */}
                <div className="text-center pt-4 border-t border-[#AED6F1]">
                  <Text style={{ color: '#1A5276' }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                  </Text>
                  <Button
                    type="link"
                    onClick={toggleMode}
                    className="p-0 font-semibold text-[#2980B9] hover:text-[#1A5276]"
                  >
                    {isLogin ? 'Create Account' : 'Sign In'}
                  </Button>
                </div>

                {/* Security Notice */}
                <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#EBF5FB' }}>
                  <div className="flex items-start">
                    <SecurityScanOutlined className="text-[#2980B9] mt-1 mr-3" />
                    <div>
                      <Text className="text-sm font-medium block mb-1" style={{ color: '#1A5276' }}>
                        Your Security Matters
                      </Text>
                      <Text className="text-xs" style={{ color: '#2980B9' }}>
                        We use advanced encryption to protect your data and never share your information with third parties.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}