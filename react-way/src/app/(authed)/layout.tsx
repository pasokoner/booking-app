import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Container from "@/components/ui/container";

const AuthedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr] grid-cols-[20rem,1fr]">
      <Header />
      <Sidebar />
      <main className="bg-gray-50">
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default AuthedLayout;
