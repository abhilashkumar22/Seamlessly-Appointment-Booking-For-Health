
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Clock, Shield, Award, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";

const About = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const stats = [
    { icon: Users, label: "Registered Doctors", value: "500+" },
    { icon: Heart, label: "Happy Patients", value: "10,000+" },
    { icon: Clock, label: "Appointments Booked", value: "25,000+" },
    { icon: Award, label: "Years of Service", value: "5+" }
  ];

  const features = [
    {
      icon: Stethoscope,
      title: "Expert Medical Care",
      description: "Connect with board-certified physicians across various specializations for comprehensive healthcare."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Book appointments anytime, anywhere with our user-friendly platform and flexible scheduling."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical information is protected with enterprise-grade security and HIPAA compliance."
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "We prioritize your health journey with personalized care and dedicated support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light to-white">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-medical-dark mb-6">
            About <span className="text-medical-primary">HealthBook</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing healthcare accessibility by connecting patients with qualified medical professionals through our innovative digital platform. Our mission is to make quality healthcare convenient, accessible, and secure for everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-gray-200 hover:border-medical-primary transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-medical-light rounded-full mx-auto flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-medical-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-medical-primary">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-medical-dark mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At HealthBook, we believe that everyone deserves access to quality healthcare. Our platform bridges the gap between patients and healthcare providers, making it easier than ever to find, connect with, and book appointments with qualified medical professionals.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're committed to improving health outcomes by leveraging technology to create a seamless, secure, and patient-centered healthcare experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-medical-dark">Why Choose HealthBook?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:border-medical-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-medical-light rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-medical-primary" />
                    </div>
                    <CardTitle className="text-xl text-medical-dark">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-medical-dark">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-medical-dark mb-4">Founded on Innovation</h3>
                    <p className="text-gray-600 mb-4">
                      HealthBook was founded in 2019 with a simple yet powerful vision: to make healthcare more accessible and efficient through technology. Our team of healthcare professionals and technology experts came together to address the common challenges patients face when trying to access medical care.
                    </p>
                    <p className="text-gray-600">
                      Today, we're proud to serve thousands of patients and work with hundreds of qualified healthcare providers across multiple cities, continuing to grow and improve our platform based on user feedback and emerging healthcare needs.
                    </p>
                  </div>
                  <div className="bg-medical-light rounded-lg p-8 text-center">
                    <div className="w-24 h-24 bg-medical-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-medical-dark mb-2">Healthcare for Everyone</h4>
                    <p className="text-gray-600">
                      Making quality medical care accessible, convenient, and secure for all.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default About;
