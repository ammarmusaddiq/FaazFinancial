import { BusinessFormationForm } from "@/components/business-formation-form";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function StartBusinessPage() {
  return (
    <div>
      <Header />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Business
            </h1>
            <p className="text-lg text-gray-600">
              Let's get your business formation started with our simple process
            </p>
          </div>
          <BusinessFormationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
