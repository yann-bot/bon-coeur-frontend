import AppRouter from "@/app/router";
import MainLayout from "@/shared/layouts/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}
