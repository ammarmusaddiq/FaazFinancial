import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, FileText, Clock, CheckCircle, AlertCircle, Plus, ArrowRight, DollarSign } from "lucide-react"
import Link from "next/link"

interface DashboardOverviewProps {
  user: any
  profile: any
  formations: any[]
  services: any[]
}

export function DashboardOverview({ user, profile, formations, services }: DashboardOverviewProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "processing":
        return <Clock className="h-4 w-4" />
      case "pending":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const completedFormations = formations.filter((f) => f.status === "completed").length
  const totalSpent = formations.reduce((sum, f) => sum + Number.parseFloat(f.total_amount || 0), 0)

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {profile?.first_name || user.email}!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your business formations and services.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Businesses</p>
                <p className="text-3xl font-bold text-gray-900">{formations.length}</p>
              </div>
              <Building2 className="h-8 w-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-gray-900">{completedFormations}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Services</p>
                <p className="text-3xl font-bold text-gray-900">{services.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900">${totalSpent.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Business Formations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Your Businesses</CardTitle>
              <CardDescription>Manage your business formations and track progress</CardDescription>
            </div>
            <Link href="/dashboard/businesses">
              <Button variant="outline" size="sm">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {formations.length > 0 ? (
              <div className="space-y-4">
                {formations.slice(0, 3).map((formation) => (
                  <div key={formation.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{formation.business_name}</h4>
                      <p className="text-sm text-gray-600">
                        {formation.business_type} • {formation.state}
                      </p>
                      <div className="flex items-center mt-2">
                        <Badge className={getStatusColor(formation.status)}>
                          {getStatusIcon(formation.status)}
                          <span className="ml-1 capitalize">{formation.status}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${formation.total_amount}</p>
                      <p className="text-sm text-gray-500">{new Date(formation.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No businesses yet</h3>
                <p className="text-gray-600 mb-4">Start your first business formation today</p>
                <Link href="/start-business">
                  <Button className="bg-cyan-600 hover:bg-cyan-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Start a Business
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Services */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Services</CardTitle>
              <CardDescription>Your latest service orders and their status</CardDescription>
            </div>
            <Link href="/dashboard/services">
              <Button variant="outline" size="sm">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {services.length > 0 ? (
              <div className="space-y-4">
                {services.slice(0, 3).map((service) => (
                  <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{service.service_name}</h4>
                      <p className="text-sm text-gray-600 capitalize">{service.service_type.replace("_", " ")}</p>
                      <div className="flex items-center mt-2">
                        <Badge className={getStatusColor(service.status)}>
                          {getStatusIcon(service.status)}
                          <span className="ml-1 capitalize">{service.status}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${service.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No services yet</h3>
                <p className="text-gray-600 mb-4">Add services to help manage your business</p>
                <Link href="/services">
                  <Button variant="outline">Browse Services</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to help you manage your business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/start-business">
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
              >
                <Plus className="h-6 w-6" />
                <span>Start New Business</span>
              </Button>
            </Link>
            <Link href="/dashboard/documents">
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
              >
                <FileText className="h-6 w-6" />
                <span>View Documents</span>
              </Button>
            </Link>
            <Link href="/dashboard/support">
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
              >
                <AlertCircle className="h-6 w-6" />
                <span>Get Support</span>
              </Button>
            </Link>
            <Link href="/dashboard/settings">
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
              >
                <Building2 className="h-6 w-6" />
                <span>Account Settings</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
