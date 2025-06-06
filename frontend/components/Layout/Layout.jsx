import { Layout as AntLayout } from 'antd'
import Header from './Header'
import Footer from './Footer'

const { Content } = AntLayout

const Layout = ({ children }) => {
  return (
    <AntLayout className="min-h-screen">
      <Header />
      <Content 
        style={{ 
          backgroundColor: '#EBF5FB',
          minHeight: 'calc(100vh - 140px)', // Adjust based on header and footer height
          padding: 0,
        }}
      >
        {children}
      </Content>
      <Footer />
    </AntLayout>
  )
}

export default Layout