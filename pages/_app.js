import '../styles/globals.css'
import { ConfigProvider } from 'antd'
import { useEffect } from 'react'


const theme = {
  token: {
    colorPrimary: '#2980B9',
    colorBgContainer: '#EBF5FB',
    colorText: '#1A5276',
    colorTextSecondary: 'rgba(26, 82, 118, 0.7)',
    borderRadius: 8,
    colorBorder: '#AED6F1',
    colorBgLayout: '#EBF5FB',
    fontFamily: "'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
  },
  components: {
    Layout: {
      headerBg: 'linear-gradient(135deg, #2980B9, #1A5276)',
      footerBg: 'linear-gradient(135deg, #2980B9, #1A5276)',
      bodyBg: '#EBF5FB',
    },
    Button: {
      primaryColor: '#FFFFFF',
      colorPrimary: '#2980B9',
      colorPrimaryHover: '#1A5276',
      colorPrimaryActive: '#1A5276',
    },
    Menu: {
      itemColor: '#FFFFFF',
      itemHoverColor: '#AED6F1',
      itemSelectedColor: '#AED6F1',
      horizontalItemSelectedColor: '#AED6F1',
    },
  },
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    
    console.log('Final Year Project - Application Started')
  }, [])

  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}