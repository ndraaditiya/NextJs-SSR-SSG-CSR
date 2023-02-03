// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { LayoutProps } from "@/interfaces";

// const querylient = new QueryClient()

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <div>
      {/* <QueryClientProvider client={querylient}> */}
      {children}
      {/* </QueryClientProvider> */}
    </div>
  )
}

export default Layout;