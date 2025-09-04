import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"

export default function DashboardPage() {
  const mockUser = {
    id: "1",
    email: "user@example.com",
    name: "John Doe",
  }

  const mockProfile = {
    first_name: "John",
    last_name: "Doe",
    company_name: "Example Corp",
  }

  const mockFormations = [
    {
      id: "1",
      business_name: "My LLC",
      business_type: "LLC",
      state: "Delaware",
      status: "completed",
      created_at: new Date().toISOString(),
    },
  ]

  const mockServices = [
    {
      id: "1",
      service_name: "EIN Application",
      status: "completed",
      created_at: new Date().toISOString(),
    },
  ]

  return (
    <DashboardLayout user={mockUser} profile={mockProfile}>
      <DashboardOverview user={mockUser} profile={mockProfile} formations={mockFormations} services={mockServices} />
    </DashboardLayout>
  )
}
