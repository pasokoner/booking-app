import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Container from "@/components/ui/container";
import Provider from "@/app/_trpc/Provider";

const AuthedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr] grid-cols-[20rem,1fr]">
      <Header />
      <Sidebar />
      <main className="bg-gray-50">
        <Provider>
          <Container>{children}</Container>
        </Provider>
      </main>
    </div>
  );
};

export default AuthedLayout;
