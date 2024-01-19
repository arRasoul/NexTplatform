
import { ModalProvider } from "@/components/modal/provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Toaster className="dark:hidden" />
      <Toaster theme="dark" className="hidden dark:block" />
      <ModalProvider>{children}</ModalProvider>
    </SessionProvider>
  );
}
