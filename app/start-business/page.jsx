"use client";

import { BusinessFormationForm } from "@/components/submission-forms/business-formation-form";
import { CorporationFormationForm } from "@/components/submission-forms/corporation-formation";
import { EinServicesForm } from "@/components/submission-forms/ein-services-form";
import { ItinApplicationForm } from "@/components/submission-forms/itin-application-form";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function StartBusinessPage() {
  // const params = new URLSearchParams(window.location.search);
  // const serviceType = params.get("serviceType");

  const searchParams = useSearchParams();
  const serviceType = searchParams.get("serviceType");
  console.log("serviceType :", serviceType);
  const [selectedService, setSelectedService] = useState(serviceType || "");

  const serviceComponents = {
    llc: <BusinessFormationForm />,
    corp: <CorporationFormationForm />,
    ein: <EinServicesForm />,
    itin: <ItinApplicationForm />,
  };

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

            <select
              className="border p-2 rounded mb-6"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="llc">LLC Formation</option>
              <option value="corp">Corporation Formation</option>
              <option value="ein">EIN Services</option>
              <option value="itin">ITIN Application</option>
            </select>
          </div>

          <div className="mt-6">
            {selectedService ? (
              serviceComponents[selectedService]
            ) : (
              <BusinessFormationForm />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
