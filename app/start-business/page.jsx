"use client";

import { BusinessFormationForm } from "@/components/submission-forms/business-formation-form";
import { CorporationFormationForm } from "@/components/submission-forms/corporation-formation";
import { EinServicesForm } from "@/components/submission-forms/ein-services-form";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function StartBusinessPage() {
  const [selectedService, setSelectedService] = useState("");

  const serviceComponents = {
    llc: <BusinessFormationForm />,
    corp: <CorporationFormationForm />,
    ein: <EinServicesForm />,
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
            </select>
          </div>

          <div className="mt-6">
            {selectedService ? (
              serviceComponents[selectedService]
            ) : (
              <p>Please select a service</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
