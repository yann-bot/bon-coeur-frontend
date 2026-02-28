import DashboardLayout from "@/shared/layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <p className="mt-2 text-gray-600">Bienvenue, vous êtes connecté.</p>
      </div>
    </DashboardLayout>
  );
}
