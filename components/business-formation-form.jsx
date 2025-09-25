"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export function BusinessFormationForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    desiredCompanyName: "",
    alternativeCompanyName: "",
    businessName: "",
    businessType: "",
    state: "",
    address: "",
    ownerInfo: "",
    firstName: "",
    middleName: "",
    lastName: "",
    residentialAddress: "",
    ownershipPercentage: "",
    phoneNumber: "",
    email: "",
    faxNumber: "",
    country: "",
    addressLocal: "",
    city: "",
    zipCode: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    description: "",
    businessType: "",
    businessWebsite: "",
    businessEmail: "",
  });
  const [members, setMembers] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      residentialAddress: "",
      ownershipPercentage: "",
    },
  ]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (!user || userError) {
        alert("Please login to submit business formation", userError);
        return;
      }

      const submissionData = {
        ...formData,
        members,
      };

      const { error } = await supabase.from("submissions").insert([
        {
          user_id: user.id,
          service_id: service.id,
          form_data: submissionData,
          status: "pending",
        },
      ]);

      /* --------------- Old Code --------------- */

      // const { error } = await supabase.from("business_formations").insert([
      //   {
      //     user_id: user.id, // tie record to logged-in user
      //     desired_company_name: formData.desiredCompanyName,
      //     alternative_company_name: formData.alternativeCompanyName,
      //     business_name: formData.businessName,
      //     business_type: formData.businessType,
      //     state: formData.state,
      //     address: formData.address,
      //     first_name: members[0]?.firstName || "",
      //     middle_name: members[0]?.middleName || "",
      //     last_name: members[0]?.lastName || "",
      //     residential_address: members[0]?.residentialAddress || "",
      //     ownership_percentage: members[0]?.ownershipPercentage || "",
      //     owner_info: formData.ownerInfo,
      //     phone_number: formData.phoneNumber,
      //     email: formData.email,
      //     country: formData.country,
      //     address_local: formData.addressLocal,
      //     city: formData.city,
      //     zip_code: formData.zipCode,
      //     q1: formData.q1,
      //     q2: formData.q2,
      //     q3: formData.q3,
      //     q4: formData.q4,
      //     description: formData.description,
      //     business_type: formData.businessType,
      //     business_website: formData.businessWebsite,
      //     business_email: formData.businessEmail,
      //     status: "pending", // default status
      //     fax_number: formData.faxNumber,
      //   },
      // ]);

      /* --------------- Old Code --------------- */

      if (error) {
        console.error("Supabase insert error:", error);
        alert("Failed to submit form.");
      } else {
        router.push("/");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
    //   const response = await supabase.from("business_formation").insert({
    //     // method: "POST",
    //     // headers: {
    //     //   "Content-Type": "application/json",
    //     // },
    //     ...formData,
    //   });

    //   if (response.error) {
    //     // router.push("/dashboard?success=business-created");
    //     console.log("Business formation submitted successfully", response);
    //   } else {
    //     const error = await response.error;
    //     console.log("Error submitting business formation", error);
    //     alert(error.error || "Failed to submit business formation");
    //     alert("Failed to submit business formation");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   alert("Failed to submit business formation");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center">
          Start Your Business Formation
        </CardTitle>
        <CardDescription className="text-center">
          Fill out the form below to begin your business formation process
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 border rounded-md p-4">
            <div className="space-y-2">
              <Label htmlFor="desiredCompanyName">Desired Company Name</Label>
              <Input
                id="desiredCompanyName"
                value={formData.desiredCompanyName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    desiredCompanyName: e.target.value,
                  })
                }
                placeholder="Enter your desired company name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="alternativeCompanyName">
                Alternative Company Name
              </Label>
              <Input
                id="alternativeCompanyName"
                value={formData.alternativeCompanyName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    alternativeCompanyName: e.target.value,
                  })
                }
                placeholder="Enter your alternative company name"
                required
              />
            </div>
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              placeholder="Enter your business name"
              required
            />
          </div> */}

          <hr style={{ border: "1px solid #e0e0e0" }} />
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-center">
              Members Information
            </h2>
          </div>

          {members.map((member, index) => (
            <div key={index} className="space-y-4 border rounded-md p-4">
              <div className="text-sm font-semibold">Member {index + 1}</div>

              <div className="space-y-2">
                <Label htmlFor={`firstName-${index}`}>First Name</Label>
                <Input
                  id={`firstName-${index}`}
                  value={member.firstName}
                  onChange={(e) =>
                    setMembers((prev) => {
                      const next = [...prev];
                      next[index] = {
                        ...next[index],
                        firstName: e.target.value,
                      };
                      return next;
                    })
                  }
                  placeholder="Enter member's first name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`middleName-${index}`}>Middle Name</Label>
                <Input
                  id={`middleName-${index}`}
                  value={member.middleName}
                  onChange={(e) =>
                    setMembers((prev) => {
                      const next = [...prev];
                      next[index] = {
                        ...next[index],
                        middleName: e.target.value,
                      };
                      return next;
                    })
                  }
                  placeholder="Enter member's middle name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`lastName-${index}`}>Last Name</Label>
                <Input
                  id={`lastName-${index}`}
                  value={member.lastName}
                  onChange={(e) =>
                    setMembers((prev) => {
                      const next = [...prev];
                      next[index] = {
                        ...next[index],
                        lastName: e.target.value,
                      };
                      return next;
                    })
                  }
                  placeholder="Enter member's last name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`residentialAddress-${index}`}>
                  Residential Address
                </Label>
                <Input
                  id={`residentialAddress-${index}`}
                  value={member.residentialAddress}
                  onChange={(e) =>
                    setMembers((prev) => {
                      const next = [...prev];
                      next[index] = {
                        ...next[index],
                        residentialAddress: e.target.value,
                      };
                      return next;
                    })
                  }
                  placeholder="Enter member's residential address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`ownershipPercentage-${index}`}>
                  Ownership Percentage
                </Label>
                <Input
                  id={`ownershipPercentage-${index}`}
                  value={member.ownershipPercentage}
                  onChange={(e) =>
                    setMembers((prev) => {
                      const next = [...prev];
                      next[index] = {
                        ...next[index],
                        ownershipPercentage: e.target.value,
                      };
                      return next;
                    })
                  }
                  placeholder="Enter member's ownership percentage"
                  required
                />
              </div>
            </div>
          ))}

          <div>
            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                setMembers((prev) => [
                  ...prev,
                  {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    residentialAddress: "",
                    ownershipPercentage: "",
                  },
                ])
              }
            >
              Add A Member
            </Button>
          </div>

          <hr style={{ border: "1px solid #e0e0e0" }} />

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-center">
              Contact Information
            </h2>
          </div>

          <div className="space-y-4 border rounded-md p-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number-USA Only</Label>
              <Input
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phoneNumber: e.target.value,
                  })
                }
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="faxNumber">Fax Number</Label>
              <Input
                id="faxNumber"
                value={formData.faxNumber}
                onChange={(e) =>
                  setFormData({ ...formData, faxNumber: e.target.value })
                }
                placeholder="Enter your fax number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                placeholder="Enter your country"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="addressLocal">Enter Local Address</Label>
              <Input
                id="addressLocal"
                value={formData.addressLocal}
                onChange={(e) =>
                  setFormData({ ...formData, addressLocal: e.target.value })
                }
                placeholder="Enter your local address"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                placeholder="Enter your city"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State of Formation</Label>
              <Select
                value={formData.state}
                onValueChange={(value) =>
                  setFormData({ ...formData, state: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {US_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) =>
                  setFormData({ ...formData, zipCode: e.target.value })
                }
                placeholder="Enter your zip code"
                required
              />
            </div>
          </div>

          <hr style={{ border: "1px solid #e0e0e0" }} />

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-center">
              Additional Information
            </h2>
          </div>

          <div className="space-y-4 border rounded-md p-4">
            <div className="space-y-2">
              <Label htmlFor="q1">Do you want to use a registered agent?</Label>
              <Select
                value={formData.q1}
                onValueChange={(value) =>
                  setFormData({ ...formData, q1: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes"> Yes </SelectItem>
                  <SelectItem value="No"> No </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="q2">
                Do you need Unique business address?(additional cost 65$ yearly)
              </Label>
              <Select
                value={formData.q2}
                onValueChange={(value) =>
                  setFormData({ ...formData, q2: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes"> Yes </SelectItem>
                  <SelectItem value="No"> No </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="q3">Do you want to use your own address?</Label>
              <Select
                value={formData.q3}
                onValueChange={(value) =>
                  setFormData({ ...formData, q3: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes"> Yes </SelectItem>
                  <SelectItem value="No"> No </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="q4">
                Do you want Anonymous LLC or on Member Name?
              </Label>
              <Select
                value={formData.q4}
                onValueChange={(value) =>
                  setFormData({ ...formData, q4: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Anonymous_LLC"> Anonymous LLC </SelectItem>
                  <SelectItem value="On_Member_Name">
                    {" "}
                    On Member Name{" "}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <hr style={{ border: "1px solid #e0e0e0" }} />

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-center">
              Product Information & Business Website
            </h2>
          </div>

          <div className="space-y-4 border rounded-md p-4">
            <div className="space-y-2">
              <Label htmlFor="description">Brief Description Of Business</Label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter brief description of business"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Select
                value={formData.businessType}
                onValueChange={(value) =>
                  setFormData({ ...formData, businessType: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="OnlineBusiness">
                    Online Business
                  </SelectItem>
                  <SelectItem value="ECommerceBusiness">
                    E-Commerce Business
                  </SelectItem>
                  <SelectItem value="WholesaleBusiness">
                    Wholesale Business
                  </SelectItem>
                  <SelectItem value="RetailBusiness">
                    Retail Business
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessWebsite">Business Website</Label>
              <Input
                id="businessWebsite"
                value={formData.businessWebsite}
                onChange={(e) =>
                  setFormData({ ...formData, businessWebsite: e.target.value })
                }
                placeholder="Enter business website"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessEmail">Business Email</Label>
              <Input
                id="businessEmail"
                value={formData.businessEmail}
                onChange={(e) =>
                  setFormData({ ...formData, businessEmail: e.target.value })
                }
                placeholder="Enter business email"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Start Business Formation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
