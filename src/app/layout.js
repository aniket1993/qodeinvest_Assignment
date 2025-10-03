// src/app/layout.js
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import CommonSnackbar from "@/components/commonComponents/Snackbar/Snackbar";
import PageLoader from "@/components/commonComponents/Loader/PageLoader";
import theme from '@/theme/theme';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Qodeinvest ",
  description: "Trading Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StoreProvider>
              <CommonSnackbar />
              <PageLoader />
              {children}
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
