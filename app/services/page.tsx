import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "LLC Formation",
      description: "Start your Limited Liability Company with professional guidance",
      price: "Starting at $0 + state fees",
      features: [
        "Name availability check",
        "Articles of Organization filing",
        "Registered agent service (1 year)",
        "Operating agreement template",
        "EIN application assistance",
      ],
      popular: true,
    },
    {
      title: "Corporation Formation",
      description: "Incorporate your business for maximum credibility and protection",
      price: "Starting at $199 + state fees",
      features: [
        "Articles of Incorporation filing",
        "Corporate bylaws template",
        "Stock certificates",
        "Corporate seal",
        "Registered agent service (1 year)",
      ],
    },
    {
      title: "Registered Agent",
      description: "Professional registered agent service for your business",
      price: "$199/year",
      features: [
        "Professional business address",
        "Document receipt and forwarding",
        "Compliance calendar",
        "Online document access",
        "Privacy protection",
      ],
    },
    {
      title: "EIN Application",
      description: "Get your Federal Tax ID number quickly and easily",
      price: "$79",
      features: [
        "IRS Form SS-4 preparation",
        "Direct IRS filing",
        "Same-day processing",
        "EIN confirmation letter",
        "Tax account setup guidance",
      ],
    },
    {
      title: "Operating Agreement",
      description: "Customize your LLC's operating structure",
      price: "$199",
      features: [
        "State-specific templates",
        "Multi-member support",
        "Management structure options",
        "Profit/loss distribution",
        "Legal review available",
      ],
    },
    {
      title: "Business License Research",
      description: "Identify required licenses and permits for your business",
      price: "$199",
      features: [
        "Federal license research",
        "State license research",
        "Local permit research",
        "Industry-specific requirements",
        "Detailed compliance report",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Complete Business Formation Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Everything you need to start, run, and grow your business. From formation to compliance, we've got you
                covered.
              </p>
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`relative ${service.popular ? "ring-2 ring-cyan-500" : ""}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="text-2xl font-bold text-cyan-600">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who trust us with their business formation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Start Your LLC
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
